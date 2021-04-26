# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

### **baba**
<br>
Basically, this is going to be a stripped down variant of reddit with inpiration from other social media platforms and this is worth mentioning since it clearly takes inspiration from these sites. There will be database structure differences from reddit per the minimum table requirements but this could in fact be beneficial in terms of scaling the app.

<br>

## MVP

### Goals

- _Full CRUD on the front and back ends_
- _At least three SQL tables._
- _Association, both in the database and displayed in the frontend._
- _User authentication._
- _At least eight REACT components._
- _User authentication._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is an open-source, front end, JavaScript library for building user interfaces or UI components._ |
|   React Router   | _React Router is a collection of navigational components that compose declaratively with your application._ |
|   React Router DOM   | _It contains the React Native bindings for React Router._ |
|      Axios       | _Promise based HTTP client for the browser and node.js._ |
|     pry-rails    | _Pry is a runtime developer console and IRB alternative with powerful introspection capabilities.._ |
|      cors        | _Provides support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications._ |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes Link](https://www.figma.com/file/WXQdQaGeiOfLC06KyYtnqe/p4?node-id=0%3A1)

[Figma Prototype Views](https://www.figma.com/proto/WXQdQaGeiOfLC06KyYtnqe/p4?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1)

#### Component Tree

[Component Tree Whimsical](https://whimsical.com/p4-8kEnM1m3iSeUmaiGtgZch3)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header
      |__ Footer
      |__ PostMain
      |__ PostSmall
|__ containers
|__ Layouts
      |__ UserCreate
      |__ UserLogin
|__ screens
      |__ Home
      |__ PostDetail
      |__ PostCreate
      |__ PostEdit
      |__ UserHome
|__ services/
      |__ apiCongif.js
      |__ auth.js
      |__ posts.js
      |__ users.js

```

#### Time Estimates

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      3hrs      |     3hrs      |    3hrs     |
| Ruby Rails app setup           |    H     |    .25hrs      |     0hrs      |    0hrs     |
| Database Models Setup            |    H     |      2hrs      |     0hrs      |    0hrs     |
| Databse Controllers Setup  |    H     |      1hrs      |     0hrs      |    0hrs     |
| Form component setup      |    H     |      2hrs      |     0hrs      |    0hrs     |
| Create Database Seed Data  |    H     |      3hrs      |     0hrs      |    0hrs     |
| Database Routes |    H     |      2hrs      |     0hrs      |    0hrs     |
| Full CRUD testing   |    H     |      3hrs      |     0hrs      |    0hrs     |
| Cors Setup    |    H     |     .5hrs      |     0hrs      |    0hrs     |
| Setup React App   |    H     |      1hrs      |     0hrs      |    0hrs     |
| Build App.jsx        |    H     |      3hrs      |     0hrs      |    0hrs     |
| Build Home.jsx         |    H     |      1hrs      |     0hrs      |    0hrs     |
| Build Post.jsx          |    H     |      2hrs      |     0hrs      |    0hrs     |
| Build PostDetail.jsx              |    H     |      2hrs      |     0hrs      |    0hrs     |
| Build PostEdit.jsx             |    H     |      3hrs      |     0hrs      |    0hrs     |
| Build UserHome.jsx             |    H     |      1hrs      |     0hrs      |    0hrs     |
| Build UserLogin.jsx               |    H     |      1hrs      |     0hrs      |    0hrs     |
| Build UserCreate.jsx               |    H     |      2hrs      |     0hrs      |    0hrs     |
| CSS Styling        |    H     |      3hrs      |     0hrs      |    0hrs     |
| More CSS Styling       |    H     |      3hrs      |     0hrs      |    0hrs     |
| Total                     |    H     |  38.75hrs      |     0hrs      |    0hrs     |

<br>

### Server (Back End)

#### ERD Model

[ERD Google Drive Link](https://drive.google.com/file/d/1YnMGZbYWWmqFojCNEXPmzaG5_pPDXX7O/view?usp=sharing)
<br>

***

## Post-MVP
These ideas may change, most likely depending on how long MVP takes but also if it makes sense to the structure and vision of the project.
- Subcomments
- Advanced rich text formatting

***

## Code Showcase

> ```TBD```

## Code Issues & Resolutions

![alt](https://media.giphy.com/media/5x89XRx3sBZFC/giphy.gif)
