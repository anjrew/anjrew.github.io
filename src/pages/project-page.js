/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

// Components
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import { Row } from '../components/layout/row';
import { Wrap } from '../components/layout/wrap';
import TechnologyIcon from '../components/images/technology-icon';
import GalleryImage from '../components/images/gallery-image';
import LinkIcon from '../components/images/link-icon';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// PAGES

export default class ProjectPage extends React.Component{

	
    render(){
        const modalIsOpen = true;
        const data = this.props.data;
        const sectionMargin = '20px';

        console.log('Screenshots', data.screenShots);
        return ( 
            <div style={{ 
                width: '100vw',
                display: 'fixed',
                top: '0px',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }}>
                
                <SafeArea>
                    <Column
                        placeContent='flex-start'>
                        <Row
                            placeContent='flex-start'>
                            <Column
                                placeContent='flex-start'
                                alignItems='flex-start'
                                width='unset'
                            >
                                <h1 style={{ textDecoration: 'underline' }}>{data.title}</h1>

                                <p>{data.description}</p>

                            </Column>
                            { data.logoUrl &&
                            <div>
                                <img style={{
                                    objectFit: 'cover',
                                    height: '350px',
                                    width: '350px'
                                }} src={data.logoUrl}/>
                            </div>
                            }
                        </Row>

					
                        {/* technologies */}
                        <Column
                            placeContent='flex-start'
                            alignItems='flex-start'
                            margin={sectionMargin}
                        >
                            <h3>Featuring</h3>
                            { data.technologies && 
						 
						<Wrap
						    alignItems='start'
						    placeContent='flex-start'
						>
						    { data.technologies.map((technology) => {
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
                            margin={sectionMargin}
                        >
                            <h3>More info</h3>
                            { data.links &&

							<Wrap>
							    { data.links.map((link) => {
							        return <LinkIcon key={link.href} data={link} />;  
							    })
							    }
							</Wrap>
                            }
                        </Column>

                        <Column
                            placeContent='flex-start'
                            alignItems='flex-start'
                            margin={sectionMargin}>
                            <h3>Gallery</h3>
                            <Row>
                                { data.screenShots && data.screenShots.map((screenshot) => {
                                    return <GalleryImage key={screenshot} data={screenshot} />;  
                                })
                                }
                            </Row>
                        </Column>
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

export class GalleryImageData{
    constructor (data) {
        this.description = data['description'];
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

