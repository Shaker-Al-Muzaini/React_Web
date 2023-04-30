import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import '../Videos/Videos.css'
import '../../asset/css/Bootstrap.min.css'
import "video-react/dist/video-react.css"
import ReactHtmlParser from 'react-html-parser'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react';
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"




class Videos extends Component {

     constructor() {
          super();
          this.state = {
               show: false,
              video_description:'',
              video_url:''

          }
     }
    componentDidMount() {
        RestApp.GetRequest(AppUrl.Homes).then(result => {
            this.setState({

                "video_description": result['Home'][0]['video_description'],
                "video_url": result['Home'][0]['video_url'],
            })
        })
    }

     handleShow = () => this.setState({ show: true }); //show : false --->true
     handleClose = () => this.setState({ show: false }); //show : true --->false
    

     render() {
          return (
               <Fragment>

                    <Container>
                         <h1 className="serviceMainTitle  text-center"> MY Video</h1>
                         <div className="bottom"  ></div>

                         <Row>
                              <Col lg={6} md={12} sm={12} className="videText">

                                   <p >{ReactHtmlParser(this.state.video_description)}.<br></br><br></br>

                                   </p>

                              </Col>

                              <Col lg={6} md={12} sm={12} className="videoCard text-center">

                                   <FontAwesomeIcon onClick={this.handleShow} icon={faVideoSlash} className="iconProject " />

                              </Col>


                         </Row>

                    </Container>


                    <Modal size="lg" show={this.state.show} onHide={this.handleClose}>

                         <Modal.Body>
                        
                       <Modal.Body>
                       <Player src={this.state.video_url}>
                       <BigPlayButton position="center" />
                     </Player>
                       
                       </Modal.Body>
                        </Modal.Body>
                         <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>
                                   Close
                              </Button>

                         </Modal.Footer>
                    </Modal>


               </Fragment>
          )
     }
}

export default Videos
