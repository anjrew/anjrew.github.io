import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

// Components
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import { LinkButton } from '../buttons/link_button';

class Contact extends React.Component {

    render() {
        return (
            <SafeArea 
                marginTop={Diamensions.margin}>
                <Column
                    referance={this.props.referance}
                    placeContent={`flex-${this.props.align ||'end'} `}
                    alignItems={`flex-${this.props.align ||'end'} `}
                >
                    <ScrollAnimation
                        animateIn="fadeInRight"
                        animateOnce={true}>	
                        <Row
                            width='100%'
                            placeContent={`flex-end`}>
                            <Column 
                                width='unset'>	
                        
                                <h1 style={{ 
                                    textAlign: this.props.align ||'end',
                                    color: 'white' }}>Get in touch</h1>
										
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
                    </ScrollAnimation>

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

export default connect(mapStateToProps)(Contact);

