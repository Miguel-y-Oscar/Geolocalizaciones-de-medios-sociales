class Post {
    constructor(id, medio, geolocalizacion){
      Post.id = id;
      Post.medio = medio;
      Post.geolocalizacion = geolocalizacion;
    }
   
    get post(){
        return Post;
    }

    get id(){
        return Post.id;
    }

    get geo(){
        return Post.geolocalizacion;
    }

    get toString(){
        return (Post.id.toString() + ", " + Post.medio.toString() + ", " + Post.geolocalizacion.toString());
    }
}

module.exports = Post;
