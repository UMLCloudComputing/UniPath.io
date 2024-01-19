<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/UMLCloudComputing/UniPath.io">
    <img src="./docs/Images/logo.png" alt="Logo" width="50%" height="50%">
  </a>
  <p align="center">
    Plan, Create, and Share Your Academic Journey!
    <br />
    <br />
    <a href="https://unipath.io">View Demo</a>
    ·
    <a href="https://github.com/UMLCloudComputing/UniPath.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/UMLCloudComputing/UniPath.io/issues">Request Feature</a>
  </p>
</div>

## About

Developed by students from the [Cloud Computing Club at UMass Lowell](https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub), UniPath.io is an innovative web application designed to revolutionize the way college students plan and visualize their academic journey. With a focus on user-driven content and a dynamic visual interface, UniPath.io offers a comprehensive suite of tools for meticulous degree path planning and progress tracking. Here's how UniPath.io will empower students:
- **Degree Path Planning**: Craft a detailed degree plan by manually entering courses, defining your academic goals, and structuring your semesters ahead.
- **Visual Progress Tracking**: Get a clear visual representation of your academic journey, with color-coded progress indicators for completed, current, and planned courses.
- **Requirement Mapping**: Input and manage degree requirements to ensure all academic goals are met and your pathway remains on track.
- **Course Dependencies**: Define and visualize prerequisites and co-requisites to understand course sequences and validate your academic plan.
- **Interactive Pathway Validation**: Our system will analyze your plan to confirm the validity of your course sequence, ensuring you meet all necessary academic criteria.
- **Collaborative Planning**: Share your degree pathway with peers and advisors, allowing for collaborative planning and feedback.
- **Pathway Comparison**: Compare your academic plan with others to explore different pathways and find the best fit for your educational aspirations.
- **Community Engagement**: Engage with a community of students navigating their own academic paths, share insights, and gain inspiration from others' progress.

UniPath.io is more than just a planning tool; it's a community-driven platform that encourages students to take charge of their education, share their experiences, and support each other's academic growth.

