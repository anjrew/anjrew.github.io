import React from 'react';
import { callbackify } from 'util';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';



export default class Header extends React.Component {

    constructor() {
        super();
        this.parallaxShift = this.parallaxShift.bind(this);
        this.state = {
            offset: 0
        };
    }

    render() {
        return (
            <SafeArea>
                <Column
                    height={'calc(100vh - 20px)'}
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
            </SafeArea>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift() {
        this.setState({
            offset: window.pageYOffset
        });
    }
}