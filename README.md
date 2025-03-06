# InternLoomClone


## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.7 or higher
- pip 

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone "https://github.com/Vishrutha-VB24/InternLoomClone.git"
   cd InternLoomClone/backend
   ```

2. **Create a virtual environment:**
   ```
   python -m venv .venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```
     .venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source .venv/bin/activate
     ```

4. **Install the required packages:**
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To run the application, execute the following command:
    ```
    python app.py
    ```
The application will start on `http://localhost:5174`.

## API Documentation

### Get Internships

- **Endpoint:** `/api/internships`
- **Method:** `GET`
- **Query Parameters:**
  - `title` (optional): The job title to search for. Defaults to "Internship".
  - `location` (optional): The location to search in. Defaults to "United States".
!!!Currently they are hard coded for specific location and title !!!

- **Response:**
  - **Success (200 OK):**
    ```json
    [
        {
          "title": "Software Engineering Internship",
          "company": "Tech Company",
          "location": "New York, NY"
        },
        ...
      ]
    ```

  - **Error (400 Bad Request):**
    ```json
    {
      "error": "Invalid title parameter"
    }
    ```

  - **Error (500 Internal Server Error):**
    ```json
    {
      "error": "Failed to fetch jobs from LinkedIn"
    }
    ```
# Inter-loom(frontend)

## Prerequisites

Before you begin, ensure you have the following installation:
-npm 
-vite package with shadcn tailwind framework
-Configure some of the file as mentioned in the package
-cd inter-loom 
-npm run dev
