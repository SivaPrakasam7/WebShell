import * as Express from "express";
import * as Services from "@src/services";

const router = Express.Router();

router.get("/cmd/:cmd", (req, res) => {
  res.status(200).send({ message: `Command executed` });
});

router.post("/screenshot", (req, res) => {
  const { screenshot, fileName }: { screenshot: string; fileName: string } =
    req.body;
  if (screenshot) {
    Services.SaveFile(screenshot, fileName.replace(/\//g, "|"));
    res.status(200).send({ message: "success" });
  } else res.status(400).send({ message: "Bad Input" });
});

router.post("/videoStream", (req, res) => {
  const { video, fileName }: { video: string; fileName: string } = req.body;
  if (video) {
    Services.SaveFile(video, fileName.replace(/\//g, "|"));
    res.status(200).send({ message: "success" });
  } else res.status(400).send({ message: "Bad Input" });
});

export { router };
