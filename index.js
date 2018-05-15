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
const Express= require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');
const app = Express();

const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(serveStatic(publicPath));


app.get('/',function(req,res){
    console.log('Hello');
});
app.listen(process.env.PORT||3000,function(){
    console.log('start listen http://localhost:3000');
})