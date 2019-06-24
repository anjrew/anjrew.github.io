import { socket } from '../socket';
import { 
    DialInData, 
    CupomaticData,
    BatterySaverData,
    PlantSystemData,
    PertitionData,
    LaissezFaireData,
    GoatstagramData,
    SpicedAcademyData } from '../../data/project-page-data';

// All aJax requests will go from this file
export const Action = {
    showProject: function(projectName){
        console.log('The project name in the action is ', projectName);
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
        }	
        console.log('The data of the project to be rendered is', data);
        return {
            type: "SHOW_PROJECT",
            project: data
        };
    },
    dismissAll(){
        return {
            type: "DISSMISS_ALL",
        };
    }
};

export const ActionIds = {
	
};