let ytPlayer;
/* This class is the connector to the player window.
   It mirrors the youtube API functions and sends / receive messages
   from and to the main process. The main process then proxy the messages
   to the player window and proxy back the here (via callbacks).
*/
class YTPlayer {
  constructor() {
    this.listenToWin()
    this.startProgressChecker();
    this.playerState = null;
  }

  setState(state) {
    this.playerState = state
    if(this.videoEnded) {
      this.send('onEnd')
    }
    return false
  }

  get videoEnded() {
    return this.playerState === YT.PlayerState.ENDED
  }

  get isPlaying() {
    return this.playerState === YT.PlayerState.PLAYING
  }

  pauseVideo() {
    ytPlayer.pauseVideo()
  }

  playVideo() {
    ytPlayer.playVideo();
  }

  unMute() {
    ytPlayer.unMute()
  }

  seekTo(value) {
    ytPlayer.seekTo(value);
  }

  loadVideoById(id) {
    ytPlayer.loadVideoById({ videoId: id, suggestedQuality: 'small' });
  }

  sendCurrentTime() {
    this.send('currentTime', ytPlayer.getCurrentTime())
  }

  setVolume(value) {
    ytPlayer.setVolume(value)
  }

  startProgressChecker() {
    setInterval(() => {
      if (this.isPlaying) {
        this.sendCurrentTime();
      }
    }, 500);
  }

  listenToWin() {
    window.ipcRenderer.on('win2Player' , (e, args) => {
      const [command, data] = args
      this[command](data)
    })
  }

  send(command, args) {
    window.ipcRenderer.send('player2Win', [command, args]);
  }
}

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
// Load the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubePlayerAPIReady = () => {
  let yt;

  ytPlayer = new YT.Player('ytplayer', {
    width: '262',
    height: '200',
    controls: 0,
    disablekb: 1,
    fs: 0,
    events: {
      onReady() {
        yt = new YTPlayer()
        yt.send('onReady')
      },
      onStateChange(e) {
        yt.setState(e.data)
      }
    }
  });
}
