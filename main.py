#!/usr/bin/python3

# from flask import Flask, jsonify, make_response

# app = Flask(__name__)



# @app.route('/data')
# def get_data():
#     resp = jsonify('"message": "Hello, World!"')
#     return resp



# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)


from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Allow all origins by default

@app.route('/')
def get_data():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)