import React from 'react';
import { connect } from 'react-redux';
import { projects } from '../../data/project-page-data';

// Components
import { Column } from '../layout/column';
import { SafeArea } from '../layout/safe_area';
import ScrollAnimation from 'react-animate-on-scroll';
import { Wrap } from '../layout/wrap';
import ProjectImage from '../images/project-image';
import Diamensions from '../../data/diamensions';

class MyWork extends React.Component {

    render() {
        const props = this.props;
        const mobileApp = props.mobileApp;

        const elem = <Column
            width='100%'
            placeContent={mobileApp ? 'center' :'center flex-start'}>

            <h2 style={{
                alignSelf: mobileApp ? 'center': 'start',  
                textAlign: mobileApp ? 'center': 'start',
                backgroundColor: mobileApp ? 'white' : 'rgba(0,0,0,0)'					 
            }}>My Work</h2>

            <Column
                alignItems={mobileApp ? 'center' :'start'}>
                <p style={{ 
                    textAlign: mobileApp ? 'center': 'start',	
                    alignSelf: mobileApp ? 'center': 'start' 
                }}
                >Check out my code on  <a
                        style={{ backgroundColor:"white"}}
                        className='link-button'
                        href='https://github.com/earyzhe'
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub</a> and see my projects below.</p> 


                <p style={{ 
                    textAlign: mobileApp ? 'center': 'start',
                    alignSelf: mobileApp ? 'center': 'start' 
                }}
                >If you are currently using any of my products;
				with your help, I can keep them alive and updated! I run on Caffeine...</p>
                <a 
                    href= "https://www.buymeacoffee.com/earyzhe" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        className={'grow-on-hover'}
                        src="/assets/images/buy-me-coffee-button.png" 
                        alt="Donate" 
                        style={{margin: '20px'}}
                    />
                </a>
                <Wrap placeContent={mobileApp ? 'center' : 'flex-start'}>
                    { projects.map((project) => <ProjectImage key={project.title} project={project}/>)}
                </Wrap>
            </Column>
            
        </Column>;
		
        return (
            <SafeArea>
                <Column
                    referance={props.referance}
                    margin={Diamensions.sectionMargin}
                    placeContent={mobileApp ? 'center': `flex-start`}
                    alignItems={mobileApp ? 'center': `flex-start`}
                >
                    { mobileApp ? elem : 
                        <ScrollAnimation
                            animateIn={ mobileApp ? "fadeInUp" : "fadeInLeft" }
                            animateOnce={true}>	
                            {elem}
                        </ScrollAnimation>
                    }
                </Column>
            </SafeArea>
        );
    }
}

const mapStateToProps = state => {

    return {
        mobileApp: state.mobileApp,
    };
};

export default connect(mapStateToProps)(MyWork);