import streamlit as st
import re
import os
import tempfile
from langchain_community.document_loaders import PDFPlumberLoader

# Function to extract text from PDF
def extract_text_pdf(pdf_path):
    loader = PDFPlumberLoader(pdf_path)
    docs = loader.load()
    text = ''
    for doc in docs:
        text += doc.page_content  # Append extracted text
    return text

# Function to extract name from resume text
def extract_name_from_resume(text):
    name = None
    pattern = r"(\b[A-Z][a-z]+\b)\s(\b[A-Z][a-z]+\b)"
    match = re.search(pattern, text)
    if match:
        name = match.group()
    return name

# Function to extract skills from resume text
def extract_skills_from_resume(text, skills_list):
    skills = []
    for skill in skills_list:
        pattern = r"\b{}\b".format(re.escape(skill))
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            skills.append(skill)
    return skills

# Streamlit app
def main():
    st.title("Resume Ranking App")
    st.write("Upload multiple resumes (PDF format) and a job description to rank candidates based on relevance.")

    # Upload job description
    job_description = st.text_area("Paste Job Description", height=200)

    # Upload multiple resumes
    uploaded_files = st.file_uploader("Upload Resumes (PDF)", type="pdf", accept_multiple_files=True)
    
    if uploaded_files and job_description:
        st.subheader("Processing Resumes...")
        
        # Define job-specific skills (can be manually updated based on job description)
        job_skills = ['Python', 'Data Analysis', 'Machine Learning', 'Communication', 'Project Management',
                      'Deep Learning', 'SQL', 'Tableau', 'AI', 'Data Visualization', 'Statistical Analysis',
                      'Big Data', 'Cloud Technologies', 'Problem-Solving', 'Critical Thinking', 'Storytelling']

        # Dictionary to store scores for each resume
        resume_scores = []

        for uploaded_file in uploaded_files:
            # Save the uploaded file to a temporary file
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                temp_file.write(uploaded_file.read())
                temp_file_path = temp_file.name

            # Extract text from PDF
            text = extract_text_pdf(temp_file_path)

            # Clean up the temporary file
            os.unlink(temp_file_path)

            # Extract details from resume
            name = extract_name_from_resume(text)
            skills = extract_skills_from_resume(text, job_skills)

            # Calculate match score
            match_score = len(skills) / len(job_skills) * 100  # Match score in percentage
            resume_scores.append({
                "Name": name if name else "Unknown",
                "Matched Skills": skills,
                "Match Score (%)": match_score,
            })

        # Rank resumes based on match score
        ranked_resumes = sorted(resume_scores, key=lambda x: x["Match Score (%)"], reverse=True)[:10]  # Top 10

        # Display the top 10 ranked resumes
        st.subheader("Top 10 Ranked Resumes")
        for i, resume in enumerate(ranked_resumes, start=1):
            st.write(f"### Rank {i}: {resume['Name']}")
            st.write(f"**Match Score:** {resume['Match Score (%)']:.2f}%")
            st.write(f"**Matched Skills:** {', '.join(resume['Matched Skills'])}")
            st.write("---")

if __name__ == "__main__":
    main()
