import { Request, Response } from "express";
import { User } from "../entity/User";
import { redis } from "../redis";

const hostName = 'http://localhost:3000/'

export const confirmEmail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = await redis.get(id);
  if (userId) {
    await User.update({ id: userId }, { confirmed: true });
    await redis.del(id);
    // res.send("ok");
    res.redirect(`${hostName}login`);
  } else {
    res.send("invalid");
  }
};
