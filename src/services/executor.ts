import * as Controllers from "@src/controllers";
import type * as WS from "ws";

export const Executor = (line: string, ws: WS.WebSocket) => {
  ws.send(
    Controllers.Commands[line.split(" ")[0]] ||
      Controllers.Functions[line.split(" ")[0]]?.(line.split(" ").slice(1)) ||
      `${line}||"Command executed"`
  );
};
