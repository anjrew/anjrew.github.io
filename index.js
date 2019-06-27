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
const { db } = require('./utils/db');
const axios = require('axios');
const https = require('https');
const secrets = require('./secrets.json');
var spotifyToken;
getToken()
    .then((result) => {
        spotifyToken = result;
        console.log('my spotify token is ', spotifyToken);
        var auth = 'Basic ' + new Buffer(secrets.clientId + ':' + secrets.clientSecret).toString('base64');
        axios({
            method: 'GET',
            url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: auth,
                access_token: spotifyToken,
                client_id: secrets.clientId
                // Authorziation: 'Bearer ' + 'BQAYylYwY0YHAFrjgyC4xeLXKnds8U9IKBnb26OzdhatEtUUEhXI-6RGYFTlbPyYYpG17F51Q69qUAiUV0helrisMX4ChEYr_RRkY6k31GWAxsCHDdbufHbt3QWK1Ow1LtGtVzNgPuSO-rRj7jTUDsWVwAv28F-1mjQqCJcK'
            }
        }).then((result) => {
            print.success('result', result);
        })
            .catch((e) =>{
                print.error('Error', e);
            });

    }).catch((e) =>{
        print.error(e);
    });




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
});

if (require.main === module) {
    server.listen(process.env.PORT || 8080, function() {
        console.log("I'm listening ON 8080.");
        console.log("Server addess", server.address());
    });
}

function getToken() {
    return new Promise(function (resolve, reject) {
        var auth = 'Basic ' + new Buffer(secrets.clientId + ':' + secrets.clientSecret).toString('base64');

        const requestData = {
            method: 'POST',
            host: 'accounts.spotify.com',
            path: '/api/token',
            headers: {
                Authorization: auth,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };

        const req = https.request(requestData, (resp) => {
            // console.log("The response is",resp);
            if (resp.statusCode != 200) {
                console.log(resp.headers);
                return reject(resp.statusCode);
            }
            let body = '';
            resp.on('data', function (data) {
                body += data;
            }).on('end', function () {
                // console.log(body)
                resolve(JSON.parse(body).access_token);
            }).on('error', function (err) {
                return reject(err);
            });
        });
        req.write('grant_type=client_credentials');
        req.end();
    });
}


