# Animal Pals

A website where pets owners can find the best vacation for the their pets needs!

## Description

This app is a place where users can find a ideal location for their pets to stay while they go on a vacation or are too busy to care for their pets. Additionally, the user can register and create posts which contains details of which animals they can house, how many pets, where it is located. Finally, the users can create reservations which will book the vacation time off for the post. Users can find their reservations in the reservation page and then cancel the resevation if needed.

Animal-Pals is built with the next.js app version to have both server side and client side rendering. The project uses typescript to aid in fixing run-time errors and making sure props are used with the correct types. The back-end is built with mongoDB and prisma. Users can register or sign up with their google accounts using nextAuth as a authetication provider. Images of vacation homes are uploaded using the cloudinary upload api which saves the image into the cloudinary database returning an cloudinary image URL. The app is styled for mobile and desktop using taliwindCSS. Other packages such as react-date-range, axios, bcrypt, react-toast provide features to show notifcations, pick dates, and create http requests.

## ScreenShots

![Home Page](https://imgur.com/rsa63Vy.png "HomePage")
![Creating a Post](https://imgur.com/kNWMVEZ.png "Creating a Post")
![Individual Post](https://imgur.com/z0VkxCW.png "Individual Post")

# Getting Started

### Dependencies

This project requires node.js to be installed inorder to be run

### Installing

- Clone the project
- Create a mongoDB database
- Create an env file including the environmental variables
- Run the command npx prisma db push to load the tables into mongoDB
- Run the command npm install to install packages

### Executing program

- To execute run the command "npm run dev"

## Authors

Jason mac  
[@JasonMaC](https://github.com/JasonMac123/)

## Version History

- 0.1
  - Initial Release
