const fs = require("fs");
const {createFFmpeg, fetchFile} = require("@ffmpeg/ffmpeg");

const ffmpeg = createFFmpeg({log: true});

(async() => {
  await ffmpeg.load();
  ffmpeg.FS("writeFile", "nrb.mp4", await fetchFile("./nrb.mp4"));
  await ffmpeg.run("-i", "nrb.mp4", "nrb.avi");
  await fs.promises.writeFile("./nrb.avi", ffmpeg.FS("readFile", "nrb.avi"));
  process.exit(0);
})();
