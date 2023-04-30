import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import AppUrl from '../../AppUrl/AppUrl'
import RestApp from '../../AppUrl/RestApp'



class TopBanner extends Component {
     constructor(){
          super();
          this.state={
               title:"",
               subtitle:"",
               // tech_description:"",
               // total_students:"",
               // total_course:"",
               // total_review:"",
               // video_description:"",
               // video_url:"",

          }
     }
     componentDidMount(){
          RestApp.GetRequest(AppUrl.Homes).then(result=>{
               this.setState({title:result['Home'][0]['home_title'],
                    subtitle:result['Home'][0]['home_subtitle'],
                    // tech_description:result['Home'][0]['tech_description'],
                    // total_students:result['Home'][0]['total_students'],
                    // total_course:result['Home'][0]['total_course'],
                    // total_review:result['Home'][0]['total_review'],
                    // video_description:result['Home'][0]['video_description'],
                    // video_url:result['Home'][0]['video_url']
               })
          });
     }




     render() {
          return (
               <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0 "  >
                         <div className="topBannerOverly">
                              <Container className="topContent"  >
                                   <Row>
                                        <Col className="text-center"  >
                                             <h1 className="topTitle" >  {this.state.title}  </h1>
                                             <h4 className="topSubTitle"> {this.state.subtitle}</h4>
                                             <Button variant="primary">More</Button>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </Container>
               </Fragment>
          )
     }
}
export default TopBanner
