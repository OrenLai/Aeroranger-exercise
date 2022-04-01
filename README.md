
Pixelcase Group						Confidential
Developer Assessment Assignment

Task description

Your task is to create a mobile-responsive single page web application using Vue.JS which allows users to login to the Aero Ranger API, upload an image to the specified API endpoint, receive an API response and display the returned vehicle data.

The web application should be responsive for desktop and mobile browsers and allow users to upload image files from a desktop browser (with the ability to select multiple images to upload at once), take a photo using a built-in camera on a mobile device and upload that, or upload images from a mobile photo library/camera roll.

The Aero Ranger API includes an endpoint which allows authenticated users to upload an image of a vehicle and receive a response which contains an ANPR result for the vehicle number plate (if a number plate is recognised in the image). We call this a ‘vehicle read’. If a vehicle image is uploaded and returns vehicle data AND alert data, we call this a ‘vehicle hit’ or ‘vehicle alert’. See Part 2 of the assessment for API details.

Prioritise displaying vehicle data most relevant to the end user – the vehicle make, model, colour and number plate (i.e. 1ABC123 Red Porsche 911).

Finally, demonstrate how you would visually display a vehicle alert by uploading the example image 1CWI120.PNG (a vehicle with an alert created for the plate) to receive a Vehicle Alert, and display the ‘hitMessage’ value on screen. Visually differentiate between a standard ‘vehicle read’ and a ‘vehicle alert’.

For an example of how we already use this workflow in our platform, see our Capture ALPR iPhone app: https://www.aeroranger.com/iphone-anpr

Overview:

-	Build a responsive single page web application for mobile and desktop browsers using Vue.JS

-	Build a login page which allows users to securely enter a username and password, submit a login request and store the returned login token.
•	Navigate to the Camera View on a successful login.
•	Display an error on an unsuccessful login.

-	Build a Camera View which allows users to take a photo using their mobile camera or upload an image from their desktop/device/camera roll.
•	Navigate to the Results View on a successful ANPR result.
•	Display an error when no ANPR data is returned.

-	Build a Results View which displays uploaded image along with the received ANPR data.

-	Demonstrate uploading the supplied example image 1CWI120.PNG and display the hitMessage value on the Results View. Visually differentiate between a ‘read’ and a ‘hit’ response (such as in this case).
 
How you will be assessed

You will be assessed on the following:

-	Understanding and interpretation of the assignment.
-	Quality of UX/UI.
-	Quality of code.
-	Responsiveness of the web app.
-	Communication with the “pretend” client via Teams or WhatsApp

It may not be possible to finalise all the required functionality. Focus on what you can complete well in the time period.
 
Submission & presentation

Please commit your code to the nominated code repository by the deadline.

Presentation will be in person at Pixelcase office or via Teams (for candidates not located in Perth). 
