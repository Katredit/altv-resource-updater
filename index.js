const USER = 'USERNAME';
const PASS = 'ACCESS TOKEN';
const REPONAME = 'REPONAME';
const REPO = 'github.com/USERNAME/'+REPONAME+'.git';

var fs = require('fs');
var path = require('path');
var process = require('process');
var simpleGit = require('simple-git');

if(fs.existsSync(REPONAME)){
    fs.rmdirSync(REPONAME, { recursive: true });
}

if(fs.existsSync('oldresources')){
    fs.rmdirSync('oldresources', { recursive: true });
}

if(fs.existsSync('resources')){
    fs.renameSync('resources', 'oldresources')
}

const oldRepoName = path.join(process.cwd(), REPONAME);
const newRepoName = path.join(process.cwd(), "resources");
const remote = `https://${USER}:${PASS}@${REPO}`;

simpleGit().silent(true)
    .clone(remote)
    .then(() => {
        fs.renameSync(oldRepoName, newRepoName , () => {});
    })
    .catch((err) => console.error('failed: ', err));