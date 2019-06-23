import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// Components
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import { LinkButton } from '../buttons/link_button';

export default class Contact extends React.Component {

    render() {
        return (
            <SafeArea>
                <Column
                    marginTop='200px'
                    placeContent={`flex-${this.props.align ||'end'} `}
                    alignItems={`flex-${this.props.align ||'end'} `}
                >
                    <Row
                        width='100%'
                        placeContent={`flex-end`}>
                        <Column 
                            width='unset'>	
                            <ScrollAnimation
                                animateIn="fadeInRight"
                                animateOnce={true}>	
                        
                                <h1 style={{ 
                                    textAlign: this.props.align ||'end',
                                    color: 'white' }}>Get in touch</h1>
    
                            </ScrollAnimation>					
                            <a 
                                style={{ alignSelf: 'flex-end', color: 'white', padding: '10px'}}
                                className='link-button' 
                                href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/'
                            >LinkedIn</a>
                            <LinkButton 
                                color='white'
                                alignSelf= 'flex-end'
                                handleClick={() => { 
                                    console.log('Trying to open email client');
                                    window.location.href = "mailto:earyzhe@gmail.com"; }}
                            >earyzhe@gmail.com</LinkButton> 
                        </Column>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}

