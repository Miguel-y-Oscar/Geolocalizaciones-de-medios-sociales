class Post {
    constructor(id, medio, geolocalizacion, text){
      Post.id = id;
      Post.medio = medio;
      Post.geolocalizacion = geolocalizacion;
      Post.text = text;
    }

    get text(){
        return Post.text;
    }

    get id(){
        return Post.id;
    }

    get geo(){
        return Post.geolocalizacion;
    }

    get toString(){
        return (Post.id.toString() + ", " + Post.medio.toString() + ", " + Post.geolocalizacion.toString() + ", " + Post.text.toString());
    }
}

module.exports = Post;
