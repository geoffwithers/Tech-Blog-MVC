const express = require('express');
const router = express.Router();
const pool = require('./database');

// POST /fitness
router.post('/', async (req, res) => {
    try {
      const { date, workout, duration } = req.body;
      await pool.query('INSERT INTO fitness_data (date, workout, duration) VALUES (?, ?, ?)', [
        date,
        workout,
        duration
      ]);
      res.status(201).json({ message: 'Blog data added successfully' });
    } catch (error) {
      console.error('Error adding blog data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // GET /fitness
  router.get('/', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM blog_data ORDER BY date DESC');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error retrieving blog data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// Export the router
module.exports = router;
