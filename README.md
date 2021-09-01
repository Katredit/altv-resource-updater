# altv-resource-updater

# TR
altv-server.exe'yi başlattığınızda, bu repo kaynaklarınızı GitHub repositoryden güncellemenizi sağlar.
Genel kullanım amacı local bilgisayarınızdaki resources dosyalarını sanal sunucuya otomatik olarak aktarmaktır.

## İndirmek için
```
npm install pkg -g
npm install simple-git
npm install fs -g
```

## Ayarlar
GitHub'da yeni bir repository oluşturmalısınız ve bu oluşturduğunuz repo resources dosyalarınızı barındırmalı.
<br>

![alt text](https://i.hizliresim.com/trobi41.png)<br>

## Kurulum için
```
pkg index.js 
```
Bunu yaptıktan sonra index-win.exe'yi altv-server.exe'nin bulunduğu dosyaya taşımalısınız.
Bunun gibi;

![alt text](https://i.hizliresim.com/8n2h7ou.png)<br>

Son olarak package.json'u açın ve "scripts" etiketinin altına bu kodu ekleyin.
```json
"test": "index-win.exe && altv-server.exe"
```

altv-server dosyası içerisinde yeni bir CMD açmalısınız ve şu kodu kullanmalısınız.
Yeniden adlandırma fonksiyonun çalışması için CMD açmalısınız.
```cmd
npm test
```

# EN
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
