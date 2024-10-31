const express = require('express');
const router = express.Router();

router.get('/news/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { country = 'us', page = 1, pageSize = 6 } = req.query;
    
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.NEWS_API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`NewsAPI responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Add caching headers
    res.setHeader('Cache-Control', 's-maxage=300'); // Cache for 5 minutes
    
    res.json(data);
  } catch (error) {
    console.error('News API Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      details: error.message 
    });
  }
});

module.exports = router;