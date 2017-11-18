

var demo = require('../index');

var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});


describe('npm-module-course', function () {
    describe('#add()', function () {
        it('1+2+3 should be 6', function () {
            var sum = demo.add(1)(2)(3);
            assert.equal(6, +sum);
        });
    });
    describe('#isNumber()', function () {
        it('1 should be a number', function () {
            assert.equal(true, demo.isNumber(1));
        });
        it('a should not be a number', function () {
            assert.equal(false, demo.isNumber('a'));
        });
    });
    describe('#isArray()', function () {
        var a = [1, 2];
        var b = 3;
        it('[1,2] is a Array', function () {
            assert.equal(false, demo.test2(a));
        });
    });
});