import { 
    DialInData, 
    CupomaticData,
    BatterySaverData,
    PlantSystemData,
    PertitionData,
    LaissezFaireData,
    GoatstagramData,
    SpicedAcademyData,
    thisData,
    connectFourData } from '../../data/project-page-data';
	
const pageData = {
    dialIn :DialInData,
    cupomatic :CupomaticData,
    batterySaver :BatterySaverData,
    plantSystem :PlantSystemData,
    pertition :PertitionData,
    laissezFaire :LaissezFaireData,
    goatstagram :GoatstagramData,
    spicedAcademy :SpicedAcademyData,
    this :thisData,
    connectFour: connectFourData
};

// All aJax requests will go from this file
export const Action = {
    showProject: function(projectName, image){
        var returnImage;
        if (image) {
            for (const key in pageData) {
                const project = pageData[key];
                if( project.screenShots){
                    for (let index = 0; index < project.screenShots.length; index++) {
                        const projectImage = project.screenShots[index];
                        if (projectImage.name == image) {
                            returnImage = projectImage;
                            break;
                        }
                    }
                }   
            }
        }
		
        var data;
        switch(projectName){
            case 'Dial In':
                data = DialInData;
                break;
            case 'CupOmatic':
                data = CupomaticData;
                break;
            case 'Battery Saver':
                data = BatterySaverData;
                break;
            case 'Plant irrigation system':
                data = PlantSystemData;
                break;
            case 'Lava lamp petition':
                data = PertitionData;
                break;
            case 'Laissez Faire':
                data = LaissezFaireData;
                break;
            case 'Goatstagram':
                data = GoatstagramData;
                break;
            case 'Spiced Academy':
                data = SpicedAcademyData;
                break;
            case 'this.':
                data = thisData;
                break;
            case 'Connect Four':
                data = connectFourData;
                break;
            default: 
                console.log('All done');
        }	

        return {
            type: "SHOW_PROJECT",
            project: data,
            direction: "BOTTOM"
        };
    },
    nextImage(image){
        var nextImage = checkPageDataVsImage(pageData, image, 1);
        return {
            type: "PREPARE_NEXT_IMAGE",
            image: nextImage,
            direction: "shiftRight"
        };
    },
    previousImage(image){
        var previousImage = checkPageDataVsImage(pageData, image, -1);
        return {
            type: "PREPARE_NEXT_IMAGE",
            image: previousImage,
            direction: "shiftLeft"
        };
    },
    showImage: function(image){
        if( typeof image !== 'object'){ throw new Error('Image should be an object'); }
        return {
            type: "SHOW_IMAGE",
            image: image
        };
    },
    dismissImage:function(){
        return {
            type: "DISSMISS_IMAGE",
        };
    },
    dismissAll(){
        this.dismissImage();
        return {
            type: "DISSMISS_ALL",
        };
    },
    calibrateAppSize(widowWidth){
        return {
            type: "SET_APP_SIZE",
            mobileApp: widowWidth < 750,
            smallScreen: widowWidth < 1020
        };
    },
    renderNext(){
        return {
            type: "RENDER_NEXT_IMAGE"
        };
    },
    addTracks(tracks){
        return {
            type: "ADD_TRACKS",
            tracks: tracks
        };
    },
    showVideo(url){
        return {
            type: "SHOW_VIDEO",
            url: url
        };
    },
    dismissVideo(){
        return {
            type: "DISSMISS_VIDEO"
        };
    }
};

export const ActionIds = {
	
};

function checkImageData(element ,imageData, ) {
    return imageData.name == element.name;
}

function checkPageDataVsImage(pageData, image, returnDifference){
    for (const key in pageData) {
        if (image){
            if (image.project == pageData[key].title){
                var currentIndex = pageData[key].screenShots.findIndex((element) => checkImageData(element, image));
                if (currentIndex >= 0) {
                    return pageData[key].screenShots[currentIndex + returnDifference];
                }
            }
        }
    }  
}