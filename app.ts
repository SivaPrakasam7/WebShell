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

App.use(Routes.router);

const Server = App.listen(port, () => console.log(`Server listen at ${port}`));

setTimeout(
  () =>
    Axios({
      method: "get",
      url: "http://127.0.0.1:4040/api/tunnels/command_line",
    }).then((r) => {
      const URL = r.data.public_url.replace("https://", "");
      App.get("/", (_req, res) =>
        res.render("index", {
          url: URL,
        })
      );

      console.log(URL);

      // WS Socket
      Socket.Shell(Server, URL);
    }),
  9000
);
