/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Action as action } from '../react_utils/redux/actions';
import  axios  from '../react_utils/axios';

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
import Footer from '../components/modules/footer';

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
        this.scrollToRef = this.scrollToRef.bind(this);
    }

    render(){
        const windowWidth = window.innerWidth;
        const props = this.props;
        var backGroundImage = '';
        var blur = 1;
        var strength = props.mobileApp ? 1000 : 1000;
        if (windowWidth < 750 ){
            blur = 5;
            backGroundImage = '/assets/images/triple-me-for-mobile.png';
        } else {
            backGroundImage = '/assets/images/me-noeyes-3.png';
        }
		
        return ( 
            <div style={{ maxHeight: '100vh'}}>
                <Parallax
                    blur={blur}
                    bgImage={backGroundImage || '/assets/images/me-noeyes-4.png'}
                    bgImageAlt="Andrew Johnson"
                    strength={strength}>

                    <Header referance={this.headerRef} />

                    <About referance={this.aboutRef} scrollToRef={this.scrollToRef}/>

                    <Skills referance={this.skillsRef} />

                    <MyWork referance={this.myworkRef}/>

                    <Contact referance={this.contactRef}/>

                    <Footer scrollToRef={this.scrollToRef}/>
                   
                    <CSSTransition
                        in={!!props.showProject}
                        timeout={500}
                        classNames="fade"
                        unmountOnExit>
                        <ProjectPage data={ props.showProject }/>
                    </CSSTransition>

                    <Carosel/>
                    
                    <Overlay in={!!props.showProject || !!props.currentImage} />
                </Parallax>
            </div>
        );
    }

    componentDidMount() {
        const options = window.location.pathname.split('/');
        var image;
        if (options[2]){
            if ( options[2] == 'image' ){ 
                if(options[3]){ image = options[3].split('%20').join(' '); }
            }
        }
        const location = options[1].split('%20').join(' ');
        if (location){
            this.props.dispatch(action.showProject(location, image));
        }
        this.props.dispatch(action.calibrateAppSize(window.innerWidth));
        window.addEventListener("resize", () => {
            // console.log('Resizing with' ,window.innerWidth);
            this.props.dispatch(action.calibrateAppSize(window.innerWidth));
        });
        this.getTracks();

    }
	
    scrollToRef(section){
        var ref;
        switch(section) {
            case 'header':
                ref = this.headerRef;
                break;
            case 'about':
                ref = this.aboutRef;
                break;
            case 'skills':
                ref = this.skillsRef;
                break;
            case 'myWork':
                ref = this.myworkRef;
                break;
            case 'contact':
                ref = this.contactRef;
                break;
            default:
                break;
        }
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
	
    getTracks(){
        axios.get('/get-tracks').then((respose) => {
            console.log(respose);
        }).catch((e) =>{
            console.log(e);
        });
    }
}

const mapStateToProps = state => {

    return {
        showProject: state.showProject,
        mobileApp: state.mobileApp,
        currentImage: state.currentImage,
        nextImage: state.nextImage,
        showImage: state.showImage,
    };
};

export default connect(mapStateToProps)(App);

