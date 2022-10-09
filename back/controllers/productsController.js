//Con esta linea establezco las acciones que va realizar este método.
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "En esta ruta usted va a poder ver todos los productos"
    })
}

