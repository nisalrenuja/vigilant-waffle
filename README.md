Gaze-Based Image Slider

This repository contains a gaze-controlled image slider built using the WebGazer.js library. The project leverages eye-tracking technology to provide a hands-free, immersive experience for navigating through images. By detecting the user’s gaze direction, the slider transitions between images based on where the user looks.

Features

	•	Eye Tracking: Uses WebGazer.js to detect gaze direction in real-time.
	•	Gaze-Based Navigation:
	•	Look left to go to the previous image.
	•	Look right to move to the next image.
	•	Dynamic Image Loading: Fetches random images from https://picsum.photos to provide a continuous stream of visually appealing content.
	•	Smooth Transitions: Utilizes CSS transitions for seamless image movement.
	•	Fully Responsive: Designed to adapt to various screen sizes with an elegant layout.

How It Works

	1.	WebGazer Integration: The project initializes WebGazer.js and sets up a gaze listener to track eye movements.
	2.	Gaze Zones:
	•	The screen is divided into three zones:
	•	Left: Triggers navigation to the previous image.
	•	Right: Triggers navigation to the next image.
	•	Center: Resets gaze tracking.
	3.	Look Delay: A configurable delay (LOOK_DELAY) ensures intentional gaze input for navigation, reducing accidental triggers.
	4.	Dynamic Updates: Images are dynamically created and removed to maintain a clean and efficient DOM.

Setup and Usage

	1.	Clone this repository
	2.	Open the project folder and serve the index.html file using a local server (e.g., Live Server extension in VS Code or Python’s HTTP server).
	3.	Visit the webpage in a browser (preferably Chrome).
	4.	Grant camera permissions when prompted.
	5.	Look left or right to navigate through the images.

Customization

	•	Adjust Look Delay: Modify the LOOK_DELAY value in script.js to change the required time for gaze detection.
	•	Change Image Source: Replace the URL in the getNewImage function to load images from a different source.

Technology Stack

	•	HTML5: For structuring the webpage.
	•	CSS3: For styling and smooth transitions.
	•	JavaScript: For handling gaze detection and DOM manipulation.
	•	WebGazer.js: For real-time eye-tracking capabilities.

Future Improvements

	•	Add a calibration screen for improved gaze accuracy.
	•	Enhance accessibility with alternative input methods.
	•	Include support for different image sources or user-uploaded images.

Acknowledgments

	•	Thanks to the creators of WebGazer.js for the open-source eye-tracking library.
	•	Images sourced from Picsum.

Feel free to fork, contribute, or raise issues! 🚀
