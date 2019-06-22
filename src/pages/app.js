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
            <div style={{ maxHeight: '100vh'}}>

                <Header/>
{/* 
                <Parallax
                    blur={1}
                    bgImage={'/assets/images/tower-1.jpg'}
                    bgImageAlt="the cat"
                    strength={1000}
                >
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

