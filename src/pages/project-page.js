/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

// Components
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import { Container } from '../components/boxes/container';
import { Wrap } from '../components/layout/wrap';
import TechnologyIcon from '../components/images/technology-icon';
import GalleryImage from '../components/images/gallery-image';
import LinkIcon from '../components/images/link-icon';
import VideoIcon from '../components/images/video-icon';

import { Action as action } from '../react_utils/redux/actions';
import { Padding } from '../components/layout/padding';

// PAGES
class ProjectPage extends React.Component{

    constructor(){
        super();
        this.state = {
            canDimiss: false
        };
        this.dismiss = this.dismiss.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.elemRef = React.createRef();
    }
	
    dismiss(history){
        this.props.dispatch(action.dismissAll());
        history.push('/');
    }

    render(){
        const data = this.props.data || {};
        const margin = 20;
        const sectionMargin =  margin + 'px';
        var logo;
		
        if (data){
            logo = <div >
                <img style={{
                    objectFit: 'cover',
                    height: this.props.mobileApp ? '200px' : '350px',
                    width: this.props.mobileApp ? '200px' : '350px'
                }} src={data.logoUrl}/>
            </div>;
        }
		
		
        const containerTop = this.state.elemenTop || window.scrollY + 'px';				
        return ( 
            <BrowserRouter>
                <Route render= {({ history }) => {
                    return <div style={{ 
                        width: `calc(100% - ${margin * 4 + 'px'})`,
                        position: 'absolute',
                        zIndex: '10',
                        margin: margin + 'px',
                        padding: margin + 'px',
                        top: containerTop,
                        backgroundColor: 'rgba(255,255,255,0.99)'
                    }}>
                        <SafeArea 
							    height={this.state.height}>
                            <Column
                                referance={this.elemRef}
                                placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }>
                                <Container
                                    width='100%'
                                    display='flex'
                                    flexDirection={ this.props.smallScreen ? 'column' : 'row' }
                                    placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
                                >
                                    <Column
                                        placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
                                        alignItems={ this.props.smallScreen ? 'center' : 'flex-start' }
                                        width='unset'
                                    >
                                        { data.title &&   
											<h1 
											    style={{ 
											    	fontSize: this.props.mobileApp ? '35px' : this.props.smallScreen ? '50px' :  data.title.length > 10 ? '80px' : data.title.length > 8 ? '100px' : '120px',
											        textDecoration: 'underline',
											        textAlign: this.props.smallScreen ? 'center' : 'start'  
											    }}
											>{data.title}</h1>
                                        }
                                        {this.props.smallScreen && data && data.logoUrl && logo }
                                        <p 
                                            style={{ 
                                                textAlign: this.props.smallScreen ? 'center' : 'start' ,
                                                fontSize: this.props.mobileApp && '15px'
                                            }}
                                        >{data.description}</p>
	
                                    </Column>

                                    {!this.props.smallScreen && data && data.logoUrl && <Padding padding='30px' flexGrow='1'/>}
                                    {!this.props.smallScreen && data && data.logoUrl && logo }
                                    {!this.props.smallScreen &&  <Container
                                        alignSelf={ this.props.smallScreen ? 'center' : 'start' }
                                        alignItems={ this.props.smallScreen ? 'center' : 'flex-end' }
                                        height='100%'
                                        placeContent={ this.props.smallScreen ? 'center' : 'flex-end flex-end' }>
                                        <button 
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => this.dismiss(history)}>X</button>
                                    </Container>}
                                </Container>
	
						
                                {/* technologies */}
                                { data.technologies && 
								<Column
								    placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
								    alignItems={ this.props.smallScreen ? 'center' : 'flex-start' }
								    margin={sectionMargin}>
								    <h3>Featuring</h3>
								    <Wrap
								        alignItems={ this.props.smallScreen ? 'center' : 'start' }
								        placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
								    >
								        { data.technologies.map((technology) => {
								            return ( <TechnologyIcon key={technology.name} data={technology}/> ); 
								        	})
								        }
								    </Wrap>									
								</Column>
                                }
	
                                {/* links  */}
                                { data.links &&
							<Column	
							    id='links'
							    placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
							    alignItems={ this.props.smallScreen ? 'center' : 'flex-start' }
							    margin={sectionMargin}>
                            	<h3>{data.linksTitle}</h3> 
							    <Wrap
							        alignItems={ this.props.smallScreen ? 'center' : 'start' }
							        placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }>
								    { data.links.map((link) => {
								        return <LinkIcon key={link.href} data={link} />; 
								    	})
								    }
							    </Wrap>
							</Column>
                                }

                        	{ data.screenShots &&
                            <Column
                                id='screenShots'
                                placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
                                alignItems={ this.props.smallScreen ? 'center' : 'flex-start' }
                                margin={sectionMargin}>
                                <h3>Gallery</h3>
                                <Wrap
                                    placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }>
                                    { data.screenShots && data.screenShots.map((screenshot) => {
                                        return <GalleryImage key={screenshot.imageUrl} data={screenshot} />;  
                                    	})
                                    }
                                </Wrap>
                            </Column>
                                }
								
