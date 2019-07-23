/* eslint-disable indent */
import LinkData from '../data/link-data';
import GalleryImageData from './gallery-image-data';
import VideoData from './video-data';
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
	vueLink,
	handlebarsLink,
	codeMagicLink,
	googleCloudPlatform,
	googleVision
} from '../data/technology-data';

export class ProjectPageData {

	constructor(data) {

		this.logoUrl = data['logoUrl'];
		this.title = data['title'];
		this.description = data['description'];
		this.technologies = data['technologies'];
		this.links = data['links'];
		this.screenShots = data['screenShots'];
		this.linksTitle = data['linksTitle'];
		this.videos = data['videos'];
		this.logoUrlSmall = data['logoUrlSmall'];
		this.logoUrlBig = data['logoUrlBig'];
		this.projectBigUrl = data['projectBigUrl'];
		this.projectSmallUrl = data['projectSmallUrl'];
		if (this.screenShots) {
			for (let index = 0; index < this.screenShots.length; index++) {
				const image = this.screenShots[index];
				image.project = this.title;
			}
			if (this.videos) {
				for (let index = 0; index < this.videos.length; index++) {
					const image = this.videos[index];
					image.project = this.title;
				}
			}
		}
		for (const key in data) {
			const element = data[key];
			if (element == null || element == undefined) {
				throw Error(`${key} Arguments are missing`);
			}
		}
	}
}


export const DialInData = new ProjectPageData({
	title: 'Dial In',
	description: [
			`A tool to help coffee professionals record and analyse data. 
		I started off by making the app in Swift and purly iOS. I had a sudden realisation that I should definity
		dive into cross platform development. That's what I did. I started from scratch and started making the app 
		in the Flutter framework. I've never looked back :)`
	],
	logoUrlSmall: '/assets/images/projects/dial-in/icon/dial-in-logo-200px.jpg',
	logoUrlBig: '/assets/images/projects/dial-in/icon/dial-in-logo-350px.jpg',
	projectSmallUrl: '/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_300.jpg',
	projectBigUrl: "/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_600.jpg",
	technologies: [
		flutterLink,
		dartLink,
		firebaseLink,
		vsCodeLink,
		xcodeLink,
		parseServerLink,
		androidStudioLink
	],
	linksTitle: 'More Info',
	links: [
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/faceBookIcon.png',
			href: 'https://www.facebook.com/dialincoffee/',
			name: 'Facebook'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/instagramLogo.png',
			href: 'https://www.instagram.com/dial_in_coffee/',
			name: 'Instagram'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/GooglePlayBadge.png',
			href: 'https://play.google.com/store/apps/details?id=com.dialin.android.abc&hl=en',
			name: 'Google Play'
		})
	],
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_300.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/image/dial-in_pazds8_c_scale,w_600.jpg',
			imageUrl: '/assets/images/projects/dial-in/image/dial-in.jpg',
			description: 'Workflow',
			name: 'Working on bar',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.13.03.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.13.03.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.13.03.png',
			description: '1',
			name: 'Login',
			screenShot: true
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.15.06.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.06.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.15.06.png',
			description: '2',
			name: 'Recipes',
			screenShot: true
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.15.31.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.31.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.15.31.png',
			description: '3',
			name: 'Feed',
			screenShot: true
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.15.45.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.45.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.15.45.png',			
			description: '4',
			screenShot: true,
			name: 'Profile',
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.15.59.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.59.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.15.59.png',	
			description: '5',
			screenShot: true,
			name: 'Recipe',
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.16.05.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.16.05.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.16.05.png',			
			description: '5',
			screenShot: true,
			name: 'Score',
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.16.27.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.16.27.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.16.27.png',			
			description: '6',
			screenShot: true,
			name: 'Flavours',
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/dial-in/screenshots/smallScreen/Screenshot 2019-06-25 at 08.15.37.jpg',
			largeImageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.37.jpg',
			imageUrl: '/assets/images/projects/dial-in/screenshots/fullSize/Screenshot 2019-06-25 at 08.15.37.png',			
			description: 'Options menu.',
			screenShot: true,
			name: 'Options menu',
		}),
	],
	videos: [
		new VideoData({
			description: 'A demo of a user using the application',
			url: '/assets/videos/dial_in/dial_in_demo_vid.mov',
			name: 'Demo',
			imageUrl: '/assets/images/projects/dial-in/screenshots/largeScreen/Screenshot 2019-06-25 at 08.15.06.jpg',
			screenShot: true
		})
	]
});

