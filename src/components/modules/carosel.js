
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Action as action } from '../../react_utils/redux/actions';

// Components
import { Column } from '../layout/column';
import { Row } from '../layout/row';
import { Container } from '../boxes/container';

class Carosel extends React.Component{

    constructor(){
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.notArrowKey = this.notArrowKey.bind(this);
    }
	
    handleKeyDown(e) {
        console.log('Key down in carosel with code ', e.keyCode);
        // Right arrow
        if ( e.keyCode === 39 ) {
            this.props.dispatch(action.nextImage(this.props.currentImage));
        // Left arrow
        } else if ( e.keyCode === 37 ) {
            this.props.dispatch(action.previousImage(this.props.currentImage));
        }
    }
	

    render(){
        const arrowStyle = {
            padding: '10px',
            margin: '10px',
        };
        const imageStyle = {
            objectFit: 'cover',
            maxWidth: 'calc(90% - 300px)',
            width: 'auto',
            height: 'calc(80% - 100px)',
        };
        return <CSSTransition 
            key={'carosel'} 
            in={!!this.props.nextImage || !!this.props.currentImage}
            onExited={() => this.props.dispatch(action.renderNext()) }
            timeout={400} 
            classNames="fade" 
            unmountOnExit>
            <Column
                onKeyDown={ this.handleKeyDown }
                position={'fixed'}
                top={'0px'}
                left='0px'
                width='100vw'
                height='100vh'
                zIndex='800'
                backgroundColor= 'rgba(0,0,0,0.80)'
                onClick={() => {
                    console.log('dismissing');
                    this.props.dispatch(action.dismissImage());
                }}>
                <Row
                    height='calc(80% - 100px)'>
                    <div
                        onClick={(e) => {
                            console.log('The keyCode is ', e, 'and result ', this.notArrowKey(e.keyCode));
                            e.preventDefault();
                            e.stopPropagation();
                            this.props.dispatch(action.previousImage(this.props.currentImage));
                        }}
                    >
                        <img 
                            src="/assets/icons/back-arrow-white.png"      
                            alt='left-arrow' 
                            style={arrowStyle}
                        /></div>
                    <CSSTransition 
                        key={'key'} 
                        in={!!this.props.showImage}
                        onExited={() => {
                            this.props.nextImage && this.props.dispatch(action.renderNext());
                            console.log('onExited');}}
                        timeout={480}
                        classNames={this.props.direction || 'fade'} 
                        unmountOnExit>
                        <img src={this.props.currentImage && this.props.currentImage.imageUrl} 
                            alt='image' 
                            style={imageStyle}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}/>
                    </CSSTransition>
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.props.dispatch(action.nextImage(this.props.currentImage));
                        }}
                    ><img src="/assets/icons/right-arrow-white.png"
                            alt='right-arrow' 
                            style={arrowStyle}
                        /></div>
                </Row>
                <Container
                    // backgroundColor='white'
                    paddin='30px'>
                    <h3 style={{color: 'white', backgroundColor: 'rgba(0,0,0,0)'}}>{this.props.currentImage && this.props.currentImage.name}</h3>
                    <p style={{color: 'white', backgroundColor: 'rgba(0,0,0,0)'}}>{this.props.currentImage && this.props.currentImage.description}</p>
                </Container>
            </Column>
        </CSSTransition>;
    }
	
    notArrowKey(keyCode) {
        return keyCode === 39 || keyCode === 37;
    }
}

const mapStateToProps = state => {

    return {
        currentImage: state.currentImage,
        nextImage: state.nextImage,
        showImage: state.showImage,
        direction: state.direction
    };
};

export default connect(mapStateToProps)(Carosel);