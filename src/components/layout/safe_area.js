import React from 'react';

export class SafeArea extends React.Component{

    constructor (props) {
        super(props);
        this.padding = 20;
        this.paddingTwo = this.padding*2;
        this.style = {
            padding: props.padding || '20px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 40px)',
            width: 'calc(100% - 40px)'
        };
    }
    render(){
        return (
            <div style={this.style} className="safe-area">
                {this.props.children}
            </div>
        );
    }
}