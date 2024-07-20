## Create a YouTube Playlist Bookmarklet

### How it works:
This bookmarklet creates a YouTube playlist based on the current video's channel.

### Instructions:

#### Bookmarklet Method
1. **Refresh the YouTube page.**
2. **Copy the following link:**
   ```
   javascript:(function()%7Bconst channelId = ytInitialPlayerResponse.videoDetails.channelId%3B let playlistUrl = %60https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3D%24%7BchannelId.replace%28%2F%5EUC%2F%2C %27UU%27%29%7D%60%3B window.location.href = playlistUrl%3B%7D)()%3B
   ```
3. **Create a new bookmark.**
4. **Paste the copied link into the bookmark's URL field.**
5. **Give the bookmark a descriptive name, like "YouTube Playlist Creator".**

#### Javascript Console Method
1. **Refresh the YouTube page.**
2. **Copy the following Javascript:**
   ```
   javascript: (function() {
    const channelId = ytInitialPlayerResponse.videoDetails.channelId; 
  
    // Construct uploads playlist URL (replace UC with UU)
    let playlistUrl = `https://www.youtube.com/playlist?list=${channelId.replace(/^UC/, 'UU')}`; 
  
    // Redirect to the playlist
    window.location.href = playlistUrl;
   })();
  
   ```
3. **Press CTRL+SHIFT+I (Windows) or CMD+SHIFT+I (Mac)**
4. **Click on the console tab**
5. **Paste in the Javascript code**
6. **Hit enter and you should be redirected to a playlist containing all of the uploaded videos of the channel**
### Usage:
* Navigate to a YouTube video.
* Click the bookmarklet.
