var post = require("../src/Entidades/post");
var tag = require("../src/Entidades/tag");
var expect = require("chai").expect;
var request = require('supertest');
var	app = require('../src/app.js');

describe("Test de Post", function(){
    describe("Creating post", function(){
        it("Post should be created", function(){
            var myPost = new post("1","Twitter","MiCasa","Buenos días #morning");
            expect(myPost.toString).to.equal("1, Twitter, MiCasa, Buenos días #morning");
            describe("Creating Tags", function(){
                it("Tag should be created", function(){
                    var myTag = new tag("1",myPost.id,myPost.geo);
                    expect(myTag.toString).to.equal("1, 1, " + myTag.geo);
                })
            })
        })
    })
});

describe( "Get Geo Tag", function() {
    it('Should get /', function (done) {
    request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200,done);
    });
});

describe( "Get Top Post by HashTag", function() {
    it('Should get top post by hashtag RakuLang', function (done) {
    request(app)
        .get('/topPost/RakuLang')
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200,done);
    });
});
