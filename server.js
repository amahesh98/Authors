var express=require('express')
var app=express()
var bodyParser=require('body-parser')
var path=require('path')
var mongoose=require('mongoose')

app.use(express.static(path.join(__dirname, './public/dist/public')))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/AuthorsDB')
var AuthorSchema = new mongoose.Schema({
    name:{type:String, required:[true, 'Name is required!'], minlength:[3, 'Name must be atleast 3 characters long!']}
})
mongoose.model('Author', AuthorSchema)
var Author=mongoose.model('Author')


app.get('/authors', function(request, response){
    Author.find({}, function(error, authors){
        if(error){
            response.json({success:0, message:'There was an error'})
        }
        else{
            response.json({success:1, message:"Successfully fetched all authors", authors:authors})
        }
    })
})

app.post('/authors', function(request, response){
    console.log("Recieved post")
    console.log(request.body)
    var newAuthor=new Author(request.body)
    newAuthor.save(function(error){
        if(error){
            response.json({success:0, message:"Failed to create this author"})
        }
        else{
            response.json({success:1, message:"Successfully created author"})
        }
    })
})
app.delete('/authors/:authID', function(request, response){
    var authID=request.params.authID
    Author.remove({_id:authID}, function(error){
        if(error){
            response.json({success:0, message:"Unable to delete this author"})
        }
        else{
            response.json({success:1, message:"Successfully deleted this author"})
        }
    })
})

app.all('*', (request, response, next)=>{
    response.sendFile(path.resolve('./public/dist/public/index.html'))
})

app.listen(8000, function(){
    console.log("Listening on port 8000")
})
