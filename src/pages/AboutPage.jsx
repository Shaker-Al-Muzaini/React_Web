import React, { Component ,Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

import AboutDescreption from '../components/AboutDescreption/AboutDescreption'
export class AboutPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
               <Fragment>
               <TopNavigation/>
               <TopPage pagetitle="About"/>
               <About/>
               <AboutDescreption/>



              

               <Footer/>

               
               </Fragment>
          )
     }
}

export default AboutPage
