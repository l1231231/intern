const user= require('../controller/user')
const router=require('express').Router()

router.get('/', user.getUser)

module.exports= router