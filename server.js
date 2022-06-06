const express=require('express');
const mongoose=require('mongoose');
const app=express()
const Product=require('./product')
const cors = require('cors');

app.use(cors());
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


const db='mongodb://localhost:27017/ekartDemo'
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connection open")
}).catch(err=>{
    console.log("OOPS!!ERROR")
})
app.get('/',function(req,res){
    res.send("hello")
})

app.get('/products',(req,res)=>{
    Product.find({}) 
    .exec((err,products)=>{
        if(err) console.log(err.message)
        else{
            res.json(products)
        }
    })
})

app.post('/products',(req,res)=>{
    const product = new Product();
    product.name=req.body.name;
    product.price=req.body.price;
    product.rating=req.body.rating;
    product.image=req.body.image
    product.save()
    res.redirect('http://localhost:4200/products')

})

app.post('/products/delete',async(req,res)=>{
    const {id} = req.body
    const product= await Product.findByIdAndDelete(id);

       res.redirect('http://localhost:4200/products')

    })

app.listen(3000,function(){
   console.log("Server is running")
}
)