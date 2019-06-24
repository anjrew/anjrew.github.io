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
    javaScriptLink, 
	reduxLink,
	reactLink,
	awsLink,
	vueLink } from '../data/technology-data';

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
		}),
		new LinkData({
            imageUrl: '/assets/images/app-store-badge.svg',
            href: 'https://apps.apple.com/app/id1336170587',
            name: 'App Store'
		}),
		new LinkData({
            imageUrl: '/assets/images/cupOmatic-logo.jpg',
            href: 'http://www.cupomatic.net/',
            name: 'CupOmatic.net'
        }),
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
            imageUrl: '/assets/images/green-lava-lamp.jpg',
            href: 'https://jonny-boi-salt-petition.herokuapp.com/register',
            name: 'Lava Lamp pertition'
        }),
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});

export const LaissezFaireData = new ProjectPageData({
    backgroundImage: '/assets/images/laissez-faire.jpg',
    title: 'Laissez-Faire',
	description: `Laissez-Faire is a social web app currently in production. Aimed towards people in non-monogamous
	relationships, It gives people the chance to connect with features such as: user-search, private messaging, friends, chat room, online users
	and more.`,
    logoUrl: 'assets/images/laissez-faire.jpg',
    technologies: [
		nodeLink,
        reduxLink,
        reactLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: '/assets/images/dial-in.jpg',
            description: 'Workflow'
        }),
    ]
});

export const GoatstagramData = new ProjectPageData({
    backgroundImage: '/assets/images/goatstagram.jpg',
    title: 'Goatstagram',
	description: `Goatstagram is a comic imageboard which only accepts pictures of goats. 
	The page is Audited by admin regulary to enforce this. Complete with sound affects you should definity head here for a laugh.`,
    logoUrl: '/assets/images/goatstagram.jpg',
    technologies: [
		nodeLink,
        vueLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: '/assets/images/goatstagram.jpg',
            description: 'Coolio Goat'
        }),
    ]
});

export const SpicedAcademyData = new ProjectPageData({
    backgroundImage: '/assets/images/spiced-logo.png',
    title: 'SPICED ACADEMY',
	description: `I took a 3 month Full stack web-developement course at SPICED ACADEMY in Berlin in April 2019.
	The course covered all aspects of web development, Including testing, databases, front end and back end code and The technologies
	listed below. We had many mock project to make and the final project was our own project. 
	That project is the one you are looking at righ now :).
		for more Info see "this."
	})`,
	logoUrl: '/assets/images/spiced-logo.png',
    technologies: [
		nodeLink,
        vueLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
	],
	links: [
        new LinkData({
            imageUrl: '/assets/images/twitter-logo.png',
            href: 'https://twitter.com/spicedacademy',
            name: 'Twitter'
		}),
		new LinkData({
            imageUrl: '/assets/images/faceBookIcon.png',
            href: 'https://www.facebook.com/spicedacademy/',
            name: 'Facebook'
        }),
        new LinkData({
            imageUrl: '/assets/images/instagramLogo.png',
            href: 'https://www.instagram.com/spicedacademy/',
            name: 'Instagram'
        }),
        new LinkData({
            imageUrl: '/assets/images/spiced-logo.png',
            href: 'www.spiced-academy.com',
            name: 'www.spiced-academy.com'
        })
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: '/assets/images/goatstagram.jpg',
            description: 'Coolio Goat'
        }),
	],
});

export const thisData = new ProjectPageData({
    backgroundImage: '/assets/images/me-noeyes.png',
    title: 'this.',
	description: `This is a portfolio of some of my personal projects. At the moment I like to make apps related to my previous industry("Coffee"),
	 so I can blend my personal experience into truly unique products.`,
    logoUrl: 'assets/images/me-noeyes.png',
    technologies: [
		nodeLink,
        reduxLink,
        reactLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
    ],
    screenShots: [
        new GalleryImageData({
            imageUrl: 'assets/images/assets/images/me-noeyes.png',
            description: 'Me'
        }),
    ]
});