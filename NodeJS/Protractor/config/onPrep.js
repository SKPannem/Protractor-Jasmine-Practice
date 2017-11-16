module.exports = onPrepare;

var now = new Date();
report_name = 'Report-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
logfile_name = 'results-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();


function onPrepare() {

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


    var SpecReporter = require('jasmine-spec-reporter');
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
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: './allureResults/'+report_name+'/'+logfile_name
    }));

    jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
        }, 'image/png')()
        done();
      });
    });
}