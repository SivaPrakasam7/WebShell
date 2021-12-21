import * as WS from "ws";

export const Print = (message: WS.RawData) => {
  try {
    console.log(
      `Received: ${JSON.stringify(
        JSON.parse(message.toString("utf-8")),
        null,
        4
      )}`
    );
    return JSON.parse(message.toString("utf-8"));
  } catch (e) {
    return "Bad Command";
  }
};
