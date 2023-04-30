import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import Footer from '../components/Footer/Footer'
import TopPage from './TopPage'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

export class ProjectDetailsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle="Project details" />
              
              <ProjectDetails/>


              <Footer/>
              
              </Fragment>
          )
     }
}

export default ProjectDetailsPage
