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
		const imageContainerStyle = {
			// '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
			width: '200px', 
			height: '200px',
			margin: '3px',
			overflow: 'hidden',
			display: 'flex',
			placeContent: 'center center'
		}
		const imageStyle = {
			// '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
			width: '200px', 
			height: '200px',
			margin: '3px',
			overflow: 'hidden' 
		}
		
		
        return (
            <SafeArea>
                <Column
                    placeContent={`flex-${this.props.align ||'start'} `}
                    alignItems={`flex-${this.props.align ||'start'} `}
                >
                    <Row
                        width='60%'
                        placeContent={'center flex-start'}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.align ||'start' }}>My Work</h2>

                            <Column
                                alignItems={'start'}>
                                <a
                                    className='link-button'
                                    href='https://github.com/earyzhe'
                                >GitHub</a> 
                                <a
                                    className='link-button'
                                    href='http://www.cupomatic.net/'
                                >CupOmatic</a>
                                <a		
                                    className='link-button'
                                    href='https://www.facebook.com/dialincoffee/'
                                >Dial in</a> 

								<Wrap>
									<div style={imageContainerStyle}>
										<img className='project' src='/assets/images/cupomatic.jpg'/>
									</div>
									<img style={imageContainerStyle} src='/assets/images/dial-in.jpg'/>
								</Wrap>

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