/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';

// Components
import { SafeArea } from '../components/layout/safe_area';
import { Column } from '../components/layout/column';
import Container from '../components/boxes/container';
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
	
    dismiss(){
        this.props.dispatch(action.dismissAll());
        window.history.pushState({}, '/','/');
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
        const notBigScreen = smallScreen || mobileApp;

        let logo;
		
        if (data){
            logo = <div >
                <img style={{
                    paddingTop: '20px',
                    objectFit: 'cover',
                    height: mobileApp ? '200px' : '350px',
                    width: mobileApp ? '200px' : '350px'
                }} 
                src={ mobileApp ? data.logoUrlSmall : data.logoUrlBig }/>
            </div>;
        }
		
        const dismissCross =<Container
            alignSelf={ smallScreen ? 'center' : 'start' }
            alignItems={ smallScreen ? 'center' : 'flex-end' }
            height='100%'
            placeContent={ smallScreen ? 'center' : 'flex-end flex-end' }>
            <button 
                style={{
                    backgroundColor: 'rgba(0,0,0,0)',
				 cursor: 'pointer', 
                    position: 'absolute',
                    right: '-7px',
                    top: '-5px'
                    // transform: notBigScreen ? 'translateX(29px) translateY(-10px)' : 'translateX(29px) translateY(-10px)'
                }}
                onClick={() => this.dismiss(history)}>X</button>
        </Container>;
		
		
        const containerTop = this.state.elemenTop || window.scrollY + 'px';				
        return (  <div style={{ 
            width: `calc(100% - ${margin * 4 + 'px'})`,
            position: 'absolute',
            zIndex: '10',
            margin: margin + 'px',
            padding: margin + 'px',
            top: containerTop,
            backgroundColor: 'rgba(255,255,255,0.99)'
        }}>
            <SafeArea 
                height={this.state.height}
				overflowY= 'scroll'
				>
                <Column
                    referance={this.elemRef}
                    placeContent={ smallScreen ? 'center' : 'flex-start' }>
                    {notBigScreen && dismissCross}
                    <Container
                        width='100%'
                        display='flex'
                        flexDirection={ smallScreen ? 'column' : 'row' }
                        placeContent={ smallScreen || mobileApp ? 'center' : 'space-between' }
                        alignItems='flex-start'
                    >
                        <Column
                            placeContent={ smallScreen ? 'center' : 'flex-start' }
                            alignItems={ smallScreen ? 'center' : 'flex-start' }
                            width='100%'
                            alignSelf= "flex-start"
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
                            { data.description && data.description.map((paragraph) =>
                                <p 	key={paragraph}
                                    style={{ 
                                        textAlign: smallScreen ? 'center' : 'start' ,
                                        fontSize: mobileApp && '15px',
                                        padding: '20px'
                                    }}
                                >{paragraph}</p>
                            )}
                            { data.siteUrl &&  <a 
                                href={data.siteUrl}
                                style={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    fontSize: "25px"
                                }}
                                target='_blank'
                                rel="noopener noreferrer">Visit the official site.</a>}
                            { data.repoUrl &&  <a 
                                style={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    fontSize: "25px"
                                }}                                            href={data.repoUrl}
                                target='_blank'
                                rel="noopener noreferrer">Look at the code in the repo.</a>}
                                        
	
                        </Column>
                        <Row width='unset'>
                            {!smallScreen && data && data.logoUrl && <Padding padding='30px' flexGrow='1'/>}
                            {/* Logo */}
                            {renderSideLogo && logo }
                            {/* Dismiss Cross */}
                            {!smallScreen &&  dismissCross}
                        </Row>
                    </Container>
	
                    <Column
                        padding={'10px'}
                        width='unset'
                        alignSelf='flex-start'
                    >
                        {/* technologies */}
                        { data.technologies && 
								<Column
								    placeContent={ smallScreen ? 'center' : 'flex-start' }
								    alignItems={ smallScreen ? 'center' : 'flex-start' }
								    margin={sectionMargin}
								    maxWidth="80%">
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
							    margin={sectionMargin}
							    maxWidth="80%">

                            	<h3 style={{ textAlign : 'center'}}>{data.linksTitle}</h3> 
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
                                margin={sectionMargin}
                                maxWidth="80%">

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
                                margin={sectionMargin}
                                maxWidth="80%">
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
								
								
                </Column>
            </SafeArea>				
        </div>
        );
    }

    componentDidMount() {

		console.log('Project mounting');

        setTimeout(() => { 
            document.addEventListener('scroll', this.handleScroll);	
            // Top of the view window
            const windowScrollYTop = window.scrollY;
            // Height of the whole document
            const documentHeight = document.documentElement.scrollHeight;
            console.log(`Document totalHeight ${documentHeight} `);
            // Height of the element
            const elementHeight = this.elemRef.current.clientHeight;
            console.log(`Element height ${elementHeight} `);
            //The postition of the window bottom
            const elementBottom = offset(this.elemRef.current).top + elementHeight ;
            console.log('elementBottom' ,elementBottom);
            let elemenTop;
            const toobig = elementBottom > documentHeight;
            if ( (toobig) ){
                console.log('Project page was to big, adjusting');
                elemenTop = documentHeight - elementHeight - 200;
                this.setState({ 
                    elemenTop: elemenTop,
                    height: elementHeight + 500
                }, () => {
                    window.scrollTo(0, elemenTop);
					this.setState({
                        canDimiss: true,
                    });
                }
                );
            } else {
                this.setState({ 
                    elemenTop: elemenTop,
                    height: elementHeight + 500
                }, () => {
                    window.moveTo(0, elemenTop);
                    this.setState({
                        canDimiss: true,
                    });
                }
                );
                elemenTop = windowScrollYTop;
            }
			
          
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
        }, 1);
    }
	
    offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll, true);
    }
	
    handleScroll(){
        if (this.elemRef){

            if(this.state.canDimiss){
                if( this.elemRef.current){
					
                    const elementBounds = this.elemRef.current.getBoundingClientRect();
                    const shouldDismissUp = elementBounds.top > window.innerHeight / 2;
                    const shouldDismissDown = elementBounds.bottom < window.innerHeight / 2;
					
                    if (shouldDismissUp || shouldDismissDown){ 
                        if(shouldDismissUp){
                            console.log("Dismissing because of up");
                        } else {
                            console.log("Dismissing because of down");
                        }
                        this.props.dispatch(action.dismissAll());
                        window.history.pushState({}, '/','/');
                    }
                }
            }
        }
    }
}
	
function offset(el) {
    if (el){
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
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



