import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Action as action } from '../../react_utils/redux/actions';
import { Column } from '../layout/column';
import Container from '../boxes/container';

class VideoPlayer extends Component {

    constructor(){
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
	
    render(){
        if(this.props.data){
            window.history.pushState({}, 'this.props.data.name',`/${this.props.data.project}/video/${this.props.data.name}`);
        }
		
        return <CSSTransition 
            key={'videoPLayer'} 
            in={!!this.props.data}
            onExited={() => this.props.dispatch(action.renderNext()) }
            timeout={400} 
            classNames="fade" 
            unmountOnExit>
            <Column
                onKeyDown={ this.handleKeyPress }
                position={'fixed'}
                top={'0px'}
                left='0px'
                width='100vw'
                height='100vh'
                zIndex='800'
                backgroundColor= 'rgba(0,0,0,0.80)'
                onClick={() => {
                    console.log('data in video', this.props.data);
                    this.props.dispatch(action.dismissVideo());
                    window.history.pushState({}, '',`/${this.props.data.project}`);
                }}>
                <ReactPlayer 
                    width={'100%'}
                    url={this.props.data && this.props.data.url}
                    controls={true}/>;
			
                <Container
                    paddin='30px'>
                    <h3 style={{color: 'white', 
                        backgroundColor: 'rgba(0,0,0,0)',
                        textAlign: "center"}}>{this.props.currentImage && this.props.currentImage.name}</h3>
                    <p style={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0)',
                        textAlign: "center"
                    }}>{this.props.currentImage && this.props.currentImage.description}</p>
                </Container>
            </Column>
        </CSSTransition>;
    }
	
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        if ( this.props.video ){
            this.setState({
                showVideo: true
            });
        }
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, true);
    }

    handleKeyPress(event){

        // if (event.keyCode == 39){
        //     this.props.dispatch(action.nextImage(this.props.currentImage));
        // }
        // if (event.keyCode == 37){
        //     this.props.dispatch(action.previousImage(this.props.currentImage));
        // }
        if (event.keyCode == 27){
            this.props.dispatch(action.dismissVideo());
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.video,
        nextImage: state.nextImage,
        showImage: state.showImage,
        direction: state.direction,
        mobileApp: state.mobileApp
    };
};

export default connect(mapStateToProps)(VideoPlayer);