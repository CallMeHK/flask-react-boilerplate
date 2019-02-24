from app import app, mongo
from flask import request, send_from_directory, Response, render_template, jsonify
from flask_pymongo import PyMongo
import random
from bson.json_util import loads, dumps, ObjectId


@app.route('/')
@app.route('/index')
def index():
    r = random.randint(0, 99999)
    return render_template('index.html', jstag=f'/frontend/main.js?chunk={str(r)}',
                           csstag=f'/frontend/styles.css?chunk={str(r)}', icon='/frontend/favicon.png')


@app.route('/frontend/<file>')
def frontend_js(file):
    return send_from_directory('static', file)


@app.route('/api/items', methods=['GET', 'POST'])
def api_items():
    item = mongo.db.items
    if request.method == 'POST':
        req_data = request.get_json()
        name = req_data['name']
        pokemon = req_data['pokemon']
        item.insert({'name': name, 'pokemon': pokemon})
        return f'''You added {name} and pokemon: {str(pokemon)}!!!'''
    array = list(item.find({}))
    return dumps(array)


@app.route('/api/items/<_id>', methods=['GET', 'PATCH', 'DELETE'])
def api_items_id(_id):
    item = mongo.db.items
    if request.method == 'PATCH':
        req_data = request.get_json()
        new_name = req_data['name']
        new_pokemon = req_data['pokemon']
        edit_item = item.find_one({"_id": ObjectId(_id)})
        edit_item['name'] = new_name
        edit_item['pokemon'] = new_pokemon
        item.save(edit_item)
        return dumps(edit_item)
    if request.method == 'DELETE':
        item.delete_one({"_id": ObjectId(_id)})
        return f'deleted {_id}'
    return dumps(list(item.find({"_id": ObjectId(_id)})))
