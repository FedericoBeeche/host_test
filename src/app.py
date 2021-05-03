"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
jwt = JWTManager(app)

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# mail confirguration
app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT'] = 587 # port of email server
app.config['MAIL_USE_TLS'] = True # test both TLS and SSL
app.config['MAIL_USE_SSL'] = False # test False vs True
app.config['MAIL_USERNAME'] = os.environ.get('MY_EMAIL') 
app.config['MAIL_PASSWORD'] = os.environ.get('MY_EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = ('comohago.cr', os.environ.get('MY_EMAIL'))

mail = Mail(app)
s = URLSafeTimedSerializer('Thisisasecret!') # serializer

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# flask-mail route
@app.route('/mail') # route for testing sendind emails, not actually called in the application
def send_mail():
    msg = Message(subject='Email Title', recipients=['test.user_01@outlook.com']) 
    msg.body = 'This is the email body' 
    msg.html = '<b>We can also use HTML</b>' # When both msg.body and msg.html, just msg.html shows
    mail.send(msg)

    return "This is the GET response" # This is the body of GET METHOD


@app.route('/forgotmail/<email>')
def forgot_mail(email):
    
    token = s.dumps(email, salt='email-reset')

    msg = Message('Resetear contraseña', recipients=[email])

    # link = url_for('reset_password', token=token, _external=True) # External true because it is a link outside of my application
    link = 'https://3000-plum-boar-bfxyg7xw.ws-us03.gitpod.io/'+'changepass/'+token

    # msg.body = 'Resetear su contraseña en el siguiente link {}'.format(link)
    msg.html = '<p>Hola,</p><p>Resetea tu contraseña haciendo click en este <a href={}>link</a></>'.format(link)

    mail.send(msg)

    return 'The email you entered is {} The token is {}'.format(email, token)

@app.route('/resetpassword/<token>')
def reset_password(token):
    # email = s.loads(token, salt='email-reset', max_age=300)
    # return jsonify(email), 200
    try:
        email = s.loads(token, salt='email-reset', max_age=300)
    except SignatureExpired:
        return jsonify('expired')
    return jsonify(email)


# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
