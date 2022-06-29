// Getting the Play/Pause Button initialized
var isPlaying = false;
const playerButton = document.getElementById("play-pause");
playerButton.innerHTML = "Play &#9658";

// Songs List and Player Setup
const musicPlayer = document.querySelector("audio");
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const songs = [
	{
		tag: "1.mp3",
		title: "Mat Azma Re",
		artist: "KK",
		poster: "mat_azma_re.jpeg",
	},
	{
		tag: "2.mp3",
		title: "Kya Mujhe Pyar Hai x Tu Meri Shab hai x Labon ko",
		artist: "Khudgarhz Official",
		poster: "khudgarhz.jpeg",
	},
	{
		tag: "3.mp3",
		title: "Makhna",
		artist: "Pritam",
		poster: "makhna.jpeg",
	},
	{
		tag: "4.mp3",
		title: "Yaaram",
		artist: "Vishal Bharadwaj",
		poster: "yaaram.jpeg",
	},
];
var pointer = 0; // Starting from first song
loadSong(songs[pointer]);

function playPause() {
	if (!isPlaying) {
		playerButton.innerHTML = "Pause &#9208";
		musicPlayer.play();
		isPlaying = true;
		return;
	}
	playerButton.innerHTML = "Play &#9658";
	musicPlayer.pause();
	isPlaying = false;
}

function nextSong() {
	if (pointer != 3) pointer++;
	else pointer = 0;
	loadSong(songs[pointer]);
}

function prevSong() {
	if (pointer) pointer--;
	else pointer = 3;
	loadSong(songs[pointer]);
}

function loadSong(song) {
	musicPlayer.src = "/songs/" + song.tag;
	image.src = "/images/" + song.poster;
	title.innerHTML = song.title;
	artist.innerHTML = "Song by " + song.artist;
	musicPlayer.play(); //Continues Playing new song
}

window.addEventListener("keypress", (event) => {
	if (event.key == " ") playPause();
	if (event.key == "N" || event.key == "n") nextSong();
	if (event.key == "P" || event.key == "p") prevSong();
});
