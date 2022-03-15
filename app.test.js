const RST = require("./app");
var tst = new RST

test("Test the above below function ", () => {
    expect(tst.aboveBelow([1,8,5,9,13,24],6)).toStrictEqual({"above": "4", "below": "2"});
});

test("Test the string rotation function", () => {
    expect(tst.stringRotation("MyString",2)).toBe("ngMyStri");
});