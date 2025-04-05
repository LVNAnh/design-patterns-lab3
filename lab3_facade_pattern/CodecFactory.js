const MPEG4Codec = require("./MPEG4Codec");
const OggCodec = require("./OggCodec");

class CodecFactory {
  static getCodec(filename) {
    if (filename.endsWith(".mp4")) {
      return new MPEG4Codec();
    } else if (filename.endsWith(".ogg")) {
      return new OggCodec();
    } else {
      throw new Error("Unsupported file format");
    }
  }
}

module.exports = CodecFactory;
