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


    注意model和entity的区别

    保存和查询方法所属的对象不同