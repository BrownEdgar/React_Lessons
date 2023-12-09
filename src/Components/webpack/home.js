//import "./css/style.css"
let welcome = require('./welcome');
//import welcome from './welcome';
welcome("Welcome to home");

exports.welcome = welcome;

//exports նեք անում, որ 

// 1․ webpack.config-ում ամբողջ Ֆունկցիան պահվում է library: 'home' տողում նշված փոփոխականի մեջ
// 2․ ՛HTML՛-ում հնարավորություն ունենանք կանչելու "welcome" ֆունկցիան home․welcome('') միջոցով