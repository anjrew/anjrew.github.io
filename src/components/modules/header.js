/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return (
            <SafeArea>

                <Column
                    referance={this.props.referance}
                    height={'calc(80vh - 20px)'}
                    placeContent='space-evenly'
                >
                    <Row
                        placeContent={'center flex-start'}>
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >
                            <h1>Hello.</h1>
                        </ScrollAnimation>

                    </Row>
                    { this.props.mobileApp && 
					<ScrollAnimation
							    initiallyVisible={this.props.mobileApp}
							    animateIn={  "fadeIn"  }
							    animateOnce={true}>
							    <h1 style={{ textAlign: 'right' }}>I am</h1>

					</ScrollAnimation>
                    }
                    <Row
                        placeContent={'center flex-end'}>
                        { !this.props.mobileApp ? 
                            <ScrollAnimation
							    initiallyVisible={this.props.mobileApp}
							    animateIn={ this.props.mobileApp ? "fadeInUp" : "fadeInRight" }
							    animateOnce={true}>
							    <h1 style={{ textAlign: 'right' }}>I am Andrew</h1>

                            </ScrollAnimation> :

                            <ScrollAnimation
                                initiallyVisible={this.props.mobileApp}
                                animateIn={ this.props.mobileApp ? "fadeInUp" : "fadeInRight" }
                                animateOnce={true}>
                                <h1 style={{ textAlign: 'right' }}>Andrew</h1>
                            </ScrollAnimation>
                        }
                    </Row>
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

export default connect(mapStateToProps)(Header);