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
import { Row } from '../components/layout/row';

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
        const props = this.props;
        const data = props.data || {};
        const mobileApp = props.mobileApp;
        const smallScreen = props.smallScreen;
        const margin = 20;
        const sectionMargin =  margin + 'px';
        const renderCenterlogo = smallScreen || mobileApp;
        const renderSideLogo = !smallScreen && data && (data.logoUrlSmall || data.logoUrlBig);

        var logo;
		
        if (data){
            logo = <div >
                <img style={{
                    objectFit: 'cover',
                    height: mobileApp ? '200px' : '350px',
                    width: mobileApp ? '200px' : '350px'
                }} 
                src={ mobileApp ? data.logoUrlSmall : data.logoUrlBig }/>
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
                                placeContent={ smallScreen ? 'center' : 'flex-start' }>
                                <Container
                                    width='100%'
                                    display='flex'
                                    flexDirection={ smallScreen ? 'column' : 'row' }
                                    placeContent={ smallScreen || mobileApp ? 'center' : 'space-between' }
                                >
                                    <Column
                                        placeContent={ smallScreen ? 'center' : 'flex-start' }
                                        alignItems={ smallScreen ? 'center' : 'flex-start' }
                                        width='unset'
                                    >
                                        { data.title &&   
											<h1 
											    style={{ 
											    	fontSize: mobileApp ? '35px' : smallScreen ? '50px' :  data.title.length > 10 ? '80px' : data.title.length > 8 ? '100px' : '120px',
											        textDecoration: 'underline',
											        textAlign: smallScreen ? 'center' : 'start',
											        padding: '20px'
 
											    }}
											>{data.title}</h1>
                                        }
                                        { renderCenterlogo && logo }
                                        <p 
                                            style={{ 
                                                textAlign: smallScreen ? 'center' : 'start' ,
                                                fontSize: mobileApp && '15px',
                                                padding: '20px'
                                            }}
                                        >{data.description}</p>
	
                                    </Column>
                                    <Row width='unset'>
                                        {!smallScreen && data && data.logoUrl && <Padding padding='30px' flexGrow='1'/>}
                                        {renderSideLogo && logo }
                                        {!smallScreen &&  <Container
                                            alignSelf={ smallScreen ? 'center' : 'start' }
                                            alignItems={ smallScreen ? 'center' : 'flex-end' }
                                            height='100%'
                                            placeContent={ smallScreen ? 'center' : 'flex-end flex-end' }>
                                            <button 
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => this.dismiss(history)}>X</button>
                                        </Container>}
                                    </Row>
                                </Container>
	
						
                                {/* technologies */}
                                { data.technologies && 
								<Column
								    placeContent={ smallScreen ? 'center' : 'flex-start' }
								    alignItems={ smallScreen ? 'center' : 'flex-start' }
								    margin={sectionMargin}>
								    <h3>Featuring</h3>
								    <Wrap
								        alignItems={ smallScreen ? 'center' : 'start' }
								        placeContent={ smallScreen ? 'center' : 'flex-start' }
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
							    placeContent={ smallScreen ? 'center' : 'flex-start' }
							    alignItems={ smallScreen ? 'center' : 'flex-start' }
							    margin={sectionMargin}>
                            	<h3>{data.linksTitle}</h3> 
							    <Wrap
							        alignItems={ smallScreen ? 'center' : 'start' }
							        placeContent={ smallScreen ? 'center' : 'flex-start' }>
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
                                placeContent={ smallScreen ? 'center' : 'flex-start' }
                                alignItems={ smallScreen ? 'center' : 'flex-start' }
                                margin={sectionMargin}>
                                <h3>Gallery</h3>
                                <Wrap
                                    placeContent={ smallScreen ? 'center' : 'flex-start' }>
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
                                placeContent={ smallScreen ? 'center' : 'flex-start' }
                                alignItems={ smallScreen ? 'center' : 'flex-start' }
                                margin={sectionMargin}>
                                <h3>Videos</h3>
                                <Wrap
                                    placeContent={ smallScreen ? 'center' : 'flex-start' }>
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
                elemenTop = totalHeight - elementHeight - 100;
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
            if (this.props.data.screenShots){
                for (let index = 0; index < this.props.data.screenShots.length; index++) {
                    const imagedata = this.props.data.screenShots[index];
                    if (imagedata.name == image){
                        this.props.dispatch(action.showImage(imagedata));
                    }
                }
            }
            if (this.props.data.videos){
                for (let index = 0; index < this.props.data.videos.length; index++) {
                    const videoData = this.props.data.videos[index];
                    if (videoData.name == image){
                        this.props.dispatch(action.showVideo(videoData));
                    }
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



