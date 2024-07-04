"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def handle_hello():

    resquest_body = request.get_json()
    user_email = resquest_body.get("email", None)
    user_password = resquest_body.get("password", None)
    user_is_active = resquest_body.get("is_active", True)

    new_user = User(
        email = user_email,
        password = user_password,
        is_active = user_is_active
    )    

    return jsonify(new_user), 200

