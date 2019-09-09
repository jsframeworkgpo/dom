const express = require('express'),
      path = require('path')

const post = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'juego')));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.set ('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index')
})


app.listen(post, ()=>{console.log(`Escuchando en el puerto:${post}`)})
