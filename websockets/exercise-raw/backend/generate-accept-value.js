import crypto from "crypto";

function generateAcceptValue(acceptKey) {
  return (
    crypto
      .createHash("sha1")
      // this magic string key is actually in the spec
      //This string is hard coded in the web socket spec and must be used to establish the "hand shake" web socket connection
      .update(acceptKey + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", "binary")
      .digest("base64")
  );
}

export default generateAcceptValue;
