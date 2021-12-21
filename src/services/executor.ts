import * as Controllers from "@src/controllers";

export const Executor = (line: string) => {
  if ((global as any).ws) {
    (global as any).ws.send(
      Controllers.Commands[line.split(" ")[0]] ||
        Controllers.Functions[line.split(" ")[0]]?.(line.split(" ").slice(1)) ||
        `${line}||"Command executed"`
    );
  } else {
    (global as any).io.emit("result", "Target not connected");
  }
};
