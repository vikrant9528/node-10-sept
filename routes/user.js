const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();
router.use(express.json());


router.get('/users',(req,res)=>{
  usercontroller.getAllUsers(req,res) //yeh controller se export krke mangaya hai business logic
})

router.get('/user/:id',(req,res)=>{
  usercontroller.getParticularUser(req,res) 
})

router.post('/add/user',(req,res)=>{
  usercontroller.addUser(req,res)
})

module.exports = router;