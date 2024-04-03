const user =require('./user')
const initRoute = (app)=>{
    app.use('/api/v1/user', user);
    
    return app.use('/',(req,res)=>{
        return res.send('Onn');
    });
}
module.exports=initRoute