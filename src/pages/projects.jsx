import * as React from "react";
import { Tilt } from 'react-tilt'

export default function Projects() {
  const projectData = [
    {
      imageSrc: "https://github.com/ivan4722/SpotifySongGenrePrediction/raw/master/images/image5.png",
      title: "Predictory Spotify Song Genre Using PCA and XGBoost",
      description: "The goal of our classifier is to predict the genre of a song given certain characteristics about the song. We had the following predictors: instance_id, artist_name, track_name, popularity, acousticness, danceability, duration_ms, energy, instrumentalness, liveness, loudness, speechiness, tempo, obtained_date, and valence.",
      technologies: "Python, Pandas, NumPy, SciKitLearn, MatPlotLib",
      redirectUrl: "https://github.com/ivan4722/SpotifySongGenrePrediction/"
    },
    {
      imageSrc: "https://camo.githubusercontent.com/864906298c4753c7e4ffece4debe48fda7685e897715ee0bcaea6e724fbcc9e3/68747470733a2f2f63646e2e676c697463682e676c6f62616c2f64636235326339322d396366612d343538362d613166352d3731303566363836656462342f53637265656e73686f74253230323032342d30342d31302532306174253230342e32352e3430253230504d2e706e673f763d31373132373830373932303536",
      title: "PetShare - http://4722hq.com:3000/",
      description: "PetShare is an innovative platform designed to bring pet lovers together. Want to live your dream of having 100 cats? Now you can! Whether you're looking to raise a virtual pet or connect with other pet enthusiasts, PetShare offers a unique online experience.",
      technologies: "NodeJS, ReactJS, MongoDB, AWS, ExpressJS, TailwindCSS, RestAPI, JSON",
      redirectUrl: "https://github.com/ivan4722/pet"
    },
    {
      imageSrc: "https://ix221-images.s3.us-east-2.amazonaws.com/Screenshot+2024-07-23+at+12.12.38%E2%80%AFPM.png",
      title: "Probabilitle - http://4722hq.com:4000/",
      description: "Like wordle, Probabilitle prompts the user with a new Probability/Combinatorics question every day.",
      technologies: "NodeJS, MongoDB, AWS, ExpressJS, Mongoose, Handlebars, Twitter API, Argon 2 Hashing, SemanticUI, Luxon, Lodash, Client SideForm Validation, HTML/CSS, Git",
      redirectUrl: "https://github.com/ivan4722/dailypuzzle"
    },
    {
      imageSrc: "https://ix221-images.s3.us-east-2.amazonaws.com/Screenshot+2024-07-23+at+12.15.37%E2%80%AFPM.png",
      title: "This Website",
      description: "Personal website to showcase skills and projects.",
      technologies: "ReactJS, HTML/CSS, React-Tilt, React-Router, AWS S3",
      redirectUrl: "https://github.com/ivan4722/PersonalWebsite"
    },
    {
      imageSrc: "https://camo.githubusercontent.com/f5714d9133f2ad39e8557e4d6726bfc856b817bf8893635b2b98fa3c5bde754c/68747470733a2f2f692e696d6775722e636f6d2f4a78574a61574f2e706e67",
      title: "TranslaDORA",
      description: "Real-time translation discord bot to facilitate cross-language communication on the social platform Discord",
      technologies: "Python, discordPy, AWS, googletranslate API",
      redirectUrl: "https://github.com/ivan4722/TranslaDORA"
    },
    {
      imageSrc: "https://ix221-images.s3.us-east-2.amazonaws.com/Screenshot+2024-07-23+at+12.16.14%E2%80%AFPM.png",
      title: "RSI Trading Strategy",
      description: "Applying data analysis, I leveraged RSI as a buy/sell indicator to generate 11.32% on CVX stock in a 2-year time period.",
      technologies: "Python, MatPlotLib, numPy, Pandas, yFinance",
      redirectUrl: "https://github.com/ivan4722/Strategic-RSI-Threshold-Selection-for-Improved-Stock-Trading"
    },
    
  ];
    return (
    <div className="page">
      <h1 className="title">My Projects</h1>

      {projectData.map((project, index) => (
        <div className={`project-container ${index % 2 === 0 ? "even" : "odd"}`} key={index}>
          <div className="project">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
              <a href={project.redirectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageSrc} alt={`project-${index}`} width="400px" />
              </a>
            </Tilt>
            <div>
              <h3>{project.title}</h3>
              <br></br>
              {project.description} <br></br>
              <strong>Built using: </strong>{project.technologies}
              {project.githubLink && <a className="button" href={project.githubLink} target="_blank" rel="noopener noreferrer">View Github</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}
