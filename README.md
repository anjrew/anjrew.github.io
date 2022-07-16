**How to serve this project**

In brief run: ```npm serve```

A breakdown of what this command does is:

1. When the app is compiled it will be compiled to the file `bundle.js'
2. We run the command ```npm run serve``` ('node ./bundle-server.js"') to serve this file on port 8080
3. 'bundle.js' is loaded via the initial 'index.html' file.
4. we serve the index.html file by running ```npm start``` (node index.js)

## Deployment

This app runs on [Heroku](https://dashboard.heroku.com/apps/goatstagram-online/deploy/github)

The app will be auto deployed when the master branch is pushed to. It will try to build and run the master branch project

It can be updated manually with the Heroku Cli

For more info read [here](https://dev.to/jessesbyers/how-to-update-a-deployed-app-on-heroku-3fde) or [this](https://f-a.nz/dev/update-deploy-to-heroku-app/)
