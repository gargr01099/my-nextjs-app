//API route to handle GET,POST, requests
import { NextApiRequest, NextApiResponse } from "next";
let items: any = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(items);
  } else if (req.method === "POST") {
    const newItem = { id: Date.now(), ...req.body };
    items.push(newItem);
    return res.status(201).json(newItem);
  }
  res.setHeader("Allow", ["Get", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
