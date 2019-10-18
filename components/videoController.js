video_count = 1;
var promise = document.querySelector("video").play();

function playMovie() {
  if (promise !== undefined) {
    promise
      .then(_ => {
        video_count++;
        if (video_count == 4) video_count = 1;
        let nextVideo = `video/video${video_count}.mp4`;
        document.querySelector("video").src = nextVideo;
      })
      .catch(error => {
        console.log("If you read this, probably something went wrong with loading video on background, but don't worry, all activities should work properly ;)");
      });
  }
}
