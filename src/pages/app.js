/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Action as action } from '../react_utils/redux/actions';

// Components
import { Parallax } from 'react-parallax';
import Header from '../components/modules/header';
import About from '../components/modules/about';
import Skills from '../components/modules/skills';
import Contact from '../components/modules//contact';
import MyWork from '../components/modules/my-work';
import ProjectPage from './project-page';
import Overlay from '../components/graphics/overlay';
import Carosel from '../components/modules/carosel';

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
        var strength = this.props.mobileApp ? 1000 : 1000;
        if (windowWidth < 750 ){
            blur = 5;
            backGroundImage = '/assets/images/triple-me-for-mobile.png';
        } else {
            backGroundImage = '/assets/images/me-noeyes-4.png';
        }
		
        console.log(this.props.direction);

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
                    </CSSTransition>

                    <Carosel/>
                    
                    <Overlay in={!!this.props.showProject || !!this.props.currentImage} />
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
        mobileApp: state.mobileApp,
        currentImage: state.currentImage,
        nextImage: state.nextImage,
        showImage: state.showImage,
        direction: state.direction
    };
};

export default connect(mapStateToProps)(App);

