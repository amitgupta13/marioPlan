import React, {Component} from 'react';
import Notifications from './Notifications';
import ProejctList from '../project/ProjectList';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render(){
        const {projects} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProejctList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset"></div>
                    <Notifications/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);