var assert = require('assert');

describe('hooks', function () {

    before(function (done) {
        // runs before all tests in this block
        console.log('this is before');
        done();
    });

    after(function (done) {
        // runs after all tests in this block
        console.log('this is after');
        done();
    });

    beforeEach(function (done) {
        // runs before each test in this block
        console.log('this is beforeEach');
        done();
    });

    afterEach(function (done) {
        // runs after each test in this block
        console.log('this is afterEach');
        done();
    });


    it('#1', done => {
        console.log('...this....');
        //assert(1 === 2, '1不等於2');
        assert.equal('a', 'b');
        done();
    })

});