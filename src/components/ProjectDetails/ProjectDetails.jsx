import React, { Component, Fragment } from 'react'

import { Col, Container, Row, Button } from 'react-bootstrap'

import g from '../../asset/image/projectDetails.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


export class ProjectDetails extends Component {
     render() {
          return (
             <Fragment>
             <Container className="mt-5">
             <Row>
                  <Col lg={6} md={6} sm={12} className="mt-5">

                       <img src={g} />

                  </Col>


                  <Col lg={6} md={6} sm={12} className="mt-5">
                       <div >
                            <h1> project name </h1>
                            <p >
                                short project details
                            </p>

                            <p>
                                 <FontAwesomeIcon icon={faCheckSquare} />
                                Long project details

                            </p>

                            <Button variant="info" href="#"> Live Preview </Button>

                       </div>

                  </Col>


             </Row>
        </Container>

             
             
             
             </Fragment>
          )
     }
}

export default ProjectDetails
