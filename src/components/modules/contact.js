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

        const elem = <Row
            width='100%'
            placeContent={this.props.mobileApp ? 'center' : `flex-end`}>
            <Column 
                width='unset'>	
	
                <h1 style={{ 
                    textAlign: this.props.mobileApp ? 'center' :'end',
                    color: 'white',
                    backgroundColor: 'black',
                    margin: '20px 0px'
                }}
                >Get in touch</h1>
					
                <a 
                    style={{ alignSelf: this.props.mobileApp ? 'center' : 'flex-end', color: 'white', padding: '10px'}}
                    className='link-button' 
                    href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/'
                    target="_blank"
                    rel="noopener noreferrer"
                >LinkedIn</a>
                <LinkButton 
                    color='white'
                    alignSelf= {this.props.mobileApp ? 'center' : 'flex-end'}
                    handleClick={() => { 
                        window.location.href = "mailto:andrewmjohnson549@gmail.com"; 
                    }}
                >andrewmjohnson549@gmail.com</LinkButton> 
            </Column>
        </Row>;
		
        return (
            <SafeArea 
                marginTop={Diamensions.margin}>
                <Column
                    referance={this.props.referance}
                    placeContent={this.props.mobileApp ? 'center' : 'flex-end' }
                    alignItems={this.props.mobileApp ? 'center' : `flex-end`}
                >
                    { this.props.mobileApp ? elem :
					
                        <ScrollAnimation
                            initiallyVisible={!!this.props.mobileApp}
                            animateIn={ this.props.mobileApp ? "flipInX": "fadeInRight"}
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

export default connect(mapStateToProps)(Contact);

