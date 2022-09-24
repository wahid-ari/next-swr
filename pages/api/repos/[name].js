import { repos } from "@data/repos"

export default function handler(req, res) {

  const { name } = req.query
  const filteredRepo = repos.filter(repo => repo.id === name)

  if (filteredRepo.length > 0) {
    res.status(200).json(filteredRepo[0])
  }
  else {
    res.status(404).json({ name: name, error: "Not Found" })
  }
}