import info
import os
from flask import Flask
from flask import request, jsonify

_author_ = "ochaplashkin"

app = Flask(__name__)


@app.route("/whois", methods=['GET'])
def get_whois():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return str(info.whois(ip))

@app.route("/geo", methods=['GET'])
def get_geo():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return str(info.geolocation(ip))

@app.route("/", methods=['GET'])
def get_info():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return str(info.full(ip))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
