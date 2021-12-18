import * as WS from "ws";

export const Print = (message: WS.RawData) =>
  console.log(
    `Received: ${JSON.stringify(
      JSON.parse(message.toString("utf-8")),
      null,
      4
    )}`
  );
