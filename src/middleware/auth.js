const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
  
    if (token === process.env.AUTH_TOKEN) {
      return next(); 
    }
  
    res.status(403).json({ message: 'Forbidden' }); 
  };
  
  module.exports = authMiddleware;
  