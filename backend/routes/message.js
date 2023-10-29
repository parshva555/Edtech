const express = require('express')
const router = express.Router();
const User = require('../models/User')
router.post('/sendmessage', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      const newUser = new User({
        name,
        email,
        subject,
        message,
      });
  
      await newUser.save(); 
  
      res.status(200).json(newUser);
    } catch (error) {
      console.error('Error saving user to the database: ' + error);
      res.status(500).json({ error: 'Error saving user to the database' });
    }
  });
  

  module.exports = router;
  
  