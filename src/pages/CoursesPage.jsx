import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import AllCourses from '../components/AllCourses/AllCourses'
export class CoursesPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle="All Courses "/>

              <AllCourses/>
            
              <Footer/>

              
              </Fragment>
          )
     }
}

export default CoursesPage
