/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import dimensions from '../../data/dimensions';
import { connect } from 'react-redux';
import { techLinks } from '../../data/technology-data';
	

	
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

        const tensorflowLink = <a 
            href='https://www.tensorflow.org'
            target='_blank'
            rel="noopener noreferrer"
        >Tensorflow</a>;

        const scikitLearnLink = <a 
            href='https://scikit-learn.org/stable/'
            target='_blank'
            rel="noopener noreferrer"
        >Scikit Learn</a>;
		
        const postgres = <a 
            href='https://www.postgresql.org'
            target='_blank'
            rel="noopener noreferrer">PostgreSQL</a>;

        const elem = <Column
            width={mobileApp ? '100%' : '60%'}
            placeContent={mobileApp ? 'center':`center flex-end`}
            alignItems={mobileApp ? 'center' : 'flex-start'}>

            <h2 style={alignment}>Skills</h2>
			
            <p style={alignment}>
				I focus on using machine learning tools such as {tensorflowLink} and {scikitLearnLink} to make the biggest impact on the projects I work on.
            </p>
            <br/> 
            <p style={alignment}>
				Whilst this is my main area of expertise, I have experience with many other languages, frameworks, databases and technologies.
            </p>
            <br/> 

            <Wrap placeContent={mobileApp ? 'center' : 'flex-start'}>
                { techLinks.map((link) =>  <TechnologyIcon key={link.name} data={link} />)}
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
					reference={this.props.reference}
                    margin={dimensions.sectionMargin}
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