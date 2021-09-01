# altv-virtual-updater
When you start the altv-server.exe, this repository provide to update your resources from your GitHub repository

## For installation
```
npm install pkg -g
npm install simple-git
npm install fs -g
```

## Settings
You must create a new repositroy, that must contain your altv-resource files.
<br>

![alt text](https://i.hizliresim.com/trobi41.png)<br>

You must write GitHub username in the USER field, GitHub personal access token in the PASS field, GitHub repository in the REPONAME field.


## For build
```
pkg index.js 
```
After doing this, you must move the index-win.exe to altv server file from build file.
Like this.

![alt text](https://i.hizliresim.com/8n2h7ou.png)<br>

Finally open the altv package.json and add this code in "scripts";
```json
"test": "index-win.exe && altv-server.exe"
```

Open a new CMD in altv-server file, and you can start altv-server with this code.
You must open CMD to run rename function.
```cmd
npm test
```
