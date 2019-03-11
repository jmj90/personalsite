import React, { Component } from 'react'
import history from '../history'

export default class Contact extends Component {

  componentDidMount() {
    if (history.location.pathname){
      this.transitionLoad()
      // window.addEventListener('load', this.transitionLoad, false)
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('load', this.transitionLoad)
  }

  transitionLoad() {
    let title = document.getElementById('title');
    let contact = document.getElementById('contact-container');

    if (title.classList.contains('hidden')) {
      setTimeout(function() {
        title.className = '';
      }, 100);
    }

    if (contact.classList.contains('hidden')) {
      setTimeout(function() {
        contact.className = '';
      }, 300);
    }
  }

  render(){
    return (
      <div className="viewport">
        <div id="title" className='hidden'> Contact </div>
        <div
          id="contact-container"
          className="hidden"
          onClick={() => (window.location.href = 'mailto:jakej.dev@gmail.com')}
          >
          <img
            className="icons"
            name="#D8503F"
            title="contact"
            src="/images/icons/gmail.png" />
          &nbsp;&nbsp;jakej.dev@gmail.com
        </div>
          <div className="Nav-Item" onClick={() => history.push('/')}> Home </div>
        <div id="copy">© 2017-2018 Jake Johnson</div>
      </div>
    )
  }
}
