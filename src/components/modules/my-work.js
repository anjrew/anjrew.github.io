import React from 'react';
// Components
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import ProjectImage from '../images/project';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

class MyWork extends React.Component {

    render() {
		
        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={this.props.mobileApp ? 'center': `flex-start`}
                    alignItems={this.props.mobileApp ? 'center': `flex-start`}
                >
                    <Row
                        width='100%'
                        placeContent={this.props.mobileApp ? 'center' :'center flex-start'}>
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={ this.props.mobileApp ? "fadeInUp" : "fadeInLeft" }
                            animateOnce={true}
                        >	
                            <h2 style={{ 
                                textAlign: this.props.mobileApp ? 'center': 'start',
                                backgroundColor: this.props.mobileApp ? 'white' : 'rgba(0,0,0,0)'					 
                            }}>My Work</h2>

                            <Column
                                alignItems={this.props.mobileApp ? 'center' :'start'}>
                                <p style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}
                                >Check out my code on  <a
                                        style={{ backgroundColor:"white"}}
                                        className='link-button'
                                        href='https://github.com/earyzhe'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >GitHub</a> and see my projects below.</p> 


                                <p style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}
                                >If you are currently using any of my products;
								with your help, I can keep them alive and updated! I run on Caffeine...</p>
                                <a 
                                    href= "https://www.buymeacoffee.com/earyzhe" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img 
                                        src="/assets/images/buy-me-coffee-button.png" 
                                        alt="Donate" 
                                        style={{margin: '20px'}}
                                    />
                                </a>
                                <Wrap
                                    placeContent={this.props.mobileApp ? 'center' : 'flex-start'}>
									
                                    <ProjectImage src='/assets/images/dial-in.jpg' name='Dial In'/>

                                    <ProjectImage src='/assets/images/cupomatic.jpg' name='CupOmatic'/>

                                    <ProjectImage src='/assets/images/battery_saver_logo.png' name='Battery Saver'/>

                                    <ProjectImage src='/assets/images/plant-watering.jpg' name='Plant irrigation system'/>

                                    <ProjectImage src='/assets/images/green-lava-lamp.jpg' name='Lava lamp petition'/> 

                                    <ProjectImage src='/assets/images/laissez-faire.jpg' name='Laissez Faire'/>   
									
                                    <ProjectImage src='/assets/images/goatstagram.jpg' name='Goatstagram'/>

                                    <ProjectImage src='/assets/images/spiced-logo.png' name='Spiced Academy'/>

                                    <ProjectImage src='/assets/images/me-noeyes-whitebg.png' name='this.'/>   
                                </Wrap>
                            </Column>
                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}

const mapStateToProps = state => {

    return {
        mobileApp: state.mobileApp,
    };
};

export default connect(mapStateToProps)(MyWork);