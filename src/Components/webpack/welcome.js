module.exports = function (message) {
  //new webpack.EnvironmentPlugin Պլագինը ստուգելու համար
  if (import.meta.env.NODE_ENV == "development") {

    console.log(`Hello! -> ${message}`);
  }

}
exports.welcome = welcome;