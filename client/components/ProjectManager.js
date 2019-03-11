import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from './navbar'
import { Tab, Form, Button } from 'semantic-ui-react'
import { addProject } from '../store'


// TODO: edit forms
/*
  - use event targeting to grab selected project
  - use that value to set a local state object that can populate the edit Form
  - bring in update project thunk from store
  - update state on enter
*/

class ProjectManager extends Component {

  constructor(props){
    super(props)
    this.createProject = this.createProject.bind(this);
  }

  render(){
    const { projects } = this.props
    const panes = [
      { menuItem: 'Add Project', render: () => <Tab.Pane>{this.newProjectForm()}</Tab.Pane> },
      { menuItem: 'Edit Project', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    ]
    return (
      <div className="viewport">
        <div id="title"> Project Manager </div>
        <div className="project-list">
          { projects.map(project =>
            <div className="pm-list-item" key={project.id}>{project.title}</div>
          )}
        </div>
        <Tab className="project-form" panes={panes} />
          <div className="Nav-Bottom">
          <Navbar />
        </div>
        <div id="copy">© 2017-2018 Jake Johnson</div>
      </div>
    )
  }

  createProject(event, product) {
    event.preventDefault();
    let evt = event.target
    const newProject = Object.assign({}, product,
      {
        title: evt.title.value,
        date: evt.date.value,
        description: evt.desc.value,
        imgUrl: evt.imgUrl.value,
        deployLink: evt.deployLink.value,
        githubLink: evt.githubLink.value,
        videoLink: evt.videoLink.value
      }
    )
    console.log(newProject)
    this.props.addProject(newProject);
  }

  newProjectForm() {
    const { product } = this.props
    return (
      <div>
        <Form id="adminForm" onSubmit={(event) => this.createProject(event, product)}>
          <label> Title: </label>
          <input name="title" type="text" required placeholder="Product title" />
          <label> Date: </label>
          <input name="date" type="text" required placeholder="date" />
          <label> Description: </label>
          <textarea name="desc" type="text" form="adminForm" placeholder="Enter description here..." />
          <label> Image Url: </label>
          <input name="imgUrl" type="text" defaultValue="/images/projects/defaultphoto.png" />
          <label> deployLink: </label>
          <input name="deployLink" type="text" placeholder="deployLink" />
          <label> githubLink: </label>
          <input name="githubLink" type="text" placeholder="githubLink" />
          <label> videoLink: </label>
          <input name="videoLink" type="text" placeholder="videoLink" />
          <div>
            <Button type="submit" id="submitButton" value="Submit"> Add Product </Button>
          </div>
        </Form>
      </div>
    )
  }

}


const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = { addProject };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManager);
