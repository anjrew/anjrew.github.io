import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import Diamensions from '../../data/diamensions';
import { connect } from 'react-redux';

class About extends React.Component {

    render() {

        return (
            <SafeArea>
                <Column
                    referance={this.props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={this.props.mobileApp ? 'center':`flex-center'`}
                    alignItems={this.props.mobileApp ? 'center':`flex-center`}
                >
                    <Row
                        width={this.props.mobileApp ? '100%' : '60%'}
                        placeContent={this.props.mobileApp ? 'center':'center flex-start'}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.mobileApp ? 'center':'start' }}>About</h2>
                            <p style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}>
								A passion for intuative user experience drives me to create products that are not only 
								efficently functional, but a pleasure to use.
                            </p>
                            <br/>
                            <p style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}
                            >It started with a fundamental belief that technology can set us free.</p>
                            <br/>
                            <p
                                style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}
                            >Berlin based.</p>


                            <p
                                style={{ textAlign: this.props.mobileApp ? 'center': 'start' }}
                            >Fast
								Fast load times and lag free interaction, my highest priority.
								Responsive
								My layouts will work on any device, big or small.
								Intuitive
								Strong preference for easy to use, intuitive UX/UI.
								Dynamic
								Websites don't have to be static, I love making pages come to life.</p>
                        </ScrollAnimation>
                    </Row>
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

export default connect(mapStateToProps)(About);