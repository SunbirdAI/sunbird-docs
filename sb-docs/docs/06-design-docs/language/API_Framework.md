# API Framework design document

### Introduction
The API Framework is a set of APIs that provide access to Sunbird's machine learning models.

Current Models:
- Multi-lingual translation model
- Text-to-Speech model
- Speech-to-Text model

The framework should provide an intuitive way for developers to use the different models we have.

### Requirements
1. General requirements for all endpoints
   1. Structure should be intuitive.
   2. Validation
   3. Useful errors if anything goes wrong
2. Security/Authentication: 
   1. Users should be able to create accounts.
   2. Users should be able to get API keys which they'll need to access the accounts.
   3. API keys should last forever unless refreshed.
   4. Users should be able to refresh the API key.
   5. There should be an interface for users to create accounts and manage their API keys.
   6. Rate limiting (throttling).
3. Text Translation
   1. There should be an endpoint (or endpoints) for translation.
4. Text-to-Speech
   1. There should be an endpoint that receives text and returns an audio file. 
5. Speech-to-Text model
   1. Endpoint that receives audio data and transcribes it.
6. General endpoint?
   1. Endpoint that can take speech (or text) and return translated speech (or text).
   2. User can specify what they want.
7. Monitoring
   1. Admin should be able to track usage of the API (number of users/requests per user).
   2. Admin should be able to track latency of requests for each model.
8. Python package wrapper around the API (low priority)
   1. A python package that provides programmatic access to the API through python functions.

### Architecture

See the architecture framework and design [here](https://github.com/SunbirdAI/sunbird-ai-api/tree/main/docs).


### Code structure
The user-facing API is organized by concept (rather than by functionality). It may be a good idea to change it to organize it by functionality in case the codebase gets larger in the future.

The folder structure is as follows (you can follow the official FastAPI tutorials for the rationale behind this organization):
```
app
   alembic:             contains migration files.
   crud:                contains functions for writing to the database.
   inference_services:  contains code for interacting with the inference server.
   middleware:          contains middleware functions (e.g for monitoring)
   models:              contains database models
   routers:             contains FastAPI routers that handle user requests.
   schemas:             contains Pydantic models for defining rules for data (useful e.g for validation)
   static:              contains static assets such as images and css for the frontend
   templates:           contains HTML template files.
   tests:               tests for the API.
   utils:               contains utility functions
   api.py :             entry point to the API.
   deps.py :            defines any FastAPI dependencies (e.g DB dependency)
   docs.py :            contains the introductory documentation for the API.
```

### Database structure
There are 2 main tables in the database: Monitoring and User.

Monitoring table columns: 
```
id
username
organization
endpoint
time_taken
date
```

User table columns: 
```
id
email
username
hashed_password
organization
account_type
```

### Monitoring
Monitoring is done through a FastAPI middleware function. For each (task) request that comes in, we log the endpoint accessed, the user that accessed it, and how long the request took.

This data is then visualized on this [Grafana dashboard](https://sunbirdaiapi.grafana.net/public-dashboards/5ad7c8544b384609b3ed3c85c89fff1f?from=now-30d&to=now&timezone=browser&refresh=1h&theme=light&orgId=1).


### Deployment
Checkout the [deployment guide](https://github.com/SunbirdAI/sunbird-ai-api/blob/main/api-deployment-docs.md) for more details.
