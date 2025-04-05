const VideoFile = require("./VideoFile");
const CodecFactory = require("./CodecFactory");
const AudioMixer = require("./AudioMixer");

class VideoPlayerFacade {
  playVideo(filename) {
    console.log(`Starting video playback for: ${filename}`);

    const video = new VideoFile(filename);
    const codec = CodecFactory.getCodec(filename);
    codec.decode(video.filename);

    const mixer = new AudioMixer();
    mixer.mixAudio(video.filename);

    console.log("Playback started successfully.\n");
  }
}

module.exports = VideoPlayerFacade;
