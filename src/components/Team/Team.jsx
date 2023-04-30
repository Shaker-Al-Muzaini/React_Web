import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team from '../../asset/image/team.jpg'
import '../Team/Team.css'
import '../../asset/css/Bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AppUrl from "../../AppUrl/AppUrl"
import RestApp from "../../AppUrl/RestApp"


class Team extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        RestApp.GetRequest(AppUrl.Teams).then(result => {
            this.setState({data: result['Team']})
        })
    }
    render() {

        const settings = {
            dots: true,
            
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll:2,

            vertical:true,
            verticalSwiping:true,



        };
        const  List=this.state.data;
        const  view=List.map(List=>{
            return  <div>


                <Row className="text-center justify-content-center" >
                    <Col lg={6} md={6} sm={12}  >

                        <img className="circleImg" src={List.team_img} />
                        <h4 className="Name" >{List.team_title}</h4>
                        <p className="Description">
                            {List.team_description}
                        </p>


                    </Col>


                </Row>

            </div>
        });



        return (
            <Fragment>

                <Container fluid={true} className="Bgcolor text-center" >
                    <h1 className="serviceMainTitle Name text-center p-2"> Our Team</h1>
                    <div className="bottom1 "></div>

                    <Slider {...settings}>
                        {view}

                    </Slider>

                </Container>


            </Fragment>

        )
    }
}

export default Team
