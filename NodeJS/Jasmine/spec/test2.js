describe("Included matchers:", function() {

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });
});
describe("A suite", function() {
  it("contains spec with an expectation", function() {
  	var x = 10;
  	var y = 'kumar';
  	console.log(y+' sal :'+x);
    expect(true).toBe(true);
  });
});