***Note: This project is currently in development. The application is not yet fully functional, and some features may be incomplete or missing. Please refer to the [project roadmap](#roadmap) for more information.***

## Getting Started

This section is for developers who want to contribute to the project. If you're looking to use the application, please visit the [UniPath.io website](https://unipath.io).

### Prerequisites

- You will need Node.js and NPM to run the application. You can either install them manually, or use the provided Dockerfile to build a Docker image and run the application in a container.
- You will need access to an AWS account for AWS Amplify, as the project is configured to use AWS services for CI/CD, hosting, and backend resources. Please ensure you configure your AWS credentials and environment variables before attempting to deploy.
- Install the Amplify CLI tool:
  ```sh
  npm install -g @aws-amplify/cli
  ```

### Installation

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

### Running the Application

To start the application in development mode, run:
```sh
npm run dev
```
This will start the Next.js server with hot-reloading enabled on http://localhost:3000 on your local machine.

### Using AWS Amplify

AWS Amplify CLI is required to configure and deploy certain AWS resources. If you are designing or modifying backend AWS Amplify resources, then it is a good idea to create an isolated backend environment for testing. 

Note that `prod`, `dev`, and `test` are reserved environment names, as we are following the [Feature Branch Workflow](https://docs.aws.amazon.com/amplify/latest/userguide/team-workflows-with-amplify-cli-backend-environments.html#standard) for  AWS Amplify.

* To create a new backend environment, run:
   ```sh
   amplify env add
   ```
   You can name the isolated environment with your name or any other identifier. This will create a new backend environment in the cloud, and a new local environment config file in the `amplify` directory. 
   Then push the backend environment to the cloud:
   ```sh
    amplify push
    ```
    This will create the backend resources in the cloud, and update the local environment config file with the new backend environment information.
* To view the current backend environment, run:
  ```sh
  amplify env list
  ```

* To switch to a different backend environment, run:
  ```sh
  amplify env checkout <environment-name>
  ```

For documention on how to use the CLI, please refer to the [AWS Amplify CLI documentation](https://docs.amplify.aws/cli/).


## Project Goals and Technologies

#### Core Competencies
- **DevOps**: Master the principles of continuous integration, continuous deployment, and infrastructure as code.
- **Cloud Computing**: Gain in-depth knowledge of AWS services, serverless architectures, and cloud-native solutions.
- **Software Engineering (SWE)**: Acquire a strong understanding of best practices, design patterns, and modern web development techniques.
- **Frontend Web Development**: Develop proficiency in creating user interfaces using technologies like HTML, CSS, JavaScript, and React JS.

#### Technologies
- **Version Control**: Git
- **CI/CD**: AWS Amplify Hosting
- **Frontend**: JavaScript, HTML, CSS, React JS, Next JS, MUI
- **Containerization**: Docker
- **Database**: AWS DynamoDB
- **Backend**: AWS Lambda
- **Infrastructure as Code**: AWS CloudFormation/Terraform

#### Detailed Goals
1. **Version Control with Git**: Introduce and practice version control to manage codebase effectively.
2. **CI/CD with AWS Amplify Hosting**: Implement a robust continuous integration and deployment pipeline.
3. **Web Development**: Master frontend technologies like React JS & Next JS, and understand Server-Side-Rendering principles. 
4. **Dockerization**: Understand the benefits and practical applications of Docker and containerization.
5. **Database Management with AWS DynamoDB**: Explore cloud databases and their best practices.
6. **Backend Development with AWS Lambda**: Learn serverless architecture and how to create and manage Lambda functions.
7. **Advanced Cloud Computing Topics**: Dive deeper into cloud computing concepts like infrastructure-as-code (IaC) using AWS CloudFormation/Terraform.

### Application Architecture

- Frontend:
  - [![Next.js][Next.js]][Next-url]
  - [![React][React]][React-url]
  - [![Material-UI][Material-UI]][Material-UI-url]
- Backend:
  - [![AWS Amplify][AWS-Amplify]][AWS-Amplify-url]
    - [![AWS DynamoDB][AWS-DynamoDB]][AWS-DynamoDB-url]
    - [![AWS S3][AWS-S3]][AWS-S3-url]
    - [![AWS Cognito][AWS-Cognito]][AWS-Cognito-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap

See the [project board](https://github.com/orgs/UMLCloudComputing/projects/1) for the project roadmap and progress.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please see the [contributing guidlines](./docs/Contribution-Guideline/README.md) for more information.

See the [best practices](./docs/best-practices.md) for more information on how to make meaningful contributions to the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
- Homepage: https://github.com/UMLCloudComputing/Fall2023
- Discord: https://discord.gg/WC2NdqYtDt

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [React MUI](https://mui.com/)
* [AWS Amplify](https://aws.amazon.com/amplify/)
* [Img Shields](https://shields.io)
* [README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors

This is a list of contributors to the project. If you would like to contribute, please see the [contributing guidelines](./docs/Contribution-Guideline/README.md).

Arranged from alphabetical order by last name.

- Kojo Bempah
- Christopher Coco
- Matthew Hudzikiewicz
- Edmund Kam
- Matthew Marwad Kostandin
- Rohan Mallu
- Martin Marwad
- Rahul Rajesh
- Roshan Rajesh
- Aaron Roche
- Noah Shayne
- Gurpreet Singh
- Alvin Yu





<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/UMLCloudComputing/UniPath.io.svg?style=for-the-badge
[contributors-url]: https://github.com/UMLCloudComputing/UniPath.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/UMLCloudComputing/UniPath.io.svg?style=for-the-badge
[forks-url]: https://github.com/UMLCloudComputing/UniPath.io/network/members
[stars-shield]: https://img.shields.io/github/stars/UMLCloudComputing/UniPath.io.svg?style=for-the-badge
[stars-url]: https://github.com/UMLCloudComputing/UniPath.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/UMLCloudComputing/UniPath.io.svg?style=for-the-badge
[issues-url]: https://github.com/UMLCloudComputing/UniPath.io/issues
[license-shield]: https://img.shields.io/github/license/UMLCloudComputing/UniPath.io.svg?style=for-the-badge
[license-url]: https://github.com/UMLCloudComputing/UniPath.io/blob/master/LICENSE
[twitter-shield]: https://img.shields.io/twitter/follow/UniPath_io?style=for-the-badge&logo=twitter&color=1DA1F2
[twitter-url]: https://twitter.com/UniPath_io
[product-screenshot]: https://unipath.io/assets/screenshot.png
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[AWS-Amplify]: https://img.shields.io/badge/AWS%20Amplify-232F3E?style=for-the-badge&logo=aws-amplify&logoColor=white
[AWS-Amplify-url]: https://aws.amazon.com/amplify/
[AWS-DynamoDB]: https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white
[AWS-DynamoDB-url]: https://aws.amazon.com/dynamodb/
[AWS-S3]: https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white
[AWS-S3-url]: https://aws.amazon.com/s3/
[AWS-Cognito]: https://img.shields.io/badge/Amazon%20Cognito-4053D6?style=for-the-badge&logo=amazon-cognito&logoColor=white
[AWS-Cognito-url]: https://aws.amazon.com/cognito/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Material-UI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[Material-UI-url]: https://material-ui.com/
