# Chat Application with Redux, React, and Socket.io

This project is a simple chat application built using Redux, React, and Socket.io. It features two screens - a home page and a chat page. Users can send messages, switch between screens, receive messages in the background, and perform actions like deleting and liking chat responses.

## Table of Contents

-   Objective
-   Tools Used
-   Requirements
-   Installation
-   Usage
-   Contribution

## Objective

The main objective of this project is to develop a chat application that allows users to:

-   Send and receive messages in real-time.
-   Switch between the home page and the chat page seamlessly.
-   Delete and like chat responses.

## Tools Used

-   **React**: For building the user interface.
-   **Redux**: For managing the application state, especially for handling messages and user actions.
-   **Socket.io**: For enabling real-time communication between clients and the server.

## Requirements

### Home Page:

-   Simple Landing page
-   Provide a button to initiate a chat with a selected user.

### Chat Page:

-   Allow users to send text messages.
-   Implement real-time updates so that messages are received even when the user is on the home page.
-   Include options to delete and like chat responses.

### Redux Setup:

-   Create actions and reducers to manage the application state.
-   Ensure the state includes user information, chat history, and any other relevant data.

### Socket.io Integration:

-   Set up Socket.io on both the client and server sides.
-   Emit and handle events for sending and receiving messages.
-   Ensure that the chat history is updated in real-time.

### User Interaction:

-   Implement a mechanism to switch between the home page and the chat page seamlessly.
-   Allow users to send messages in the chat.
-   Implement the ability to delete and like chat responses.

### UI/UX Considerations:

-   Design an intuitive and user-friendly interface.
-   Implement proper feedback for actions like sending messages, deleting, and liking.

## Installation

To set up and run the application:

1.  Clone the repository:  `git clone https://github.com/redux-socket-chat`
2.  Navigate into the directory:  `cd your-repo-name`
3.  Install the dependencies:  `npm install`
4.  Start the server:  `npm start-server`
5.  Start the client: `npm start`

## Usage

Provide clear documentation on how the application works, including any setup steps for developers.

## Contribution

Contributions, issues, and feature requests are welcome. Feel free to check  [issues page](https://github.com/anwaralamdev/redux-socket-chat/issues)  if you want to contribute.

## Additional Notes

-   You are encouraged to use functional components, hooks, and modern React practices.
-   Follow the Redux and Socket.io documentation for best practices.
-   Aim for a clean and modular code structure.
-   Pay attention to error handling and edge cases, ensuring a smooth user experience.

## Submission

Please provide a GitHub repository link containing the code and any additional documentation. Include a README file with instructions on how to set up and run the application.

This task is designed to assess your proficiency in React, Redux, and real-time communication with Socket.io. Feel free to reach out if you have any questions or need clarification on any aspect of the task. Good luck!
