import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">   
          <a href={projects.url} title={projects.title}>
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">                 
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      });
      var projects2 = this.props.data.projects2.map(function(projects2){
        var projectImage = 'images/portfolio/'+projects2.image;
        return <div key={projects2.title} className="columns portfolio-item">  
          <a href={projects2.url} title={projects2.title}>
            <div className="item-wrap">
              <img alt={projects2.title} src={projectImage} />
              <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects2.title}</h5>
                    <p>{projects2.category}</p>
                  </div>
                </div>
            </div>
          </a>
        </div>
      });
      var projects3 = this.props.data.projects3
      var projects3 =<div>
        <div className="columns portfolio-item">
          <h5>{projects3.title}  <img src="images/portfolio/scribe.png" width="35" height="35"></img></h5>
          <p>{projects3.category}</p>
          <div>
            <a href={projects3.url} className="button" download="ScribeApp.apk"><i className="fa fa-download"></i> Download apk </a>
          </div>
          <div>
            <a href="https://github.com/Junah-Park/Scribe_XR_Scripts"><img src="images/portfolio/github.png" alt="Github" width="35" height="35"></img> Unity scripts </a>
          </div>
          <div>
            <a href="https://github.com/Junah-Park/lit-citadel"><img src="images/portfolio/github.png" alt="Github" width="35" height="35"></img> Server scripts </a>
          </div>
        </div>
        <div className="columns portfolio-item">
        <video width="480" height="480" controls>
          <source src='images/portfolio/scribe.mp4' type="video/mp4"></source>
          Your browser does not support the video tag.
        </video> 
        </div>
      </div>
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

              <h1>Projects</h1>
              <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
                {projects3}
              </div>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                  {projects}
              </div>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
                  {projects2}
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
