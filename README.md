
## Introduction
This repo serves as an RFI response for the EPA. It is a working prototype based on a public environmental dataset, specifically, Fuel Economy Mileage Ratings for 2016.

<a href="http://afseparfi.github.io/afseparfi/">Link to Prototype</a>

## Technologies

The team identified open-source, reusable frameworks as the basic underpinning of the site to allow the creation of both application and infrastructure as quickly as possible while ensuring a good-quality product and environment.  The fuel economy app is based on the following technologies:

<table>
    <tr>
        <td align="center" colspan="2">
            <br>
            <a href="http://www.w3schools.com/html/">
            <img src="http://www.w3.org/html/logo/badge/html5-badge-h-connectivity-css3-device-storage.png" width="250" height="64" alt="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Offline &amp; Storage" title="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Offline &amp; Storage">
            </a>
            <br><br>
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
        <td align="center">
            <br>
            <a href="http://getbootstrap.com/">
                <img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" width=100 alt="Bootstrap UI" title="Bootstrap">
            </a>
            <br><br>
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
        <td align="center">
            <br>
            <a href="https://www.firebase.com/docs/web/libraries/angular/">
                <img src="https://gaslight-blog.s3.amazonaws.com/angular-plus-firebase-is-rad/afire-logo.png" width=250 alt="AngularFire by Firebase" title="AngularFire by Firebase">
            </a>
            <br><br>
        </td>
    </tr>
</table>

These technologies allow for the rapid creation of **_single-page application_** with dynamic response and a mobile-responsive design.

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
        GitHub provided the Git-based public code repository and code-sharing infrastructure that allow the team, distributed across multiple locations, to seemlessly interact and construct the website
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
        Travis-CI provided the continuous integration environment which monitored the GitHub repository
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
        TBD
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
        TBD
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
        TBD
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
        TBD
        </td>
        </tr><tr>
    </tr>
</table>


## Site Design Approach
![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/process_circles.jpg)
We follow a five phased approach beginning with Discovery. Through user research, we interviewed several consumers in the market for a new car. We captured their needs and wants, key factors in making a purchase decision, trusted tools and resources to educate themselves, as well as their understanding of and interest in fuel economy. We conducted a detailed analysis of the current fueleconomy.gov site, as well as a competitive analysis to understand that landscape. These findings informed our approach to how we prioritize our users and their goals, phase 2. During the Describe phase, we created personas to represent these stakeholders. By understanding the user and the available data, we developed user flows that supported researching fuel economy and vehicle comparison. The team sketched new design iterations supporting user flows including browsing and searching, detailed research and comparison. We mapped out specific touchpoints and finalized our service vision and positioning statements. During Phase 3, Design, we were then able to iterate on wireframes and develop mock ups.  They focused on an MVP with a user experience that educates about fuel economy combining the website, the data and were visually reinforced by using elements of the environment label. By adding specific detailed views of the label along with matching live data visualizations as the user interacts with the app, our approach was to give the user an understanding of fuel economy data, how the ratings labels displays it, and how it might impact their overall buying decision . By using a responsive design, the site is a tool for research on any media, from mobile to desktop. We developed a visual language for the site that reflected a clean, environmentally friendly, and fresh design elements that would represent the user and that resonated the existing EPA branding. Tech components were applied and a working prototype was developed during Phase 4, Develop. Testing, reusable components, and a distributed coding model were key factors during this phase. Phase 5, Release focuses on metrics and measurement, refinement to the initial release to ensure the experience is maximized, enhanced, and relevant for the target users. 


### Discover
Frame the problem and existing experience by gaining a full understanding of the context and potential constraints 

<a href="https://www.youtube.com/watch?v=jTeDlUynA4I">User Interviews</a>

### Describe
Define the service by synthesizing research and producing high level concepts, including differentiating ideas and key indicators for success

### Design
Bring the service to life by conceiving, prototyping, evaluating, and refining the service experience 

<a href="http://txg483.axshare.com">Clickable Wireframes</a>

<a href="https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/epa_highfidelity.pdf">High Fidelity Mockups</a>

### Develop
Technical Components and Prototypes

### Release
Go to market launch; iterate and improve after initial release 



## CI/Testing/Deployment



## Team/Effort Expended

![alt img](https://raw.githubusercontent.com/afseparfi/afseparfi/master/docs/Team_Roles_Frame.png)



## Agile Methodology


## Contacts
