
## Introduction
This repository contains a prototype web application that leverages the fuel economy public environmental dataset that allows consumers to view and compare fuel efficiency and greenhouse-gas information for automobiles back to 2005.  

The public dataset used is http://www.fueleconomy.gov/feg/epadata/vehicles.csv.zip, which contains all of the fuel efficiency and greenhouse-gas emissions data for vehicles from the present day back to 1984.  For the purposes of the prototype, the data was limited to a 10-year span, back to 2005.  

The consumer is able to access this prototype application at http://afseparfi.github.io/afseparfi/.  The site is a responsive, single-page application that, once loaded into a browser, can be used whether a network connection exists or not.  It allows the consumer to review fuel efficiency and greenhouse-gas information for any model car, and to compare up to three vehicles against one another.  

The current EPA site, www.fueleconomy.gov, already features a similar capability, but the development team has reimagined the feature with a focus on supporting mobile platforms such as smartphones and tablets, since the likely use of the site would be while shopping for a new or used vehicle at a dealer location, rather than at home from a desktop computer.
<br><br>

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

## Site Design and Implementation Approach

We follow a five phased approach: Discover, Describe, Design, Develop and Release.  


![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/infographic.jpg)

### Discover Phase

In the _Discover_ phase, we interviewed several consumers in the market for a new car. We captured their needs and wants, key factors in making a purchase decision, trusted tools and resources to educate themselves, as well as their understanding of and interest in fuel economy. We conducted a detailed analysis of the current fueleconomy.gov site, as well as a competitive analysis to understand that landscape. These findings informed our approach to how we prioritize our users and their goals in the next phase.

<div style="text-align: center;">

[![user interviews](http://img.youtube.com/vi/jTeDlUynA4I/0.jpg)](http://www.youtube.com/watch?v=jTeDlUynA4I "User Interviews") <br>
<a href="https://www.youtube.com/watch?v=jTeDlUynA4I">User Interviews</a>

</div>

### Describe Phase

During the _Describe_ phase, we created personas to represent these stakeholders. By understanding the user and the available data, we developed user flows that supported researching fuel economy and vehicle comparison. The team sketched new design iterations supporting user flows including browsing and searching, detailed research and comparison. We mapped out specific touchpoints and finalized our service vision and positioning statements.


![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/user_flow.png)

### Design Phase

In the _Design_ phase, we were then able to iterate on wireframes and develop mock ups.  They focused on an MVP with a user experience that educates about fuel economy combining the website, the data and were visually reinforced by using elements of the environment label. By adding specific detailed views of the label along with matching live data visualizations as the user interacts with the app, our approach was to give the user an understanding of fuel economy data, how the ratings labels displays it, and how it might impact their overall buying decision . By using a responsive design, the site is a tool for research on any media, from mobile to desktop. We developed a visual language for the site that reflected a clean, environmentally friendly, and fresh design elements that would represent the user and that resonated the existing EPA branding.

<a href="http://txg483.axshare.com">Clickable Wireframes</a>

<a href="https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/epa_highfidelity.pdf">High Fidelity Mockups</a>

### Develop Phase

Tech components were applied and a working prototype was developed during Phase 4, Develop. Testing, reusable components, and a distributed coding model were key factors during this phase.

### Release Phase

Phase 5, _Release_, focuses on metrics and measurement, refinement to the initial release to ensure the experience is maximized, enhanced, and relevant for the target users.  As part of the release strategy, a DevOps framework and tools were used to automated the integration, testing and deployment as possible.  


#### Continuous Integration

To model standard DevOps behavior, the [Travis-CI](http://travis-ci.org) continous integration site was chosen due to the small amount of effort required to turn it on and its seamless integration with GitHub.

<div style="text-align: center;">

![continuous integration loop](http://luizricardo.org/wordpress/wp-content/upload-files/2015/05/Continuous-Integration.png)
</div>

Travis-CI monitors as many branches as are available in GitHub for the user account in question (afseparfi), except for the _gh-pages_ branch.  Each time one of the development team members committed a change, Travis-CI kicks off a build.  

#### Unit and Quality Testing

The build was configured to perform unit tests and JSHint code-quality checks.  If any unit tests fail or if the JSHint check identifies JavaScript code that does not conform to the established best-practices (as codified in the .jshintrc file), the build fails and is not pushed to production.

#### Deployment

One of the useful features of GitHub is that any files checked into a branch named _gh-pages_ is automatically hosted on the GitHub.io site.  When a build passes unit and quality tests, the final step pushes the production code into the _gh-pages_ branch, causing it to be deployed to GitHub.io.
<br>
<br>

## Team/Effort Expended

![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/Team_Roles_Frame.png)


## Agile Methodology

Our lean, cross-functional team worked collaboratively every day to iterate on concepts for the prototype. We incorporated feedback from users, teammates, and feedback loops as we developed the prototype. Through the agile process, we worked efficiently to create a resource that helps users research the environmental impact and value of purchasing a new car.


## Contacts
