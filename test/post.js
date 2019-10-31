var post = require("../Entidades/post");
var tag = require("../Entidades/tag");
var expect = require("chai").expect;

describe("Test de Post", function(){
    describe("Creating post", function(){
        it("Post should be created", function(){
            var myPost = new post("1","Twitter","MiCasa");
            expect(myPost.toString).to.equal("1, Twitter, MiCasa");
            describe("Creating Tags", function(){
                it("Tag should be created", function(){
                    var myTag = new tag("1",myPost.id,myPost.geo);
                    expect(myTag.toString).to.equal("1, 1, MiCasa");
                })
            })

        })
    })
})