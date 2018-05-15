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

const app = Express();

app.get('/',function(req,res){
    console.log('Hello');
    res.send('Hello World');
    // res.send(req);
    // console.log(req);

});
app.listen(3000,function(){
    console.log('start listen http://localhost:3000');
})