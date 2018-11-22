var assert = require('assert');

describe('hooks', function () {

    before(function () {
        // runs before all tests in this block
        console.log('this is before');
        assert.equal('a', 'b');
        //done();
    });

    after(function () {
        // runs after all tests in this block
        console.log('this is after');
        //done();
    });

    beforeEach(function () {
        // runs before each test in this block
        console.log('this is beforeEach');
        //done();
    });

    afterEach(function () {
        // runs after each test in this block
        console.log('this is afterEach');
        //done();
    });


    it('#1', () => {
        console.log('...this....');
        //assert(1 === 2, '1不等於2');
        assert.equal('a', 'a');
        //done();
    })

    it("#timeout", () => {
        this.timeout(1000);
        assert.ok(true);
    })

});