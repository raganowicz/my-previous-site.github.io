video_count =1;
videoPlayer = document.getElementById("myVideo");

function playMovie(){
        video_count++;
        if (video_count == 4) video_count = 1;
        let nextVideo = `video/video${video_count}.mp4`;
        videoPlayer.src = nextVideo;
        videoPlayer.play();
   };