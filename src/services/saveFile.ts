import * as Fs from "fs";

export const SaveFile = (dataUrl: string, fileName: string) => {
  var regex = /^data:.+\/(.+);base64,(.*)$/;
  var matches = dataUrl.match(regex);
  var ext = matches?.[1];
  var data = matches?.[2];
  if (data) {
    var buffer = Buffer.from(data, "base64");
    Fs.existsSync(`storage/${fileName}`) || Fs.mkdirSync(`storage/${fileName}`);
    Fs.writeFileSync(
      `storage/${fileName}/${new Date().getTime()}.${ext}`,
      buffer
    );
  }
};
