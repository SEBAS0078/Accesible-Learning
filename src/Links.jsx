  
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Links() {
const resources = [
  {
    id: 1,
    title: "FreeCodeCamp",
    link: "https://www.freecodecamp.org",
    image: "https://cdn-images-1.medium.com/max/1200/1*B6_f-_SxscJ9FCuIjOrQAQ.jpeg",
    category: "Programming",
    type: "Online Course",
  },
  {
    id: 2,
    title: "Khan Academy",
    link: "https://www.khanacademy.org",
    image: "https://cdn.kastatic.org/images/khan-logo-dark-background-2.png",
    category: "General Education",
    type: "Organization / Online Course",
  },
  {
    id: 3,
    title: "CodePath",
    link: "https://www.codepath.org/courses",
    image: "https://www.codepath.org/hubfs/codepath-1x1_solid-dark-1.png",
    category: "Programming",
    type: "Online Course",
  },
  {
    id: 4,
    title: "Duolingo",
    link: "https://www.duolingo.com/",
    image: "https://1000logos.net/wp-content/uploads/2020/10/Duolingo-logo.jpg",
    category: "Languages",
    type: "App",
  },
  {
    id: 5,
    title: "CrashCourse",
    link: "https://www.youtube.com/user/crashcourse",
    image: "https://complexly.com/wp-content/uploads/2021/10/CrashCourse_Logo2024-03-copy-1024x1019.png",
    category: "General Education",
    type: "YouTube Channel",
  },
  {
    id: 6,
    title: "3Blue1Brown",
    link: "https://www.youtube.com/c/3blue1brown",
    image: "https://tse4.mm.bing.net/th/id/OIP.cUlwxesa0KWixMrPPzxLbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Mathematics",
    type: "YouTube Channel",
  },
  {
    id: 7,
    title: "TED-Ed",
    link: "https://ed.ted.com/",
    image: "https://page-builder.ted.com/system/baubles/files/000/005/432/original/TEDEd_logo_square.jpg?1509136916",
    category: "General Education",
    type: "Organization / Online Content",
  },
  {
    id: 8,
    title: "CS50 by Harvard",
    link: "https://cs50.harvard.edu/x/",
    image: "https://tse4.mm.bing.net/th/id/OIP.1rYME4xeNK83yea8dRkynAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Programming",
    type: "Online Course",
  },
  {
    id: 9,
    title: "Coursera",
    link: "https://www.coursera.org/courses?query=free",
    image: "https://allmyoption.com/wp-content/uploads/2022/12/2048px-Coursera-Logo_600x600.svg_-1024x1024.png",
    category: "Various Skills",
    type: "Online Course Platform",
  },
  {
    id: 10,
    title: "edX",
    link: "https://www.edx.org/",
    image: "https://tse1.mm.bing.net/th/id/OIP.9AV1rgVE68hUcWDIdtJ8dQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Various Skills",
    type: "Online Course Platform",
  },
  {
    id: 11,
    title: "Programming with Mosh",
    link: "https://www.youtube.com/c/programmingwithmosh",
    image: "https://i.imgur.com/lyVTbVE.png",
    category: "Programming",
    type: "YouTube Channel",
  },
  {
    id: 12,
    title: "The Coding Train",
    link: "https://www.youtube.com/c/TheCodingTrain",
    image: "https://codingtrain.github.io/teamtrees/assets/images/CodingTrain.png",
    category: "Programming",
    type: "YouTube Channel",
  }
];


  return(<div id="resources-container">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="resources-card"
          >
            <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
            <img
              src={resource.image}
              alt={resource.title}
              className="resource-image" 
            />
            <div>
              <h2 className="resource-title" >{resource.title}</h2>
              <p className="resource-category">
                {resource.category}
              </p>
               <p className="resource-type">
                {resource.type}
              </p>
            </div>
            </a>
          </div>
        ))}
      </div>); 
  
}

export default Links; 