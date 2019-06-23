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
import { Wrap } from '../components/layout/wrap';
import ProjectImage from '../components/images/project';
import { LinkButton } from '../components/buttons/link_button';


// PAGES

export default class ProjectPage extends React.Component{

	
    render(){
        console.log(this.props);
        return ( 
            <div style={{ 
                height: '100vh',
                width: '100vw',
                display: 'fixed',
                top: '0px',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }}>
                
                <SafeArea>
						
                    <h1>{this.props.data.title}</h1>

                    <p>{this.props.data.description}</p>

                    <h2>Featuring</h2>
					
                    {/* technologies */}
                    { this.props.data.technologies && 
						<Wrap>
						    { this.props.data.technologies.map((technology) => {
						        console.log('Tringin to render image with ', technology);
						        return ( <ProjectImage key={technology.name} src={technology.imageUrl} name={technology.name}/> ); 
						    })
						    }
						</Wrap>
                    }

                    {/* links  */}
                    { this.props.data.links && 
                    <Wrap>
						    { this.props.data.links.map((link) => {
								
                            return <a key={link.href} href={link.href}> {link.name}</a>; 
						        
						    })
						    }
                    </Wrap>
                    }
					
                    { this.props.data.screenShots && 
                    <Wrap>
						    { this.props.data.screenShots.map((screenShot) => {
						        <img src={screenShot} />;  
						    })
						    }
                    </Wrap>
                    }

                </SafeArea>
				
            </div>
        );
    }

    componentDidMount() {
        this.setState({ showApp: true});
    }
}

export class ProjectPageData {

    constructor (data) {
        this.backgroundImage = data['backgroundImage'];
        this.title = data['title'];
        this.description = data['description'];
        this.technologies = data['technologies'];
        this.links = data['links'];
        this.screenShots = data['screenShots'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}

export class Technology{
    constructor (data) {
        this.imageUrl = data['imageUrl'];
        this.name = data['name'];
        this.href = data['href'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}

export class LinkData{
    constructor (data) {
        this.href = data['href'];
        this.imageUrl = data['imageUrl'];
        this.name = data['name'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}

