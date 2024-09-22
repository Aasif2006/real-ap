import React, { useState, useRef, useEffect } from "react";

const RapsongsList = [
  {
    name: "Shubh Gill Song",
   
    src: "./song/l.mp3",
    cover: "./song/cheq.jpg",
  },
  {
    name: "Shubh Gill Song",
    
    src: "./song/m.mp3",
    cover: "./song/cheqs.jpg",
  },
  {
    name: "Shubh Gill Song",
    
    src: "./song/n.mp3",
    cover: "./song/cheq.jpg",
  },
  
];

function NewMusicPlayers() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(new Audio(RapsongsList[currentTrack].src));
  const intervalRef = useRef();

  useEffect(() => {
    audioRef.current.volume = volume; // Set initial volume
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, volume]); // Add volume to dependencies

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(RapsongsList[currentTrack].src);
    audioRef.current.volume = volume; // Set volume for new track
    setTrackProgress(0);
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    }
  }, [currentTrack]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % RapsongsList.length);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev === 0 ? RapsongsList.length - 1 : prev - 1));
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setTrackProgress(value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100; // Convert to 0-1 range
    audioRef.current.volume = newVolume; // Set the audio element's volume
    setVolume(newVolume); // Update state
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="player-container">
      <div className="player">
        <img
          src={RapsongsList[currentTrack].cover}
          alt="album cover"
          className="album-cover"
        />
        <h2>{RapsongsList[currentTrack].name}</h2>
        <h4>{RapsongsList[currentTrack].artist}</h4>
        <div className="controls">
          <button onClick={handlePrev}>⏮️</button>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button onClick={handleNext}>⏭️</button>
        </div>
        <input
          type="range"
          min="0"
          max={audioRef.current.duration || 0}
          value={trackProgress}
          onChange={handleProgressChange}
        />
        <div className="time-info">
          <span>{formatTime(trackProgress)}</span>
          <span>{formatTime(audioRef.current.duration || 0)}</span>
        </div>
        <div className="volume-control">
          <label>Volume: </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100} // Display volume as percentage
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default NewMusicPlayers; // Correct export statement
