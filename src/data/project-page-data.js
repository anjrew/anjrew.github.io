import LinkData from '../data/link-data';
import Technology , { flutterLink, dartLink, firebaseLink, vsCodeLink, xcodeLink }from '../data/technology-data';

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
    description: 'A tool to help coffee professionals record and analyse data',
    logoUrl: '/assets/images/dial-in-logo.png',
    technologies: [
        new Technology({ 
            imageUrl: '/assets/images/flutter-logo2.svg', 
            name: 'Flutter',
            href: 'https://flutter.dev/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/dart-logo-2.jpg', 
            name: 'Dart',
            href: 'https://dart.dev/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/firebase-logo2.png', 
            name: 'Firebase',
            href: 'https://firebase.google.com/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/vs-code-logo.png', 
            name: 'VS code',
            href: 'https://code.visualstudio.com/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/xcode-logo.jpg', 
            name: 'Xcode',
            href: 'https://developer.apple.com/xcode/'
        })
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
            href: 'https://www.instagram.com/dial_in_coffee/',
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
        new Technology({ 
            imageUrl: '/assets/images/swift-logo.png', 
            name: 'Swift',
            href: 'https://developer.apple.com/swift/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/java-logo.png', 
            name: 'Java',
            href: 'https://www.java.com/en/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/firebase-logo2.png', 
            name: 'Firebase',
            href: 'https://firebase.google.com/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/vs-code-logo.png', 
            name: 'VS code',
            href: 'https://code.visualstudio.com/'
        }),
        new Technology({ 
            imageUrl: '/assets/images/xcode-logo.jpg', 
            name: 'Xcode',
            href: 'https://developer.apple.com/xcode/'
        })
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