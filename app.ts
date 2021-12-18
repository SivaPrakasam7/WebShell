import "module-alias/register";
import Express from "express";
import * as Socket from "@src/controllers";
import * as Routes from "@src/routes";
import * as Path from "path";

const port = 8080;
const App = Express();

App.get("/", (req, res) =>
  res.sendFile(Path.join(__dirname + "/views/index.html"))
);

App.use(Routes.router);

const Server = App.listen(port, () => console.log(`Server listen at ${port}`));

Socket.Shell(Server);
