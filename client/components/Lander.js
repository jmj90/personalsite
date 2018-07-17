import React, { Component } from 'react'
import history from '../history'

export default class Lander extends Component {


  mouseOverEnter(evt) {
    let color = evt.target.name
    let title = evt.target.title
    document.getElementById('name').innerHTML = `${title}`
    document.getElementById('name').classList.add('active')
    document.body.style.backgroundColor = `${color}`
  }

  mouseOverLeave() {
    document.getElementById('name').innerHTML = "Jake Johnson"
    document.getElementById('name').classList.remove('active')
    document.body.style.backgroundColor = "white"
  }

  mouseOverImageEnter() {
    document.getElementById('profilepic').classList.add('hover')
    document.getElementById('aboutNav').classList.add('active')
  }

  mouseOverImageLeave() {
    if(document.getElementById('aboutNav').innerHTML !== 'collapse') {
      document.getElementById('profilepic').classList.remove('hover')
      document.getElementById('aboutNav').classList.remove('active')
    }
  }

  expandAbout(){
    if(document.getElementById('aboutNav').innerHTML === 'collapse') {
      document.getElementById('about-container').classList.remove('active')
      document.getElementById('aboutNav').innerHTML = "about."
    } else {
      document.getElementById('about-container').classList.add('active')
      document.getElementById('aboutNav').innerHTML = "collapse"
    }
  }


  render() {
    return (
      <div className="viewport">
        <div id="name-tag">
          <div id="name"> Jake Johnson
            <div id="nameline" />
           </div>
          <div id="tag-container">
            <div id="occupation"> Software Engineer. Creative Professional.  </div>
            <div id="links" onMouseLeave={this.mouseOverLeave}>
              <a href="https://github.com/jmj90" target="_blank">
                <img
                  className="icons"
                  name="#751C7C"
                  title="github"
                  onMouseEnter={this.mouseOverEnter}
                  src="/images/icons/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/jmj90/" target="_blank">
                <img
                  className="icons"
                  name="#2F77B0"
                  title="linkedin"
                  onMouseEnter={this.mouseOverEnter}
                  src="/images/icons/linked.png" />
              </a>
              <a href="https://www.behance.net/jake_johnson" target="_blank">
                <img
                  className="icons"
                  name="#000"
                  title="behance"
                  onMouseEnter={this.mouseOverEnter}
                  src="/images/icons/behance.svg" />
              </a>
              <a href="https://twitter.com/jakeferdjohnson" target="_blank">
                <img
                  className="icons"
                  name="#52B6E6"
                  title="twitter"
                  onMouseEnter={this.mouseOverEnter}
                  src="/images/icons/twitter.png" />
              </a>
            </div>
          </div>
          <div id="about-container">
            <div id="aboutText">
              <div id="aboutme">about me</div>
              <div className="divider" />
              <img id="headshot" src="/images/headshot.png" />
              Writing software may sound like a tedious process to some, but for a creative professional now working in technology I find great joy seeing code come to life.
              <br />
              <br />
              My past experience working in the music industry that allowed me to push boundaries and constantly think outside of the box has translated into always wanting to innovate the way we use our technology. Asking "What if" questions to stretch the imagination and reach new grounds is always something I try to achieve with my projects. I constantly have an eye out for emerging forward thinking technologies that make the user experience more enjoyable.
              <br />
              <br />
              While I have experience working in a Full Stack setting, you'll find me enjoying my time in the Front End. Being able to implement, create, and design new features is something I genuinely spend my free time doing. My knowledge of the Adobe Creative Suite (Photoshop, Illustrator, Light Room) comes in handy when creating mock designs or working closely with designers. Being able to utilize the tools and methods designers use has helped me understand creative direction in finer detail.
              <br />
              <br />
              I am recent "Fullstack Academy of Code" graduate now working in software development in the Chicagoland area.
              <div className="divider" />
          </div>
        </div>
          <div id="picContainer">
            <div id="aboutNav">
              about.
            </div>
            <img
              id="profilepic"
              onMouseEnter={this.mouseOverImageEnter}
              onMouseLeave={this.mouseOverImageLeave}
              onClick={this.expandAbout}
              src="/images/headerpic.jpg" />
          </div>
        </div>
        <div id="copy">© 2017-2018 Jake Johnson</div>
    </div>
    )
  }
}
