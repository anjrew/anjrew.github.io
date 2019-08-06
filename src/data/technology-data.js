export default class Technology{
    constructor (data) {
        this.smallImageUrl = data['smallImageUrl'];
        this.largeImageUrl = data['largeImageUrl'];
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

export const flutterLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/flutter/flutter-logo2.svg', 
    largeImageUrl: '/assets/images/tech-icons/flutter/flutter-logo2.svg',
    name: 'Flutter',
    href: 'https://flutter.dev/'
});

export const flareLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/flare/flare_logo.svg', 
    largeImageUrl: '/assets/images/tech-icons/flare/flare_logo.svg',
    name: 'Flare',
    href: 'https://www.2dimensions.com/about-flare'
});

export const dartLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/dart/dart-logo-no-bg_b5ifem_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/dart/dart-logo-no-bg_b5ifem_c_scale,w_100.png',
    name: 'Dart',
    href: 'https://dart.dev/'
});

export const firebaseLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/firebase/firebase-logo-no-bg_nvennk_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/firebase/firebase-logo-no-bg_nvennk_c_scale,w_100.png',
    name: 'Firebase',
    href: 'https://firebase.google.com/'
});

export const vsCodeLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/vscode/vs-code-logo_d98urw_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/vscode/vs-code-logo_d98urw_c_scale,w_100.png',
    name: 'VS code',
    href: 'https://code.visualstudio.com/'
});

export const xcodeLink = new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/xcode/xcode-logo-no-bg_wfk3pl_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/xcode/xcode-logo-no-bg_wfk3pl_c_scale,w_100.png',
    name: 'Xcode',
    href: 'https://developer.apple.com/xcode/'
});

export const swiftLink =  new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/swift/swift-logo_vfhuuu_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/swift/swift-logo_vfhuuu_c_scale,w_100.png',
    name: 'Swift',
    href: 'https://developer.apple.com/swift/'
});

export const javaLink =  new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/java/java-logo_eupd4a_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/java/java-logo_eupd4a_c_scale,w_100.png',
    name: 'Java',
    href: 'https://www.java.com/en/'
});

export const androidStudioLink =  new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/android-studio/android-studio-logo-no-bg_k7wrtz_c_scale,w_60.png', 
    largeImageUrl: '/assets/images/tech-icons/android-studio/android-studio-logo-no-bg_k7wrtz_c_scale,w_100.png',
    name: 'Android Studio',
    href: 'https://developer.android.com/studio'
});

export const parseServerLink =  new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/parse/parse-logo_ymombz_c_scale,w_60.png',
    largeImageUrl:  '/assets/images/tech-icons/parse/parse-logo_ymombz_c_scale,w_100.png',
    name: 'Parse Server',
    href: 'https://parseplatform.org/'
});

export const arduinoLink =  new Technology({ 
    smallImageUrl: '/assets/images/tech-icons/arduino/arduino-logo-no-bg_x9j7io_c_scale,w_60.png',
    largeImageUrl:  '/assets/images/tech-icons/arduino/arduino-logo-no-bg_x9j7io_c_scale,w_100.png',
    name: 'Arduino',
    href: 'https://www.arduino.cc/'
});

export const nodeLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/nodejs/node-js-logo_msutkd_c_scale,w_60.png',
    largeImageUrl:  '/assets/images/tech-icons/nodejs/node-js-logo_msutkd_c_scale,w_100.png',
    name: 'Node.js',
    href: 'https://nodejs.org/en/'
});

export const postGresLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/postgres/postgres-logo_hqlwhk_c_scale,w_60.png',
    largeImageUrl:  '/assets/images/tech-icons/postgres/postgres-logo_hqlwhk_c_scale,w_100.png',
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/'
});

export const htmlLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/html/html-logo_fhs1pr_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/html/html-logo_fhs1pr_c_scale,w_100.png',
    name: 'HTML',
    href: 'https://en.wikipedia.org/wiki/HTML'
});

export const cssLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/css/css-logo_d9vwdi_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/css/css-logo_d9vwdi_c_scale,w_100.png',
    name: 'CSS',
    href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
});

export const javaScriptLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/javascript/javascript-logo_ak6zzp_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/javascript/javascript-logo_ak6zzp_c_scale,w_100.png',
    name: 'Javascript',
    href: 'https://www.javascript.com/'
});

export const reactLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/react/react-logo_c5ahms_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/react/react-logo_c5ahms_c_scale,w_100.png',
    name: 'React',
    href: 'https://reactjs.org/'
});

export const reduxLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/redux/redux-logo_usiszl_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/redux/redux-logo_usiszl_c_scale,w_100.png',
    name: 'Redux',
    href: 'https://redux.js.org/'
});

