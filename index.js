// IMPORTS
const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const path = require('path');
const print = require('./utils/print');
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: 'localhost:8080' });
const https = require('https');
const request = require('request');



// /2.0/?method=user.getrecenttracks&user=rj&api_key=YOUR_API_KEY&format=json

global.appRoot = path.resolve(__dirname);

// sets rendering
app.use(cookieParser());

// Very important to get the POST reests of forms
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));



const cookieSessionMiddleWare = cookieSession({
    secret: `earyzhes profile.`,
    maxAge: 1000 * 60 * 60 * 24 * 14
});

app.use(cookieSessionMiddleWare);

const onlineUsers = {};

io.use(async (socket, next)=>{

    cookieSessionMiddleWare(socket.request, socket.request.res, next);
	
    const userId = socket.request.session.userId;
    print.success(`socket with the id ${socket.id} is now connected and userID is ${userId}`);

    // Emit sends data to the client
    socket.emit('connected', {
        message: 'You are connected to the server via socket.io',
        userId: userId
    });
	
    io.sockets.emit('updateOnlineUsers', {
        onlineUsers: onlineUsers
    });
	
    // Check if it is new connection
    socket.on('disconnect', function() {
        print.error(`socket with the id ${socket.id} is now disconnected`);
        delete onlineUsers[userId];
        io.sockets.emit('updateOnlineUsers', {
            onlineUsers: onlineUsers
        });
    });
});

app.use(express.static(`${__dirname}/public`));

app.use(csurf());

// SECURTIY
app.use((req, res, next) => {
    // console.log(chalk.green(`Token is : ${req.csrfToken()}`));
    res.cookie('mytoken', req.csrfToken());
    res.setHeader('X-FRAME-OPTIONS', 'DENY');
    next();
});

app.use((req, res, next) => {
    // console.log(chalk.bgBlue(`Recieve ${req.method} to ${req.url}`));
    next();
});

app.use((req, res, next) => {
    // console.log(chalk.blue(`Cookie session variables: `), req.session);
    next();
});


app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}


// Direct the user to the welcome screen if they are not logged in
// If there is a user ID the user must be logged in.

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    // https.request({
    //     method: 'GET',
    //     host: 'ws.audioscrobbler.com',
    // 	// path: '/2.0/?method=user.getrecenttracks&nowplaying="true"&user=earyzhe&api_key=09baea5eb602d2030db265810ceac1a4&format=json'
    // 	path: '/2.0/?method=user.getrecenttracks&nowplaying="true"&user=earyzhe&api_key=09baea5eb602d2030db265810ceac1a4&format=json'

		
    // }, function(resp) {
    // 	print.warning('The response from last fm was', resp);
    // 	print.warning('The response from last fm was', resp.recentTracks);

    // }).end();
	
    https.request({
        method: 'GET',
        host: 'ws.audioscrobbler.com',
    	// path: '/2.0/?method=user.getrecenttracks&nowplaying="true"&user=earyzhe&api_key=09baea5eb602d2030db265810ceac1a4&format=json'
    	path: '/2.0/?method=chart.gettopartists&api_key=8d860c323a1ca1af00d0cd41d1f99da9&format=json'

		
    }, function(resp) {
    	print.warning('The response from last fm was', resp);
    	print.warning('The response from last fm was', resp.recentTracks);

    }).end();
	
    // request.get(
    //     'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&nowplaying="true"&user=earyzhe&api_key=09baea5eb602d2030db265810ceac1a4&format=json')
    //     	.on('response',(resp) => {
    //         print.error('The response is  ', resp);
    //         // let data=''; 
    //         // console.log('data, is ', data);
    //         // resp.on('data', (chunk=>{
    //         //     data +=chunk;
    //         // }));
    //         // resp.on('end', ()=>{
    //         //     console.log(JSON.parse(data));
    //         // });
    //     });
	

    getTracks(function  (err, songs){
        if (err) {
            res.sendStatus(500);
        }
        else{
            console.log(songs);
        }
    });
});

function getTracks(callback){

    const req = https.request({
        host: 'ws.audioscrobbler.com',
        path: '/2.0/?method=user.getrecenttracks&nowplaying="true"&user=earyzhe&api_key=09baea5eb602d2030db265810ceac1a4&format=json',
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    }, 
    // The the response comes in a callback
    (res) => {
        if (res.statusCode != 200){
            callback(new Error(res.statusCode));
        }
        else{

            let body = '';
            res
                .on('data', (chunk) => body += chunk)
                .on('end', () => {
                    try {
                        console.log(body);
                        body = JSON.parse(body);
                        callback(null, body);
                    } catch (e) {
                        callback(e);
                    }
                });
        }
    });

    req.on('error', (err) => callback(err));
    req.write('grant_type=client_credentials');
    req.end();
}

if (require.main === module) {
    server.listen(process.env.PORT || 8080, function() {
        console.log("I'm listening ON 8080.");
        console.log("Server addess", server.address());
    });
}
