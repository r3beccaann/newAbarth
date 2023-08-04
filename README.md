# newAbarth


This project is a single-page application using front-end only. This is built to allow the client to view information about the new Abarth model ‘Competizione’. 

The project was built to practice working with HTML, JS, jQuery DOM Manipulation and CSS, within the front-end. Leaflet.js - a map framework was also used to display dealerships within the UK.

An eye catching feature is the ‘3D-model’ configurator, allowing the user to select a paint colour and then navigate an interactive model. Due to hosting restrictions and GLB files not being supported, this was later changed to image files. To view all 3D models see the ‘assets’ folder.

Usage
This application does not use any server side technologies. The user can download this through the link above the repo.

Features
Upon loading of the application, the user can navigate through a ‘mega-menu’ style nav bar. The links intentionally do not work. Also featured in the navigation is several other buttons and a sign-in feature. 

A carousel also appears displaying information about the new car.

// image 

The next section features the usage of jQuery to manipulate the DOM. Once the user clicks the explore button, the text changes to reveal further details about the car.

// image 

// image 

Bootstraps navtabs are utilised in the next section, displaying an image and further technical information.

// image 

// image

// image 

A counter function is implemented in the next section, displaying various numbers such as top speed and bhp.

// image 

The use of image mapping was utilised in the interior section, allowing users to select parts of a photo, triggering modals with further information.

// image

// image 

// image

// image

// image 

The next section is the configuration section, where a user can select a colour card, and with the use of jQuery, the DOM is manipulated to show an image of the corresponding colour, along with a brief description. 

// image 

// image 

// image

// image 

// image 

Below are images of the 3D models which were first implemented until hosted 

// image 

// image

// image 

// image 

The next section uses a library called leaflet.js, displaying local dealerships, along with a link to their website.

// image 

Below this, a video segment is included to show the sound of the car. This is muted on-load to avoid ruining the user experience. 

// image 

A review section is the next section shown, made with Bootstraps cards, displaying a brief overview along with a link to the source.

// image 

The next section is a link section, where the user can contact the company, or download a brochure. When the user clicks on either ‘enquire now’ or ‘book a test drive’, the page scrolls to the contact form.

// image 

Below this, an app section is displayed. This is to get the user to engage further with the brand.

//

Finally, a Bootstrap contact form is displayed for users to register interest in the new model.

//

A footer is displayed at the bottom of the viewpoint, containing quick links and a subscribe form.

//

Future Development 
To improve this project, and to improve its functionality, further research needs to be done into the hosting issue of Google’s model viewer. This aspect makes the site interactive thus is a great loss without this.

An implementation of back-end features such as allowing the user to register would be effective. In addition to this, the development of other model pages would further increase the functionality of the site.
