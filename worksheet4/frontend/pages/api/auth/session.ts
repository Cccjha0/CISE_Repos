// 返回一个空 session，避免前端 next-auth 调用报 404
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 可以随时根据需求返回用户信息或空对象
  res.status(200).json({ user: null });
}
