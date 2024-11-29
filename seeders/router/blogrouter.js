const{listarblogserver}=require('../service/publicacionservice')
 exports.listarpublicacion=async(req,res)=>{
    try{
   let respueta= await listarblogserver();
   res.json({msj:respueta});

    }catch(e){

    }
}
