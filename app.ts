import "module-alias/register";
import Express from "express";
import * as Socket from "@src/controllers";
import * as Routes from "@src/routes";
import Axios from "axios";
import cors from "cors";
import * as ChildProcess from "child_process";

const port = 8080;
const App = Express();

// System process
ChildProcess.exec(`ngrok http ${port}`);

App.use(cors());
App.use(Express.json({ limit: "50mb" }));
App.set("view engine", "ejs");

App.get("/", (_req, res) =>
  res.render("index", {
    url: (global as any).URL,
  })
);

App.use(Routes.router);

const Server = App.listen(port, () => console.log(`Server listen at ${port}`));

// WS Socket
Socket.Shell(Server);

setTimeout(
  () =>
    Axios({
      method: "get",
      url: "http://127.0.0.1:4040/api/tunnels/command_line",
    }).then((r) => {
      (global as any).URL = r.data.public_url.replace("https://", "");
    }),
  9000
);
