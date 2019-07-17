import React from 'react';
// Components
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import ProjectImage from '../images/project';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

class MyWork extends React.Component {

    render() {
		const props = this.props
		const mobileApp = props.mobileApp;

        const elem = <Column
            width='100%'
            placeContent={mobileApp ? 'center' :'center flex-start'}>

            <h2 style={{
                alignSelf: mobileApp ? 'center': 'start',  
                textAlign: mobileApp ? 'center': 'start',
                backgroundColor: mobileApp ? 'white' : 'rgba(0,0,0,0)'					 
            }}>My Work</h2>

            <Column
                alignItems={mobileApp ? 'center' :'start'}>
                <p style={{ 
                    textAlign: mobileApp ? 'center': 'start',	
                    alignSelf: mobileApp ? 'center': 'start' 
                }}
                >Check out my code on  <a
                        style={{ backgroundColor:"white"}}
                        className='link-button'
                        href='https://github.com/earyzhe'
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub</a> and see my projects below.</p> 


                <p style={{ 
                    textAlign: mobileApp ? 'center': 'start',
                    alignSelf: mobileApp ? 'center': 'start' 
                }}
                >If you are currently using any of my products;
				with your help, I can keep them alive and updated! I run on Caffeine...</p>
                <a 
                    href= "https://www.buymeacoffee.com/earyzhe" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        className={'grow-on-hover'}
                        src="/assets/images/buy-me-coffee-button.png" 
                        alt="Donate" 
                        style={{margin: '20px'}}
                    />
                </a>
                <Wrap
                    placeContent={mobileApp ? 'center' : 'flex-start'}>
					
                    <ProjectImage name='Dial In' bigUrl="/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_600.jpg" smallUrl='/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_300.jpg' />

                    <ProjectImage name='CupOmatic' bigUrl="/assets/images/projects/cupomatic/image/cupomatic-300px.jpg" smallUrl='/assets/images/projects/cupomatic/image/cupomatic-100px.jpg' />

                    <ProjectImage name='Battery Saver' bigUrl="/assets/images/projects/battery-saver/image/battery_saver_logo-300px.jpg" smallUrl='/assets/images/projects/battery-saver/image/battery_saver_logo-100px.png' />

                    <ProjectImage name='Plant irrigation system' bigUrl="/assets/images/projects/plant-system/image/plant-watering-300px.jpg" smallUrl='/assets/images/projects/plant-system/image/plant-watering-100px.jpg' />

                    <ProjectImage name='Lava lamp petition' bigUrl="/assets/images/projects/lava-lamp-pertition/image/green-lava-lamp.jpg" smallUrl='/assets/images/projects/lava-lamp-pertition/image/green-lava-lamp-300px.jpg'/> 

                    <ProjectImage name='Laissez Faire' bigUrl="/assets/images/projects/lassezfaire/image/laissez-faire-300px.jpg" smallUrl='/assets/images/projects/lassezfaire/image/laissez-faire-100px.jpg'/>  
					
                    <ProjectImage name='Goatstagram' bigUrl="/assets/images/projects/goatstagram/image/goatstagram_qpnbmb_c_scale,w_600.jpg" smallUrl='/assets/images/projects/goatstagram/image/goatstagram_qpnbmb_c_scale,w_300.jpg' />

                    <ProjectImage name='Spiced Academy' bigUrl="/assets/images/projects/spiced/image/spiced-logo-300px.jpg" smallUrl='/assets/images/projects/spiced/image/spiced-logo-100px.png' />

                    <ProjectImage name='this' bigUrl="/assets/images/projects/this/image/me-noeyes-whitebg_tdy9od_c_scale,w_200.png" smallUrl='/assets/images/projects/this/image/me-noeyes-whitebg_tdy9od_c_scale,w_200.png' />  

                    <ProjectImage name='Connect Four' bigUrl="/assets/images/projects/connect-four/image/logo-300px.jpg" smallUrl='/assets/images/projects/connect-four/image/logo-100px.jpg'/> 
                </Wrap>
            </Column>
            
        </Column>;
		
        return (
            <SafeArea>
                <Column
                    referance={props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={mobileApp ? 'center': `flex-start`}
                    alignItems={mobileApp ? 'center': `flex-start`}
                >
                    { mobileApp ? elem : 
                        <ScrollAnimation
                            animateIn={ mobileApp ? "fadeInUp" : "fadeInLeft" }
                            animateOnce={true}>	
                            {elem}
                        </ScrollAnimation>
                    }
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