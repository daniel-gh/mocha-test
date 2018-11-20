var should = require('should');
var math = require('../lib');

describe('#average', () => {
    it('should return the average of array', done => {
        var avg = math.average([1, 2, 3, 4])
        avg.should.equal(2.5)
        done()
    })
    // 測試有沒有回傳 NaN
    it('should return NaN when array is empty', done => {
        var avg = math.average([])
        isNaN(avg).should.be.true
        done()
    })

})

describe('#max', () => {
    // 測試有沒有取得正確的最大值
    it('should return the maximum in array', done => {
        var maximum = math.max([1, 10, 100, 1000])
        maximum.should.equal(1000)
        done()
    })
    // 測試有沒有回傳 undefined
    it('should return undefined when array is empty', done => {
        const maximum = math.max([]);
        (maximum === undefined).should.be.true
        done()
    })
})

describe('#min', () => {
    // 測試有沒有取得正確的最小值
    it('should return the minimum in array', done => {
        var minimum = math.min([1, 10, 100, 1000])
        minimum.should.equal(1)
        done()
    })
    // 測試有沒有回傳 undefined
    it('should return undefined when array is empty', done => {
        var minimum = math.min([]);
        (minimum === undefined).should.be.true
        done()
    })
})