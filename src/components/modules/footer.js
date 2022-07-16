/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';

class Footer extends React.Component {

    render() {
        const style = { cursor: 'pointer', backgroundColor: 'white', color: 'black' };
        const isMobile = this.props.mobileApp; 
        const headerButton = <button style={style} onClick={() => this.props.scrollToRef('header')} >Home</button>;
        const aboutButton =  <button style={style} onClick={() => this.props.scrollToRef('about')} >About</button>;
        const skillsButton = <button style={style} onClick={() => this.props.scrollToRef('skills')} >Skills</button>;
        const myWorkButton = <button style={style} onClick={() => this.props.scrollToRef('myWork')} >My Work</button>;

        return (
            <SafeArea>

                <Column
                    alignItems={isMobile ? 'center':'start'}
                    placeContent={isMobile ? 'center':'flex-start'}
                    margin={'80' + 'px 0px'}
                >
                    { isMobile ?  headerButton :
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                            animateOnce={true}>
                            {headerButton}
                        </ScrollAnimation>
                    }

                    { isMobile ? aboutButton :
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                            animateOnce={true}>
                            {aboutButton}
                        </ScrollAnimation>
                    }
					
                    { isMobile ? skillsButton :
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                            animateOnce={true}>
                            {skillsButton}
                        </ScrollAnimation>
                    }
					
                    { isMobile ? myWorkButton :
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                            animateOnce={true}>
                            {myWorkButton}
                        </ScrollAnimation>
                    }
					
                </Column>
                {/* } */}
            </SafeArea>
        );
    }
}

const mapStateToProps = state => {

    return {
        mobileApp: state.mobileApp,
    };
};

export default connect(mapStateToProps)(Footer);