from flask import Flask
from flask_pymongo import PyMongo
from . import secret

app = Flask(__name__)

app.config['MONGO_DBNAME'] = secret.mdb['name']
app.config["MONGO_URI"] = secret.mdb['uri']
mongo = PyMongo(app)


from app import routes