
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Checkmate</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/CyberneTech/Checkmate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CyberneTech/Checkmate/issues">Report Bug</a>
    ·
    <a href="https://github.com/CyberneTech/Checkmate/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]
Checkmate is a CLI tool that helps the user to keep a track for various versions of a specific dependecy and verify if the version being used is the required one. 
Version if unsatisfied can be upgraded to a mentioned version by changing the same in package.json file.
Checkmate therefore is helpful in large project where number of projects handled is huge. It eliminates the need to manually check versions in each project and automates the task, making it easieer and faster.
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node JS](https://nodejs.org/)
* [Intellegence & Patience]()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
  ```sh
  checkmate -u -i filename.csv dependency@version
  ```
* `checkmate` - main command that triggers the cli
* `-u or -- update` - to update the version in package.json and create a pull request for update.
* `-i or --inspect` - to check the `version` of `dependency` with the dependecies in each project mentioned in `filename.csv` 

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Any flavour of Linux (OS)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CyberneTech/Checkmate
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Get a Github Access Token for authorization
4. Enter the following command in terminal
   ```sh
   export  AUTH_TOKEN="github_access_token"
   ```
5. place CSV file with project links in project root directory

6. Enter command to run cli
   ```sh
   checkmate -i filename.csv dependency@version
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
1. To keep a check of versions of various dependencies involved in a project, specially if the project has large number of dependencies involved
2. Keep versions up to date (no downgrade possible)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Passing multiple dependencies in single command
- [ ] Added customization to functions
- [ ] Check compatibity of the versions before update
- [ ] Aviod updating to deprecated versions or if code contains deprecated functions of older dependency versions 
See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Shruti Jain- shruti.jain2019@vitstudent.ac.in

Contact me at: [Linkedin](https://www.linkedin.com/in/shruti-j-08a399196/),

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/dyte-screenshot.png
