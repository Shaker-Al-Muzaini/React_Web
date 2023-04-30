import React, { Component, Fragment } from 'react'
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
   } from "react-router-dom";

import HomePage from'../pages/HomePage'

import AboutPage from'../pages/AboutPage'
import ContactPage from'../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage';
import ProjectPage from '../pages/ProjectPage';
import ServicePage from '../pages/ServicePage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
export class AppRouter extends Component {
     render() {
          return (
               <Fragment>
      <Switch>
          <Route exact path="/" component={HomePage} / >
          <Route exact path="/about" component={AboutPage} / >
          <Route exact path="/contact" component={ContactPage} / >
          <Route exact path="/AllCourses" component={CoursesPage} / >
          <Route exact path="/AllProject" component={ProjectPage} / >
          <Route exact path="/AllServices" component={ServicePage} / >
          <Route exact path="/ProjectDetailsPage" component={ProjectDetailsPage} / >
          <Route exact path="/CourseDetailsPage/:IDC" component={CourseDetailsPage} / >

        </Switch>
    
               
               </Fragment>
          )
     }
}

export default AppRouter
