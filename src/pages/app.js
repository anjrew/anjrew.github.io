import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

// Components
import { Parallax } from 'react-parallax';
import Header from '../components/modules/header';
import About from '../components/modules/about';
import Skills from '../components/modules/skills';
import Contact from '../components/modules//contact';
import MyWork from '../components/modules/my-work';
import ProjectPage from './project-page';
import { Container } from '../components/boxes/container';
import { Action as action } from '../react_utils/redux/actions';

// PAGES

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            showApp: false,
            showProject: true
        };
        this.headerRef = React.createRef();
        this.aboutRef = React.createRef();
        this.skillsRef = React.createRef();
        this.myworkRef = React.createRef();
        this.contactRef = React.createRef();
    }
	

    render(){
        const windowWidth = window.innerWidth;
        var backGroundImage = '';
        var blur = 1;
        var strength = 1000;
        if (windowWidth < 750 ){
            blur = 10;
            backGroundImage = '/assets/images/me-noeyes-1.png';
        } else {
            backGroundImage = '/assets/images/me-noeyes-4.png';
        }

        return ( 
            <div style={{ maxHeight: '100vh'}}>
                <Parallax
                    blur={blur}
                    bgImage={backGroundImage || '/assets/images/me-noeyes-4.png'}
                    bgImageAlt="Andrew Johnson"
                    strength={strength}>

                    <Header referance={this.headerRef} />

                    <About referance={this.aboutRef}/>

                    <Skills referance={this.skillsRef}/>

                    <MyWork referance={this.myworkRef}/>

                    <Contact referance={this.contactRef}/>
                   
                    <CSSTransition
                        in={!!this.props.showProject}
                        timeout={400}
                        classNames="fade"
                        unmountOnExit>
                        <ProjectPage data={ this.props.showProject }/>
                    </CSSTransition>;
        
                    <CSSTransition 
                        in={!!this.props.showProject} 
                        timeout={400} 
                        classNames="fade" 
                        unmountOnExit>
                        <Container 
                            padding="40px"
                            position="fixed"
                            width='100vw'
                            height='100vh'
                            backgroundColor= 'rgba(0,0,0,0.30)'
                            zIndex="5"
                            top='0px'
                            onClick={() => this.props.dispatch(action.dismissAll())}
                        >
                        </Container>
                    </CSSTransition>;
                </Parallax>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ showApp: true});
        const location = window.location.pathname.split('%20').join(' ').substring(1);
        if (location){
            this.props.dispatch(action.showProject(location));
        }
        this.props.dispatch(action.calibrateAppSize(window.innerWidth));
    }
}

const mapStateToProps = state => {

    return {
        showProject: state.showProject,
    };
};

export default connect(mapStateToProps)(App);

