// const Xray = require('x-ray');

// const x = Xray();



// x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html', 'table > tr', [{
//     No: 'td:nth-child(2)',
//     courseName: 'td:nth-child(4)',
//     teacher: 'td:nth-child(5)',
// },
// ]).write('./course.json');


// x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html', 'table > tr', [{
//     No: 'td:nth-child(2)',
//     courseName: 'td:nth-child(4)',
//     teacher: 'td:nth-child(5)',
// },
// ]).write('./dist/course.json');

// const { person } = require('./person.js');
// const person = require('person.js');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const Express = require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');




const bodyParser = require('body-parser');

const { db, User, Post } = require('./models');



const app = Express();


app.set('view engine','pug');



app.get('/',async (req,res)=>{
    const posts = await Post.findAll({
        order:[['createdAt','DESC']]
    }
        
    );
    
    res.render('index',{posts:posts});
});

app.get('/about',function(req,res){
    res.render('about');
});






app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(helmet());

const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(serveStatic(publicPath));

app.get('/posts', async (req, res) => {
    const posts = await Post.findAll();
    res.send(posts);
});

app.get('/user/:id', async (req, res) => {
    //await must be in async funtion
    const user = await User.findById(req.params.id)
    res.send('user id: ' + req.params.id);
});
app.get('/create/user', (req, res) => {
    User.create({
        email: 'frank051284@gmail.com',
        password: 'frank',
        nickname: 'frankyboy',
        gender: 1
    }).then(user => {
        res.send(user);
    }).catch(err => {
        console.log(err);
    });
});

app.post('/create/post', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

db.sync().then(() => {
    app.listen(process.env.PORT, function () {
        console.log('start listen http://localhost:3000/');
    })
});


app.get('/create/post', async (req, res) => {
    const post = await Post.create({
        title: 'test',
        content: '',
        author: 1,
    });
    res.send(post);
});


app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).end();
    }
});

app.post('/posts', async (req, res) => {
    const post = await Post.create(req.body);
    res.status(201).send(post);
});
app.delete('/posts/:id', async (req, res) => {
    await Post.destroy({
        where: { id: req.params.id }
    });
    res.status(204).end();
});

app.get('/posts', async (req, res) => {
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    const posts = await Post.findAll({
        limit: limit,
        offset: limit * (page - 1),
    });

    res.send(
        Object.assign(posts, {
            page: page,
            totalPage: Math.ceil(posts.count / limit),
        })
    );

});
















