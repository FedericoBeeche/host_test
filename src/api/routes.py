"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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

@api.route('/user', methods=['POST']) # to Sing Up
def create_user():
    request_body = request.get_json()
    user = User(name=request_body["name"], lastname=request_body["lastname"], email=request_body["email"], password=request_body["password"])
    db.session.add(user)
    db.session.commit()
    print("User created: ", request_body)
    return jsonify(request_body), 200

@api.route('/user/<int:user_id>', methods=['PUT']) # to update password
def update_user(user_id):
    request_body = request.get_json()
    user = User.query.get(user_id)

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
