
<div align="center">

[![Contributors](https://img.shields.io/github/contributors/UMLCloudComputing/UniPath.io.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/UniPath.io/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/UMLCloudComputing/UniPath.io.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/UniPath.io/network/members)
[![Stargazers](https://img.shields.io/github/stars/UMLCloudComputing/UniPath.io.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/UniPath.io/stargazers)
[![Issues](https://img.shields.io/github/issues/UMLCloudComputing/UniPath.io.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/UniPath.io/issues)
[![MIT License](https://img.shields.io/github/license/UMLCloudComputing/UniPath.io.svg?style=for-the-badge)](https://github.com/UMLCloudComputing/UniPath.io/blob/master/LICENSE)

</div>

<br />
<div align="center">
    <a href="https://github.com/UMLCloudComputing/UniPath.io">
        <img src="./docs/Images/logo_background_white.png" alt="Logo" width="50%" height="50%">
    </a>
    <p align="center">
        Plan, Create, and Share Your Academic Journey!
        <br />
        <br />
        <a href="https://www.unipath.io">View Demo</a>
        ·
        <a href="https://github.com/UMLCloudComputing/UniPath.io/issues">Report Bug</a>
        ·
        <a href="https://github.com/UMLCloudComputing/UniPath.io/issues">Request Feature</a>
    </p>
</div>

> **WARNING**: This project is currently under development and is not yet ready for production use. Please check back later for updates. Expected completion date: May 2024.


## 📘 About

Developed by students from the [Cloud Computing Club at UMass Lowell](https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub), UniPath.io is an innovative web application designed to revolutionize the way college students plan and visualize their academic journey.

## 🚀 Features

<details>
<summary>View contents</summary>

- 💎 **Degree Path Planning**
    - Craft a detailed degree plan by entering courses and their prerequisites.
    - Define your academic goals and structure your semesters ahead.
    - Input and manage degree requirements to ensure all academic goals are met.

- 📊 **Visual Progress Tracking & Analysis**
    - Get a clear visual representation of your academic journey with color-coded progress indicators.
    - Define and visualize prerequisites and co-requisites to understand course sequences.
    - Our system analyzes your plan to confirm the validity of your course sequence.

- 👥 **Collaborative Planning & Community Engagement**
    - Share your degree pathway with peers and advisors for collaborative planning and feedback.
    - Compare your academic plan with others to explore different pathways and find the best fit for your educational aspirations.
    - Engage with a community of students navigating their own academic paths, share insights, and gain inspiration.

</details>

## 💻 Getting Started

<details>
<summary>View contents</summary>

### ⚠️ Prerequisites

- Node.js and NPM or Docker for running the application.
- AWS account for AWS Amplify.

### 🔽 Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/UMLCloudComputing/UniPath.io.git
    ```

2. Navigate to the project directory:

    ```sh
    cd UniPath.io
    ```

3. Install NPM packages:

    ```sh
    npm install
    ```

### 🛠️ Setup AWS Amplify CLI

First, install the AWS Amplify CLI globally:

```sh
npm install -g @aws-amplify/cli
```

#### Configure Amplify Profile

- Make a new profile: 

    ```sh
    npx amplify configure profile
    ```

    Hit Enter.

    Note: If there's already a profile, then use:

    ```sh
    npx amplify configure profile --name [insert name of profile you want here]
    ```

    It should automatically switch.

#### Add Secrets

1. **Navigate to Amplify Console for Secrets**: For Cloud Computing Club members, go to the [Amplify console (All apps > UniPath.io > Secret management)](https://us-east-1.console.aws.amazon.com/amplify/apps/d3c5lsis3camij/variables) and copy the values for below. For others, you will need to generate your own client ID and secret with your google account.

2. **Configure Google Client ID**:

    ```sh
    amplify configure secret set GOOGLE_CLIENT_ID [your_client_id_here]
    ```

    Replace `[your_client_id_here]` from the client ID above, then paste in the value. Hit enter.

3. **Configure Google Client Secret**:

    ```sh
    amplify configure secret set GOOGLE_CLIENT_SECRET [your_client_secret_here]
    ```

    Replace `[your_client_secret_here]` from the client secret secret, then paste in the value. Hit enter.

### ▶️ Running the Application

To run the application locally, you need to run the Amplify sandbox command to create the backend cloud resources and the npm run dev command for the frontend. You will need to keep both commands running in two separate terminals.

Start the Amplify sandbox command. This will provision the AWS backend resources. Keep this command running in the background.

```sh
npx ampx sandbox
```

Open a new terminal and start the frontend application:

```sh
npm run dev
```

Visit <http://localhost:3000> to view UniPath.io in your browser.


### 🔄 Updating the Project

When developing for UniPath.io, it is important to keep the project up to date with the latest changes. To update the project and pull the latest changes from GitHub, follow these steps:

1. Navigate to the project directory:

    ```sh
    cd UniPath.io
    ```

2. Pull the latest changes from the GitHub repository. It is important to pull the latest changes before creating a new feature branch. 

    ```sh
    git pull
    ```

3. Install NPM packages. This will update the project with the latest dependencies:

    ```sh
    npm install
    ```

That's it! You're all set to start developing with the latest version of UniPath.io.

</details>


## 🏗 Built With

<details>
<summary>View contents</summary>

- Front End
    - ![React JS](https://img.shields.io/badge/React_JS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
    - ![Next JS](https://img.shields.io/badge/Next_JS-000000?style=for-the-badge&logo=next.js&logoColor=white)
    - ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

- Back End
    - ![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)
    - ![AWS DynamoDB](https://img.shields.io/badge/AWS_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white)
    - ![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)

- Other Tools/Technologies:
    - ![git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
    - ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
    - ![Infastructure as Code](https://img.shields.io/badge/Infastructure_as_Code-FFA500?style=for-the-badge&logo=terraform&logoColor=white)

</details>

## 📝 Project Goals and Technologies

<details>
<summary>View contents</summary>

- **Project Management**: Apply agile methodologies such as Scrum and Kanban to enhance collaboration and efficiency.

    ![Scrum](https://img.shields.io/badge/-Scrum-blue?style=for-the-badge&logo=scrumalliance)
    ![Kanban](https://img.shields.io/badge/-Kanban-green?style=for-the-badge&logo=kanban)

- **Cloud Computing**: Gain in-depth knowledge of AWS services and cloud-native solutions.

    ![AWS](https://img.shields.io/badge/-AWS-orange?style=for-the-badge&logo=Amazon-AWS)
    ![Cloud Native](https://img.shields.io/badge/-Cloud%20Native-blue?style=for-the-badge&logo=Cloud-Native-Computing-Foundation)

- **DevOps**: Master continuous integration, continuous deployment, and infrastructure as code.

    ![CI/CD](https://img.shields.io/badge/-CI%2FCD-brightgreen?style=for-the-badge&logo=Jenkins)
    ![Infrastructure as Code](https://img.shields.io/badge/-Infrastructure%20as%20Code-lightgrey?style=for-the-badge&logo=terraform)

- **Software Engineering (SWE)**: Embrace best practices, design patterns, and modern development techniques, including version control with Git.

    ![Best Practices](https://img.shields.io/badge/-Best%20Practices-ff69b4?style=for-the-badge)
    ![Design Patterns](https://img.shields.io/badge/-Design%20Patterns-9cf?style=for-the-badge)
    ![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git)

- **Frontend Web Development**: Develop dynamic and responsive web applications using JavaScript and modern frameworks.

    ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
    ![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react)

</details>


## 🗺️ Roadmap

For the latest updates and progress, see our project boards:

- [General Board](https://github.com/orgs/UMLCloudComputing/projects/1/views/1) for an overview of the project's progress.
- [Frontend Board](https://github.com/orgs/UMLCloudComputing/projects/3/views/1) for updates and tasks related to frontend development.
- [Backend Board](https://github.com/orgs/UMLCloudComputing/projects/6/views/1) for backend development tasks and progress.


## 👨‍💻 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<details>
<summary>Creating a New Branch and Making a Pull Request</summary>

Follow these steps to contribute to the project with a new feature or bug fix:

### Step 1: Create a New Branch
Before starting your work, ensure you're on the `main` branch and that it's up to date.

```sh
git checkout main
git pull origin main
```

Create a new branch for your feature or bug fix. Follow a naming convention like `feature/<feature-name>` or `bugfix/<bug-name>`.

```sh
git checkout -b feature/my-new-feature
# or
git checkout -b bugfix/my-bug-fix
```

### Step 2: Make Your Changes
Implement your feature or fix the bug in your branch. Commit your changes using clear, concise, and conventional commit messages following the guidelines at [conventionalcommits.org](https://www.conventionalcommits.org).

```sh
git add .
git commit -m "feat: add my new feature"
# or
git commit -m "fix: correct a bug"
```

Optionally, if you assigned yourself an issue, you can automatically create and link a branch using the GitHub UI. Click on the "Create a branch" button and select the option to create a new branch for the issue.

### Step 3: Push Your Changes
Push your changes to the repository.

```sh
git push origin feature/my-new-feature
# or
git push origin bugfix/my-bug-fix
```

#### Style Guide
- Use clear, concise, and conventional commit messages.
- Follow the best software development practices and write clean, maintainable code.
- For ReactJS, follow this style guide: <https://dev.to/abrahamlawson/react-style-guide-24pp>. Except use indendantation of 4 spaces instead of 2.

### Step 4: Create a Pull Request
Go to the GitHub repository page and click on the "Pull request" button. Select your branch and provide a detailed description of your changes. Explain why your changes should be merged into the main branch.

### Step 5: Review and Merge
Wait for the project maintainers to review your pull request. They may request changes. Once your pull request is approved, a project maintainer will merge it into the main branch.

Thank you for your contribution!

</details>


## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

- Homepage: <https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub>
- Discord: <https://discord.gg/zBw2SD6tGa>

## 🎉 Acknowledgments

Many thanks to the [UMass Lowell Cloud Computing Club](https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub) members, our faculty advisor [Dr. Johannes Weis](https://www.uml.edu/sciences/computer-science/people/weis-johannes.aspx), and the [UMass Lowell Computer Science Department](https://www.uml.edu/Sciences/computer-science/) for their support and guidance.


[![Contributors](https://contributors-img.web.app/image?repo=UMLCloudComputing/UniPath.io)](https://github.com/UMLCloudComputing/UniPath.io/graphs/contributors)
