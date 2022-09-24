// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { repos } from "@data/repos"

export default function handler(req, res) {
  res.status(200).json(repos)
}