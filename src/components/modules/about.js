/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

class About extends React.Component {

    render() {
        
        const track = this.props.currentTrack;
        var currentlyPlaying = false;
 
        if(track){
            if (track['@attr']){
                currentlyPlaying = track['@attr'].nowplaying;
            } 
        } 
        var me = currentlyPlaying ? 'I ' : "I've ";
        var prefix = currentlyPlaying ? 'am ' : "just been ";
		
        const props = this.props;
        const linkStyle = {
            textDecoration: 'underline', 
            padding: '0px' , 
            margin: ' 0px 8px',
            backgroundColor: 'rgba(0,0,0,0)'};
        const alignment = { textAlign: props.mobileApp ? 'center':'start' };
			
        const element = <Column
            margin={Diamensions.sectionMargin}
            placeContent={props.mobileApp ? 'center':`flex-start'`}
            alignItems={props.mobileApp ? 'center':`flex-start`}
            alignSelf={props.mobileApp ? 'center':`flex-start`} >
            <h2 style={alignment}>About</h2>
            <p style={alignment}>
				I am a Berlin-based software developer. 
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
            <p style={alignment}>
			I love intuitive user experiences: pages that load fast, are lag free and responsive to all device sizes.
            </p>
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
                href="https://my-portfolio-earyzhe.s3.amazonaws.com/Andrew+Johnson+CV+Developer+(22.01.2019)+German.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >here</a>.</p>
            <br/>
            
            <p style={{ opacity: track? 1:0}} >  
                {me} {prefix} listening to {' '}
                <a href={track && track.url}
                >{track && track.name}</a> 
			by {track && track.artist['#text']} { '  ' } 
                <span style={{display: 'inline-block'}} className={currentlyPlaying && "pulse"}>🎶</span></p>
        </Column>;
		

        return (
            <SafeArea
                referance={props.referance}
                margin={Diamensions.sectionMargin}
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
    console.log('current track in wkvdne', state.tracks && state.tracks[0]);
    return {
        mobileApp: state.mobileApp,
        currentTrack: state.tracks && state.tracks[0]
    };
};

export default connect(mapStateToProps)(About);