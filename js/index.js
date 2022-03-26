const videosElement = document.querySelector(".videos");

const init = async () => {
  const videos = await App.getVideos([
    "https://www.youtube.com/watch?v=hxHLQ6RTEFI",
    "https://www.youtube.com/watch?v=e8ndkT70oIg",
    "https://careerkarma.com/blog/freecodecamp-review/",
    "https://twitter.com/coursera?lang=en"
  ]);

  videos.forEach((video) => {
    App.addVideoToPage(video, videosElement);
  });
};

init();
