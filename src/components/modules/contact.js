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
                    placeContent={`flex-${this.props.align ||'end'} `}
                    alignItems={`flex-${this.props.align ||'end'} `}
                >
                    

                    <Row
                        width='60%'
                        placeContent={`center flex-${this.props.align ||'end'}`}>
						 <Column width='100px'>						
                            <a className='link-button' href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/'>LinkedIn</a>
                            <LinkButton 
                                onClick={() => { window.location.href = "mailto:earyzhe@gmail.com"; }}
                            >earyzhe@gmail.com</LinkButton> 
                        </Column>	
                        <ScrollAnimation
                            animateIn="fadeInRight"
                            animateOnce={true}
                        >	
                        
							<h1 style={{ textAlign: this.props.align ||'end' }}>Get in touch</h1>
							
                            
                        </ScrollAnimation>

                        
                    </Row>

                    <ScrollAnimation
                        animateIn="fadeInLeft"
                        animateOnce={true}
                    >	
                    
                    </ScrollAnimation>
                </Column>
            </SafeArea>
        );
    }
}

