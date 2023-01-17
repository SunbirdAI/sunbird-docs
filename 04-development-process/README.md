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

Check out [this article](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/) for a detailed explanation of what goes into each section.<br/>

## Low level (development phase) :computer:
### 1. Task tracking
Once the system design document is done, the requirements should be clear enough to allow us to break down the work into tasks. Software tasks are tracked using [`GitHub projects`](https://github.com/orgs/SunbirdAI/projects).
### 2. Development
Software projects fall into four main categories: `Machine Learning (ML) models`, `backend`, `frontend` and `DevOps/MLOps`.<br/>

**Tech Stacks**:
  * ML models: `Python` (pandas, numpy, pytorch etc), Jupyter Notebooks and Google Colabs
  * Backend: `Python` (Django)
  * Frontend: `Javascript` (ReactJS)
  * DevOps/MLOps: `Python` (pandas), AWS (S3, Lambda, API Gateway, IoT, Sagemaker), GCP, Twilio, HuggingFace

**Tools/Platforms**:
We use a number of software platforms/tools that all new software team members will be onboarded onto, including `Google Workspace` (email, calendar, chat, drive), `GitHub`, `AWS`, `GCP` and others (`HuggingFace`, `Weights & Biases`, `Heroku`, `Twilio` etc).


### 3. Documentation
Documentation is done in two ways:
  * Detailed, specific technical documentation in the `README` file of the specific project repository
  * General documentation in this ([`Sunbird docs`](https://github.com/SunbirdAI/sunbird-docs)) repository

### 4.Deployment
Please refer to the [`Release and Deployment`](https://github.com/SunbirdAI/sunbird-docs/tree/main/05-release-and-deployment#release-and-deployment) section.