export const CupomaticData = new ProjectPageData({
	title: 'CupOmatic',
	description: [
		'A tool to assist coffee professionals with the the cupping protocol'
	],
	logoUrlSmall: '/assets/images/projects/cupOmatic/icon/cupOmatic-logo-200px.jpg',
	logoUrlBig: '/assets/images/projects/cupomatic/icon/cupOmatic-logo.jpg',
	projectSmallUrl: '/assets/images/projects/cupomatic/image/cupomatic-100px.jpg',
	projectBigUrl: "/assets/images/projects/cupomatic/image/cupomatic-300px.jpg",
	technologies: [
		swiftLink,
		javaLink,
		xcodeLink,
		androidStudioLink
	],
	linksTitle: 'More Info',
	links: [
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/faceBookIcon.png',
			href: 'https://www.facebook.com/cupOmatic/',
			name: 'Facebook'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/instagramLogo.png',
			href: 'https://www.instagram.com/cupomatic/',
			name: 'Instagram'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/GooglePlayBadge.png',
			href: '/assets/images/instagramLogo.png',
			name: 'Google Play'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/app-store-badge.svg',
			href: 'https://apps.apple.com/app/id1336170587',
			name: 'App Store'
		}),
		new LinkData({
			imageUrl: '/assets/images/projects/cupOmatic/icon/cupOmatic-logo-200px.jpg',
			href: 'http://www.cupomatic.net/',
			name: 'CupOmatic.net',
			static: true
		}),
	],
	screenShots: [

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/analyse.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/analyse.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/analyse.jpg',
			description: [
				'Analyse'
			],
			name: 'Alalysing the coffee',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/cupping.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/cupping.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/cupping.jpg',
			description: 'Cupping at origin',
			name: 'Cupping',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/devloping.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/devloping.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/devloping.jpg',
			description: 'Developing',
			name: 'Android development',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/holding.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/holding.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/holding.jpg',
			description: 'Holding',
			name: 'Holding',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/qc.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/qc.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/qc.jpg',
			description: 'Quality control',
			name: 'Qc',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/Screenshot 2018-01-20 16.43.42.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/Screenshot 2018-01-20 16.43.42.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/Screenshot 2018-01-20 16.43.42.png',
			description: 'Main Screen',
			name: 'Screenshot one',
			screenShot: true
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/cupomatic/screenShots/smallScreen/Screenshot 2018-01-20 16.44.14.jpg',
			largeImageUrl: '/assets/images/projects/cupomatic/screenShots/nomalScreen/Screenshot 2018-01-20 16.44.14.jpg',
			imageUrl: '/assets/images/projects/cupomatic/screenShots/fullsize/Screenshot 2018-01-20 16.44.14.png',
			description: 'Settings page',
			name: 'Screenshot two',
			screenShot: true
		}),
	]
});

export const BatterySaverData = new ProjectPageData({
	title: 'Battery Saver',
	description: [
		`Battery saver works with bluetooth hardware to control the charge of your device. 
		Keeping your devices battery level at a lower, more stable level can increase the life of the battery exponentially
		I really implemented google's Bloc pattern in the project and create some animations with "Flare".`
	],
	logoUrlSmall: '/assets/images/projects/battery-saver/icon/battery_saver_logo-200px.jpg',
	logoUrlBig: '/assets/images/projects/battery-saver/image/battery_saver_logo-300px.jpg',
	projectSmallUrl: '/assets/images/projects/battery-saver/image/battery_saver_logo-100px.png',
	projectBigUrl: "/assets/images/projects/battery-saver/image/battery_saver_logo-300px.jpg",
	technologies: [
		flutterLink,
		flareLink,
		vsCodeLink
	],
	linksTitle: 'More Info',
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0000.jpg',
			largeImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0000.jpg',
			imageUrl: '/assets/images/projects/battery-saver/screenshots/fullSize/IMG-20190627-WA0000.jpg',
			description: 'Search for battery saver hardware to connect to via bluetooth.',
			name: 'Choosing a device',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0001.jpg',
			largeImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0001.jpg',
			imageUrl: '/assets/images/projects/battery-saver/screenshots/fullSize/IMG-20190627-WA0001.jpg',
			description: 'Change settings for tolerance and check frequency..',
			name: 'Settings',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0002.jpg',
			largeImageUrl: '/assets/images/projects/battery-saver/screenshots/largeScreen/IMG-20190627-WA0002.jpg',
			imageUrl: '/assets/images/projects/battery-saver/screenshots/fullSize/IMG-20190627-WA0002.jpg',
			description: 'The main screen',
			name: 'Main Screen',
			screenShot: false
		}),
	]
});

