# Extreme Tech Blog

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Contributors

[Chris Kimball](https://github.com/chirskimball "chirskimball's GitHub Profile")


## Description

The following project is a full stack application that allows users to view, post and comment on a tech blog. 

The tech blog application has a user login and registration page where users can sign up or sign into an account. It also consists of a dashboard which will display all of a user's blog posts after they have signed into their account.

The dashboard page will have a "New Post" button that users can use to create a new blog post. Once a post has been posted, their dashboard will display the newly created post. If the user clicks on a post from their dashboard, it will load a posts page for the user which will allow them to update or delete their blog post.

When users navigate back to the home page they will see a list of all blog posts regardless of user. If they click on a single post the post will open in a new page which will allow any user to comment on the post to allow for feedback and engagement with the blog posts.


## Table of Contents 

* [Web Addresses](#web-addresses)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Techology Used](#technology-used)
* [Questions](#questions)


## Web Addresses
---------------

*  [Github Repository](https://github.com/chriskimball/extreme-tech-blog "Github Repo")
*  [Deployed Application](https://extreme-tech-blog.herokuapp.com/ "Deployed Application")


## Installation

1. Clone this Git repository
2. Navigate to repository in local directory.
3. To install any necessary dependencies, run the following command:

```bash
npm i
```

4. Rename the `.env.EXAMPLE` file to `.env`, and open it.
5. Enter your mysql `username`, and `password` into the `DB_USER=''` and 
`DB_PW=''` fields.
6. Enter any string value for the `SESSION_SECRET=''` field to encrypt user cookies with a super secret cookie.
7. Open a new terminal, open mysql shell with the following command:

```bash
mysql -u <mysql username> -p
```
8. Enter your mysql password when prompted.
9. Enter the following commands to source the schema.sql and seed.sql data.
```bash
source db/schema.sql;
```
10. Enter the following command to exit the mysql shell. 
```bash
quit;
```
11. Run the seed file with the follwing command:
```bash
npm run seed
```

## Usage

You will need node.js and mysql to run this application. Once the repository has been cloned and mysql schema/seed files have been sourced, navigate to the file directory, open a new terminal and run the following command.

```bash
npm start
```

After the application starts navigate to `http://localhost:3001/` to operate the application.

## License

This project is licensed under the MIT license.


## Technology Used

* MySQL
* Javascript
* Node.js
* Express.js npm package
* MySQL2 npm package
* Sequelize package
* dotenv npm package
* nodemon npm package
* Connect Session Sequelize package
* Heroku
* JAWSDB


## Questions

If you have any questions about the repo, open an issue or contact me directly at [ctrain21@gmail.com](mailto:ctrain21@gmail.com). You can find more of my work at [chirskimball](https://github.com/chirskimball "chirskimball's GitHub Profile").
