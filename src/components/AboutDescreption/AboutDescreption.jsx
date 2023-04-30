import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {init} from "ityped";
import RestApp from "../../AppUrl/RestApp";
import AppUrl from "../../AppUrl/AppUrl";
import ReactHtmlParser from 'react-html-parser'

export class AboutDescreption extends Component {

     constructor(){
          super();
          this.state={
               "about":"",
               "our_mission":"",
               "our_vision":"",
          }
     }


     componentDidMount() {
          RestApp.GetRequest(AppUrl.Abouts).then(result => {
               this.setState({
                    "about": result['About'][0]['about'],
                    "our_mission": result['About'][0]['our_mission'],
                    "our_vision": result['About'][0]['our_vision'],
               })
          })
     }
     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col sm={12} lg={12} md={12}>
                                   <h1 >Who I Am </h1>
                                   <hr />
                                   <p>
                                   </p>
                                   {ReactHtmlParser(this.state.about)}
                                   <br></br>


                                   <h1 >Our Mission </h1>
                                   <hr />
                                   <p>
                                        {ReactHtmlParser(this.state.our_mission)}
                                   </p>

                                   <h1 >Our Vision </h1>
                                   <hr />
                                   <p>
                                        {ReactHtmlParser(this.state.our_vision)}
                                   </p>

                              </Col>

                         </Row>
                    </Container>



               </Fragment>

          )
     }
}

export default AboutDescreption
