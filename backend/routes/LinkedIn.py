from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import pandas as pd
from routes.LinkedIn import get_internships

app = Flask(_name_)
CORS(app)  # Enable CORS for React frontend

# Default job title and location
DEFAULT_TITLE = "Internship"
DEFAULT_LOCATION = "United States"

def scrape_linkedin(title=DEFAULT_TITLE, location=DEFAULT_LOCATION):
    """Scrape LinkedIn for internship listings"""
    start = 0
    list_url = f"https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords={title}&location={location}&start={start}"
    response = requests.get(list_url)
    
    if response.status_code != 200:
        return {"error": "Failed to fetch jobs from LinkedIn"}

    list_soup = BeautifulSoup(response.text, "html.parser")
    page_jobs = list_soup.find_all("li")
    
    job_list = []
    for job in page_jobs:
        job_post = {}
        try:
            job_post["title"] = job.find("h3", {"class": "base-search-card__title"}).text.strip()
            job_post["company"] = job.find("h4", {"class": "base-search-card__subtitle"}).text.strip()
            job_post["location"] = job.find("span", {"class": "job-search-card__location"}).text.strip()
            job_list.append(job_post)
        except AttributeError:
            continue  # Skip if missing required data

    return job_list

@app.route('/internships', methods=['GET'])
def get_internships():
    """API Endpoint to get LinkedIn internships"""
    title = request.args.get("title", DEFAULT_TITLE)
    location = request.args.get("location", DEFAULT_LOCATION)
    internships = scrape_linkedin(title, location)
    return jsonify(internships)

if _name_ == '_main_':
    app.run(debug=True, port=5000)