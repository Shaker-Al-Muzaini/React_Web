import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SerImg from '../../asset/image/Services.jpg'

import '../Services/Services.css'
import '../../asset/css/Bootstrap.min.css'
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"



 class Services extends Component {

      constructor(){
           super();
           this.state={
                data:[]
           }
      }
      componentDidMount() {
           RestApp.GetRequest(AppUrl.Services).then(result => {
                this.setState({data: result})
           })
      }


     render() {

          const  List=this.state.data;
          const  view=List.map(List=>{
               return    <Col lg={4} md={6} sm={12} >
                    <div className="serviceCard  text-center ">

                         <img src={List.services_image} className="ServicesIcon" />
                         <h4 className="serviceName"  >{List.services_name}</h4>
                         <p className="serviceDescription">{List.services_description}..</p>

                    </div>

               </Col>
          });
          return (
               <Fragment>

                    <Container className="text-center">

                         <h1 className="serviceMainTitle"> MY SERVICES</h1>
                         <div className="bottom"  ></div>


                         <Row>
                              {view}

                         </Row>

                    </Container>
               </Fragment>
          )
     }
}

export default Services
