/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import Diamensions from '../../data/diamensions';

class Footer extends React.Component {

    render() {
        const isMobile = this.props.mobileApp; 
        return (
            <SafeArea>

                <Column
                    alignItems={isMobile ? 'center':'start'}
                    placeContent={isMobile ? 'center':'flex-start'}
                    margin={'80' + 'px 0px'}
                >
                    <ScrollAnimation
                        animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                        animateOnce={true}>
                        <button onClick={() => this.props.scrollToRef('header')} >Home</button>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                        animateOnce={true}>
                        <button onClick={() => this.props.scrollToRef('about')} >About</button>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                        animateOnce={true}>
                        <button onClick={() => this.props.scrollToRef('skills')} >Skills</button>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn={this.props.mobileApp ? "fadeInUp" : "fadeInLeft"}
                        animateOnce={true}>
                        <button onClick={() => this.props.scrollToRef('myWork')} >My Work</button>
                    </ScrollAnimation>

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