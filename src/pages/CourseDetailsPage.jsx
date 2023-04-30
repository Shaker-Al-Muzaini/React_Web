import React, { Component ,Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import AppUrl from ".././AppUrl/AppUrl"
import RestApp from ".././AppUrl/RestApp"

export class CourseDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            MyCourseID:match.params.IDC,
                CourseData:[],
        }
    }
     componentDidMount(){
          window.scroll(0,0);
         RestApp.GetRequest(AppUrl.CourseDetailsPage+this.state.MyCourseID).then(result => {
             this.setState({CourseData:result['data']['Courses']})
         })
      }

     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle=" Course details " />
              <CourseDetails CourseallData={this.state.CourseData}/>
              <Footer/>
              </Fragment>
          )
     }
}

export default CourseDetailsPage
