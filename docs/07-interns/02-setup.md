# Developer Environment Setup

## Purpose
This runbook provides systematic instructions for setting up your development environment at Sunbird. Follow these steps to ensure your coding environment matches our team standards and is properly configured for all projects.

## Development Environment Setup

### Step 1: Operating System Setup

#### Windows Users
1. Install Windows Subsystem for Linux (WSL):
   ```
   wsl --install
   ```
2. Restart your computer when prompted
3. Complete Ubuntu setup with username/password
4. All further commands should be run in your WSL terminal

#### Mac Users
No additional setup needed - use Terminal.app

#### Linux Users
No additional setup needed - use your distribution's terminal

### Step 2: Python Environment

1. Install Python 3.9+:
   ```
   # Ubuntu/Debian (WSL)
   sudo apt update
   sudo apt install python3 python3-pip python3-venv

   # macOS with Homebrew
   brew install python

   # Windows (not using WSL)
   # Download from python.org and check "Add Python to PATH" during installation
   ```

2. Verify installation:
   ```
   python3 --version
   pip3 --version
   ```

3. Create a virtual environment for projects:
   ```
   python3 -m venv project-env
   ```

4. Activate virtual environment:
   ```
   # Linux/macOS
   source project-env/bin/activate
   
   # Windows CMD (not WSL)
   project-env\Scripts\activate
   ```

### Step 3: Install VS Code

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install VS Code
3. If using WSL, install the "Remote - WSL" extension

### Step 4: Install Required VS Code Extensions

1. Open VS Code
2. Go to Extensions tab (Ctrl+Shift+X or Cmd+Shift+X)
3. Install these essential extensions:

   #### Python Development
   - Python (Microsoft)
   - Black Formatter
   - Flake8

   #### JavaScript/React/TypeScript Development
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

   #### General Development
   - GitLens

### Step 5: Configure VS Code Settings

1. Open Settings (Ctrl+, or Cmd+,)
2. Enable Auto Save:
   - Search for "Auto Save"
   - Set to "afterDelay"
   - Set "Auto Save Delay" to 1000

3. For better code quality, add these settings:
   - Open Settings JSON (Ctrl+Shift+P → "Preferences: Open Settings (JSON)")
   - Add these settings:
   ```json
   {
     "editor.formatOnSave": true,
     "files.autoSave": "afterDelay",
     "files.autoSaveDelay": 1000,
     "python.linting.enabled": true,
     "python.linting.flake8Enabled": true,
     "python.formatting.provider": "black"
   }
   ```

### Step 6: Git Configuration

1. Install Git:
   ```
   # Ubuntu/Debian (WSL)
   sudo apt install git

   # macOS
   brew install git
   
   # Windows (not using WSL)
   # Download from git-scm.com
   ```

2. Configure Git:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your.email@sunbird.com"
   ```

3. Configure line endings:
   ```
   # Windows
   git config --global core.autocrlf true
   
   # macOS/Linux
   git config --global core.autocrlf input
   ```

### Step 7: Python Development Setup

1. Install linting tools:
   ```
   pip install black flake8 isort
   ```

2. Set up pre-commit hooks:
   ```
   pip install pre-commit
   # You'll run pre-commit install in each project repository
   ```

### Step 8: JavaScript/React Setup

1. Install Node.js LTS from [nodejs.org](https://nodejs.org/)

2. Verify installation:
   ```
   node --version
   npm --version
   ```

## Project Setup Procedures

### Python Projects

1. Clone repository:
   ```
   git clone [repository-url]
   cd [repository-name]
   ```

2. Create and activate virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up pre-commit hooks (if used in project):
   ```
   pre-commit install
   ```

5. Run tests to verify setup:
   ```
   pytest
   ```

### React Projects

1. Clone repository:
   ```
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start development server:
   ```
   npm start
   ```

## Working with Notebooks

### Google Colab Setup

1. Access our notebooks through links provided by your mentor
2. To save your work, make a copy to your Google Drive:
   - Click "File" → "Save a copy in Drive"
   
### Common Notebooks

- Data Exploration: [Colab Link](https://colab.research.google.com/drive/example-data-exploration)
- Model Training: [Colab Link](https://colab.research.google.com/drive/example-model-training)
- FastAPI Example: [Colab Link](https://colab.research.google.com/drive/example-fastapi)
- Django ORM: [Colab Link](https://colab.research.google.com/drive/example-django-orm)
- React Testing: [Colab Link](https://colab.research.google.com/drive/example-react-testing)

## Troubleshooting Common Issues

### Python Virtual Environment Issues

**Problem**: Command 'python' not found  
**Solution**: Try using `python3` instead of `python`

**Problem**: Cannot activate virtual environment  
**Solution**: Ensure you're in the project directory and check that the virtual environment was created correctly

### Node.js/npm Issues

**Problem**: 'npm' is not recognized  
**Solution**: Reinstall Node.js and ensure it's added to your PATH

**Problem**: Module not found errors  
**Solution**: Run `npm install` again to ensure all dependencies are installed

### WSL Issues (Windows Users)

**Problem**: Cannot access files from Windows  
**Solution**: Access WSL files at `\\wsl$\Ubuntu\home\username` in File Explorer

**Problem**: VS Code terminal not using WSL  
**Solution**: Ensure you've installed the "Remote - WSL" extension and click the green >< button in the lower left

## Communication Tools Setup

### Google Workspace

Ensure you have access to:
- Google Chat
- Google Drive
- Google Calendar

## Regular Meetings

Add these to your calendar:
- Team Sync: Mondays at 4:00 PM
- Software Engineering Sync: Tuesdays at 4:00 PM
- Sunbird Sync: Fridays at 4:00 PM

## Support Contacts

- Technical Help: [pwalukagga@sunbird.ai](mailto:pwalukagga@sunbird.ai)
- Onboarding Questions: [pwalukagga@sunbird.ai](mailto:pwalukagga@sunbird.ai)