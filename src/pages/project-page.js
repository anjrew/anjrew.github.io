import React from 'react';
import axios from '../react_utils/axios';
import routes from '../react_utils/react_routes';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import { Parallax, Background } from 'react-parallax';
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import { Row } from '../components/layout/row';
import { Avatar } from '../components/graphics/avatar';
import { Uploader } from '../components/modules/Uploader';
import { OverLappedChildren} from '../components/layout/overlapped_children';
import { ErrorMessage } from '../components/text/error_message';
import { Container } from '../components/boxes/container';
import { Icon } from '../components/graphics/icon';
import { NavBarButton } from '../components/buttons/nav-bar-button';
import Header from '../components/modules/header';
import About from '../components/modules/about';
import Skills from '../components/modules/skills';
import Contact from '../components/modules//contact';
import MyWork from '../components/modules/my-work';
import { Z_FIXED } from 'zlib';


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
    }
	

    render(){

        return ( 
            <div style={{ 
                height: '100vh',
                width: '100vw',
                display: 'fixed',
                top: '0px'
            }}>
                <Parallax
                    blur={10}
                    bgImage={this.props.backgroundImage}
                    bgImageAlt={this.props.title}
                    strength={1000}
                >


                    <h1>{this.props.title}</h1>

                    <p></p>
                    <Skills/>

                    <MyWork/>

                    <Contact/>

                </Parallax>
				
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

