// pages/api/minify-url.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { url } = req.body;
  
        // Minify the URL
        const response = await fetch(`https://ulvis.net/API/write/get?url=${url}&private=1`);
        if (response.ok) {
          const minifiedURL = await response.text();
          res.status(200).json({ minifiedURL });
        } else {
          res.status(400).json({ error: 'Failed to minify URL' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  