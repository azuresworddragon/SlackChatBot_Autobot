var chai = require("chai");
var expect = chai.expect;
var nock = require("nock");

// const Botmock = require('botkit-mock');
// const fileBeingTested = require("./indexController");

var main = require("../service.js");

// Load mock data
var data = require("../mock.json");

describe('testService', function(){

  // MOCK SERVICE
  var mockService = nock("https://api.digitalocean.com/v2/")
  .persist()
  .get("/new_VM")
  .reply(200, JSON.stringify(data) );

  describe('#createVirtualMachine()', function(){

    //afterEach(function () {
      //this.controller.shutdown();
    //});

    //beforeEach(function () {
      //this.userInfo = {
        //slackId: 'user123',
        //channel: 'channel123',
      //};

      //this.controller = Botmock({
        //stats_optout: true,
        //debug: false,
      //});

      //this.bot = this.controller.spawn({
        //type: 'slack',
      //});
    //});

   	it('should create a VM', function() {

      main.createVirtualMachine(bot, message, response).then(function (results)
      {
        //expect(results).to.have.property("IP");
        console.log(result);
      });
    });
  });
});
