import React, { Component ,Fragment} from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'

import Contact from '../components/Contact/Contact'


export class ContactPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
      }


     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle="Contact "/>
            

              <Contact/>



              <Footer/>
           

              
              </Fragment>
          )
     }
}

export default ContactPage
