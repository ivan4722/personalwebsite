import * as React from "react";
import { useEffect } from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

const strings = [
  "Ivan Xiong",
  "CS+Math at NYU",
  "Website built using React"
];

const typingSpeed = 100; // Adjust the typing speed (milliseconds per character)

export default function Home() {
  const [hello, setHello] = React.useState("");
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);

  const handleChangeHello = () => {
    const nextIndex = (currentStringIndex + 1) % strings.length;
    setCurrentStringIndex(nextIndex);
  };

  useEffect(() => {
    // Typing effect
    let currentChar = 0;
    const intervalId = setInterval(() => {
      if (currentChar <= strings[currentStringIndex].length) {
        setHello(strings[currentStringIndex].slice(0, currentChar));
        currentChar += 1;
      } else {
        clearInterval(intervalId);
        // Additional logic after typing is complete (if needed)
      }
    }, typingSpeed);

    return () => {
      // Cleanup on component unmount or when switching strings
      clearInterval(intervalId);
    };
  }, [currentStringIndex]); // Run effect when currentStringIndex changes

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const drawElement = document.createElement("div");
    drawElement.classList.add("draw-cursor");
    document.body.appendChild(drawElement);

    drawElement.style.left = `${x}px`;
    drawElement.style.top = `${y}px`;

    setTimeout(() => {
      document.body.removeChild(drawElement);
    }, 300);
  };

  return (
    <>
      <h1 className="title" onMouseMove={handleMouseMove} onClick={handleChangeHello}>
        {hello}
      </h1>
      <p className="hint-text">Click my name 🤫</p> {/* Added hint text */}
      <animated.div onMouseEnter={trigger} style={style}></animated.div>
      <div className="navigation">
        <animated.div onMouseEnter={trigger}>
        </animated.div>
      </div>
      <div className="instructions">
        <h2>About me</h2>
        <ul>
          <li>Hi! My name is Ivan Xiong. I am a Senior studying Computer Science and Math at NYU.</li>
          <li>I am a passionate software developer with interests in big tech, data, investment, and finance.</li>
          <li>In my past time, I like to play Overwatch (and other FPS games), Chess, and Poker.</li>
        </ul>
      </div>
    </>
  );
}
