 import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMap} from '@fortawesome/free-solid-svg-icons'
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"
export class Contact extends Component {

     constructor(props){
          super(props);
          this.state={
               name:'',
               email:'',
               message:''
          }

     }
     async handleSubmit(e) {
     //      const {name, email, message}= this.state
     // const  Contact={'Contact':{name, email, message}}
          RestApp.PostRequest(AppUrl.Contacts,JSON.stringify(this.state)).then(result=>{
          }).catch(error=>{
               alert("er");
          });
          alert("تم الإرسال بنجاح");
     }

          handleChange(e){
               this.setState({
                    [e.target.name]: e.target.value,
               });

          }





     render() {
          return (
               <Fragment>
                    <Container>
                         <Row>
                              <Col lg={6} md={6} sm={12} >
                                   <h1 className="serviceName">Quick Connect</h1>


                                   <Form>
                                        <Form.Group >
                                             <Form.Label>Your Name</Form.Label>
                                             <Form.Control name="name" value={this.state.name}
                                                           onChange={this.handleChange.bind(this)}  type="text" placeholder="Enter your Name" />

                                        </Form.Group>

                                        <Form.Group >
                                             <Form.Label>Your Email</Form.Label>
                                             <Form.Control  name="email" value={this.state.email}  onChange={this.handleChange.bind(this)}  type="email" placeholder="Enter your Email" />

                                        </Form.Group>

                                        <Form.Group >
                                             <Form.Label>Your Message</Form.Label>
                                             <Form.Control   name="message" value={this.state.message}  onChange={this.handleChange.bind(this)} as="textarea" rows={3} placeholder="Enter your Message!" />

                                        </Form.Group>

                                        <br>
                                        </br>

                                        <Button variant="primary" type="submit" onClick={this.handleSubmit.bind(this)}>
                                             Submit
                                        </Button>
                                   </Form>

                              </Col>

                              <Col lg={6} md={6} sm={12} >
                              <h1 className="serviceName">Discuss Now</h1>

                              <p className="serviceDescription" >
                              <FontAwesomeIcon icon={faMap}  />   Addres : KONYA, SELÇUKLU,FERİTPAŞA MAH,MÜFTÜ LOKMAN HEKİM SK.<br></br>
                              <FontAwesomeIcon icon={faEnvelope}  />  Email: CTP1@gmail.com. <br></br>
                              <FontAwesomeIcon icon={faPhone}  />  Phone : +90 555 016 7003.
                              
                              </p>


                              </Col>



                         </Row>

                    </Container>


               </Fragment>
          )
     }
}

export default Contact
