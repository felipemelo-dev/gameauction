export default function helloAPI(req, res) {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
