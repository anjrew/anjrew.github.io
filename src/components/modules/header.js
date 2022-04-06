/* eslint-disable indent */
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
		const showIam = (this.props.smallScreen && this.props.mobileApp) || this.props.mobileApp || this.props.smallScreen; 
        return (
            <SafeArea>

                <Column
                    reference={this.props.reference}
                    height={'calc(80vh - 20px)'}
                    placeContent='space-evenly'
                >
                    <Row
                        placeContent={this.props.mobileApp ?'center center': 'center flex-start'}>
                        <ScrollAnimation
                            initiallyVisible={this.props.mobileApp}
                            animateIn="fadeInLeft"
                            animateOnce={true}>
                            <h1>Hello.</h1>
                        </ScrollAnimation>

                    </Row>
					{ showIam && 
						<ScrollAnimation
							initiallyVisible={this.props.mobileApp}
							animateIn={  "fadeIn"  }
							animateOnce={true}>
							<h1 style={{ textAlign: 'right' }}>I am</h1>
						</ScrollAnimation>
                    }
                    <Row
                        placeContent={this.props.mobileApp ?'center center':'center flex-end'}>
                        { this.props.mobileApp || this.props.smallScreen ? 
                           

                            <ScrollAnimation
                                initiallyVisible={this.props.mobileApp}
                                animateIn={ this.props.mobileApp ? "fadeInUp" : "fadeInRight" }
                                animateOnce={true}>
                                <h1 style={{ textAlign: 'right' }}>Andrew</h1>
                            </ScrollAnimation> 
                            :
							 <ScrollAnimation
							 initiallyVisible={this.props.mobileApp}
							 animateIn={ this.props.mobileApp ? "fadeInUp" : "fadeInRight" }
							 animateOnce={true}>
							 <h1 style={{ 
								 textAlign: this.props.mobileApp ?'center center':'right'
								 }}>I am Andrew</h1>

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
        smallScreen: state.smallScreen
    };
};

export default connect(mapStateToProps)(Header);