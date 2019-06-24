import { socket } from '../socket';
import { DialInData } from '../../data/project-page-data';

// All aJax requests will go from this file
export const Action = {
    showProject: function(projectName){
        var data = {};
        switch(projectName){
            case 'Dial In':
                data = DialInData;
                break;
        }
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