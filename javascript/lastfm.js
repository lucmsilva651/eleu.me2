var apiKey = null;
const username = "lucmsilva";

async function fetchNowPlaying() {
  try {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`);
    const data = await response.json();
    const track = data.recenttracks.track[0];
    console.log("making last.fm api request...");
    console.log("track object:", track);
    const isPlaying = track["@attr"] && track["@attr"].nowplaying;

    if (isPlaying) {
      document.getElementById('trackTitle').innerText = track.name;
      if (track.artist["#text"]) {
        document.getElementById('artistName').innerText = `${track.artist["#text"]}`;
      } else {
        document.getElementById('artistName').innerText = "Unknown (N/A)";
      }
      if (track.mbid) {
        document.getElementById('trackMbid').innerText = `${track.mbid}`;
      } else {
        document.getElementById('trackMbid').innerText = "Unknown (N/A)";
      }
      if (track.url) {
        document.getElementById('trackLink').innerText = `${track.url}`;
        document.getElementById('trackLink').href = `${track.url}`;
        document.getElementById('trackLink').classList.add("blue-text");
      } else {
        document.getElementById('trackLink').innerText = "Unknown (N/A)";
      }
      if (track.album["#text"]) {
        document.getElementById('albumName').innerText = `${track.album["#text"]}`;
      } else {
        document.getElementById('albumName').innerText = "Unknown (N/A)";
      }
      if (track.image[3]["#text"]) {
        const img = new Image();        
        img.src = track.image[3]["#text"];
        img.onload = function() {
          document.getElementById('albumArtDesc').innerText = `Download album art (${this.width + 'x' + this.height})`;
        }
        document.getElementById('albumArt').src = track.image[3]["#text"];
        document.getElementById('albumArtDesc').href = track.image[3]["#text"];
        document.getElementById('albumArtDesc').download = "AlbumArt.jpg";
      } else {
        document.getElementById('albumArtDesc').innerText = "No album art available";
        document.getElementById('albumArtDesc').href = "";
        document.getElementById('albumArt').src = "https://lastfm.freetls.fastly.net/i/u/4128a6eb29f94943c9d206c08e625904.jpg";
      }
      if (track.album.mbid) {
        document.getElementById('albumMbid').innerText = `${track.album.mbid}`;
      } else {
        document.getElementById('albumMbid').innerText = "Unknown (N/A)";
      }
      if (track.artist.mbid) {
        document.getElementById('artistMbid').innerText = `${track.artist.mbid}`;
      } else {
        document.getElementById('artistMbid').innerText = "Unknown (N/A)";
      }
    } else {
      document.getElementById('trackTitle').innerText = "None";
      document.getElementById('artistName').innerText = "None";
      document.getElementById('albumName').innerText = "None";
      document.getElementById('trackLink').innerText = "None";
      document.getElementById('trackMbid').innerText = "None";
      document.getElementById('artistMbid').innerText = "None";
      document.getElementById('albumMbid').innerText = "None";
      document.getElementById('albumArtDesc').innerText = "Nothing is playing";
      document.getElementById('albumArtDesc').href = "";
      document.getElementById('albumArtDesc').download = "";
      document.getElementById('albumArt').src = "https://lastfm.freetls.fastly.net/i/u/4128a6eb29f94943c9d206c08e625904.jpg";
    }
  } catch (error) {
    console.error('error when searching data from last.fm:', error);
  }
}

function checkApiKeyAndLog() {
  console.log("checking if the api key is inserted")
  if (apiKey || apiKey != null) {
    fetchNowPlaying();
    document.getElementById('lastNoApi').style.display = "none";
    document.getElementById('lastStatus').style.display = "";
  } else {
    document.getElementById('lastStatus').style.display = "none";
    document.getElementById('lastNoApi').style.display = "";
  }
}

setTimeout(checkApiKeyAndLog(), 5000);
