const {publicacion}=require('../models');
exports.listarblogcionserver =async ()=>{
    try{
       let listar = await publicacion.findAll();
       return listar;
    }catch(e){
        console,log("error allistar, e")
    }
};
