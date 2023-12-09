### install
եթե բեռնել եք "gitHub"-ից ապա հավաքել միայն "npm install"
npm i -g webpack
npm i  webpack
npm install -D babel-loader @babel/core @babel/preset-env webpack
npm install --save-dev css-loader
npm install --save-dev mini-css-extract-plugin

### run

webpack.config.js ֆայլի կարգավորումները տալու հետո
webpack -ը աշխատացնելու համար "CLI"-ում պետք է հավաքել "webpack" բառը, որը կվերադարձնի նման մի բան՝ 

Version: webpack 4.43.0
Time: 313ms
Built at: 2020-06-05 10:58:21
    Asset      Size  Chunks             Chunk Names
bundle.js  1.03 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./home.js 93 bytes {0} [built]
[1] ./welcome.js 82 bytes {0} [built]


### Plugin
կարող է միանալ կոմպիլացիայի տարբեր փուլերում և մի բան անել webpack-ը թույլ է տալիս նրանց անել ամեն ինչ!