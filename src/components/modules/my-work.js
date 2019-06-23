import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { LinkButton } from '../buttons/link_button';
import Coverflow from 'reactjs-coverflow';
import { Wrap } from '../layout/wrap';
import ProjectImage from '../images/project';


export default class MyWork extends React.Component {

    render() {
		
        return (
            <SafeArea>
                <Column
                    placeContent={`flex-${this.props.align ||'start'} `}
                    alignItems={`flex-${this.props.align ||'start'} `}
                >
                    <Row
                        width='100%'
                        placeContent={'center flex-start'}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.align ||'start' }}>My Work</h2>

                            <Column
                                alignItems={'start'}>
                                <p>Check out my code on  <a
                                    className='link-button'
                                    href='https://github.com/earyzhe'
                                >GitHub</a> and see my projects below.</p>
                               				 

                                <Wrap>
                                    <ProjectImage src='/assets/images/dial-in.jpg' name='Dial In'/>

                                    <ProjectImage src='/assets/images/cupomatic.jpg' name='CupOmatic'/>

                                    <ProjectImage src='/assets/images/cupomatic.jpg' name='Battery Saver'/>

                                    <ProjectImage src='/assets/images/cupomatic.jpg' name='Plant irrigation system'/>  
                                </Wrap>

									
                                <a
                                    className='link-button'
                                    href='http://www.cupomatic.net/'
                                >CupOmatic</a>
                                <a		
                                    className='link-button'
                                    href='https://www.facebook.com/dialincoffee/'
                                >Dial in</a>

                                {/* <Coverflow
									backgroundColor= "black"
									style={{
										backgroundColor:'rgba(0,0,0,0)',
										width:"960px", 
										height:"600px"
									}}
                                    // width="960" 
                                    // height="600"
                                    displayQuantityOfSide={2}
                                    navigation={false}
                                    enableScroll={true}
                                    clickable={true}
                                    active={0}
                                >
                                    <img style={imageStyle} src='/assets/images/cupomatic.jpg' data-action="http://andyyou.github.io/react-coverflow/"/>
                                    <img style={imageStyle} src='/assets/images/dial-in.jpg' data-action="http://andyyou.github.io/react-coverflow/"/>
                                </Coverflow> */}

                                {/* <Coverflow width="960" height="500"
									displayQuantityOfSide={2}
									navigation={false}
									enableScroll={true}
									clickable={true}
									active={0}
								>
									<div
									onClick={() => fn()}
									onKeyDown={() => fn()}
									role="menuitem"
									tabIndex="0"
									>
									<img
										src='image/path'
										alt='title or description'
										style={{
										display: 'block',
										width: '100%',
										}}
									/>
									</div>
									<img src='/assets/images/cupomatic.jpg' alt='title or description' data-action="/assets/images/cupomatic.jpg"/>
									<img src='/assets/images/dial-in.jpg' alt='title or description' data-action="/assets/images/dial-in.jpg"/>
								</Coverflow>, */}
                            </Column>


                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}