                                { data.videos &&
                            <Column
                                id='videos'
                                placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }
                                alignItems={ this.props.smallScreen ? 'center' : 'flex-start' }
                                margin={sectionMargin}>
                                <h3>Videos</h3>
                                <Wrap
                                    placeContent={ this.props.smallScreen ? 'center' : 'flex-start' }>
                                    { data.videos && data.videos.map((video) => {
                                        return <VideoIcon key={video.imageUrl} data={video} />;  
                                    	})
                                    }
                                </Wrap>
                            </Column>
                                }
                            </Column>
                        </SafeArea>				
                    </div>;
                }} />
            </BrowserRouter>
        );
    
    }

    componentDidMount() {

        setTimeout(() => { 
            document.addEventListener('scroll', this.handleScroll);	

            const windowScrollYTop = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight;
            const elementHeight = this.elemRef.current.clientHeight;
            const windowBottom = windowScrollYTop + elementHeight;
            var elemenTop;
            const toobig = windowBottom > totalHeight;
            if ( (toobig) ){
                elemenTop = totalHeight - elementHeight;
            } else {
                elemenTop = windowScrollYTop;
            }
            window.scrollTo(0, elemenTop);
            this.setState({ 
                elemenTop: elemenTop,
                height: elementHeight + 500
            }, () => this.setState({
                canDimiss: true
            })
            );
			
					
            const options = window.location.pathname.split('/');
            var image;
            if (options[2]){
                if ( options[2] == 'image' ){ 
                    if(options[3]){ image = options[3].split('%20').join(' '); }
                }
                if ( options[2] == 'video' ){ 
                    if(options[3]){ image = options[3].split('%20').join(' '); }
                }
            }
			
            for (let index = 0; index < this.props.data.screenShots.length; index++) {
                const imagedata = this.props.data.screenShots[index];
                if (imagedata.name == image){
                    this.props.dispatch(action.showImage(imagedata));
                }
            }
            for (let index = 0; index < this.props.data.videos.length; index++) {
                const videoData = this.props.data.videos[index];
                if (videoData.name == image){
                    this.props.dispatch(action.showVideo(videoData));
                }
            }
        }, 600);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll, true);
    }
	
    handleScroll(){
        if(this.state.canDimiss){
            if( this.elemRef.current){
                const windowScrollYTop = window.scrollY;
                const elementHeight = this.elemRef.current.clientHeight;
                const windowBottom = windowScrollYTop + window.innerHeight;
                const rect = this.elemRef.current.getBoundingClientRect();
                const elementDistanceFromTop = rect.top + window.scrollY;
                const shouldDismissUp = windowBottom < elementDistanceFromTop + 100;
                const shouldDismissDown = windowScrollYTop > elementDistanceFromTop + elementHeight - 100;
				
                if (shouldDismissUp || shouldDismissDown){ 
                    this.props.dispatch(action.dismissAll());
                    window.history.pushState({}, '/','/');
                }
            }
        }
    }
}
	
const mapStateToProps = state => {
    return {
        pageToRender: state.pageToRender,
        smallScreen: state.smallScreen,
        currentImage: state.currentImage,
        mobileApp: state.mobileApp
    };
};

export default connect(mapStateToProps)(ProjectPage);



