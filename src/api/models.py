from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname
            # do not serialize the password, its a security breach
        }
    
class Tutorial(db.Model):
    __tablename__= 'tutorial'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    link = db.Column(db.String(200), unique=False, nullable=False)
    img = db.Column(db.String(200), unique=False, nullable=False)

    def __repr__(self):
        return '<Tutorial %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "link": self.link,
            "img": self.img
        }
        
class Favorites(db.Model):
    __tablename__= 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    tutorial_id = db.Column(db.Integer, db.ForeignKey("tutorial.id"))
    tutorial_title = db.Column(db.String(120), unique=False, nullable=False)  
    tutorial_link = db.Column(db.String(200), unique=False, nullable=False)  
    user= db.relationship('User', lazy=True)
    tutorial= db.relationship('Tutorial', lazy=True)
    

    def serialize(self):

        return {
            "id": self.id,            
            "user_id": self.user_id,
            "tutorial_id": self.tutorial_id,    
            "tutorial_title": self.tutorial_title,          
            "tutorial_link": self.tutorial_link        
        }

    def getAllFavorites(id):
        favorites = Favorites.query.get(id)        
        favorites = list(map(lambda x: x.serialize(), favorites))
        return favorites