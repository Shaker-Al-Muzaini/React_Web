import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'

export class ServicePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
            <Fragment>
            <TopNavigation/>
               <TopPage pagetitle="Services"/>
               <Services/>

               <Contact/>



               <Footer/>
            
            
            </Fragment>
          )
     }
}

export default ServicePage
