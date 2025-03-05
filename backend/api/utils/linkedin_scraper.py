import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

def scrape_linkedin(title, location):
    start = 0
    list_url = f"https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords={quote(title)}&location={quote(location)}&start={start}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
    }
    
    response = requests.get(list_url, headers=headers)
    
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
            continue

    return job_list