export const PlantSystemData = new ProjectPageData({
	title: 'Plant irrigation system',
	description: 
	[
		`I love plants... The more the merrier. But a person can only look after soo many. 
	BUT, with the help of a machine, A person can have many more plants. And that is why I decided to make this 
	project. As well as being alot of fun, it was a big learning experience. I used an Arduino micro controlller with 24v relays to controll the water flow to 
	each plant. Also a main relay pumping the water from the water tank(an old cooking pot :)`
	],
	logoUrlSmall: '/assets/images/projects/plant-system/icon/plant-watering_cjqsyo_c_scale,w_200.jpg',
	logoUrlBig: '/assets/images/projects/plant-system/icon/plant-watering_cjqsyo_c_scale,w_350.jpg',
	projectSmallUrl: '/assets/images/projects/plant-system/image/plant-watering-100px.jpg',
	projectBigUrl: "/assets/images/projects/plant-system/image/plant-watering-300px.jpg",
	technologies: [
		arduinoLink,
		vsCodeLink
	],
	linksTitle: 'More Info',
	screenShots: [

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_0756.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_0756.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_0756.jpg',
			description: 'The main control board.',
			name: 'Main board',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_2984.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_2984.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_2984.jpg',
			description: 'More plants and header tank',
			name: 'Tank',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_3764.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_3764.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_3764.jpg',
			description: 'More plants :)',
			name: 'Plants',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_7717.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_7717.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_7717.jpg',
			description: 'Testing and calibrationg the sensor',
			name: 'Sensor',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_7718.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_7718.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_7718.jpg',
			description: 'Mounting the transformer',
			name: 'Transformer',
			screenShot: false
		}),

		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/plant-system/screenShots/smallScreen/IMG_7719.jpg',
			largeImageUrl: '/assets/images/projects/plant-system/screenShots/largeScreen/IMG_7719.jpg',
			imageUrl: '/assets/images/projects/plant-system/screenShots/fullSize/IMG_7719.jpg',
			description: 'The board before',
			name: 'Main Layout',
			screenShot: false
		}),
	]
});

