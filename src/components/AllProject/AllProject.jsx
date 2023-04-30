import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import '../AllProject/AllProject.css'
import P1 from'../../asset/image/clinic.jpg'
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"
import {Link} from "react-router-dom";

export class AllProject extends Component {
     constructor(){
          super();
          this.state={
               data:[]
          }
     }
     componentDidMount() {
          RestApp.GetRequest(AppUrl.Projects).then(result => {
               this.setState({data: result['projects']})
          })
     }
     render() {
          const  List=this.state.data;
          const  view=List.map(List=>{
               return     <Col lg={4} md={6} sm={12}>

                    <Card className="projectCard" >
                         <Card.Img variant="top" src={List.project_image_1} />
                         <Card.Body>
                              <Card.Title className="projectName"  >{List.project_name}</Card.Title>
                              <Card.Text className="projectDescription">
                                   {List.project_description}.
                              </Card.Text>
                              <Button variant="primary">More</Button>
                         </Card.Body>
                    </Card>

               </Col>
          });

          return (
               <Fragment>

               <Container className="text-center">
               <h1 className=" text-center serviceMainTitle"> All Project</h1>
               <div className="bottom"  ></div>


               <Row>
                    {view}

               </Row>

          </Container>
               
               
               
               </Fragment>
          )
     }
}

export default AllProject
