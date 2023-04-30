import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import '../RecentProject/RecentProject.css'

import '../../asset/css/Bootstrap.min.css'

import P1 from'../../asset/image/clinic.jpg'
import{Link} from 'react-router-dom'
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"





 class RecentProject extends Component {
      constructor(){
           super();
           this.state={
                data:[]
           }
      }
      componentDidMount() {
           RestApp.GetRequest(AppUrl.th_project).then(result => {
                this.setState({data: result})
           })
      }
     render() {
          const  List=this.state.data;
          const  view=List.map(List=>{
               return    <Col lg={4} md={6} sm={12}>

                    <Card className="projectCard" >
                         <Card.Img variant="top" src={List.project_image_1} />
                         <Card.Body>
                              <Card.Title className="projectName"  >{List.project_name}</Card.Title>
                              <Card.Text className="projectDescription">
                                   {List.project_description}..
                              </Card.Text>
                              <Link to="/ProjectDetailsPage">    <Button variant="primary">More </Button> </Link>
                         </Card.Body>
                    </Card>

               </Col>
          });
          return (
               <Fragment>
                    <Container className="text-center">
                         <h1 className=" text-center serviceMainTitle"> Recent Project</h1>
                         <div className="bottom"  ></div>


                         <Row>
                              {view}

                            
                         </Row>

                    </Container>



               </Fragment>
          )
     }
}

export default RecentProject
