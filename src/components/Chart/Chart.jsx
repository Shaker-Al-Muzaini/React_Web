import React, { Component, Fragment  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Chart/Chart.css'
import ReactHtmlParser from 'react-html-parser'
import '../../asset/css/Bootstrap.min.css'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"

 class Chart extends Component {

      constructor(){
          super();
          this.state={
               data:[],
              tech_description:''
          }
     }

      componentDidMount(){
           RestApp.GetRequest(AppUrl.Charts).then(result=>{
                this.setState({data:result['Chart']})
           })
          RestApp.GetRequest(AppUrl.Homes).then(result=>{
              this.setState({

                  tech_description:result['Home'][0]['tech_description']})
          })

      }




      render() {

          return (
               <Fragment>
                    <Container >
                         <h1 className=" text-center serviceMainTitle"> TECHNOLOGY USED</h1>
                         <div className="bottom"  ></div>
                         <Row>
                              <Col style={{ width:'50%', height:'300px' }}  lg={6} md={12} sm={12} >
                                   <h4 className="text-center">Experinces</h4>

                                   <ResponsiveContainer >
                                   <BarChart width={100} height={20} data={this.state.data}>

                                   <XAxis dataKey="x_data" />
                                   <Tooltip />

                                    <Bar dataKey="y_data" fill="#8884d8" />
                                   </BarChart>
                                   </ResponsiveContainer>
                                
                                  
                              </Col>
                              <Col lg={6} md={12} sm={12} >
                                   <p className=" text-justify  chartDescription  ">
                                       {ReactHtmlParser(this.state.tech_description)}

                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default Chart
