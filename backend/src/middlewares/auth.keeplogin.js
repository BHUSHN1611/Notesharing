const authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  if (!token) return res.status(401).json({ message: "Not logged in" })

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  req.user = decoded
  next()
}