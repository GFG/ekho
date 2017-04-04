/**
 * Created by nedved on 3/4/17.
 */
var chai = require('chai');
var expect = chai.expect;
var ekho = require('../lib/ekho');

// `describe` makes a "suite" of tests; think of them as a group.
describe('ekho calling', function() {
    it('ekho should not be null', function() {
        expect(ekho).to.not.equal(null);
    });
    it('invoke should not be null', function() {
        expect(ekho.invokeLambdaFunction).to.not.equal(null);
    });
    it('eventually returns the results', function(done) {
        var params = {
                FunctionName: "arn:aws:lambda:ap-southeast-1:024150966935:function:serverlessInit-dev-helloInter",
                InvocationType: "Event",
                LogType: "Tail",
        };
        var options = {
            region:"ap-southeast-1"
        };
        ekho.invokeLambdaFunction(options, params, function(err,data) {
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
                done();
            }

            /*
            console.log('!!!!!!!!!!!err:');
            console.log(err);
            console.log('data:');
            console.log(data);
            expect(data).to.not.equal(null);*/
        });
    });
});