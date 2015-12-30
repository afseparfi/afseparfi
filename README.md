
## Introduction
This repo serves as an RFI response for the EPA. It is a working prototype based on a public environmental dataset, specifically, Fuel Economy Mileage Ratings for 2016.

<a href="http://afseparfi.github.io/afseparfi/">Link to Prototype</a>

## Technologies

The team identified open-source, reusable frameworks as the basic underpinning of the site to allow the creation of both application and infrastructure as quickly as possible while ensuring a good-quality product and environment.  The fuel economy app is based on the following technologies:

### Reusable Components

<table>
    <tr>
        <td align="center">
            <br>
            <a href="https://travis-ci.org/">
                <img src="https://cdn.travis-ci.com/images/pro-landing/TravisCI-mascot-08c431a45f963bdd99b44c4cdb6d65b8.svg" width=100 alt="Travis-CI - Test and Deploy with Confidence" title="Travis-CI - Test and Deploy with Confidence">
            </a>
            <br>Travis-CI
            <br>
        </td>
        <td>
        Travis-CI.org provides a continuous integration environment which understands how to interact with GitHub without complicated configurations and programming.  Projects are imported automatically and continuous integration starts as soon as the Travis-CI configuration file is committed to the baseline.
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="http://yeoman.io/">
                <img src="https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-300x200.png" width=250 alt="Yeoman: The web's scaffolding tool for modern webapps" title="Yeoman: The web's scaffolding tool for modern webapps">
            </a>
            <br><br>
        </td>
        <td>
        Yeoman provides the AngularJS web application framework for the prototype site, creating all of the necessary Grunt, Bower and AngularJS files and settings to work from.  A simple "yo angular", answer a few questions and the initial (empty) site can be up and running in minutes.
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="https://angularjs.org/">
                <img src="https://angularjs.org/img/AngularJS-large.png" width=700 alt="AngularJS" title="AngularJS">
            </a>
            <br><br>
        </td>
        <td>
        AngularJS provides a MVC framework on which the team built the single-page application.  Information on the page is updated immediately based upon controls and inputs from the user without requiring calls back to the server to load new pages.  The underlying JavaScript code has order and intention rather than being mashed into one large JavaScript file.
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="http://gruntjs.com/">
                <img src="https://raw.githubusercontent.com/gruntjs/gruntjs.com/master/src/media/grunt-logo.png" width=100 alt="Grunt: The JavaScript Task Runner" title="Grunt: The JavaScript Task Runner">
            </a>
            <br><br>
        </td>
        <td>
        Grunt provides a reusable build tool with a host of contributed compoments to allow multiple JavaScript-based technologies to be built and testing quickly without creating a series of homegrown scripts and configurations.
        </td>
    </tr>
</table>

### Distributed Coding

Modern web projects are performed by many developers distributed across geographical regions, and this project is no exception.  To enable distributed-yet-controlled development, the team chose the following technologies.

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" width="250" alt="GitHub - Where software is built" title="GitHub - Where software is built">
            </a>GitHub
        </td>
        <td>
        GitHub provides the Git-based public code repository and code-sharing infrastructure that allows the team, distributed across multiple locations, to seamlessly interact and construct the website in a shared manner.
        </td>
    </tr>
</table>

### Testing

Any properly run software project uses unit testing to evaluate the code baseline to ensure planned functionality operates as expected.  The team has chosen two technologies to use to provide this test coverage on the project.

<table>
    <tr>
        <td align="center">
            <br>
            <a href="http://jasmine.github.io//">
            <img src="https://camo.githubusercontent.com/d3afdfc8b8075b9daf5109c4af7b8b07ab2d7c04/68747470733a2f2f7261776769746875622e636f6d2f6a61736d696e652f6a61736d696e652f6d61737465722f696d616765732f6a61736d696e652d686f72697a6f6e74616c2e737667" width="375" alt="Jasmine: Behavior-Driven JavaScript" title="Jasmine: Behavior-Driven JavaScript">
            </a>
            <br><br>
        </td>
        <td>
        Jasmine provides the language in which team is able to author JavaScript unit tests to test the AngularJS controllers and services.  Test failures are caught in continuous integration and team members notified of problems long before they reach production.
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="http://karma-runner.github.io/">
            <img src="http://karma-runner.github.io/assets/img/banner.png" width="150" alt="Karma - Spectacular Test Runner for Javascript" title="Karma - Spectacular Test Runner for Javascript">
            </a>
            <br><br>
        </td>
        <td>
        Karma provides the unit testing execution framework, with the ability to start both user-driven and headless browsers, execute the Jasmine test cases and report the results back to the developers.
        </td>
    </tr>
</table>

### DevOps environment

The flow of code from initial authoring through testing, quality review and deployment to staging and production environments should be as automated as possible.  The technologies below have been selected to provide automated build, testing and deployment.

<table>
    <tr>
        <td align="center">
            <a href="https://travis-ci.org/">
                <img src="https://cdn.travis-ci.com/images/pro-landing/TravisCI-mascot-08c431a45f963bdd99b44c4cdb6d65b8.svg" width=200 alt="Travis-CI - Test and Deploy with Confidence" title="Travis-CI - Test and Deploy with Confidence">
            </a>
            <br>Travis-CI
            <br>
        </td>
        <td>
        Travis-CI monitors the afseparfi master branch, automatically executing Grunt build, test and deploy tasks each time a developer commits changes.
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="http://gruntjs.com/">
                <img src="https://raw.githubusercontent.com/gruntjs/gruntjs.com/master/src/media/grunt-logo.png" width=100 alt="Grunt: The JavaScript Task Runner" title="Grunt: The JavaScript Task Runner">
            </a>
            <br><br>
        </td>
        <td align="left">
        Grunt executes a series of actions against the web site code baseline, checking code quality, performing unit tests/quality checks and create distributions for deployment.
        <br><br>
        For this project, Grunt runs jshint, test and build targets on Travis-CI.
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" width="250" alt="GitHub - Where software is built" title="GitHub - Where software is built">
            </a>GitHub
        </td>
        <td>
        GitHub.io provides the hosting environment for the deployed web application.  Any code committed to the <i>gh-pages</i> branch of the project is automatically hosted in GitHub.io.  When a build is successful and passes all quality and unit tests, the resulting web application is pushed to the <i>gh-pages</i> branch by Travis-CI, resulting in a deployed build.
        </td>
    </tr>
</table>
<br><br>

## Site Design Approach



### Discover
Frame the problem and existing experience by gaining a full understanding of the questions, scope, and overall context for the service.

<a href="https://www.youtube.com/watch?v=jTeDlUynA4I">Interviews</a>

### Describe
Define the service by synthesizing research and producing high level concepts by defining the differentiating ideas and key indicators for success.

### Design
Bring the service to life by conceiving, prototyping, evaluating, and refining the service experience.

<a href="http://txg483.axshare.com">Wireframes</a>

<a href="https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/epa_highfidelity.pdf">Mockups</a>

### Develop
Create tangible solutions in collaboration with developers to test, produce and deliver all of the needed components for the service design language.

### Release
Help the service go to market and iterate and improve on it after its release.



## CI/Testing/Deployment

TBD

## Team/Effort Expended

![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/Team_Roles_Frame.png)



## Agile Methodology


## Contacts
