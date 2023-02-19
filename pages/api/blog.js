import { blog } from "@data/blog";

export default function handler(req, res) {
  const { query } = req

  if (query.id) {
    const filteredBlog = blog.filter(item => item.id == query.id)
    if (filteredBlog.length > 0) {
      res.status(200).json(filteredBlog[0])
    } else {
      res.status(404).json({ error: "Not Found" })
    }
  }
  else {
    res.status(200).json(blog.slice(0, 20))
  }
}