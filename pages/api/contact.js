export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body
    const { email, name, message } = body
    res.status(201).json({
      message: "success"
    })
  }
}
