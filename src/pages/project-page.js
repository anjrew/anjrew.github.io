import React from 'react';

// Components
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import { Row } from '../components/layout/row';
import { Wrap } from '../components/layout/wrap';
import TechnologyIcon from '../components/images/technology-icon';
import LinkIcon from '../components/images/link-icon';

// PAGES

export default class ProjectPage extends React.Component{

	
    render(){
        console.log('Project page props are', this.props);
        return ( 
            <div style={{ 
                width: '100vw',
                display: 'fixed',
                top: '0px',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }}>
                
                <SafeArea>
                    <Column
                        placeContent='space-between'>
                        <Row>
                            <Column
                                placeContent='flex-start'
                                alignItems='flex-start'
                            >
                                <h1 style={{ textDecoration: 'underline' }}>{this.props.data.title}</h1>

                                <p>{this.props.data.description}</p>

                            </Column>
                            { this.props.data.logoUrl &&
                            <div>
                                <img style={{
                                    objectFit: 'cover',
                                    height: '350px',
                                    width: '350px'
                                }} src={this.props.data.logoUrl}/>
                            </div>
                            }
                        </Row>

					
                        {/* technologies */}
                        <Column
                            placeContent='flex-start'
                            alignItems='flex-start'
                        >
                            <h3>Featuring</h3>
                            { this.props.data.technologies && 
						 
						<Wrap
						    alignItems='start'
						    placeContent='flex-start'
						>
						    { this.props.data.technologies.map((technology) => {
						        return ( <TechnologyIcon key={technology.name} data={technology}/> ); 
						    })
						    }
						</Wrap>
                            }
                        </Column>

                        {/* links  */}
                        <Column
                            placeContent='flex-start'
                            alignItems='flex-start'
                        >
                            <h3>More info</h3>
                            { this.props.data.links &&

							<Wrap>
							    { this.props.data.links.map((link) => {
							        return <LinkIcon key={link.href} data={link} />;  
							    })
							    }
							</Wrap>
                            }
                        </Column>
					
                        { this.props.data.screenShots && 
                    <Wrap>
						    { this.props.data.screenShots.map((screenShot) => {
                            <img src={screenShot} />;  
						    })
                        }
                    </Wrap>
                        }

                    </Column>
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
        this.logoUrl = data['logoUrl'];
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

