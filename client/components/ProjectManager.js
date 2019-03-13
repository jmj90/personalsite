import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from './navbar'
import { Tab, Form, Button } from 'semantic-ui-react'
import { addProject, updateProject } from '../store'


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
    this.state = {
        id: '',
        title: '',
        date: '',
        imgUrl: '',
        deployLink: '',
        githubLink: '',
        videoLink: '',
        description: '',
        roles: [],
        tech: []
    }
    this.createProject = this.createProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  projectStateSet(project) {
    this.setState({
      id: project.id,
      title: project.title,
      date: project.date,
      imgUrl: project.imgUrl,
      deployLink: project.deployLink,
      githubLink: project.githubLink,
      videoLink: project.videoLink,
      description: project.description,
      roles: project.roles,
      tech: project.tech
    })
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


    newProjectForm() {
      const { product } = this.props
      return (
        <div>
          <h3>NEW PROJECT</h3>
          <Form id="adminForm" onSubmit={(event) => this.createProject(event, product)} >
            <label> Title: </label>
            <input name="title" type="text" required placeholder="Product title" />
            <label> Date: </label>
            <input name="date" type="text" placeholder="date" />
            <label> Description: </label>
            <textarea name="desc" type="text" form="adminForm" placeholder="Enter description here..." />
            <label> Image Url: </label>
            <input name="imgUrl" type="text" defaultValue="" />
            <label> deployLink: </label>
            <input name="deployLink" type="text" placeholder="deployLink" />
            <label> githubLink: </label>
            <input name="githubLink" type="text" placeholder="githubLink" />
            <label> videoLink: </label>
            <input name="videoLink" type="text" placeholder="videoLink" />
            <label> roles: </label>
            <input name="roles" type="text" placeholder="roles" />
            <label> tech: </label>
            <input name="tech" type="text" placeholder="tech" />
            <br />
            <Button type="submit" className="submitButton" value="Submit"> Add Product </Button>
          </Form>
        </div>
      )
    }

    editProjectForm() {
      const { product } = this.props
      return (
        <div>
          <h3>EDIT PROJECT: {this.state.title}</h3>
          <Form id="adminForm" onSubmit={(event) => this.updateProject(event, product)} >
            <label> Title: </label>
            <input name="title" type="text" placeholder={this.state.title} value={this.state.title} onChange={(evt) => this.changeHandler(evt)} />
            <label> Date: </label>
            <input name="date" type="text" placeholder={this.state.date} value={this.state.date} onChange={(evt) => this.changeHandler(evt)} />
            <label> Description: </label>
            <textarea name="description" type="text" placeholder={this.state.description} value={this.state.description} onChange={(evt) => this.changeHandler(evt)} />
            <label> Image Url: </label>
            <input name="imgUrl" type="text" placeholder={this.state.imgUrl} value={this.state.imgUrl} onChange={(evt) => this.changeHandler(evt)} />
            <label> deployLink: </label>
            <input name="deployLink" type="text" placeholder={this.state.deployLink} value={this.state.deployLink} onChange={(evt) => this.changeHandler(evt)} />
            <label> githubLink: </label>
            <input name="githubLink" type="text" placeholder={this.state.githubLink} value={this.state.githubLink} onChange={(evt) => this.changeHandler(evt)} />
            <label> videoLink: </label>
            <input name="videoLink" type="text" placeholder={this.state.videoLink} value={this.state.videoLink} onChange={(evt) => this.changeHandler(evt)} />
            <label> roles: </label>
            <input name="roles" type="text" placeholder={this.state.roles} value={this.state.roles} onChange={(evt) => this.changeHandler(evt)} />
            <label> tech: </label>
            <input name="tech" type="text" placeholder={this.state.tech} value={this.state.tech} onChange={(evt) => this.changeHandler(evt)} />
            <br />
            <Button type="submit" className="submitButton" value="Submit"> Update Product </Button>
          </Form>
        </div>
      )
    }

  render(){
    const { projects } = this.props
    const panes = [
      { menuItem: 'Add Project ', render: () => <Tab.Pane>{this.newProjectForm()}</Tab.Pane> },
      { menuItem: 'Edit Project', render: () => <Tab.Pane>{this.editProjectForm()}</Tab.Pane> },
    ]
    return (
      <div className="viewport-projects">
        <div id="title"> Project Manager </div>
        <div className="project-list">
          { projects.map(project =>
            <div className="pm-list-item" key={project.id} onClick={() => this.projectStateSet(project)}>{project.title}</div>
          )}
        </div>
        <Tab className="project-form" panes={panes} />
        <Navbar />
      </div>
    )
  }

  createProject(event, product) {
    event.preventDefault();
    let evt = event.target
    let roleValues = evt.roles.value.split(',')
    let techValues = evt.tech.value.split(',')
    const newProject = Object.assign({}, product,
      {
        title: evt.title.value,
        date: evt.date.value,
        description: evt.desc.value,
        imgUrl: evt.imgUrl.value,
        deployLink: evt.deployLink.value,
        githubLink: evt.githubLink.value,
        videoLink: evt.videoLink.value,
        roles: roleValues,
        tech: techValues
      }
    )
    this.props.addProject(newProject);
  }

  updateProject(event, product) {
    event.preventDefault();
    let evt = event.target
    let roleValues = evt.roles.value.split(',')
    let techValues = evt.tech.value.split(',')
    let videoLink;
    let githubLink;
    let deployLink;
    if (evt.videoLink.value === '') {
      videoLink = null
    }
    if (evt.githubLink.value === '') {
      githubLink = null
    }
    if (evt.deployLink.value === '') {
      deployLink = null
    }
    const updatedProject = Object.assign({}, product,
      {
        id: this.state.id,
        title: evt.title.value,
        date: evt.date.value,
        description: evt.description.value,
        imgUrl: evt.imgUrl.value,
        deployLink: deployLink,
        githubLink: githubLink,
        videoLink: videoLink,
        roles: roleValues,
        tech: techValues
      }
    )
    this.props.updateProject(updatedProject);
  }

}


const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = { addProject, updateProject };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManager);
