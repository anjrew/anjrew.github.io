/* eslint-disable indent */
import LinkData from '../data/link-data';
import { 
    flutterLink,
    dartLink, 
    firebaseLink, 
    vsCodeLink, 
    xcodeLink, 
    swiftLink, 
    javaLink,
    androidStudioLink,
    parseServerLink,
    flareLink,
    arduinoLink,
    nodeLink,
    postGresLink,
    htmlLink,
    cssLink,
    javaScriptLink } from '../data/technology-data';

export class ProjectPageData {

    constructor (data) {
        this.backgroundImage = data['backgroundImage'];
        this.logoUrl = data['logoUrl'];
        this.title = data['title'];
        this.description = data['description'];
        this.technologies = data['technologies'];
        this.links = data['links'];
        this.screenShots = data['screenShots'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}


export class GalleryImageData{
    constructor (data) {
        this.description = data['description'];
        this.imageUrl = data['imageUrl'];
        this.name = data['name'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}

export const DialInData = new ProjectPageData({
    backgroundImage: '/assets/images/dial-in.jpg',
    title: 'Dial in',
    description: `A tool to help coffee professionals record and analyse data. 
	I started off by making the app in Swift an purly iOS. I had a suddent realiseation that I should definity
	dive into cross platform development. That's what I did. I started the {}`,
    logoUrl: '/assets/images/dial-in-logo.png',
    technologies: [
        flutterLink,
        dartLink,
        firebaseLink,
        vsCodeLink,
        xcodeLink,
        parseServerLink
    ],
    links: [
        new LinkData({
            imageUrl: '/assets/images/faceBookIcon.png',
            href: 'https://www.facebook.com/dialincoffee/',
            name: 'Facebook'
        }),
        new LinkData({
            imageUrl: '/assets/images/instagramLogo.png',
            href: 'https://www.instagram.com/dial_in_coffee/',
            name: 'Instagram'
        }),
        new LinkData({
            imageUrl: '/assets/images/GooglePlayBadge.png',
            href: 'https://play.google.com/store/apps/details?id=com.dialin.android.abc&hl=en',
            name: 'Google Play'
        })
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]

});

export const CupomaticData = new ProjectPageData({
    backgroundImage: '/assets/images/dial-in.jpg',
    title: 'CupOmatic',
    description: 'A tool to assist coffee professionals with the the cupping protocol',
    logoUrl: 'assets/images/cupOmatic-logo.jpg',
    technologies: [
        swiftLink,
        javaLink,
        xcodeLink,
        androidStudioLink
    ],
    links: [
        new LinkData({
            imageUrl: '/assets/images/faceBookIcon.png',
            href: 'https://www.facebook.com/cupOmatic/',
            name: 'Facebook'
        }),
        new LinkData({
            imageUrl: '/assets/images/instagramLogo.png',
            href: 'https://www.instagram.com/cupomatic/',
            name: 'Instagram'
        }),
        new LinkData({
            imageUrl: '/assets/images/GooglePlayBadge.png',
            href: '/assets/images/instagramLogo.png',
            name: 'Google Play'
        })
    ],
    screenShots: [

        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});

export const BatterySaverData = new ProjectPageData({
    backgroundImage: '/assets/images/battery_saver_logo.png',
    title: 'Battery Saver',
    description: `Battery saver works with bluetooth hardware to control the charge of your device. 
	Keeping your devices battery level at a lower, more stable level can increase the life of the battery exponentially
		I really implemented google's Bloc pattern in the project and create some animations with "Flare".`,
    logoUrl: 'assets/images/battery_saver_logo.png',
    technologies: [
        flutterLink,
        flareLink,
        vsCodeLink
    ],
    screenShots: [

        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});

export const PlantSystemData = new ProjectPageData({
    backgroundImage: '/assets/images/plant-watering.jpg',
    title: 'Irrigation System',
    description: `I love plants... The more the merrier. But a man can only look after soo many. 
	BUT, with the help of that machine A man can have many more plants. And that is why I decided to make this 
	project. As well as being alot of fun, it was a big learning experience. I used an Arduino micro controlller with 24v relays to controll the water flow to 
	each plant. Also a main relay punping the water from the water tank(an old cooking pot :)`,
    logoUrl: 'assets/images/plant-watering.jpg',
    technologies: [
        arduinoLink,
        vsCodeLink
    ],
    screenShots: [

        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});

export const PertitionData = new ProjectPageData({
    backgroundImage: '/assets/images/green-lava-lamp.jpg',
    title: 'Lava lamp pertition',
    description: `Being a firm believer in lava lamps, I created a pertition site to record the
	amount of people who would like lava lamps to be exempt from Vat.
	 Follow the link and take a look yourself :).`,
    logoUrl: '/assets/images/green-lava-lamp.jpg',
    technologies: [
        nodeLink,
        postGresLink,
        htmlLink,
        cssLink,
		javaScriptLink,
		vsCodeLink
    ],
    links: [
        new LinkData({
            imageUrl: '/assets/images/faceBookIcon.png',
            href: 'https://www.facebook.com/dialincoffee/',
            name: 'Facebook'
        }),
        new LinkData({
            imageUrl: '/assets/images/instagramLogo.png',
            href: 'https://www.instagram.com/dial_in_coffee/',
            name: 'Instagram'
        }),
        new LinkData({
            imageUrl: '/assets/images/GooglePlayBadge.png',
            href: '/assets/images/instagramLogo.png',
            name: 'Google Play'
        })
    ],
    screenShots: [

        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});