export const PertitionData = new ProjectPageData({
	title: 'Lava lamp pertition',
	description: 
	[
		`Being a firm believer in lava lamps, I created a pertition site to record the
	amount of people who would like lava lamps to be exempt from VAT.
	 Follow the link and take a look yourself :).`
	],
	logoUrlSmall: '/assets/images/projects/lava-lamp-pertition/icon/green-lava-lamp_qjnjwa_c_scale,w_200.jpg',
	logoUrlBig: '/assets/images/projects/lava-lamp-pertition/icon/green-lava-lamp_qjnjwa_c_scale,w_350.jpg',
	projectSmallUrl: "/assets/images/projects/lava-lamp-pertition/image/green-lava-lamp-300px.jpg" ,
	projectBigUrl: "/assets/images/projects/lava-lamp-pertition/image/green-lava-lamp.jpg",
	technologies: [
		nodeLink,
		postGresLink,
		htmlLink,
		cssLink,
		javaScriptLink,
		vsCodeLink,
		handlebarsLink
	],
	linksTitle: 'Visit the petition',
	links: [
		new LinkData({
			imageUrl: '/assets/images/projects/lava-lamp-pertition/icon/green-lava-lamp_qjnjwa_c_scale,w_350.jpg',
			href: 'https://jonny-boi-salt-petition.herokuapp.com/register',
			name: 'Visit the petition',
			static: true
		}),
	],
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/smallScreen/Screenshot 2019-06-25 at 10.51.06.jpg',
			largeImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/largeScreen/Screenshot 2019-06-25 at 10.51.06.jpg',
			imageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/fullSize/Screenshot 2019-06-25 at 10.51.06.png',
			description: 'Login page',
			name: 'Login',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/smallScreen/Screenshot 2019-06-25 at 10.52.59.jpg',
			largeImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/largeScreen/Screenshot 2019-06-25 at 10.52.59.jpg',
			imageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/fullSize/Screenshot 2019-06-25 at 10.52.59.png',
			description: 'Signed',
			name: 'Signed',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/smallScreen/Screenshot 2019-06-25 at 10.53.41.jpg',
			largeImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/largeScreen/Screenshot 2019-06-25 at 10.53.41.jpg',
			imageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/fullSize/Screenshot 2019-06-25 at 10.53.41.png',
			description: 'More info.',
			name: 'About',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/smallScreen/Screenshot 2019-06-25 at 10.54.06.jpg',
			largeImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/largeScreen/Screenshot 2019-06-25 at 10.54.06.jpg',
			imageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/fullSize/Screenshot 2019-06-25 at 10.54.06.png',
			description: 'Pertition',
			name: 'Pertition',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/smallScreen/Screenshot 2019-06-25 at 10.54.41.jpg',
			largeImageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/largeScreen/Screenshot 2019-06-25 at 10.54.41.jpg',
			imageUrl: '/assets/images/projects/lava-lamp-pertition/screenShots/fullSize/Screenshot 2019-06-25 at 10.54.41.png',
			description: 'Edit profile',
			name: 'Edit profile',
			screenShot: false
		}),
	]
});

export const LaissezFaireData = new ProjectPageData({

	title: 'Laissez-Faire',
	description: [
		`Laissez-Faire is a social web app currently in production. Aimed towards people in non-monogamous
	relationships, It gives people the chance to connect with features such as: user-search, private messaging, friends, chat room, online users
	and more.`
	],
	logoUrlSmall: '/assets/images/projects/lassezfaire/icon/laissez-faire_yxearl_c_scale,w_200.jpg',
	logoUrlBig: '/assets/images/projects/lassezfaire/icon/laissez-faire_yxearl_c_scale,w_350.jpg',
	projectSmallUrl: '/assets/images/projects/lassezfaire/image/laissez-faire-100px.jpg',
	projectBigUrl: "/assets/images/projects/lassezfaire/image/laissez-faire-300px.jpg",
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
	linksTitle: 'More Info',
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lassezfaire/screenShots/smallScreen/Screenshot 2019-06-25 at 11.19.30.jpg',
			largeImageUrl: '/assets/images/projects/lassezfaire/screenShots/largeScreen/Screenshot 2019-06-25 at 11.19.30.jpg',
			imageUrl: '/assets/images/projects/lassezfaire/screenShots/fullSize/Screenshot 2019-06-25 at 11.19.30.png',
			description: 'Login page',
			name: 'Login',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lassezfaire/screenShots/smallScreen/Screenshot 2019-06-25 at 11.20.42.jpg',
			largeImageUrl: '/assets/images/projects/lassezfaire/screenShots/largeScreen/Screenshot 2019-06-25 at 11.20.42.jpg',
			imageUrl: '/assets/images/projects/lassezfaire/screenShots/fullSize/Screenshot 2019-06-25 at 11.20.42.png',
			description: 'User Profile.',
			name: 'User Profile',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lassezfaire/screenShots/smallScreen/Screenshot 2019-06-25 at 11.21.21.jpg',
			largeImageUrl: '/assets/images/projects/lassezfaire/screenShots/largeScreen/Screenshot 2019-06-25 at 11.21.21.jpg',
			imageUrl: '/assets/images/projects/lassezfaire/screenShots/fullSize/Screenshot 2019-06-25 at 11.21.21.png',
			description: 'Find users',
			name: 'Find Users',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lassezfaire/screenShots/smallScreen/Screenshot 2019-06-25 at 11.22.08.jpg',
			largeImageUrl: '/assets/images/projects/lassezfaire/screenShots/largeScreen/Screenshot 2019-06-25 at 11.22.08.jpg',
			imageUrl: '/assets/images/projects/lassezfaire/screenShots/fullSize/Screenshot 2019-06-25 at 11.22.08.png',
			description: 'Friends',
			name: 'Friends.',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/lassezfaire/screenShots/smallScreen/Screenshot 2019-06-25 at 11.22.42.jpg',
			largeImageUrl: '/assets/images/projects/lassezfaire/screenShots/largeScreen/Screenshot 2019-06-25 at 11.22.42.jpg',
			imageUrl: '/assets/images/projects/lassezfaire/screenShots/fullSize/Screenshot 2019-06-25 at 11.22.42.png',
			description: 'Requests.',
			name: 'Requests',
			screenShot: false
		}),
	]
});

