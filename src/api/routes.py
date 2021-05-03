"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tutorial, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route("/token", methods=["POST"]) # remember to add "api" for testing in Postman, like this: "URL/api/token"
def create_token():
    email = request.json.get("email", None) 
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
         return jsonify({"msg": "Bad username or password"}), 401
    
    print("Authorized user: ", user)

    access_token = create_access_token(identity=user.id) 
    return jsonify(access_token=access_token)

# User endpoints [GET, POST, PUT, UPDATE]: 
@api.route('/user', methods=['GET'])
def get_all_user():
    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users)) 
    print("GET all_users: ", all_users)
    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def get_single_user(id):
    user = User.query.get(id)

    if user is None:
        raise APIException('User not found', status_code=404)

    print("GET single user: ", user)
    return jsonify(user.serialize()), 200

@api.route('/register', methods=['POST']) # to Sing Up/Register
def create_user():
    request_body = request.get_json()

    if request_body["name"]=='' or request_body["lastname"]=='' or request_body["email"]=='' or request_body["password"]=='':
        raise APIException('Pending required fields', status_code=412)

    user_exists = User.query.filter_by(email=request_body["email"]).first()
    if user_exists:
        raise APIException('Email already registered', status_code=409)

    user = User(name=request_body["name"], lastname=request_body["lastname"], email=request_body["email"], password=request_body["password"])
    db.session.add(user)
    db.session.commit()
    print("User created: ", request_body)
    return jsonify(request_body), 200
     

@api.route('/user/<email>', methods=['PUT']) # to reset password
def update_user(email):
    request_body = request.get_json()
    user = User.query.filter_by(email=email).first()

    if user is None:
        raise APIException('User not found', status_code=404)
    if "password" in request_body:
        user.password = request_body["password"]
    
    db.session.commit()

    print("User property updated: ", request_body)
    return jsonify(request_body), 200

@api.route('/user/<int:id>', methods=['DELETE']) # to delete User Account
def delete_user(id):
    user = User.query.get(id)

    if user is None:
        raise APIException('User not found', status_code=404)

    db.session.delete(user)
    db.session.commit()
    response_body = {
         "msg": "User delete successful",
    }
    return jsonify(response_body), 200

@api.route('/tutorial', methods=['GET'])
def get_all_tutorial():
    all_tutorial = Tutorial.query.all()
    all_tutorial = list(map(lambda x: x.serialize(), all_tutorial)) 
    return jsonify(all_tutorial), 200

# Favorites

@api.route('/favorites', methods=['POST']) 
def create_favorites():
    request_body = request.get_json()

    favorite = Favorites(user_id=request_body["user_id"],tutorial_id=request_body["tutorial_id"], tutorial_title=request_body["tutorial_title"], tutorial_link=request_body["tutorial_link"])
    db.session.add(favorite)
    db.session.commit()
    print("Favorite created: ", request_body)
    return jsonify(request_body), 200

@api.route('/favorites/<int:id>', methods=['DELETE'])
@jwt_required()
def handle_deletefavorites(id):
    favdel= Favorites.query.get(id)
    if favdel is None:
        raise APIException('Favorite not found', status_code=404)
    db.session.delete(favdel)
    db.session.commit()
    response_body = {
        "status": "Ok"
    }
    status_code = 200
    
    return jsonify(response_body), status_code

@api.route('/favorites/', methods=['GET'])
@jwt_required()
def handle_favoritesget():

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    response = Favorites.query.filter_by(user_id=user.id)
    all_favorites = list(map(lambda x: x.serialize(), response))
    #print(all_favorites)
    return jsonify(all_favorites), 200

# Populate DB
@api.route('/populate', methods=['GET'])
def populate():
    u1 = User(name='User01', lastname='User01', email='test.user_01@outlook.com', password="TestPass01")

    t1 = Tutorial(name='WhatsApp videollamada', title='Videollamadas por WhatsApp', description='¿Para qué bajar Zoom si puedo usar el mismo WhatsApp?', link='/guide_WhatsAppCalls', img='https://www.dignited.com/wp-content/uploads/2020/03/fix-WhatsApp-call-not-working.jpg')
    t2 = Tutorial(name='Sinpe Movil BAC', title='Transferencias SINPE BAC', description='Todo mundo está hablando de transferencias SINPE móvil pero... ¿qué son realmente estas transferencias?', link='/guide_BACSINPEMovil', img='https://i.ytimg.com/vi/gY4BdVdRF_s/maxresdefault.jpg')
    t3 = Tutorial(name='Zoom videollamada', title='Mi primer videollamada en Zoom (para celular)', description='Como invitar a amigos, familia, y hasta mis mascotas.', link='/guide_ZoomCalls', img='https://ichef.bbci.co.uk/news/976/cpsprodpb/AA1D/production/_116094534_46bd3031-50b2-492b-9505-6c270c0fbf45.jpg')

    db.session.add_all([u1, t1, t2, t3])
    db.session.commit()

    return('Data populated')
