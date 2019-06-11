const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const config = require('./config.js')
const baseUrl = config.baseConfig.baseUrl;
const apiConfigs = config.apiConfigs;

describe('达量红包api测试demo', function () {
    apiConfigs.forEach(function (apiConfig, index) {
        it(apiConfig.apiName, function (done) {
            if(!apiConfig.apiPath) {
                done('该api还未更新path数据')
            }
            request(baseUrl)[apiConfig.apiType](apiConfig.apiPath)
                .send(apiConfig.apiParams)
                .set('Accept', 'application/json, text/plain, */*')
                .set('Content-Type', 'application/json')
                .expect(function (res) {
                    expect(res.statusCode).to.be.equal(200);
                    var data = JSON.parse(res.text)
                    expect(data.success).to.be.ok;
                    console.log(data);
                })
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
    })
});
