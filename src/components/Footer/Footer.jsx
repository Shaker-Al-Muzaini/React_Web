import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Footer/Footer.css'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import {faMap} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import '../../asset/css/Bootstrap.min.css'
import RestApp from "../../AppUrl/RestApp";
import AppUrl from "../../AppUrl/AppUrl";






 class Footer extends Component {
     constructor(){
         super();
         this.state={
             data:[]
         }
     }
     componentDidMount() {
         RestApp.GetRequest(AppUrl.Footers).then(result => {
             this.setState({
                 "address": result['Footers'][0]['address'],
                 "phone": result['Footers'][0]['phone'],
                 "email":result['Footers'][0]['email'],
                 "facebook_url":result['Footers'][0]['facebook_url'],
                 "instagram_url": result['Footers'][0]['instagram_url'],
                 "linkedin_url": result['Footers'][0]['linkedin_url'],
                 "twitter_url": result['Footers'][0]['twitter_url'],
                 "youtube_url": result['Footers'][0]['youtube_url'],

             })
         })
     }
     render() {


          return (
               <Fragment>
                    <Container fluid={true} className="footerSection"  >
                         <Row>

                              <Col lg={4} md={6} sm={12} className="text-center p-5" >
                                   <h4 className="footerName"  >Follow Us</h4>
                               <div className="social-container">

                                   <a className="social iconcolor " href={this.state.facebook_url}><FontAwesomeIcon icon={faFacebook}  size='2x' /></a>
                                   <a className="social iconcolor" href={this.state.youtube_url}><FontAwesomeIcon icon={faYoutube}   size='2x'/></a>
                                   <a className="social iconcolor" href={this.state.linkedin_url}><FontAwesomeIcon icon={faLinkedin}  size='2x'/></a>
                                   <a className="social iconcolor" href={this.state.twitter_url}><FontAwesomeIcon icon={faTwitter}   size='2x'/></a>
                                   <a className="social iconcolor" href={this.state.instagram_url}><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                                 </div>
                              </Col>


<Col lg={4} md={6} sm={12} className="p-5" >
     <h4 className="footerName text-center" >Address</h4>

     <p className="footerDescription" >

     <FontAwesomeIcon icon={faMap}  /> {this.state.address}.<br></br>

     <FontAwesomeIcon icon={faEnvelope}  />{this.state.email} <br></br>

     <FontAwesomeIcon icon={faPhone}  />  Phone : {this.state.phone}
     
     
     </p>

</Col>
                              <Col lg={4} md={6} sm={12} className="p-5 text-justify "   >
                                   <h4 className="footerName  ">Information</h4>

                                   <a className="footerLink" href="">About Me</a> <br></br>
                                   <a className="footerLink" href="">Company Profile</a> <br></br>
                                   <a className="footerLink" href="">Contact Us</a> <br></br>



                              </Col>



                         </Row>




                    </Container>
               </Fragment>

          )
     }
}
export default Footer
