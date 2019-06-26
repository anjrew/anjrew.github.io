/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

class About extends React.Component {

    render() {
        const props = this.props;
        const linkStyle = {
            textDecoration: 'underline', 
            padding: '0px' , 
            margin: ' 0px 10px',
            backgroundColor: 'rgba(0,0,0,0)'};

        return (
            <SafeArea>
                <Column
                    referance={props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={props.mobileApp ? 'center':`flex-center'`}
                    alignItems={props.mobileApp ? 'center':`flex-center`}
                >
                    <Row
                        width={props.mobileApp ? '100%' : '60%'}
                        placeContent={props.mobileApp ? 'center':'center flex-start'}>
                        <ScrollAnimation
                            initiallyVisible={!!props.mobileApp}
                            animateIn={ props.mobileApp ? "fadeInUp" : "fadeInLeft" }
                            animateOnce={true} 
                        >	
                            <h2 style={{ textAlign: props.mobileApp ? 'center':'start' }}>About</h2>
                            <p style={{ textAlign: props.mobileApp ? 'center': 'start' }}>
								I am a Berlin-based software developer. 
                            </p>
                            <br/>
                            <p style={{ textAlign: props.mobileApp ? 'center': 'start' }}>
								This page is about me and what I do. 
								So check out my 
                                <button 
                                    style={linkStyle}
                                    onClick={ () => props.scrollToRef('skills')}> Skills </button> 
								and 
                                <button 
                                    style={linkStyle}
                                    onClick={() => props.scrollToRef('myWork')}
                                >Work</button> below if you like. 
                            </p>

                            <br/>
                            <p style={{ textAlign: props.mobileApp ? 'center': 'start' }}>
							I love intuitive user experiences: pages that load fast, are lag free and responsive to all device sizes.
                            </p>
                            <br/>

                            <p style={{ textAlign: props.mobileApp ? 'center': 'start' }}>
								Feel free to 
                                <button 
                                    style={linkStyle}
                                    onClick={() => props.scrollToRef('contact')}
                                >Contact</button>
								me about work,
								general chit-chat, and lava lamp queries.</p>
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

export default connect(mapStateToProps)(About);