# Technical Design Document

## Purpose

This document outlines the design specifications for the ASR Portal React project, ensuring alignment across the development team and stakeholders.

## Introduction

The ASR Portal React project aims to provide a user-friendly interface for audio transcription processing. This document details the architectural and component design decisions necessary for implementing new features.

- **Project Name:** ASR Portal React
- **Repository:** [ASR Portal React GitHub Repository](https://github.com/SunbirdAI/ASR-portal-react)

## Objectives

- **Accurate Transcription:** Implement reliable and precise transcription of audio files to text.
- **User-Friendly Interface:** Develop an intuitive interface for users to manage and process transcriptions efficiently.
- **Seamless Integration:** Ensure smooth interaction between frontend and backend components for optimal performance.
- **Data Security:** Maintain high standards of security and privacy in handling and storing audio data.
- **Scalability:** Design the system to handle increasing loads and accommodate future feature expansions.

### Architecture Diagrams

The **Architecture Diagrams** section provides visual representations that illustrate the high-level structure and interactions within the system or specific features. These diagrams help in understanding how different components of the system work together to achieve the desired functionality.

In this section, you'll find the following key diagrams:

1. **Sequence Diagram**:
   This diagram illustrates the sequence of interactions between key components in the system, including user actions, authentication, and audio transcription. It provides a detailed view of how components communicate to fulfill specific workflows.

   ```mermaid
   sequenceDiagram
    title Component Interaction Diagram

    participant UI as User Interface
    participant AuthAPI as Authentication API
    participant AuthService as Authentication Service
    participant Backend as Backend API
    participant TranscriptionAPI as Transcription API
    participant DB as Database

    %% Authentication Process
    UI->>AuthAPI: Login Request
    AuthAPI->>AuthService: Validate Credentials
    AuthService-->>AuthAPI: Return Token
    AuthAPI-->>UI: Auth Token

    %% Audio Upload and Transcription
    UI->>Backend: Upload Audio with Token
    Backend->>AuthService: Verify Token
    AuthService-->>Backend: Token Valid
    Backend->>DB: Store Audio
    Backend->>TranscriptionAPI: Process Audio for Transcription
    TranscriptionAPI-->>Backend: Transcription Text
    Backend->>DB: Store Transcription
    Backend-->>UI: Return Transcription Text
   ```

## Design Details

The Design Details list outlines the key components of the ASR Portal React application. Each item in the list represents a separate component, and includes the following information:

- **AudioInput**

  - **Description**: Manages audio input processing.
  - **Responsibilities**: Accepts audio input, validates, and sends it for transcription.
  - **Dependencies**: `AudioInput.styles.js`, `index.js`

- **Auth**

  - **Description**: Authentication-related components, including SignIn and SignUp.
  - **Responsibilities**: Manages login and registration workflows for users.
  - **Dependencies**: `SignIn`, `SignUp`, `Auth.styles.js`, `AuthFormMessage.js`, `AuthWrapper.js`, `Heading.js`

- **SignIn**

  - **Description**: Sign-in component under `Auth`.
  - **Responsibilities**: Handles user login functionality.
  - **Dependencies**: `Auth.styles.js`

- **SignUp**

  - **Description**: Sign-up component under `Auth`.
  - **Responsibilities**: Manages user registration functionality.
  - **Dependencies**: `Auth.styles.js`

- **AuthFormMessage**

  - **Description**: Displays messages in the authentication forms.
  - **Responsibilities**: Provides feedback or error messages to users during authentication.
  - **Dependencies**: `Auth.styles.js`

- **AuthWrapper**

  - **Description**: Wraps authentication forms with consistent styling.
  - **Responsibilities**: Applies styling and structure for authentication-related components.
  - **Dependencies**: `Auth.styles.js`

- **Heading**

  - **Description**: Displays headings for various sections.
  - **Responsibilities**: Serves as a reusable heading component throughout the app.
  - **Dependencies**: None

- **DataTable**

  - **Description**: Table component for displaying data in rows and columns.
  - **Responsibilities**: Organizes and formats data in a tabular structure.
  - **Dependencies**: None

- **DropDown**

  - **Description**: Dropdown component for selecting options.
  - **Responsibilities**: Renders a dropdown menu for option selection.
  - **Dependencies**: `DropDown.styles.js`, `index.js`

- **Feedback**

  - **Description**: Displays user feedback, such as notifications or alerts.
  - **Responsibilities**: Provides users with feedback messages based on app events or errors.
  - **Dependencies**: `Feedback.styles.js`, `index.js`

- **Files**

  - **Description**: Manages and displays uploaded files.
  - **Responsibilities**: Handles file display, validation, and potential actions (e.g., remove or view).
  - **Dependencies**: `index.js`

- **Footer**

  - **Description**: Footer component for the app's main layout.
  - **Responsibilities**: Provides footer information and links.
  - **Dependencies**: `Footer.styles.js`, `index.js`

- **Header**

  - **Description**: Header component for navigation and branding.
  - **Responsibilities**: Displays navigation links and branding at the top of the page.
  - **Dependencies**: `Header.styles.js`, `index.js`

- **SamplePhrases**

  - **Description**: Displays sample phrases for reference.
  - **Responsibilities**: Shows example phrases to guide user inputs in transcription or other processes.
  - **Dependencies**: `SamplePhrases.styles.js`, `index.js`

- **Transcription**

  - **Description**: Main component for handling and displaying transcription results.
  - **Responsibilities**: Receives audio input, processes transcription, and displays results.
  - **Dependencies**: `Transcription.styles.js`, `index.js`

- **TranscriptionTextArea**

  - **Description**: Text area for editing transcriptions.
  - **Responsibilities**: Provides an editable area for reviewing and modifying transcriptions.
  - **Dependencies**: `TranscriptionTextArea.styles.js`, `index.js`

- **View**

  - **Description**: General purpose view component for organizing layout.
  - **Responsibilities**: Organizes different UI elements in a structured layout.
  - **Dependencies**: `Form.js`, `Input.js`, `Labels.js`

- **Form**

  - **Description**: Form component for input collection.
  - **Responsibilities**: Collects user input within a structured format.
  - **Dependencies**: None

- **Input**

  - **Description**: Basic input field component for text or other data types.
  - **Responsibilities**: Accepts various user inputs (e.g., text, number).
  - **Dependencies**: None

- **Labels**

  - **Description**: Label component for tagging input fields or other elements.
  - **Responsibilities**: Provides contextual labels for input fields or other UI components.
  - **Dependencies**: None

## Implementation Plan

The following steps outline the implementation process for the ASR Portal React project. These steps should be followed sequentially to ensure smooth integration and development of all components.

1. **Setup Project Environment**

   - Ensure all dependencies and configurations are in place for the project.
   - Set up the local development environment, including installing necessary tools and frameworks.
   - Initialize the project if not already done using `create-react-app` or any other starter setup.

2. **Implement Authentication Flow**

   - Develop the authentication components, including `SignIn`, `SignUp`, and `AuthWrapper`.
   - Set up the authentication API integration for managing user login and registration.
   - Implement JWT authentication and handle token storage.
   - Implement user roles and access control mechanisms.

3. **Develop Audio Input Handling**

   - Implement the `AudioInput` component for handling file uploads or microphone input for audio files.
   - Set up validation for audio files (e.g., file type, size).
   - Ensure that the component properly communicates with the backend for transcription requests.

4. **Implement Transcription Workflow**

   - Develop the `Transcription` component to manage transcription processes.
   - Integrate the transcription API and ensure the frontend correctly handles transcription data.
   - Implement state management for tracking the transcription process (e.g., loading, completed, error states).

5. **UI/UX Improvements**

   - Improve the design and layout of components such as `DataTable`, `DropDown`, and `Feedback` for a better user experience.
   - Apply consistent styling across components using a shared styles file (e.g., `AudioInput.styles.js`, `Feedback.styles.js`).
   - Test the responsiveness of the application across different devices and screen sizes.

6. **Component Integration**

   - Integrate individual components, such as `AudioInput`, `Transcription`, and `DataTable`, to create the full transcription processing workflow.
   - Ensure the components interact smoothly, especially between frontend and backend.

7. **Testing and Quality Assurance**

   - Write unit tests for each component using Jest and React Testing Library.
   - Perform integration testing to ensure components work together as expected.
   - Conduct manual testing for edge cases and user interactions.

8. **Deployment Preparation**

   - Finalize the deployment pipeline using GitHub Pages.
   - Ensure all environment variables and configurations are set up correctly for production.

9. **Deployment**

   - Deploy the application to the staging environment for internal testing.
   - Conduct final reviews and testing on the staging environment.
   - Deploy the application to production after approval.

10. **Post-Deployment Monitoring and Bug Fixing**
    - Monitor the application post-deployment to ensure stability and performance.
    - Fix any issues or bugs that arise and release patches as needed.

## Testing Strategies

The testing strategy for the ASR Portal React project will focus exclusively on **End-to-End (E2E) Testing** using **Cypress**. This approach ensures that the entire application functions as expected from the perspective of the end user. Below are the details of the testing strategy:

### End-to-End (E2E) Testing

- **Description**: E2E testing will simulate real user scenarios and interactions to validate that the entire flow of the application works correctly, from logging in to uploading and transcribing audio, to viewing results.
- **Tools**: **Cypress** will be used for writing and executing these tests. It allows us to simulate user actions such as clicking, typing, and navigating through the application in a real browser environment.
- **Approach**:

  - Test the critical user paths, ensuring that each step of the process works seamlessly.
  - Validate the full process for the user, such as uploading audio files, receiving transcriptions, and handling errors (e.g., invalid file formats or network issues).
  - Automate tests for common workflows to ensure reliability after code changes.

  **Example Test Scenarios**:

  - **User Authentication**: Test that a user can successfully sign in, view their dashboard, and log out.
  - **Audio Upload and Transcription**: Test that a user can upload an audio file, see the progress of transcription, and view the result after the process is complete.
  - **Edge Case Scenarios**: Test scenarios like uploading large files, handling unsupported file types, and testing the app’s behavior when the server is slow or down.

### Benefits of E2E Testing with Cypress:

- **Realistic Testing**: Since Cypress operates in the browser, it simulates real user interactions, which provides an accurate representation of how the application will behave in production.
- **Automation**: Tests are automated, reducing the manual effort required to perform repetitive tests and speeding up the testing process.
- **Fast Feedback**: Cypress runs tests quickly, offering fast feedback on whether the core functionalities of the app are working as expected after every code change.
- **Easy to Debug**: Cypress provides easy debugging with snapshots, video recordings of test runs, and detailed error messages, making it easier to fix issues quickly.

### Example of E2E Test Workflow:

1. **Login Test**:

   - Navigate to the login page.
   - Input valid credentials and submit.
   - Verify successful login and redirection to the dashboard.

2. **Audio Upload Test**:

   - Navigate to the audio upload page.
   - Select a valid audio file and upload it.
   - Wait for the transcription to complete and verify that the transcription appears.

3. **Error Handling Test**:
   - Test for invalid file types (e.g., upload a non-audio file) and check that the appropriate error message is shown.

### Summary:

- **End-to-End Testing**: Focus on real user workflows using **Cypress** to ensure that the app functions properly in real-world scenarios.
- **Cypress** will be used to simulate common user actions such as logging in, uploading files, and viewing results, while also validating edge cases and error handling.
- **Automated and fast feedback** ensures that the application works as expected after every code change, providing confidence in the stability of the project.