export const GoatstagramData = new ProjectPageData({
	title: 'Goatstagram',
	description: 
	[
		`Goatstagram is a comic imageboard which only accepts pictures of goats. I implemented a security feature that only lets users 
	upload pictures of goats. I used the google vision API to check the uploaded images for goats. If the image does not contain goats the image is rejected. All the images are hosted on an amazon S3 bucket. 
	Complete with sound affects, you should definity head here for a laugh`
	],
	logoUrlSmall: '/assets/images/projects/goatstagram/icon/goatstagram_b5dxsg_c_scale,w_200.jpg',
	logoUrlBig: '/assets/images/projects/goatstagram/icon/goatstagram_b5dxsg_c_scale,w_350.jpg',
	projectSmallUrl: '/assets/images/projects/goatstagram/image/goatstagram_qpnbmb_c_scale,w_300.jpg',
	projectBigUrl: "/assets/images/projects/goatstagram/image/goatstagram_qpnbmb_c_scale,w_600.jpg",
	technologies: [
		googleCloudPlatform,
		googleVision,
		nodeLink,
		vueLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
	],
	linksTitle: 'More Info',
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/goatstagram/screenshots/smallScreen/Screenshot 2019-06-25 at 11.55.54.jpg',
			largeImageUrl: '/assets/images/projects/goatstagram/screenshots/largeScreen/Screenshot 2019-06-25 at 11.55.54.jpg',
			imageUrl: '/assets/images/projects/goatstagram/screenshots/fullScreen/Screenshot 2019-06-25 at 11.55.54.png',
			description: 'The main page',
			name: 'Main page',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/goatstagram/screenshots/smallScreen/Screenshot 2019-06-25 at 11.56.56.jpg',
			largeImageUrl: '/assets/images/projects/goatstagram/screenshots/largeScreen/Screenshot 2019-06-25 at 11.56.56.jpg',
			imageUrl: '/assets/images/projects/goatstagram/screenshots/fullScreen/Screenshot 2019-06-25 at 11.56.56.png',
			description: 'Error propmt on no file selected',
			name: 'Error handling',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/goatstagram/screenshots/smallScreen/Screenshot 2019-06-25 at 11.59.46.jpg',
			largeImageUrl: '/assets/images/projects/goatstagram/screenshots/largeScreen/Screenshot 2019-06-25 at 11.59.46.jpg',
			imageUrl: '/assets/images/projects/goatstagram/screenshots/fullScreen/Screenshot 2019-06-25 at 11.59.46.png',
			description: 'A radom pic of a funny goat.',
			name: 'Goaty',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/goatstagram/screenshots/smallScreen/Screenshot 2019-06-25 at 11.58.06.jpg',
			largeImageUrl: '/assets/images/projects/goatstagram/screenshots/largeScreen/Screenshot 2019-06-25 at 11.58.06.jpg',
			imageUrl: '/assets/images/projects/goatstagram/screenshots/fullScreen/Screenshot 2019-06-25 at 11.58.06.png',
			description: 'An image of a Goat',
			name: 'Image',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/goatstagram/screenshots/smallScreen/Screenshot 2019-06-25 at 11.58.56.jpg',
			largeImageUrl: '/assets/images/projects/goatstagram/screenshots/largeScreen/Screenshot 2019-06-25 at 11.58.56.jpg',
			imageUrl: '/assets/images/projects/goatstagram/screenshots/fullScreen/Screenshot 2019-06-25 at 11.58.56.png',
			description: 'Comments section.',
			name: 'Comments',
			screenShot: false
		}),
	]
});

