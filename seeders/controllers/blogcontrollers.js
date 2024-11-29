const{listarpublicacionserver}=require('../server/blogservicer')
 exports.listarpublicacion=async(req,res)=>{
    try{
   let respueta= await listarblogserver();
   res.json({msj:respueta});

    }catch(e){

    }
}

