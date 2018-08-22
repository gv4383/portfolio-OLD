import React, { Component } from 'react'

import icon1 from '../assets/skills/DevIcons-01.svg'
import icon2 from '../assets/skills/DevIcons-02.svg'
import icon3 from '../assets/skills/DevIcons-03.svg'
import icon4 from '../assets/skills/DevIcons-04.svg'
import icon5 from '../assets/skills/DevIcons-05.svg'
import icon6 from '../assets/skills/DevIcons-06.svg'
import icon7 from '../assets/skills/DevIcons-07.svg'
import icon8 from '../assets/skills/DevIcons-08.svg'
import icon9 from '../assets/skills/DevIcons-09.svg'
import icon10 from '../assets/skills/DevIcons-10.svg'
import icon11 from '../assets/skills/DevIcons-11.svg'
import icon12 from '../assets/skills/DevIcons-12.svg'
import icon13 from '../assets/skills/DevIcons-13.svg'
import icon14 from '../assets/skills/DevIcons-14.svg'
import icon15 from '../assets/skills/DevIcons-15.svg'

const skillsArray = [
  {
    id: '1',
    name: 'React',
    url: 'https://reactjs.org/',
    src: icon1,
  },
  {
    id: '14',
    name: 'Redux',
    url: 'https://redux.js.org/',
    src: icon14,
  },
  {
    id: '3',
    name: 'ES6+',
    url: 'https://es6.io/',
    src: icon3,
  },
  {
    id: '4',
    name: 'Express',
    url: 'https://expressjs.com/',
    src: icon4,
  },
  {
    id: '9',
    name: 'Node',
    url: 'https://nodejs.org/en/',
    src: icon9,
  },
  {
    id: '8',
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    src: icon8,
  },
  {
    id: '15',
    name: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    src: icon15,
  },
  {
    id: '13',
    name: 'CSS3',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
    src: icon13,
  },
  {
    id: '6',
    name: 'Git + GitHub',
    url: 'https://git-scm.com/',
    src: icon6,
  },
  {
    id: '10',
    name: 'NPM',
    url: 'https://www.npmjs.com/',
    src: icon10,
  },
]

class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('skillsArray: ', skillsArray)

    const displaySkills = skillsArray.map(skill => {
      return (
        <div key={skill.id} className="dev-icon">
          <a
            className="no-link hover-icon"
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{skill.name}</p>
            <img className="hvr-grow" src={skill.src} alt={skill.name} />
          </a>
        </div>
      )
    })

    return <div id="skills">{skillsArray[0] && displaySkills}</div>
  }
}

export default Skills
