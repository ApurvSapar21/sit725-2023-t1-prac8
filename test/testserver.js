const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat = {path:'',title:'', subTitle:'', desccription:''}


describe('test GET api', function() {
    it('returns statusCode of 200', function(done) {
        request(url, function(error, response, bodystring) {
            let responseObj = JSON.parse(bodystring);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });

    it('returns an array of cats', function(done) {
        request(url, function(error, response, bodystring) {
            let responseObj = JSON.parse(bodystring);
            expect(responseObj.data).to.be.an('array');
            done();
        });
    });
});

describe('test POST api', function(){
    it('post cat to DB', function(done){
        request.post({url:url,form:cat}, function(error, response, bodystring){
            //todo asserts here
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a cat', function(done){
        request.delete({url:url,form:cat}, function(error, response, bodystring){
            //todo asserts here
            done();
        });
    });
});