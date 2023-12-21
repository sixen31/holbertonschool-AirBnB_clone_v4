#!/usr/bin/python3
"""Defines a route for the Airbnb clone project's API status."""
from api.v1.views import app_views
from flask import jsonify


@app_views.route('/status')
def get_status():
    """ Endpoint to get the status of the Airbnb clone project's API."""
    return jsonify({"status": "OK"})
