var post = require("./Entidades/post");
var tag = require("./Entidades/tag");

const myPost = new post("1","Twitter","MiCasa");
const myTag = new tag("1",myPost.id,myPost.geo);

console.log(myPost.toString);
console.log(myTag.toString);
