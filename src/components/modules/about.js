import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import Diamensions from '../../data/diamensions';


export default class About extends React.Component {

    render() {

        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={`flex-${this.props.align ||'center'} `}
                    alignItems={`flex-${this.props.align ||'center'} `}
                >
                    <Row
                        width='60%'
                        placeContent={'center flex-start'}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.align ||'start' }}>About</h2>
                            <p>
								A passion for intuative user experience drives me to create products that are not only 
								efficently functional, but a pleasure to use.
                            </p>
                            <br/>
                            <p>It started with a fundamental belief that technology can set us free.</p>
                            <br/>
                            <p>Berlin based.</p>


							<p>Fast
								Fast load times and lag free interaction, my highest priority.
								Responsive
								My layouts will work on any device, big or small.
								Intuitive
								Strong preference for easy to use, intuitive UX/UI.
								Dynamic
								Websites don't have to be static, I love making pages come to life.</p>
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}>	
                            {/* <img src='/assets/images/me-noeyes.png'/> */}
                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}