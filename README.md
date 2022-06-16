# Team-8 E-Commerce Project
Team-8 E-Commerce Project for egFWD & Sprints industry exposure program

You can check the live demo [Here](https://sprints-ecommerce-project.netlify.app/)

## Table of Contents

* [Project Title](#Team-8-E-Commerce-Project)
* [Table of content](#table-of-contents)
* [Development](#development)
* [Dependencies](#dependencies)
* [Getting Started](#getting-started)
* [Team Members](#team-members)
* [License](#License)

## Development

The app runs with [ReactJs](https://reactjs.org/) for Front-End and [MongoDB](https://www.mongodb.com/) for Back-End

## Dependencies

You need to have Node.js - MongoDB

* To install node you can download form the wesite [nodeJs](https://nodejs.org/en/) or install from your package manger [nodeJs Package Manger](https://nodejs.org/en/download/package-manager/) npm is included

* To install MongoDB you can download from the website [Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) / [linux](https://www.mongodb.com/docs/manual/installation/) follow your distro instructions.

## Getting Started

### Front-End App

* Clone the Repo and install dependencies for Front-End and start the app

```bash
git clone https://github.com/Mindirix/Team-8-E-Commerce-Project.git
cd Team-8-E-Commerce-Project/e-commerce-app
npm install
npm start
```
### Back-End Server

* navigate to (Team-8-E-Commerce-Project/e-commerce-api)  and create Environment variables (.env) file with these parameters :

```
MONGO_URL="mongodb://localhost:27017/e_commerce_app"
SALT_ROUNDS=10
PEPPER="this-is-a-pepper"
BCRYPT_PASSWORD="speak-friend-from-the-other-side-and-enter"
TOKEN_SECRET="alohomora123!"
```

* run MongoDB server

    navigate to where you installed MongoDB and run

    ```
    mongod
    ```
    or you can use the gui called [MongoDB Compass](https://www.mongodb.com/products/compass)


* install back-end dependencies and start the server

    navigate to where you cloned the repo (e-commerce-api folder)

```bash
cd Team-8-E-Commerce-Project/e-commerce-api
npm install
npm run start2 
```
* it should show

```bash
your server is running at http://localhost:8080
Database Connected
```

# Team Members
* [Amr Abdelgalil](https://github.com/AmrAbdelgalil) Front-End
* [Ahmed Moussa](https://github.com/Mindirix) Front-End
* [Bishoy Osama](https://github.com/BishoyOsama96) Front-End
* [Sarah Hassan](https://github.com/sarahassan0) Back-End
* [Mostafa Mohamed](https://github.com/magic010) Back-End
* [Mohamed Hossam](https://github.com/MohamedHossam300) Back-End

#### License

This project is Licensed under the [GNU General Public License v3.0](https://github.com/Mindirix/Team-8-E-Commerce-Project/blob/main/LICENSE)