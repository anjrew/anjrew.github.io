import React from 'react';

export class SafeArea extends React.Component{

    constructor (props) {
        super(props);
        this.padding = 20;
        this.paddingTwo = this.padding*2;
    }
    render(){
        const props = this.props;
        return (
            <div 
                style={{
                    padding: props.padding || '20px',
                    alignItems: props.alignItems ||'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100% - 40px)',
                    width: 'calc(100% - 40px)',
                    marginTop: props.marginTop,
                    placeContent: props.placeContent,
                    margin: props.margin,
                    overflowY: props.overflowY
                }} 
                className="safe-area"
                ref={ props.reference } >
                {props.children}
            </div>
        );
    }
}