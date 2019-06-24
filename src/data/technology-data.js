

export default class Technology{
    constructor (data) {
        this.imageUrl = data['imageUrl'];
        this.name = data['name'];
        this.href = data['href'];
        for (const key in arguments) {
            const element = arguments[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}


export const flutterLink =new Technology({ 
	imageUrl: '/assets/images/flutter-logo2.svg', 
	name: 'Flutter',
	href: 'https://flutter.dev/'
})

export const dartLink =new Technology({ 
	imageUrl: '/assets/images/dart-logo-2.jpg', 
	name: 'Dart',
	href: 'https://dart.dev/'
})

export const firebaseLink =new Technology({ 
	imageUrl: '/assets/images/firebase-logo2.png', 
	name: 'Firebase',
	href: 'https://firebase.google.com/'
})

export const vsCodeLink =new Technology({ 
	imageUrl: '/assets/images/vs-code-logo.png', 
	name: 'VS code',
	href: 'https://code.visualstudio.com/'
})

export const xcodeLink =new Technology({ 
	imageUrl: '/assets/images/xcode-logo.jpg', 
	name: 'Xcode',
	href: 'https://developer.apple.com/xcode/'
}