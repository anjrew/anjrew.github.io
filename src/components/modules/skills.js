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
    redisLink,
    handlebarsLink,
    codeMagicLink } from '../../data/technology-data';
	

	
// Components
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import TechnologyIcon from '../images/technology-icon';

class Skills extends React.Component {

    render() {
        const mobileApp = this.props.mobileApp;
        const alignment = {
            selfAlign: mobileApp ? 'center':'start',
            textAlign: mobileApp ? 'center':'start' };
        const elem = <Column
            width={mobileApp ? '100%' : '60%'}
            placeContent={mobileApp ? 'center':`center flex-end`}
            alignItems={mobileApp ? 'center' : 'flex-start'}>

            <h2 style={alignment}>Skills</h2>
			
            <p style={alignment}>
				The main area I specialise in is making mobile and web applications using Google's <a 
                    href='https://flutter.dev/'
                    target='_blank'
                    rel="noopener noreferrer"
                >Flutter</a> framework with code written in <a 
                    href='https://dart.dev/'
                    target='_blank'
                    rel="noopener noreferrer">Dart</a>.
            </p>
            <br /> 

            <p style={alignment}>Server side I implement node.js and use <a 
                href='https://firebase.google.com/'
                target='_blank'
                rel="noopener noreferrer">Firebase</a> or PostgreSQL for databases.</p>
            <br /> 
            <p style={alignment}>
				Whilst this is my main area of expertise, I have experience with many other languages, frameworks and databases.
            </p>
            <br /> 

            <Wrap placeContent={mobileApp ? 'center' : 'flex-start'}>
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
                <TechnologyIcon key={handlebarsLink.name} data={handlebarsLink} />
                <TechnologyIcon key={codeMagicLink.name} data={codeMagicLink} />
            </Wrap>
            <br/> 
            <p style={{ textAlign: mobileApp ? 'center':'start' }}>
			Check out my <a href='https://www.linkedin.com/in/andrew-johnson-96ba18ba/'
                    target='_blank'
                    rel="noopener noreferrer" >LinkedIn</a> profile for more information.
            </p>
        </Column>;

        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={`flex-center`}
                    alignItems={`flex-center`}>

                    {mobileApp ? elem : 
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={mobileApp ? "fadeInUp" : "fadeInLeft"}
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

export default connect(mapStateToProps)(Skills);