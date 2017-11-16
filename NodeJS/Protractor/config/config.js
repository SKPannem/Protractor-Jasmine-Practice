// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',//chrome firefox
    'platformName': 'windows',
    /*chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }*/
  },

 /* multiCapabilities: [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
}],
*/
  defaultTimeoutInterval: 5000000,
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../specs/MyProj.js'],

  onPrepare: function() {

        var reporters           = require('jasmine-reporters');
        var jUnitXmlReporter = new reporters.JUnitXmlReporter({
            savePath: "testResults",
            displayStacktrace: true,
            displayFailuresSummary: false, // display summary of all failures after execution
            displaySuccessfulSpec: true, // display each successful spec
            displayFailedSpec: true, // display each failed spec
            displaySkippedSpec: true, // display each skipped spec
            displaySpecDuration: true, // display each spec duration
            displaySuiteNumber: false, // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                skipped: 'orange'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                skipped: '- '
            },
            customProcessors: []
        });
        jasmine.getEnv().addReporter(jUnitXmlReporter);


        //var SpecReporter = require('jasmine-spec-reporter');
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true,
            displayFailuresSummary: false, // display summary of all failures after execution
            displaySuccessfulSpec: true, // display each successful spec
            displayFailedSpec: true, // display each failed spec
            displaySkippedSpec: true, // display each skipped spec
            displaySpecDuration: true, // display each spec duration
            displaySuiteNumber: false, // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                skipped: 'orange'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                skipped: '- '
            },
            customProcessors: []
        }));
        
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
    },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};