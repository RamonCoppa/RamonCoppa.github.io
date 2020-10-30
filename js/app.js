$(document).foundation()

$('.sim-thumb').on('click', function() {
  $('#main-product-image').attr('src', $(this).data('image')).attr('alt', $(this).data('alt'));
  $('#main-product-image-description').html($(this).data('alt'));
})

const openModal = (element) => {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// function onYouTubeIframeAPIReady() {

//   var player;

//   player = new YT.Player('YouTubeBackgroundVideoPlayer', {

//       videoId: 'UvioYkEkCHc', // YouTube Video ID

//       width: 1280,               // Player width (in px)

//       height: 720,              // Player height (in px)

//       playerVars: {

//         playlist: 'UvioYkEkCHc',

//           autoplay: 1,        // Auto-play the video on load

//           autohide: 1,

//           disablekb: 1, 

//           controls: 0,        // Hide pause/play buttons in player

//           showinfo: 0,        // Hide the video title

//           modestbranding: 1,  // Hide the Youtube Logo

//           loop: 1,            // Run the video in a loop

//           fs: 0,              // Hide the full screen button

//           autohide: 0,         // Hide video controls when playing

//           rel: 0,

//           enablejsapi: 1

//       },

//       events: {

//         onReady: function(e) {

//             e.target.mute();

//             e.target.setPlaybackQuality('hd1080');

//         },

//         onStateChange: function(e) {

//           if(e && e.data === 1){

//               var videoHolder = document.getElementById('home-banner-box');

//               if(videoHolder && videoHolder.id){

//                 videoHolder.classList.remove('loading');

//               }

//           }else if(e && e.data === 0){

//             e.target.playVideo()

//           }

//         }

//       }

//   });

// }

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
player = new YT.Player('ytplayer', {
width: '100%',
height: '100%',
videoId: 'UvioYkEkCHc',
playerVars: {
'autoplay': 1,
'showinfo': 0,
'autohide': 1,
'loop': 1,
'controls': 0,
'modestbranding': 1,
'vq': 'hd1080'
},
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
player.mute(); // comment out if you don't want the auto played video muted
}

// 5. The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
player.seekTo(0);
player.playVideo();
}
}
function stopVideo() {
player.stopVideo();
}