import { users } from "@data/users"

export default function handler(req, res) {

  const { name } = req.query
  const filteredUser = users.filter(user => user.id === name)

  if (filteredUser.length > 0) {
    res.status(200).json(filteredUser[0])
  }
  else {
    res.status(404).json({ name: name, error: "Not Found" })
  }
}