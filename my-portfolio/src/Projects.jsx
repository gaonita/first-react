import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from "./ProjectCard";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[]
        }
    }

    componentDidMount() {
        this.readProjects()
    }

    async readProjects() {
        let projects = await axios.get('./data/projects.json')
        this.setState({ projects: projects.data })
    }

    render() {
        let projectList = this.state.projects.map(project => {
            return (
                <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 inline-block">
                    <ProjectCard project={project} />
                </div>
            )
        })
        return (
            <div>
                <h1 className="content-text">My Projects</h1>
                <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                {projectList}
            </div>
        )
    }
}

export default Projects