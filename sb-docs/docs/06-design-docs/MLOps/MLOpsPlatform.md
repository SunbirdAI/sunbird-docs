# MLOps Strategy and Platform

The purpose of this document is to describe the processes and platforms Sunbird AI follows/will follow while developing ML products.

The tasks involved in creating an ML product are:
- Collecting, Ingesting and Storing data.
- Analyzing the data and feature engineering
- Running ML experiments
- Training an ML Model
- Deploying the ML Model to an application.
- Monitoring performance of the ML model.
- Replacing an old ML model with a new one.

Our goal is to automate as much of this as possible, and provide ways of collaborating productively across all these tasks.

## Requirements
- A central location for storing data. (Or at least a directory pointing to where all relevant data sets can be found)
- GitOps pipeline to enable collaboration. Some examples are:
    - Integration of GitHub and W&B to show results of training runs within a PR.
    - Automated testing
- A way to easily launch training jobs. (e.g when new data comes in)
- Automating the process of deploying a trained model.
