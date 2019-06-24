/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";


// Components
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import { Container } from '../components/boxes/container';
import { Row } from '../components/layout/row';
import { Wrap } from '../components/layout/wrap';
import TechnologyIcon from '../components/images/technology-icon';
import GalleryImage from '../components/images/gallery-image';
import LinkIcon from '../components/images/link-icon';
import { Action as action } from '../react_utils/redux/actions';
import { Padding } from '../components/layout/padding';

// PAGES
class ProjectPage extends React.Component{

    constructor(){
        super();
        this.dismiss = this.dismiss.bind(this);
    }
	
    dismiss(history){
        this.props.dispatch(action.dismissAll());
        history.push('/');
    }

    render(){
        const data = this.props.data;
        const margin = 20;
        const sectionMargin =  margin + 'px';
		
        if (data){
            return ( 
                <BrowserRouter>
                    <Route render= {({ history }) => {
                        return <div style={{ 
                            width: `calc(100% - ${margin * 4 + 'px'})`,
                            position: 'absolute',
                            zIndex: '10',
                            margin: margin + 'px',
                            padding: margin + 'px',
                            top: window.scrollY + 'px',
                            backgroundColor: 'rgba(255,255,255,0.99)'
                        }}>
					
                            <SafeArea>
                                <Column
                                    placeContent='flex-start'>
                                    <Row
                                        placeContent='flex-start'
                                    >
                                        <Column
                                            placeContent='flex-start'
                                            alignItems='flex-start'
                                            width='unset'
                                        >
                                            <h1 style={{ textDecoration: 'underline' }}>{data.title}</h1>
                                            <p>{data.description}</p>
	
                                        </Column>
                                        <Padding padding='30px'/>
                                        { data.logoUrl &&
									<div >
									    <img style={{
									        objectFit: 'cover',
									        height: '350px',
									        width: '350px'
									    }} src={data.logoUrl}/>
									</div>
                                        }
                                        <Container
                                            alignSelf='start'
                                            alignItems='flex-end'
                                            height='100%'
                                            flexGrow='1'
                                            placeContent='flex-end flex-end'>
                                            <button onClick={() => this.dismiss(history)}>X</button>
                                        </Container>
                                    </Row>
	
						
                                    {/* technologies */}
                                    { data.technologies && 
								<Column
								    placeContent='flex-start'
								    alignItems='flex-start'
								    margin={sectionMargin}>
								    <h3>Featuring</h3>
								    <Wrap
								        alignItems='start'
								        placeContent='flex-start'
								    >
								        { data.technologies.map((technology) => {
								            return ( <TechnologyIcon key={technology.name} data={technology}/> ); 
								        })
								        }
								    </Wrap>									
								</Column>
                                    }
	
                                    {/* links  */}
                                    { data.links &&
                            <Column
                                placeContent='flex-start'
                                alignItems='flex-start'
                                margin={sectionMargin}
                            >
                            	<h3>More info</h3> 
                                <Wrap>
								    { data.links.map((link) => {
								        return <LinkIcon key={link.href} data={link} />;  
								    })
								    }
                                </Wrap>
                            </Column>
                                    }

                                    { data.screenShots &&
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
                                    }
                                </Column>
                            </SafeArea>				
                        </div>;
                    }} />
                </BrowserRouter>
            );
        } else {
            return <div></div>;
        }
    }

    componentDidMount() {
        this.setState({ showApp: true});
    }
}

const mapStateToProps = state => {
    return {
        pageToRender: state.pageToRender,
    };
};

export default connect(mapStateToProps)(ProjectPage);



