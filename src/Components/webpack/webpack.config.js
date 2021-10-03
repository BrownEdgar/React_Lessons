const NODE_ENV = process.env.NODE_ENV || "development"
const path = require('path')
const webpack = require('webpack')// npm i webpack(local petqa nstacnel)

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './home.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		library: 'main'
	},
	mode:"development",
	watch: NODE_ENV == "development",
	//watch:true,
	watchOptions: {
		aggregateTimeout: 200, //սպասման միլիվարկյաններ "զբոռկից" առաջ
		poll: 1000 // check for changes
	},
	//devtool: 'source-map'
	devtool: NODE_ENV == "development" ? 'source-map' : null,
	plugins:[
		new webpack.EnvironmentPlugin({
			NODE_ENV: NODE_ENV, // եթե չի գտնվել process.env.NODE_ENV-ն
			DEBUG: false
		})
	],
	plugins: [new MiniCssExtractPlugin()],
	//npm i babel-loader
	module: {
		rules: [
			{
				test: /\.m?js$/,//Ստուգում է ֆայլի տիպը, համընկման դեպքում աշխատում է
				exclude: /(node_modules|bower_components)/,//բացառություններ "Loader"-ի համար
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
				//css loader
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			// {
			// 	test: /\.css$/i,
			// 	use: [MiniCssExtractPlugin.loader, 'css-loader'],
			// },
		]
	},
	resolve: {
		modules: [path.join(__dirname),'node_modules'],
		extensions: [".js", '.css']
	},

	
}

//entry - ցույց է տալիս թե որ մեդուլը պետք է "հավաքել"
//output - ցույց է տալիս թե որտեղ տեպք է "հավաքել" պահել վերյնական պատրաստի փայլը
//mode - development| production | none այս դաշտի բացակայության դեպքում կհարուցի ՜՜WARNING in configuration՜

//watchOptions	 Նշանակում է, որ webpack-ը կշարունակի հետևել նշված ֆայլերի ցանկացած փոփոխություններին
//devtool: 'source-map' այդ կարգավորումը պետք է մեզ "debugger" օգտագործելու ժամանակ, Եթե ես "debugger" գրեմ 'bundle.js'-ում մեր նորմալ ֆալլում այն ցույց տա ոչ թե 'bundle.js'-ում։ԱՅՍ ԿԱՐԳԱՎՈՐՈՒՄԻՑ ՀԵՏՈ 'webpack'-ը սարքում է bundle.js.map ֆայլը,որը իր մեջ պահում է նախնական ֆալլերի տեղը մինչև "զբոռկեն" և ուղարկում է մեզ այնտեղ։Աշխատում է շատ դանդաղ:Հնարավոր տարբերակներ -->https://webpack.js.org/configuration/devtool/#devtool

//new webpack.EnvironmentPlugin -Թույլ է տալիս "User"-ին հասանելի դարձնել մեր "process.env"-ում գտնվող գաղտնի փոփոխականները՛
// resolve --> https://webpack.js.org/configuration/resolve/#resolve


//մի քանի մւտքային ֆաըլերի։ համար փոխել համապատասխան տողերը
// entry: {
// 	home: './home.js',
// 		about: './about.js'
// },
// output: {
// 	path: path.resolve(__dirname, 'dist'),
// 	filename: '[name].js',
// 		library: [name]
// },


//context դաշտը թույլ է տալիս նշանական բացարձակ հասցե․ օր․՝ եթե բոլոր ֆայլերը գտնվում են "․/src/Components" պապկի մեջ, և որ ամեն անգամ այդքանը չգրենք կարող ենք միանգամից նշանակում տալ որոնման համար նշելով մեր ուզած թղթապանակը։Այսպես․՝
//context: __dirname + '․/src/Components'
// entry: {
// 	home: './home.js', --> արդեն համահունչ է '․/src/Components/home.js'-ին 
// }