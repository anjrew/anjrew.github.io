import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Skills extends React.Component {

    render() {
        return (
            <SafeArea>
                <Column
                    placeContent={`flex-${this.props.align ||'end'} `}
                    alignItems={`flex-${this.props.align ||'end'} `}
                >
                    <Row
                        width='60%'
                        placeContent={`center flex-${this.props.align ||'end'}`}>
                        <ScrollAnimation
                            animateIn="fadeInRight"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.align ||'start' }}>Skills</h2>
							
                            <p style={{ textAlign: this.props.align ||'start' }}>
								The main area I specialise in is making mobile and web applications using Google's <big>Flutter</big> framework with code written in <big>Dart</big>.
                            </p>
                            <br /> 

                            <p>Server side I implement node.js and use <big>Firebase</big> or PostgreSQL for databases.</p>
                            <br /> 
                            <p style={{ textAlign: this.props.align ||'start' }}>
								Whilst this is my main area of expertise, I have experience with many other languages, frameworks and databases.
                            </p>
                            <br /> 
                            <p style={{ textAlign: this.props.align ||'start' }}>
							Check out my <a href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/' >LinkedIn</a> profile for more information.
                            </p>
                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}