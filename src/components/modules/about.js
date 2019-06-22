import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends React.Component {

    render() {
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
                            <h2 style={{ textAlign: this.props.align ||'start' }}>About</h2>
                            <p>
								A passion for intuative user experience drives me to create products that are not only 
								efficently functional, but a pleasure to use.
                            </p>
                            <br/>
                            <p>It started with a fundamental belief that technology can set us free.</p>
                            <br/>
                            <p>Berlin based.</p>
                        </ScrollAnimation>

                    </Row>
                    
                </Column>
            </SafeArea>
        );
    }
}