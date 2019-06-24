import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyHero from 'react-lazy-hero';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return (
            <SafeArea>

                {this.props.mobileApp ? 
				
                    <Column

					placeContent='space-evenly'
                    >
                        <Row
                            placeContent={'center flex-start'}>
                            <ScrollAnimation
                                animateIn="fadeInLeft"
                                animateOnce={true}
                            >
                                <h1>Hi there. </h1>
                            </ScrollAnimation>

                        </Row>
                        <Row
                            placeContent={'center flex-end'}>
                            <ScrollAnimation
                                animateIn="fadeInRight"
                                animateOnce={true}
                            >
                                <h1>I'm Andrew</h1>
                            </ScrollAnimation>
                        </Row>

                        <img src='/assets/images/me-noeyes.png'/>
                    </Column>

                    :
					
                    <Column
                        height={'calc(80vh - 20px)'}
                        placeContent='space-evenly'
                    >
                        <Row
                            placeContent={'center flex-start'}>
                            <ScrollAnimation
                                animateIn="fadeInLeft"
                                animateOnce={true}
                            >
                                <h1>Hi there. </h1>
                            </ScrollAnimation>

                        </Row>
                        <Row
                            placeContent={'center flex-end'}>
                            <ScrollAnimation
                                animateIn="fadeInRight"
                                animateOnce={true}
                            >
                                <h1>I'm Andrew</h1>
                            </ScrollAnimation>
                        </Row>
                    </Column>
                }
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