export const SpicedAcademyData = new ProjectPageData({
	title: 'SPICED ACADEMY',
	description: [
	`I took a 3 month Full stack web-developement course at SPICED ACADEMY in Berlin in April 2019.
	The course covered all aspects of web development, Including testing, databases, front end and back end code and The technologies
	listed below. We had many mock project to make and the final project was our own project. 
	That project is the one you are looking at righ now :).`
	],
	logoUrlSmall: '/assets/images/projects/spiced/image/spiced-logo-300px.jpg',
	logoUrlBig: '/assets/images/projects/spiced/image/spiced-logo-300px.jpg',
	projectSmallUrl: '/assets/images/projects/spiced/image/spiced-logo-100px.png',
	projectBigUrl: "/assets/images/projects/spiced/image/spiced-logo-300px.jpg",
	projects: [
		'https://connect-four-andrew-johnson.herokuapp.com/'
	],
	technologies: [
		nodeLink,
		vueLink,
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
		awsLink
	],
	linksTitle: 'More Info',
	links: [
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/twitter-logo.png',
			href: 'https://twitter.com/spicedacademy',
			name: 'Twitter'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/faceBookIcon.png',
			href: 'https://www.facebook.com/spicedacademy/',
			name: 'Facebook'
		}),
		new LinkData({
			imageUrl: '/assets/images/social-media-icons/instagramLogo.png',
			href: 'https://www.instagram.com/spicedacademy/',
			name: 'Instagram'
		}),
		new LinkData({
			imageUrl: '/assets/images/projects/spiced/icon/spiced-logo-300px.jpg',
			href: 'www.spiced-academy.com',
			name: 'www.spiced-academy.com'
		})
	],
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/spiced/screenShot/smallScreen/IMG_7715.JPG',
			largeImageUrl: '/assets/images/projects/spiced/screenShot/largeScreen/IMG_7715.JPG',
			imageUrl: '/assets/images/projects/spiced/screenShot/fullSize/IMG_7715.JPG',
			description: 'David teaching.',
			name: 'Lecture',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/spiced/screenShot/smallScreen/IMG_7716.JPG',
			largeImageUrl: '/assets/images/projects/spiced/screenShot/largeScreen/IMG_7716.JPG',
			imageUrl: '/assets/images/projects/spiced/screenShot/fullSize/IMG_7716.JPG',
			description: 'Chris being a jerk.',
			name: 'Buddy',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/spiced/screenShot/smallScreen/PHOTO-2019-05-22-13-36-21.jpg',
			largeImageUrl: '/assets/images/projects/spiced/screenShot/largeScreen/PHOTO-2019-05-22-13-36-21.jpg',
			imageUrl: '/assets/images/projects/spiced/screenShot/fullSize/PHOTO-2019-05-22-13-36-21.jpg',
			description: 'Project time.',
			name: 'Coding',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/spiced/screenShot/smallScreen/PHOTO-2019-05-29-20-43-02.jpg',
			largeImageUrl: '/assets/images/projects/spiced/screenShot/largeScreen/PHOTO-2019-05-29-20-43-02.jpg',
			imageUrl: '/assets/images/projects/spiced/screenShot/fullSize/PHOTO-2019-05-29-20-43-02.jpg',
			description: 'Presentation.',
			name: 'Presenting Goastagram',
			screenShot: false
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/spiced/screenShot/smallScreen/PHOTO-2019-06-21-12-14-37.jpg',
			largeImageUrl: '/assets/images/projects/spiced/screenShot/largeScreen/PHOTO-2019-06-21-12-14-37.jpg',
			imageUrl: '/assets/images/projects/spiced/screenShot/fullSize/PHOTO-2019-06-21-12-14-37.jpg',
			description: 'Presentation pt2.',
			name: 'Presenting Goastagram pt2',
			screenShot: false
		}),
	],
});

