var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/models');
mongoose.connect('mongodb://localhost/user');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended: false }))



app.get('/',function(req,res){
    res.render('index');
})

app.post('/login',function(req,res){
    var u = req.body.login_u,
        p = req.body.login_p;
    var user = new User({
        username:u,
        password:p
    })
    user.findOne({username:u},function(err,username){
        if(err){
            console.error(err)
        };
        if(username){
            console.log('登陆成功');
        } else {
            console.log('没用户名');
        }
    })
})

app.post('/register',function(req,res){
    var u = req.body.register_u,
        p = req.body.register_p;
    var user = new User({
        username:u,
        password:p
    })
    //model.find();find方法为模型下的方法
    User.findOne({username:u},function(err,username){
        if(username){
            console.log('用户名存在');
        }
    })
    //Entity.save();save方法为实体下的方法
    user.save(function(err,username){
        if(err){
            console.error(err);
        }
        if(username){
            console.log('用户名已存在');
        }
        console.log(user);
    });
})
app.listen(3000);
console.log('start run')