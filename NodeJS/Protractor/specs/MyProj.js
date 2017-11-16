var loginPage = require('../pageObject/loginPage');
var data = require('../testData/testData.json');
var lib = require('../lib/commanLib');

describe('Protractor Demo App', function() {

  var EC                    = protractor.ExpectedConditions;
  
  var shipToSelectedSearch  = element(by.id('shipToSelectedSearch'));
  var searchButtn           = element(by.className('srbt sa-srbt'));  
  var customer              = element(by.className('customer-number'));

  var createOrderButtn      = element(by.className('crtordbtn basic'));
  var createorderName       = element(by.id('createdorderName'));
  var createPONumber        = element(by.id('createdPONumber'));

  beforeEach(function() {
    browser.ignoreSynchronization = true; 
  });

  it('Open Application ', function() {
    loginPage.openURL(lib.getEnvData('url'));
  });

  it('Enter user name & pwd and click login', function() {
    //loginPage.login(data.userName, data.password);
    loginPage.login(lib.getEnvData('saUserName'), lib.getEnvData('saPassword'));
  });

  it('Select a Customer', function() {
    browser.wait(EC.elementToBeClickable(shipToSelectedSearch), 15000);
    shipToSelectedSearch.sendKeys(lib.getEnvData('customer000018'));
    searchButtn.click();

    browser.wait(EC.elementToBeClickable(customer), 15000);
    customer.click();
    
    //expect(latestResult.getText()).toEqual('3');
  });

  /*it('verifySearchByNumber',function(String[] cNumber ){
    for(int i=0;i<cNumber.length;i++){  
      console.log(cNumber[i]);
      element(by.className('customer-number')).isElementPresent(by.css('#def'))

    browser.wait(EC.isElementPresent(shipToSelectedSearch), 15000);
    getCommand().waitForTargetPresent(txt_Search);
    if (getCommand().isTargetPresent(txt_Search)){
      log("Enter Customer Name:"+cNumber[i],LogType.STEP);  
      log("User Able To Search By Customer Name:"+cNumber[i],LogType.STEP);
      getCommand().clear(txt_Search).sendKeys(txt_Search,cNumber[i]);
      getCommand().waitFor(3);
    }else{
      SoftAssertion.fail("Failed::Not Searched By Customer Number:"+cNumber[i]);
    }
   }*/


it('Create New Order', function() {
 // browser.pause();
    browser.wait(EC.elementToBeClickable(createOrderButtn), 15000);
    createOrderButtn.click();
  });
  

it('Enter Order Details On CNOM', function() {

    browser.wait(EC.elementToBeClickable(createorderName), 15000);

   // expect(createorderName.getText('id')).toBe('createdorderName');
    createorderName.clear().sendKeys('santhoshOrder');

   // expect(createPONumber.getText('id')).toBe('createdPONumber');
    createPONumber.clear().sendKeys('Seg123!@#');
   // browser.pause(); 

  });
/*
    var addProductsFrom = element(by.id('addProductsFrom'));
   // var Lists = element(by.value('Lists'));

it('Add Products From', function(addProductsFrom, Lists){

  addProductsFrom.click();

  expect(element(by.id('addProductsFrom')).$('option:value').getText()).toEqual('Lists');



});
  
  var selectDropdownbyNum = function ( addProductsFrom, Lists ) {
    if (Lists){
      var Lists = element.findElements(by.option('Lists'))   
        .then(function(addProductsFrom){
          options[Lists].click();
        });
    }
  };*/

  var select = element(by.id('addProductsFrom'));
  select.$('[value="Order Guide"]').click();

  
  
});