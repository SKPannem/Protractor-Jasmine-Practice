describe("A suite", function() {
  it("contains spec with an expectation", function() {
  	var x = 10;
  	var y = 'kumar';
  	console.log(y+' sal :'+x);
    expect(true).toBe(true);
  });

  it("contains spec with an expectation", function() {  	
  	var a = 10;
  	var b = 5;
  	var c = a+b;
  	expect(15).toBe(15, 'santhosh to be true');
  	console.log(c);
  });

  /*it("contains spec with an expectation", function() {
    expect(true).toBe(true, 'santhosh to be false');
  });

  it("contains spec with an expectation", function() {
    expect(true).toBe(false, 'kumar to be false');
  });

});

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = false;

    expect(a).toBe(true);
  });*/

  
});