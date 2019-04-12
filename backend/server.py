import info
import os
from flask import Flask
from flask import request, jsonify

_author_ = "ochaplashkin"

app = Flask(__name__)


@app.route("/whois")
def get_whois():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return info.whois(ip)


@app.route("/geo")
def get_geo():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return info.geolocation(ip)


@app.route("/")
def get_info():
    ip = request.args.get('ip', default="8.8.8.8", type=str)
    return info.full(ip)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9009)
