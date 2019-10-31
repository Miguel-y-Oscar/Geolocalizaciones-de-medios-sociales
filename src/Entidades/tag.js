class Tag {
    constructor(id, ref, geo) {
        Tag.id = id;
        Tag.refPost = ref;
        Tag.geolocalizacion = geo;
    }
   
    get tag(){
        return Tag;
    }

    get geo(){
        return Tag.geolocalizacion;
    }

    get toString(){
        return (Tag.id.toString() + ", " + Tag.refPost.toString() + ", " + Tag.geolocalizacion.toString());
    }
}

module.exports = Tag;