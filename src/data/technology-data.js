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
});

export const flareLink =new Technology({ 
    imageUrl: '/assets/images/flare_logo.svg', 
    name: 'Flare',
    href: 'https://www.2dimensions.com/about-flare'
});

export const dartLink =new Technology({ 
    imageUrl: '/assets/images/dart-logo-2.jpg', 
    name: 'Dart',
    href: 'https://dart.dev/'
});

export const firebaseLink =new Technology({ 
    imageUrl: '/assets/images/firebase-logo2.png', 
    name: 'Firebase',
    href: 'https://firebase.google.com/'
});

export const vsCodeLink =new Technology({ 
    imageUrl: '/assets/images/vs-code-logo.png', 
    name: 'VS code',
    href: 'https://code.visualstudio.com/'
});

export const xcodeLink =new Technology({ 
    imageUrl: '/assets/images/xcode-logo.jpg', 
    name: 'Xcode',
    href: 'https://developer.apple.com/xcode/'
});

export const swiftLink = new Technology({ 
    imageUrl: '/assets/images/swift-logo.png', 
    name: 'Swift',
    href: 'https://developer.apple.com/swift/'
});

export const javaLink = new Technology({ 
    imageUrl: '/assets/images/java-logo.png', 
    name: 'Java',
    href: 'https://www.java.com/en/'
});

export const androidStudioLink = new Technology({ 
    imageUrl: '/assets/images/android-studio-logo.jpg', 
    name: 'Android Studio',
    href: 'https://developer.android.com/studio'
});

export const parseServerLink = new Technology({ 
    imageUrl: '/assets/images/parse-logo.png', 
    name: 'Parse Server',
    href: 'https://parseplatform.org/'
});

export const arduinoLink = new Technology({ 
    imageUrl: '/assets/images/arduino-logo.jpeg', 
    name: 'Arduino',
    href: 'https://www.arduino.cc/'
});

export const nodeLink = new Technology({
    imageUrl: '/assets/images/node-js-logo.png',
    name: 'Node.js',
    href: 'https://nodejs.org/en/'
});

export const postGresLink = new Technology({
    imageUrl: '/assets/images/postgres-logo.png',
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/'
});

export const htmlLink = new Technology({
    imageUrl: '/assets/images/html-logo.png',
    name: 'HTML',
    href: 'https://en.wikipedia.org/wiki/HTML'
});

export const cssLink = new Technology({
    imageUrl: '/assets/images/css-logo.png',
    name: 'CSS',
    href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
});

export const javaScriptLink = new Technology({
    imageUrl: '/assets/images/javascript-logo.png',
    name: 'Javascript',
    href: 'https://www.javascript.com/'
});

export const reactLink = new Technology({
    imageUrl: '/assets/images/react-logo.png',
    name: 'React',
    href: 'https://reactjs.org/'
});

export const reduxLink = new Technology({
    imageUrl: '/assets/images/redux-logo.png',
    name: 'Redux',
    href: 'https://redux.js.org/'
});

export const awsLink = new Technology({
    imageUrl: '/assets/images/aws-logo.png',
    name: 'Amazon Web Services',
    href: 'https://aws.amazon.com/'
});

export const vueLink = new Technology({
    imageUrl: '/assets/images/vue-logo.png',
    name: 'Vue',
    href: 'https://vuejs.org/'
});


