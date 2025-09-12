// 用于处理日志请求，简单返回成功状态
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // 这里可以根据需求保存日志，暂时直接返回成功
    res.status(200).json({ message: "ignored" });
  } else {
    // 只允许 POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
