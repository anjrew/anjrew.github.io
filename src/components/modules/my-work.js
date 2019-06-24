import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import ProjectImage from '../images/project';
import Diamensions from '../../data/diamensions';

export default class MyWork extends React.Component {

    render() {
		
        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
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

                                <Wrap
                                    placeContent='flex-start'>
                                    <ProjectImage src='/assets/images/dial-in.jpg' name='Dial In'/>

                                    <ProjectImage src='/assets/images/cupomatic.jpg' name='CupOmatic'/>

                                    <ProjectImage src='/assets/images/battery_saver_logo.png' name='Battery Saver'/>

                                    <ProjectImage src='/assets/images/plant-watering.jpg' name='Plant irrigation system'/>

                                    <ProjectImage src='/assets/images/green-lava-lamp.jpg' name='Lava lamp pertition'/> 

                                    <ProjectImage src='/assets/images/laissez-faire.jpg' name='Laissez Faire'/>   
									
                                    <ProjectImage src='/assets/images/goatstagram.jpg' name='Goatstagram'/>

                                    <ProjectImage src='/assets/images/spiced-logo.png' name='Spiced Academy'/>

                                    <ProjectImage src='/assets/images/me-noeyes.png' name='this.'/>   
  
                                </Wrap>
                            </Column>
                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}