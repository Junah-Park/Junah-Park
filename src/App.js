import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    let json = {
      "main": {
        "name":"Junah Park",
        "occupation":"Student",
        "description":"",
        "image":"profilepic.jpg",
        "bio":"I'm a M.S Computer Science with Data Analytics graduate student, B.A Cognitive Science, seeking growth opportunites with cutting-edge projects. I was a Software Quality Operations Specialist team lead for autonomous vehicle Large-scale Log Simulations at Waymo. I am passionate about technology; it revolutionizes the world and saves lives. I prioritize and cultivate a work culture of learning, flexibility, and honesty. Topics that drive me include simulations for self-driving cars, Augmented/Mixed Reality and Artificial Intelligence.",
        "contactmessage":"I am looking for an internship or entry-level position while studying. My schedule is flexible and I can relocate!",
        "email": "park.junah95@gmail.com",
        "phone": "(408)-483-1523",
        "address":{
          "street":"3234 Monika Ln",
          "city":"Hayward",
          "state":"CA",
          "zip": "94541"
        },
        "website": "https://junah-park.github.io",
        "resumedownload":"Junah Park Resume.pdf",
        "social":[
          {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/junah-park-717b1882/",
            "className":"fa fa-linkedin"
          },
          {
            "name":"github",
            "url":"https://github.com/Junah-Park",
            "className":"fa fa-github"
          }
        ]
      },
      "resume":{
        "skillmessage":"Here are some technical skills I've built over 5 years of coding. The bars are a measure of confidence in use.",
        "education":[
          {
            "school":"University of York",
            "degree":"MSc Computer Science with Data Analytics",
            "graduated":"May 2022",
            "description":"Algorithms and Data Structures, Data Mining and Text Analysis, Advanced Programming, Artificial Intelligence and Machine Learning"
          },
          {
            "school":"University of California Berkeley",
            "degree":"BA Cognitive Science",
            "graduated":"May 2017",
            "description":"Human-Computer Interaction, Introduction to Artificial Intelligence"
          },
          {
            "school":"Diablo Valley College",
            "degree":"Transfer to UC",
            "graduated":"May 2015",
            "description":"Object-Oriented Programming, Program Design and Data Structures, Assembly Language, Linux/Unix, Club Activities: Coding Competitions and Hackathons"
          }
        ],
        "work":[
          {
            "company":"Waymo",
            "title":"Software Quality Operations Specialist via Signature Consulting",
            "years":"Feb 2018 – Dec 2019",
            "description":"As part of the Large-scale Log Simulations team, I performed software quality evaluations for level 4 autonomous vehicles. As a team leader and mentor, I utilized system data and communication skills to increase the evaluation quality of recruits to expert level. I adapted to a fast-paced startup environment, contributing to critical workflow improvements while communicating across teams."
          },
          {
            "company":"UC Berkeley Vision Science",
            "title":"Research Assistant",
            "years":"Nov 2017 – Feb 2018",
            "description":"I developed a Python script to simulate images from a human eye with varying degrees of astigmatism. I assisted in data processing for experiments using visual cues with Virtual Reality to treat amblyopia. "
          },
          {
            "company":"Caring Dr",
            "title":"Research Assistant",
            "years":"May 2016 – Sep 2016",
            "description":"Caring Dr is a startup that develops medical software solutions. I developed a web app in Javascript for doctors to treat patients with dementia. I applied thoughtful UI principles to increase usability for mentally ill patients."
          }
        ],
        "skills":[
          {
            "name":"Python with Data Science",
            "level":"95%"
          },
          {
            "name":"Javascript",
            "level":"95%"
          },
          {
            "name":"Full Stack (MERN)",
            "level":"85%"
          },
          {
            "name":"Java and Android",
            "level":"80%"
          },
          {
            "name":"SQL",
            "level":"70%"
          },
          {
            "name":"C++",
            "level":"80%"
          },
          {
            "name":"Linux",
            "level":"75%"
          },
          {
            "name":"Git",
            "level":"70%"
          },
          {
            "name":"php",
            "level":"40%"
          },
          {
            "name":"C# and Unity",
            "level":"75%"
          }
        ]
      },
      "portfolio":{
        "projects": [
          {
            "title":"Alc (external link)",
            "category":"A full-stack application built with MongoDB, Express, React, and Node.js. Utilizes a RESTful API to post and get mixed drinks for users.",
            "image":"alc.png",
            "url":"https://alc-prototype.herokuapp.com/register"
          },     
          {
            "title":"Movie Recommender (pdf)",
            "category":"A movie recommender system and genre classifier. Logistic regression and binary variance model built in Jupyter Notebook",
            "image":"recommender.PNG",
            "url":"files/Movie Recommendation.pdf"
          },
          {
            "title":"Protein Acidity Predictor (pdf)",
            "category":"Machine learning model to predict protein acidity for Data Science with Python scikitlearn, numpy, and pandas",
            "image":"protein_graph.PNG",
            "url":"files/Predict Protein Ph with Python.pdf"
          },
          {
            "title":"Budget Buddy (github)",
            "category":"UI/UX project for Human-Computer Interaction. This is a smart shopping cart and mobile app designed for shoppers on a budget.",
            "image":"budget_buddy.png",
            "url":"https://github.com/cs160-berkeley/Group-17-Project"
          }
        ],
        "projects2": [        
          {
            "title": "Blossoms Warehouse",
            "category": "MERN ecommerce web application inspired by local dress business Blossoms Bridal and Formal",
            "image" : "goldenGate.jpg",
            "url": "https://blossomswarehouseclient.herokuapp.com"
          }
        ],
        "projects3": {
          "title": "Scribe",
          "category": "An Augmented/Mixed Reality application built on ARFoundation for Unity. Create a virtual note to display in your home or office and save it on the cloud. This project features a php backend for storing and retrieving user data and a MySQL database hosted on Heroku. The current build runs on Android 7.0 or higher.",
          "video":"scribe.mp4",
          "url": "files/ScribeApp.apk"
        },
        "projects4": [
          {
            "title":"Autonomous Vehicles Large-Scale Logsim",
            "category":"Operations, development, bug-tracking, teaching, and triage with Waymo's self-driving car large scale simulation tools",
            "image":"waymo_sim.png",
            "url":"https://blog.waymo.com/2020/04/off-road-but-not-offline--simulation27.html"
          },   
          {
            "title":"Abberation Simulator",
            "category":"Research application written in python that generates simulated images based on the shape of a human eye",
            "image":"abberations visual.png",
            "url":"https://vision.berkeley.edu/research/"
          },  
          {
            "title":"Dementia Treatment",
            "category":"Experimental web application for doctors and cognitive scientists to treat elderly patients with dementia and Alzheimer's",
            "image":"brain22.jpg",
            "url":"https://www.linkedin.com/company/caringdr-corporation/"
          },  
          {
            "title":"Soundscape Trip",
            "category":"Hackathon web app that generates a location-based music playlist while you travel. Built at CalHacks",
            "image":"goldenGate.jpg",
            "url":"https://github.com/KevinBrown/Soundscape-Trip"
          }
        ]
      },
      "testimonials":{
        "testimonials":[
          {
            "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user":"Kareem Abdul Jabbar"
          },
          {
            "text":"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
            "user":"Steve Wozniak... impersonator"
          }
        ]
      }
    }
    
    // $.ajax({
    //   url:'resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });

    // try {
    //   $.getJSON("resumeData.json", { callback: "?" }, function(json) {
    //     this.setState({resumeData: json});
    //   }.bind(this));
    // }
    // catch(err) {
    //   console.log(err);
    //   alert(err);
    // }

    this.setState({resumeData: json});

  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
