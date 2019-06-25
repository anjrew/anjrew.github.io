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
import { Column } from '../components/layout/column';
import { Row } from '../components/layout/row';
import { Container } from '../components/boxes/container';
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
		
        const arrowStyle = {
            padding: '10px',
            margin: '10px',
            backgroundColor: 'white'

        };
        const imageStyle = {
            objectFit: 'cover',
            maxWidth: 'calc(90% - 300px)',
            width: 'auto',
            height: 'calc(80% - 100px)',
        };
		
        const transitionKey = this.props.currentImage ? this.props.currentImage.name : '';
        const imageKey = this.props.currentImage ? this.props.currentImage.imageUrl : '';
		
        console.log('Show image?', this.props.showImage,'');

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

                    <CSSTransition 
                        key={'carosel'} 
                        in={!!this.props.nextImage || !!this.props.currentImage}
                        onExited={() => this.props.dispatch(action.renderNext()) }
                        timeout={400} 
                        classNames="fade" 
                        unmountOnExit>
                        <Column
                            position={'fixed'}
                            top='0px'
                            left='0px'
                            width='100vw'
                            height='100vh'
                            zIndex='800'
                            backgroundColor= 'rgba(0,0,0,0.80)'
                            onClick={() => {
                                console.log('dismissing');
                                this.props.dispatch(action.dismissImage());
                            }}>
                            <Row
                                height='calc(80% - 100px)'>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.props.dispatch(action.previousImage(this.props.currentImage));}
                                    }
                                	>
                                    <img 
                                        src="/assets/icons/left-arrow.png"      
                                        alt='left-arrow' 
                                        style={arrowStyle}
                                    	/></div>
                                <CSSTransition 
                                    key={'key'} 
                                    in={!!this.props.showImage}
                                    onExited={() => {
                                        this.props.nextImage && this.props.dispatch(action.renderNext());
                                        console.log('onExited');}}
                                    timeout={450}
                                    onEnter={console.log('Enter')}
                                    onEntered={console.log('Entered')}
                                    onEntering={console.log('onEntering')}
                                    onExit={console.log('on exit')}
                                    onExiting={console.log('on exiting')}
                                    classNames="shift" 
                                    unmountOnExit>
                                    <img src={this.props.currentImage && this.props.currentImage.imageUrl} alt='image' style={imageStyle}/>
                                </CSSTransition>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.props.dispatch(action.nextImage(this.props.currentImage));}
                                    }
                                ><img src="/assets/icons/right-arrow.png"
                                        alt='right-arrow' 
                                        style={arrowStyle}
                                    /></div>
                            </Row>
                            <Container
                                backgroundColor='white'
                                paddin='30px'>
                                <h3>{this.props.currentImage && this.props.currentImage.name}</h3>
                                <p>{this.props.currentImage && this.props.currentImage.description}</p>
                            </Container>
                        </Column>
                    </CSSTransition>

        
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
        showImage: state.showImage
    };
};

export default connect(mapStateToProps)(App);

