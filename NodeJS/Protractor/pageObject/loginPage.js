  var EC                    = protractor.ExpectedConditions;
  var userInput             = element(by.id('userId'));
  var passwordIput          = element(by.id('password'));
  var loginButton           = element(by.name('login'));

  exports.openURL = function(url){
    console.log("URL: "+url);
    browser.get(url);
};

exports.login = function(userName, password){
    userInput.sendKeys(userName);
    passwordIput.sendKeys(password);
    loginButton.click();
};