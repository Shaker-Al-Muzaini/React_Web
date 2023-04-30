import React, { Component, Fragment } from 'react'
import { Col, Container ,Row} from 'react-bootstrap'
import c1 from '../../asset/image/course.jpg'
import '../AllCourses/AllCourses.css'
import {Link} from 'react-router-dom'
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"
export class AllCourses extends Component {
     constructor(){
          super();
          this.state={
               data:[]
          }
     }
     componentDidMount() {
          RestApp.GetRequest(AppUrl.Courses).then(result => {
               this.setState({data: result['projects']})
          })
     }
     render() {
          const  List=this.state.data;
          const  view=List.map(List=>{
               return    <Col lg={6} md={6} sm={12} className="p-2" >

                    <Row>

                         <Col  lg={6} md={6} sm={12}>
                              <img className="courseImg" src={List.courses_image} />

                         </Col>

                         <Col lg={6} md={6} sm={12}>
                              <h4 className="text-justify serviceName">{List.short_title}</h4>
                              <p className="text-justify serviceDescription" >{List.courses_description}.</p>
                              <Link className="courseViewMore"to="/CourseDetailsPage">View Details </Link>


                         </Col>


                    </Row>

               </Col>
          });
          return (
              <Fragment>

              <Container className="text-center" >

              <h1 className=" text-center serviceMainTitle">All Courses</h1>
              <div className="bottom"  ></div>
                   <Row>
                        {view}

                   </Row>

              </Container>




              
              </Fragment>
          )
     }
}

export default AllCourses