export const awsLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/aws/aws-logo_abqgtt_c_scale,w_100.png',
    largeImageUrl: '/assets/images/tech-icons/aws/aws-logo_abqgtt_c_scale,w_100.png',
    name: 'Amazon Web Services',
    href: 'https://aws.amazon.com/'
});

export const vueLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/vue/vue-logo_bkaqxm_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/vue/vue-logo_bkaqxm_c_scale,w_100.png',
    name: 'Vue',
    href: 'https://vuejs.org/'
});

export const redisLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/redis/redis-logo_u67dbq_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/redis/redis-logo_u67dbq_c_scale,w_100.png',
    name: 'Redis',
    href: 'https://redis.io/'
});

export const handlebarsLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/handlebars/handlebars-logo_o7le10_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/handlebars/handlebars-logo_o7le10_c_scale,w_100.png',
    name: 'Handlebars',
    href: 'https://handlebarsjs.com/'
});

export const codeMagicLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/code-magic/82l6yd1T_400x400_ezi9wf_c_scale,w_60.png',
    largeImageUrl: '/assets/images/tech-icons/code-magic/82l6yd1T_400x400_ezi9wf_c_scale,w_100.png',
    name: 'Code Magic',
    href: 'https://codemagic.io/start/'
});

export const googleVision =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/google_vision/icon.png',
    largeImageUrl: '/assets/images/tech-icons/google_vision/icon.png',
    name: 'Google Vision',
    href: 'https://cloud.google.com/vision/?utm_source=google&utm_medium=cpc&utm_campaign=emea-gb-all-en-dr-bkws-all-all-trial-e-gcp-1007176&utm_content=text-ad-none-any-DEV_c-CRE_253506618223-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+EXA_M:1_GB_EN_ML_Vision+API_SEO-KWID_43700020841653050-kwd-506032299072-userloc_1006627&utm_term=KW_google%20visong&ds_rl=1242853&ds_rl=1245734&ds_rl=1242853&ds_rl=1245734&gclid=CjwKCAjw4NrpBRBsEiwAUcLcDLJ87uAiNJ19IzImpLmrqPF07hbcsMdb-fboT98n47AYWzqd5agzchoCIkMQAvD_BwE'
});

export const googleCloudPlatform =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/google_cloud_platform/icon.png',
    largeImageUrl: '/assets/images/tech-icons/google_cloud_platform/icon.png',
    name: 'Google Cloud Platform',
    href: 'https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=emea-gb-all-en-dr-bkws-all-all-trial-e-gcp-1007176&utm_content=text-ad-none-any-DEV_c-CRE_166509224290-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20EXA_1:1_GB_EN_General_Cloud_TOP_google%20cloud%20platforms-KWID_43700016292936125-kwd-141425403689-userloc_1006627&utm_term=KW_google%20cloud%20platformsg&ds_rl=1242853&ds_rl=1245734&ds_rl=1245734&gclid=CjwKCAjw4NrpBRBsEiwAUcLcDI9bfBClSubRDzoY0obvaoyYGFbgLai6zOf6BvfRHuoirC-wWuMSOxoCzaIQAvD_BwE'
});

export const githubLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/github/icon.png',
    largeImageUrl: '/assets/images/tech-icons/github/icon.png',
    name: 'Github',
    href: 'https://github.com'
});

export const heroKuLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/heroku/heroku_icon_w_60.png',
    largeImageUrl: '/assets/images/tech-icons/heroku/heroku_icon_w_100.png',
    name: 'Heroku',
    href: 'https://www.heroku.com/'
});

export const jestLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/jest/jest_icon_60w.jpg',
    largeImageUrl: '/assets/images/tech-icons/jest/jest_icon_w100.jpg',
    name: 'Jest',
    href: 'https://jestjs.io/'
});

export const affinityLink =  new Technology({
    smallImageUrl: '/assets/images/tech-icons/affinity/affinity-designe-logo_60w.png',
    largeImageUrl: '/assets/images/tech-icons/affinity/affinity-designe-logo_100.png',
    name: 'Jest',
    href: 'https://affinity.serif.com/en-gb/photo/'
});


export const techlinks = [
    googleCloudPlatform,
    googleVision,
    flutterLink,
    flareLink,
    dartLink,
    firebaseLink,
    vsCodeLink,
    xcodeLink,
    swiftLink,
    javaLink,
    androidStudioLink,
    parseServerLink,
    arduinoLink,
    nodeLink,
    postGresLink,
    htmlLink,
    cssLink,
    javaScriptLink,
    reactLink,
    reduxLink,
    awsLink,
    vueLink,
    redisLink,
    handlebarsLink,
    codeMagicLink,
    githubLink,
    heroKuLink,
    jestLink,
    affinityLink
];

