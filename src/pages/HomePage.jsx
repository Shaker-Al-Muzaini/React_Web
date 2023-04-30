import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import Footer from '../components/Footer/Footer';
import Chart from '../components/Chart/Chart';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Videos from '../components/Videos/Videos';
import Team from '../components/Team/Team'
import About from '../components/About/About'
import Summary from '../components/Summary/Summary'

export class HomePage extends Component {

     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
               <Fragment>

               <TopNavigation />
               <TopBanner />  
               <Courses/>
               <RecentProject />
               <About/>
               <Team/>
               <Videos/>
               <Chart />  
               <Services />

               <Summary/>
               <Footer />

               
               
               </Fragment>
          )
     }
}

export default HomePage
