/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';
import { 
    flutterLink,
    dartLink, 
    firebaseLink, 
    vsCodeLink, 
    xcodeLink, 
    swiftLink, 
    javaLink,
    androidStudioLink,
    parseServerLink,
    flareLink,
    arduinoLink,
    nodeLink,
    postGresLink,
    htmlLink,
    cssLink,
    javaScriptLink, 
    reduxLink,
    reactLink,
    awsLink,
    vueLink,
    redisLink } from '../../data/technology-data';
	
// Components
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import TechnologyIcon from '../images/technology-icon';

class Skills extends React.Component {

    render() {
        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={`flex-center`}
                    alignItems={`flex-center`}
                >
                    <Row
                        width={this.props.mobileApp ? '100%' : '60%'}
                        placeContent={this.props.mobileApp ? 'center':`center flex-end`}>
                        <ScrollAnimation
                            animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>Skills</h2>
							
                            <p style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>
								The main area I specialise in is making mobile and web applications using Google's <big>Flutter</big> framework with code written in <big>Dart</big>.
                            </p>
                            <br /> 

                            <p style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>Server side I implement node.js and use <big>Firebase</big> or PostgreSQL for databases.</p>
                            <br /> 
                            <p style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>
								Whilst this is my main area of expertise, I have experience with many other languages, frameworks and databases.
                            </p>
                            <br /> 
                           

                            <Wrap>
                                <TechnologyIcon key={flutterLink.name} data={flutterLink}/>
                                <TechnologyIcon key={dartLink.name} data={dartLink} />
                                <TechnologyIcon key={firebaseLink.name} data={firebaseLink} />
                                <TechnologyIcon key={vsCodeLink.name} data={vsCodeLink} />
                                <TechnologyIcon key={xcodeLink.name} data={xcodeLink} />
                                <TechnologyIcon key={swiftLink.name} data={swiftLink} />
                                <TechnologyIcon key={javaLink.name} data={javaLink} />
                                <TechnologyIcon key={androidStudioLink.name} data={androidStudioLink} />
                                <TechnologyIcon key={parseServerLink.name} data={parseServerLink} />
                                <TechnologyIcon key={flareLink.name} data={flareLink} />
                                <TechnologyIcon key={arduinoLink.name} data={arduinoLink} />
                                <TechnologyIcon key={nodeLink.name} data={nodeLink} />
                                <TechnologyIcon key={postGresLink.name} data={postGresLink} />
                                <TechnologyIcon key={htmlLink.name} data={htmlLink} />
                                <TechnologyIcon key={cssLink.name} data={cssLink} />
                                <TechnologyIcon key={javaScriptLink.name} data={javaScriptLink} />
                                <TechnologyIcon key={reduxLink.name} data={reduxLink} />
                                <TechnologyIcon key={reactLink.name} data={reactLink} />
                                <TechnologyIcon key={awsLink.name} data={awsLink} />
                                <TechnologyIcon key={vueLink.name} data={vueLink} />
                                <TechnologyIcon key={redisLink.name} data={redisLink} />
								
                            </Wrap>
                            <br/> 
                            <p style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>
							Check out my <a href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/' >LinkedIn</a> profile for more information.
                            </p>
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

export default connect(mapStateToProps)(Skills);