import * as Express from "express";

const router = Express.Router();

router.get("/cmd/:cmd", (req, res) =>
  res.status(200).send({ message: `received ${req.params.cmd}` })
);

export { router };
