import React from 'react';
import { Row } from '../layout/row';
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { LinkButton } from '../buttons/link_button';

export default class MyWork extends React.Component {

    render() {
        return (
            <SafeArea>
                <Column
                    placeContent={`flex-${this.props.align ||'start'} `}
                    alignItems={`flex-${this.props.align ||'start'} `}
                >
                    <Row
                        width='60%'
                        placeContent={'center flex-start'}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            animateOnce={true}
                        >	
                            <h2 style={{ textAlign: this.props.align ||'start' }}>My Work</h2>

                            <Column
								alignItems={'start'}>
                                <a
                                    className='link-button'
                                    href='https://github.com/earyzhe'
                                >GitHub</a> 
                                <a
                                    className='link-button'
                                    href='http://www.cupomatic.net/'
                                >CupOmatic</a>
								<a
                                    className='link-button'
                                    href='https://www.facebook.com/dialincoffee/'
                                >Dial in</a> 
                            </Column>


                        </ScrollAnimation>
                    </Row>
                </Column>
            </SafeArea>
        );
    }
}