// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "@data/users"

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      if (!req.headers.authorization) {
        return res.status(422).json({ error: "Please provide headers" });
      }
      const token = req.headers.authorization.split("Bearer ")[1];
      if (!token) {
        return res.status(422).json({ error: "Token not found" });
      }
      if (token !== 'valid-token') {
        return res.status(422).json({ error: "Token not valid" });
      }
      return res.status(200).json(users[6])
    default:
      return res.json({ error: "Only accepting GET method" });
  }
}