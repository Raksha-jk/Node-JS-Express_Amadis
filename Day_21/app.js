const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const port=4000;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
let items = [
    { id: 1, name: "Apple", price: 1.50 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 2.00 }
];
app.get('/',(req,res)=>{
    res.send("This is your first Express file")
})
app.get('/items',(req,res)=>{
    res.json(items);
})
app.get('/items/:id',(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=items.find(item => item.id === itemId);
    if(item){
        res.json(item)
    }else{
        res.send('Item not found')
    }
})
app.post('/items',(req,res)=>{
    const newItem={
        id:items.length+1,
        name:req.body.name,
        price:req.body.price,
    }
    items.push(newItem);
    res.json(newItem);
})
app.patch('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        if (req.body.name) {
            item.name = req.body.name;
        }
        if (req.body.price) {
            item.price = req.body.price;
        }
        res.json(item);
    } else {
        res.send('Item not found');
    }
}); 
app.put('/items/:id',(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=items.findIndex(item=>item.id===itemId);
    if(item){
        items[item]={
            id:itemId,
            name:req.body.name,
            price:req.body.price,
        }
    }else{
        res.send('Item not found')
    }
    res.send(items[item])
})

app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1)[0];
        res.json({ message: 'Item deleted', item: deletedItem });
    } else {
        res.send('Item not found');
    }
});
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})