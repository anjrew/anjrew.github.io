import React from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';

export default class ProjectImage extends React.Component{

    render(){
		const imageContainerStyle = {
			// '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
			width: '200px', 
			height: '200px',
			margin: '3px',
			overflow: 'hidden',
			display: 'flex',
			placeContent: 'center center'
		}
		const imageStyle = {
			// '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
			width: '200px', 
			height: '200px',
			margin: '3px',
			overflow: 'hidden' 
		}
        return (
            <div style={imageContainerStyle}>
				<img className='project' src='/assets/images/cupomatic.jpg'/>
			</div>
        );
    }
}

