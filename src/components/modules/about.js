/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import dimensions from '../../data/dimensions';
import { connect } from 'react-redux';

class About extends React.Component {

    render() {
        
        const track = this.props.currentTrack;
        var currentlyPlaying = '';
 
        if(track){
            if (track['@attr']){
                currentlyPlaying = track['@attr'].nowplaying;
            } 
        } 
        var me = currentlyPlaying ? 'I ' : "I've ";
        var prefix = currentlyPlaying ? 'am ' : "just been ";
		
        const props = this.props;
        const linkStyle = {
            cursor: 'pointer',  
            textDecoration: 'underline', 
            padding: '0px' , 
            margin: ' 0px 8px',
            backgroundColor: 'rgba(0,0,0,0)'};
        const alignment = { textAlign: props.mobileApp ? 'center':'start' };
			
        const element = <Column
	
            margin={dimensions.sectionMargin}
            placeContent={props.mobileApp ? 'center':`flex-start'`}
            alignItems={props.mobileApp ? 'center':`flex-start`}
            alignSelf={props.mobileApp ? 'center':`flex-start`} >
				
            <h2 style={alignment}>About</h2>
            <p style={{...alignment, maxWidth: props.mobileApp ? '100%' :'1200px' }}>
			I am passionate, driven and dedicated to making a positive impact on the world through work in the sustainability, environment, and green energy sectors.
            </p>
			<p style={{...alignment, maxWidth: props.mobileApp ? '100%' :'1200px' }}>
			Whether I am working on a new energy-efficient technology or developing a strategy to reduce waste and minimize resource consumption, I am always striving to find new and creative ways to make a difference.
			 With this in mind there is no doubt for me that I will continue to make a meaningful contribution to these important causes for years to come.
            </p>
            <br/>
            <p style={alignment}>
				This page is about me and what I do. 
				So check out my 
                <button 
                    style={linkStyle}
                    onClick={ () => props.scrollToRef('skills')}> Skills </button> 
				and 
                <button 
                    style={linkStyle}
                    onClick={() => props.scrollToRef('myWork')}
                >Work</button>below if you like. 
            </p>

            <br/>
            
            <br/>

            <p style={alignment}>
				Feel free to 
                <button
                    style={linkStyle}
                    onClick={() => props.scrollToRef('contact')}
                >Contact</button>
				me about work,
				general chit-chat, and lava lamp queries.</p>
            <br/>
            <p style={alignment}>You can take a look at my CV <a 
                href="https://aj-hosted-content.s3.eu-central-1.amazonaws.com/CV_EDIT_AJOHNSON+-+revised.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >here</a>.</p>
            <br/>
            
            <p style={{ ...alignment ,opacity: track? 1:0}} >  
                {me} {prefix} listening to {' '}
                <a href={track && track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >{track && track.name}</a> {' '}
			by {track && track.artist['#text']} { '  ' } 
                <span style={{display: 'inline-block'}} className={currentlyPlaying && "pulse"}>🎶</span></p>
        </Column>;
		

        return (
            <SafeArea
                reference={props.reference}
                margin={dimensions.sectionMargin}
                placeContent={props.mobileApp ? 'center':`flex-start'`}
                alignItems={props.mobileApp ? 'center':`flex-start`}
                width={props.mobileApp ? '100%' : '60%'}
            >
              
                {this.props.mobileApp ? element :<ScrollAnimation
                    animated={false}
                    initiallyVisible={props.mobileApp}
                    animateIn={ props.mobileApp ? "fadeInUp" : "fadeInLeft" }
                    animateOnce={true} 
                >	
                    {element}
                </ScrollAnimation>
					
                }
            </SafeArea>
        );
    }
}

const mapStateToProps = state => {
    return {
        mobileApp: state.mobileApp,
        currentTrack: state.tracks && state.tracks[0]
    };
};

export default connect(mapStateToProps)(About);