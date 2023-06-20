import * as WS from "ws";
import * as Read from "readline";
import * as Http from "http";
import * as Services from "@src/services";

export const Shell = (Server: Http.Server, URL: string) => {
  const wss = new WS.Server({ server: Server, path: "/shell" });
  const io = require("socket.io")(Server);
  (global as any).io = io;
  wss.on("connection", (ws) => {
    (global as any).ws = ws;
    ws.on("message", (msg) => io.emit("result", Services.Print(msg)));
    const ReadLine = Read.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    ReadLine.on("line", (line: string) => Services.Executor(line, URL));
  });

  io.on("connection", (client: any) =>
    client.on("cmd", (line: string) => Services.Executor(line, URL))
  );
};
