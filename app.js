var post = require("./Entidades/post");
var tag = require("./Entidades/tag");

const myPost = new post("1","Twitter","MiCasa");

console.log(myPost.toString);

const myTag = new tag("1",myPost.id,myPost.geo);


console.log(myTag.toString);