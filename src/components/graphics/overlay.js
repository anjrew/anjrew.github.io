/* eslint-disable indent */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Container from '../../components/boxes/container';
import { Action as action } from '../../react_utils/redux/actions';

export class Overlay extends React.Component{

    constructor(){
        super();
        this.dismiss = this.dismiss.bind(this);
    }
	
    dismiss(history){
        this.props.dispatch(action.dismissAll());
        history.push('/');
    }
	
    render(){
        return (
            <BrowserRouter>
                <Route render= {({ history }) => {
                   return <CSSTransition 
                        in={!!this.props.in} 
                        timeout={400} 
                        classNames="fade" 
                        unmountOnExit>
                        <Container 
                            padding="40px"
                            position="fixed"
                            width='100vw'
                            height='100vh'
                            backgroundColor= 'rgba(0,0,0,0.70)'
                            zIndex="5"
                            top='0px'
                            onClick={(e) => {
								this.dismiss(history);
								e.preventDefault();
								e.stopPropagation();
								console.log('hit');
							}}
							onMouseEnter={(e) => event.preventDefault(e)} 
                        	onMouseLeave={(e) => event.preventDefault(e)}
                        >
                        </Container>
                    </CSSTransition>;
                }} />
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {

    return {
        showProject: state.showProject,
    };
};

export default connect(mapStateToProps)(Overlay);