import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
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
        "bio":"I'm a graduate student studying Computer Science with Data Analytics, teaching myself full-stack web development on the side. I was a self driving car software operations specialist and team leader in my previous role at Waymo. I have a passion for technology's ability to revolutionize the world and enrich our lives. I prioritize and cultivate a work culture of learning, flexibility, and transparency. Topics that drive me are AR/VR/XR and simulations for autonomous vehicles",
        "contactmessage":"I am looking for a part-time internship or entry-level position while studying. My schedule is flexible and I can relocate!",
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
        "skillmessage":"Here are some relevant skills I've built over 6 years of experience in academic coursework, extracurriculars, work, and personal projects. The scales measure my level of confidence in usage.",
        "education":[
          {
            "school":"University of York",
            "degree":"MSc Computer Science with Data Analytics",
            "graduated":"May 2022",
            "description":"Algorithms and Data Structures, Data Mining and Text Analysis"
          },
          {
            "school":"University of California Berkeley",
            "degree":"BA Cognitive Science",
            "graduated":"May 2017",
            "description":"Artificial Intelligence, Human-Computer Interaction, Python, Android"
          },
          {
            "school":"Diablo Valley College",
            "degree":"Transfer to UC",
            "graduated":"May 2015",
            "description":"Object Oriented Programming, C++, Java, Assembly Language, C, Linux"
          }
        ],
        "work":[
          {
            "company":"Waymo",
            "title":"Software Quality Operations Specialist via Signature Consulting",
            "years":"Feb 2018 – Dec 2019",
            "description":"As part of the Large-scale Log Simulations team, I performed safety evaluations, tested software, and filed bugs for level 4 autonomous vehicles. As a team leader and mentor, I used my data and communication skills to increase the triage rate, quality of evaluations, and accuracy of recruits to expert level. From this experience, I adapted to rapidly changing tools and workflows while improving and teaching evaluation methods at a fast-paced startup"
          },
          {
            "company":"UC Berkeley Vision Science",
            "title":"Research Assistant",
            "years":"Nov 2017 – Feb 2018",
            "description":"Among my responsibilites as a research assistant, I used python to generate images from simulated aberrations in the human eye. I also processed data for experiments using VR to treat amblyopia with visual cues."
          },
          {
            "company":"Caring Dr",
            "title":"Research Assistant",
            "years":"May 2016 – Sep 2016",
            "description":"Caring Dr is a startup that develops medical software solutions. I developed a web app in javascript for doctors to treat patients with dementia. I applied thoughtful UI principles to increase usability for mentally ill patients"
          }
        ],
        "skills":[
          {
            "name":"Python",
            "level":"95%"
          },
          {
            "name":"Javascript",
            "level":"95%"
          },
          {
            "name":"C++",
            "level":"90%"
          },
          {
            "name":"Java",
            "level":"85%"
          },
          {
            "name":"SQL",
            "level":"80%"
          },
          {
            "name":"C#",
            "level":"75%"
          },
          {
            "name":"NodeJs",
            "level":"75%"
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
            "name":"React",
            "level":"65%"
          },
          {
            "name":"MongoDB",
            "level":"60%"
          },
          {
            "name":"Android",
            "level":"55%"
          },
          {
            "name":"C",
            "level":"50%"
          }
        ]
      },
      "portfolio":{
        "projects": [
          {
            "title":"Autonomous Vehicles Large-Scale Logsim",
            "category":"Operations, development, bug-tracking, teaching, and triage with Waymo's self-driving car large scale simulation tools",
            "image":"waymo_sim.png",
            "url":"https://blog.waymo.com/2020/04/off-road-but-not-offline--simulation27.html"
          },
          {
            "title":"Cognitive Measurement",
            "category":"Experimental web application for doctors and cognitive scientists to measure and treat elderly patients with dementia and Alzheimer's",
            "image":"brain22.jpg",
            "url":"https://www.linkedin.com/company/caringdr-corporation/"
          },
          {
            "title":"Abberation Simulator",
            "category":"Research application written in python that generates simulated images based on the shape of a human eye",
            "image":"abberations visual.png",
            "url":"https://vision.berkeley.edu/research/"
          },
          {
            "title":"Budget Buddy",
            "category":"A smart shopping cart mobile app for my Human-Computer Interaction final group project",
            "image":"budget_buddy.png",
            "url":"https://github.com/cs160-berkeley/Group-17-Project"
          },
          {
            "title":"Protein Acidity Predictor",
            "category":"Machine learning model to predict protein acidity for Data Science with Python. I used scikitlearn, numpy, and pandas to preprocess, train, and present data",
            "image":"protein_graph.PNG",
            "url":"files/Predict Protein Ph with Python.pdf"
          },
          {
            "title":"Soundscape Trip",
            "category":"Hackathon web app that generates a location-based music playlist while you travel. Built with my team at CalHacks",
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
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
