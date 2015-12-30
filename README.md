
## Introduction
This repo serves as an RFI response for the EPA. It is a working prototype based on a public environmental dataset, specifically, Fuel Economy Mileage Ratings for 2016.

<a href="http://afseparfi.github.io/afseparfi/">Link to Prototype</a>

## Technologies

The team identified open-source, reusable frameworks as the basic underpinning of the site to allow the creation of both application and infrastructure as quickly as possible while ensuring a good-quality product and environment.  The fuel economy app is based on the following technologies:

### Website Implementation

<table>
    <tr>
        <td align="center">
            <br>
            <a href="http://www.w3schools.com/html/">
            <img src="http://www.w3.org/html/logo/badge/html5-badge-h-connectivity-css3-device-storage.png" width="250" height="64" alt="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Offline &amp; Storage" title="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Offline &amp; Storage">
            </a>
            <br><br>
        </td>
        <td>
        TBD
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="https://angularjs.org/">
                <img src="https://angularjs.org/img/AngularJS-large.png" width=250 alt="AngularJS" title="AngularJS">
            </a>
            <br><br>
        </td>
        <td>
        TBD
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="http://getbootstrap.com/">
                <img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" width=100 alt="Bootstrap UI" title="Bootstrap">
            </a>
            <br><br>
        </td>
        <td>
        TBD
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="https://www.firebase.com/">
                <img src="https://szimek.github.io/presentation-firebase-intro/images/firebase_logo.png" width=250 alt="Firebase" title="Firebase">
            </a>
            <br><br>
        </td>
        <td>
        TBD
        </td>
    </tr>
    <tr>
        <td align="center">
            <br>
            <a href="https://www.firebase.com/docs/web/libraries/angular/">
                <img src="https://gaslight-blog.s3.amazonaws.com/angular-plus-firebase-is-rad/afire-logo.png" width=250 alt="AngularFire by Firebase" title="AngularFire by Firebase">
            </a>
            <br><br>
        </td>
        <td>
        TBD
        </td>
    </tr>
</table>

These technologies allow for the rapid creation of **_single-page application_** with dynamic response and a mobile-responsive design.

### DevOps Infrastructure

The following technologies provided reusable components which allowed for the easy and fast creation of a DevOps infrastructure to build, test and deploy the code baseline:


<table>
    <tr>
        <td align="center">
            <br>
            <a href="https://github.com/">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" width="150" alt="GitHub - Where software is built" title="GitHub - Where software is built">
            </a>GitHub
            <br><br>
        </td>
        <td>
        GitHub provides the Git-based public code repository and code-sharing infrastructure that allows the team, distributed across multiple locations, to seamlessly interact and construct the website in a shared manner.
        </td>
        </tr><tr>
        <td align="center">
            <a href="https://travis-ci.org/">
                <img src="https://cdn.travis-ci.com/images/pro-landing/TravisCI-mascot-08c431a45f963bdd99b44c4cdb6d65b8.svg" width=150 alt="Travis-CI - Test and Deploy with Confidence" title="Travis-CI - Test and Deploy with Confidence">
            </a>
            <br>Travis-CI
            <br>
        </td>
        <td>
        Travis-CI provides the continuous integration environment, monitoring the afseparfi master branch, executing Grunt build, test and deploy tasks each time a developer commits changes.
        </td>
        </tr><tr>
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
        </tr><tr>
        <td align="center">
            <br>
            <a href="http://gruntjs.com/">
                <img src="https://raw.githubusercontent.com/gruntjs/gruntjs.com/master/src/media/grunt-logo.png" width=200 alt="Grunt: The JavaScript Task Runner" title="Grunt: The JavaScript Task Runner">
            </a>
            <br><br>
        </td>
        <td>
        Grunt executes a series of actions against the web site code baseline, allowing developers to check code quality, perform unit tests, host local web server copies for debugging and development and create distributions for deployment.<br><br>For the purposes of this project, Grunt runs jshint, test and build targets on Travis-CI.
        </td>
        </tr><tr>
        <td>
            <br>
            <a href="http://bower.io/">
                <img src="http://bower.io/img/bower-logo.png" width=250 alt="Bower - A package manager for the web" title="Bower - A package manager for the web">
            </a>
            <br><br>
        </td>
        <td>
        Bower manages the package dependencies for this AngularJS application.  This include AngularJS, Firebase, Bootstrap and JQuery.  Bower, injects into index.html references to all listed dependencies via a Grunt task, ensuring that specific versions of these packages are used across the entire project.
        </td>
        </tr><tr>
        <td>
            <br>
            <a href="http://jshint.com/">
                <img src="http://jshint.com/res/jshint-dark.png" width=250 alt="JSHint, a JavaScript Code Quality Tool" title="JSHint, a JavaScript Code Quality Tool">
            </a>
            <br><br>
        </td>
        <td>
        JSHint ensures that the JavaScript code written meets the necessary level of quality for the project.  Simple and common JavaScript mistakes are caught and best practices are enforced before the code is ever deployed.
        </td>
        </tr><tr>
    </tr>
</table>


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
