from flask import Blueprint, jsonify, request
from api.utils.linkedin_scraper import scrape_linkedin

api_blueprint = Blueprint('api', __name__)

DEFAULT_TITLE = "Internship"
DEFAULT_LOCATION = "United States"

@api_blueprint.route('/internships', methods=['GET'])
def get_internships():
    """API Endpoint to get LinkedIn internships"""
    title = request.args.get("title", DEFAULT_TITLE)
    location = request.args.get("location", DEFAULT_LOCATION)
    internships = scrape_linkedin(title, location)
    return jsonify(internships) 