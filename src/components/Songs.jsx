
// import React, { useState, useRef, useEffect } from "react";
// // import "./App.css"; // Create a CSS file for styles

// const musicList = [
//   {
//     name: "Sanctified with Dynamite",
//     artist: "PowerWolf",
//     src: "./song/ashi.mp3", // Correctly formatted YouTube URL
//     cover:
//       "./song/ak.jpg"
//   },
//   {
//     name: "Army of the Night",
//     artist: "PowerWolf",
//     src: "./song/d.mp3",
//     cover:
//       "./song/ask.jpg"
//   },
//   {
//     name: "Incense & Iron",
//     artist: "PowerWolf",
//     src: "./song/c.mp3",
//     cover:
//       "./song/aska.jpg"
//   },
//   {
//     name: "Incense & Iron",
//     artist: "PowerWolf",
//     src: "./song/e.mp3",
//     cover:
//       "./song/jubin.jpg"
//   },
//   {
//     name: "Incense & Iron",
//     artist: "PowerWolf",
//     src: "./song/f.mp3",
//     cover:
//       "./song/taro.jpg"
//   },
  


// ];


// const cool=[{
  
//     names: "Incense & Iron",
//     artists: "PowerWolf",
//     srcs: "./song/f.mp3",
//     covers:
//       "./song/taro.jpg"
  
// }]

// function App() {
//   const [currentTrack, setCurrentTrack] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [trackProgress, setTrackProgress] = useState(0);
//   const audioRef = useRef(new Audio(musicList[currentTrack].src));
//   const intervalRef = useRef();
  
//   const { duration } = audioRef.current;

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     audioRef.current.pause();
//     audioRef.current = new Audio(musicList[currentTrack].src);
//     setTrackProgress(0);
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     }
//   }, [currentTrack]);

//   const startTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         handleNext();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, 1000);
//   };

//   const handleNext = () => {
//     if (currentTrack < musicList.length - 1) {
//       setCurrentTrack((prev) => prev + 1);
//     } else {
//       setCurrentTrack(0); // Go to the first track after the last one
//     }
//   };

//   const handlePrev = () => {
//     if (currentTrack > 0) {
//       setCurrentTrack((prev) => prev - 1);
//     } else {
//       setCurrentTrack(musicList.length - 1); // Go to the last track before the first one
//     }
//   };

//   const handleProgressChange = (e) => {
//     const value = e.target.value;
//     audioRef.current.currentTime = value;
//     setTrackProgress(value);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   return (
//     <div className="datass">
//     <div className="player-container">
//       <div className="player">
//         <img
//           src={musicList[currentTrack].cover}
//           alt="album cover"
//           className="album-cover"
//         />
//         <h2>{musicList[currentTrack].name}</h2>
//         <h4>{musicList[currentTrack].artist}</h4>
//         <div className="controls">
//           <button onClick={handlePrev}>⏮️</button>
//           <button onClick={() => setIsPlaying(!isPlaying)}>
//             {isPlaying ? "⏸️" : "▶️"}
//           </button>
//           <button onClick={handleNext}>⏭️</button>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={trackProgress}
//           onChange={handleProgressChange}
//         />
//         <div className="time-info">
//           <span>{formatTime(trackProgress)}</span>
//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Songs;