export const thisData = new ProjectPageData({
	title: 'this.',
	description: [
		`This is a portfolio of some of my personal projects. At the moment I like to make apps related to my previous industry("Coffee"),
	 so I can blend my personal experience into truly unique products.`
	],
	logoUrlSmall: '/assets/images/me/me-noeyes.png',
	logoUrlBig: '/assets/images/me/me-noeyes.png',
	projectSmallUrl: '/assets/images/projects/this/image/me-noeyes-whitebg_tdy9od_c_scale,w_200.png',
	projectBigUrl: "/assets/images/projects/this/image/me-noeyes-whitebg_tdy9od_c_scale,w_200.png",
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
	linksTitle: 'More Info',
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/this/screenShorts/me-noeyes-whitebg_zt9jzk_c_scale,w_160.png',
			largeImageUrl: '/assets/images/projects/this/screenShorts/me-noeyes-whitebg_zt9jzk_c_scale,w_600.png',
			imageUrl: '/assets/images/me/me-noeyes-whitebg.png',
			description: 'Me trying to be edgy and failing',
			name: 'My portfolio photo',
			screenshot: false
		}),
	]
});

export const connectFourData = new ProjectPageData({
	title: 'Connect Four',
	description: [`A game made at Spiced Academy, using vanilla Javascript, CSS, 
	and HTML.
		
	Click the link below to play the game :-).\
	`],
	logoUrlSmall: '/assets/images/projects/connect-four/image/logo-100px.jpg',
	logoUrlBig: '/assets/images/projects/connect-four/image/logo-300px.jpg',
	projectSmallUrl: '/assets/images/projects/connect-four/image/logo-100px.jpg',
	projectBigUrl: "/assets/images/projects/connect-four/image/logo-300px.jpg",
	technologies: [
		vsCodeLink,
		cssLink,
		htmlLink,
		javaScriptLink,
	],
	linksTitle: 'Play',
	links: [
		new LinkData({
			imageUrl: '/assets/images/projects/connect-four/image/logo-100px.jpg',
			href: 'https://connect-four-andrew-johnson.herokuapp.com/',
			name: 'Play',
			static: true
		}),
	]
});

export const shutterStockScrollData = new ProjectPageData({
	title: 'Shutterstock scroll',
	description: [
		`This is a mobile application that gets images from the Shutterstock api with infinite scroll functionality. 
		The user can view a larger image when the use clicks on an image.`,
		
		`I implemented the Flutter framework and carried out extensive unit, widget, golden, and driver tests.`,
			
		`CICD was also implemented using Codemagic.`
	],
	logoUrlSmall: '/assets/images/projects/shutterstock-scroll/icon/icon_acxp5h_c_scale,w_264.jpg',
	logoUrlBig: '/assets/images/projects/shutterstock-scroll/icon/icon_acxp5h_c_scale,w_350.jpg', 
	projectSmallUrl: '/assets/images/projects/shutterstock-scroll/icon/icon_acxp5h_c_scale,w_100.jpg',
	projectBigUrl: '/assets/images/projects/shutterstock-scroll/icon/icon_acxp5h_c_scale,w_300.jpg',
	technologies: [
		vsCodeLink,
		flutterLink,
		codeMagicLink,
	],
	screenShots: [
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/smallScreen/main_screen.png',
			largeImageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/largeScreen/main_screen.png',
			imageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/fullScreen/main_screen.png',
			description: 'The main image gallery.',
			name: 'Gallery',
			screenShot: true
		}),
		new GalleryImageData({
			smallImageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/smallScreen/image.png',
			largeImageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/largeScreen/image.png',
			imageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/fullScreen/image.png',
			description: 'The view from clicking on the image.',
			name: 'Image',
			screenShot: true
		}),
	],
	linksTitle: 'See the repo',
	links: [
		new LinkData({
			imageUrl: '/assets/images/tech-icons/github/icon.svg',
			href: 'https://github.com/earyzhe/shutterstock_scroll',
			name: 'Repo',
			static: true
		}),
	],
	videos: [
		new VideoData({
			description: 'A demo of a user using the application',
			url: '/assets/images/projects/shutterstock-scroll/videos/demo.mov',
			name: 'Demo',
			imageUrl: '/assets/images/projects/shutterstock-scroll/screenshots/largeScreen/main_screen.png',
			screenShot: true
		})
	]
});

export const projects = [
	DialInData,
	CupomaticData,
	shutterStockScrollData,
	BatterySaverData,
	PlantSystemData,
	PertitionData,
	LaissezFaireData,
	GoatstagramData,
	SpicedAcademyData,
	thisData,
	connectFourData,
];