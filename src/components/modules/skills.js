/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';
import { techlinks } from '../../data/technology-data';
	

	
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
			
        const dartlink = <a 
            href='https://dart.dev/'
            target='_blank'
            rel="noopener noreferrer">Dart</a>; 

        const flutterlink = <a 
            href='https://flutter.dev/'
            target='_blank'
            rel="noopener noreferrer"
        >Flutter</a>;
		
        const firebaseLink = <a 
            href='https://firebase.google.com/'
            target='_blank'
            rel="noopener noreferrer">Firebase</a>;

        const elem = <Column
            width={mobileApp ? '100%' : '60%'}
            placeContent={mobileApp ? 'center':`center flex-end`}
            alignItems={mobileApp ? 'center' : 'flex-start'}>

            <h2 style={alignment}>Skills</h2>
			
            <p style={alignment}>
				The main areas I specialise in is making mobile and web applications using Google's {flutterlink} framework with code written in {dartlink} or React using Javascript.
            </p>
            <br /> 

            <p style={alignment}>Server side I implement node.js and use {firebaseLink} or PostgreSQL for databases.</p>
            <br /> 
            <p style={alignment}>
				Whilst this is my main area of expertise, I have experience with many other languages, frameworks and databases.
            </p>
            <br /> 

            <Wrap placeContent={mobileApp ? 'center' : 'flex-start'}>
                { techlinks.map((link) =>  <TechnologyIcon key={link.name} data={link} />)}
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