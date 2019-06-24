import React from 'react';

// Components
import { Parallax } from 'react-parallax';
import Header from '../components/modules/header';
import About from '../components/modules/about';
import Skills from '../components/modules/skills';
import Contact from '../components/modules//contact';
import MyWork from '../components/modules/my-work';
import ProjectPage , { ProjectPageData, Technology, LinkData } from './project-page';


// PAGES

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            showApp: false,
        };
        this.renderNext = this.renderNext.bind(this);
        this.setLocationState = this.setLocationState.bind(this);		
        this.dismissLoader = this.dismissLoader.bind(this);
        this.avatarClicked = this.avatarClicked.bind(this);
        this.headerRef = React.createRef();
        this.aboutRef = React.createRef();
        this.skillsRef = React.createRef();
        this.myworkRef = React.createRef();
        this.contactRef = React.createRef();
    }
	

    render(){

        return ( 
            <div style={{ maxHeight: '100vh'}}>
                <Parallax
                    blur={1}
                    bgImage={'/assets/images/me-noeyes-5.png'}
                    bgImageAlt="Andrew Johnson"
                    strength={1000}>

                    <Header referance={this.headerRef} />

                    <About referance={this.aboutRef}/>

                    <Skills referance={this.skillsRef}/>

                    <MyWork referance={this.myworkRef}/>

                    <ProjectPage data={ 
                        new ProjectPageData({
                            backgroundImage: '/assets/images/dial-in.jpg',
                            title: 'Dial in',
                            description: 'A tool to help coffee professionals record and analyse data',
                            logoUrl: '/assets/images/dial-in-logo.png',
                            technologies: [
                                new Technology({ 
                                    imageUrl: '/assets/images/flutter-logo2.svg', 
                                    name: 'Flutter',
                                    href: 'https://flutter.dev/'
                                }),
                                new Technology({ 
                                    imageUrl: '/assets/images/dart-logo-2.jpg', 
                                    name: 'Dart',
                                    href: 'https://dart.dev/'
                                }),
                                new Technology({ 
                                    imageUrl: '/assets/images/firebase-logo2.png', 
                                    name: 'Firebase',
                                    href: 'https://firebase.google.com/'
                                })
                            ],
                            links: [
                                new LinkData({
                                    imageUrl: '/assets/images/faceBookIcon.png',
                                    href: 'https://www.facebook.com/dialincoffee/',
                                    name: 'Facebook'
                                }),
                                new LinkData({
                                    imageUrl: '/assets/images/instagramLogo.png',
                                    href: 'https://www.instagram.com/dial_in_coffee/',
                                    name: 'Instagram'
                                }),
                                new LinkData({
                                    imageUrl: '/assets/images/GooglePlayBadge.png',
                                    href: '/assets/images/instagramLogo.png',
                                    name: 'Google Play'
                                })
                            ]
							
                        })}/>

                    <Contact referance={this.contactRef}/>

                </Parallax>
				
                {/* 
                
				<div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'green'}}></div> 
                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'black'}}></div> 

                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'red'}}></div> 

                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'yellow'}}></div> 


                </Parallax>

                <Parallax
                    blur={1}
                    bgImage={'/assets/images/tower-2.jpg'}
                    bgImageAlt="the cat"
                    strength={1000}
                >
                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'green'}}></div> 
                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'black'}}></div> 

                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'red'}}></div> 

                    <div style={{ margin: '30px', height: '600px', width: '100px', backgroundColor: 'yellow'}}></div> 


                </Parallax> */}
            </div>

        );
       
    }

    componentDidMount() {
        this.setState({ showApp: true});
    }
	
    setLocationState(location){
       
    }
	
    makeNextToRender(location){	  
        
    }

    renderNext(history){
  
    }

    dismissLoader(){
       
    }

    avatarClicked(){
       
    }
}

