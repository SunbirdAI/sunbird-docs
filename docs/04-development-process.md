# Development Process

## High level (planning phase) :bookmark_tabs:

### 1. OKR planning

OKR planning is done at the beginning of every quarter and enables us to scope out what we want to achieve for a given quarter. We lay out the projects to be worked on, then we break down the work into features and tasks to be carried out by different teams.

### 2. System design document

Ideally, each major project (maybe even feature) should have a system design document. This helps us plan for the project and understand what kind of work needs to be done.

This document should contain:

- Introduction of what the project is about.
- Requirements (functional and non-functional).
- Propose solution / Architecture
- Alternative solutions
- Testability / Alerting / Monitoring
- Detailed scoping and timelines

Check out [this article](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/) for a detailed explanation of what goes into each section.<br/><br/>

## Low level (development phase) :computer:

### 1. Task tracking

Once the system design document is done, the requirements should be clear enough to allow us to break down the work into tasks. Software tasks are tracked using [GitHub projects](https://github.com/orgs/SunbirdAI/projects).

### 2. Development tools

Software projects fall into four main categories: `Machine Learning (ML) models`, `backend`, `frontend` and `DevOps/MLOps`.<br/>

**Tech Stacks**:

- ML models: `Python` (pandas, numpy, pytorch etc), Jupyter Notebooks and Google Colabs
- Backend: `Python` (Django, FastAPI)
- Frontend: `Javascript` (ReactJS)
- DevOps/MLOps: `Python` (pandas), AWS (S3, Lambda, API Gateway, IoT, Sagemaker), GCP, Twilio, HuggingFace

**Tools/Platforms**:<br/>
We use a number of software platforms/tools that all new software team members will be onboarded onto, including `Google Workspace` (email, calendar, chat, drive), `GitHub`, `AWS`, `GCP`, `Heroku`, and others (`HuggingFace`, `Weights & Biases`, `Heroku`, `Twilio` etc).

### 3. Coding, collaboration and review

We use [GitHub](https://github.com/SunbirdAI) to store and track our coding work.<br/><br/>
Our repositories follow a simple repository convention laid out in this [document](https://docs.google.com/document/d/1a4QsLAKhew-5YyAtDO3dTyMsAM3yTDSkgSAPfg_-bFM/edit?usp=sharing), while the code itself follows general well-known coding conventions ([PEP Style Guide](https://peps.python.org/pep-0008/) for Python code and [Mozilla Developer Guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript) for Javascript).<br/><br/>
When working with other team members on the same repository, start by pulling the latest changes from the repository (assuming you have cloned the repository already. Create a new branch from the default branch (usually `main`). After doing your task, create a pull request and link it to the related `GitHub projects task` in order to automate the task tracking process.<br/><br/>
When done, you can assign a reviewer to your pull request to review it and possibly give feedback/comments.

### 4. Documentation

Documentation is done in two ways:

- Detailed, specific technical documentation in the `README` file of the specific project repository
- General documentation in this [Sunbird docs](https://github.com/SunbirdAI/sunbird-docs) repository

### 5. Deployment

Please refer to the [Release and Deployment](https://github.com/SunbirdAI/sunbird-docs/tree/main/05-release-and-deployment#release-and-deployment) section.
