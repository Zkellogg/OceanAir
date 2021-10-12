const jwt=require('jsonwebtoken')

function authenticate(req,res,next){
    let headers=req.headers['authorization']
    console.log(headers)
    if(headers){
        const token=headers.split(' ')[1]
        const decodedToken=jwt.verify(token,'KEYBOARD CAT')
        if(decodedToken){
            console.log('Inside DecodedToken')
            console.log(decodedToken)
        }else{
            res.json({success:false,message:'Failed to retrive token!'})
        }
    }else{
        res.json({success:false,message:'Failed to retrive headers!'})
    }
}

module.exports=authenticate