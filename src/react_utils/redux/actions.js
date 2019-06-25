import { 
    DialInData, 
    CupomaticData,
    BatterySaverData,
    PlantSystemData,
    PertitionData,
    LaissezFaireData,
    GoatstagramData,
    SpicedAcademyData,
    thisData } from '../../data/project-page-data';
	
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
};

// All aJax requests will go from this file
export const Action = {
    showProject: function(projectName){
        // console.log('The project name in the action is ', projectName);
        var data = {};
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
            case 'Lava lamp pertition':
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
        }	
        return {
            type: "SHOW_PROJECT",
            project: data
        };
    },
    nextImage(image){
        // for (const key in pageData) {
        //     if (image.project == pageData[key].title){
        //         var currentIndex = pageData[key].screenShots.findIndex((element) => { checkImageData(element, image); });
        //         if (currentIndex >= 0) {
        //             nextImage = pageData[key].screenShots[currentIndex + 1];
        //             break;
        //         }
        //     }
        // }
        var nextImage = checkPageDataVsImage(pageData, image);
        console.log('Next image', nextImage);
        return {
            type: "NEXT_IMAGE",
            image: nextImage
        };
    },
    previousImage(image){
        return {
            type: "PREVIOUS_IMAGE",
            image: image
        };
    },
    showImage: function(image){
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
    }
};

export const ActionIds = {
	
};

function checkImageData(element ,imageData, ) {
	console.log('checking element' ,element.name, 'vs', imageData.name);
	console.log(imageData.name == element.name);
    return imageData.name == element.name;
}

function checkPageDataVsImage(pageData, image){
    for (const key in pageData) {
        if (image.project == pageData[key].title){
            var currentIndex = pageData[key].screenShots.findIndex((element) => checkImageData(element, image));
            console.log('The current index is ', currentIndex);
            if (currentIndex >= 0) {
                return pageData[key].screenShots[currentIndex + 1];
            }
        }
    }  
}