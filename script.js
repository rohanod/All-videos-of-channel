javascript: (function() {
    const channelId = ytInitialPlayerResponse.videoDetails.channelId; 
  
    // Construct uploads playlist URL (replace UC with UU)
    let playlistUrl = `https://www.youtube.com/playlist?list=${channelId.replace(/^UC/, 'UU')}`; 
  
    // Redirect to the playlist
    window.location.href = playlistUrl; 
  })();
  
