import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Skills from '../components/Skills'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import noDb from '../assets/images/thumbs/noDB_01.png'
import ss01 from '../assets/images/thumbs/SS_01.png'
import ft01 from '../assets/images/thumbs/FT_01.png'

import resume from '../assets/resume/Full_Stack_Dev.pdf'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: ft01,
    caption: 'Fetch Tech (July 2018 - August 2018)',
    description:
      'An application that brings latest tech news to all tech enthusiasts. This project was completed in a group of 4 developers.',
    technology: 'React | Redux | Express | Node | PostgreSQL | Ant Design',
    github: 'https://github.com/fetch-tech/fetch-tech',
    website: '',
  },
  {
    id: '2',
    src: full02,
    thumbnail: ss01,
    caption: 'Sound Skwerl (June 2018 - July 2018)',
    description:
      'A music app that utilizes the Spotify API to search for songs and create custom playlists.',
    technology: 'React | Redux | Express | Node | PostgreSQL | Spotify Web API',
    github: 'https://github.com/gv4383/project-playlist',
    website: 'http://soundskwerl.com',
  },
  {
    id: '3',
    src: full03,
    thumbnail: noDb,
    caption: 'No Database Project (May 2018 - June 2018)',
    description:
      'A simple app that allows users to fully customize a list of videogame heroes.',
    technology: 'React | Express | Node | Overwatch API',
    github: 'https://github.com/gv4383/no-db-project',
    website: '',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <a name="about" />
            <header className="major">
              <h2>Hey there, I'm Greg!</h2>
            </header>
            <p>
              I'm a full-stack developer with a passion for creating innovative
              solutions.
              <br />
              <br />I originally graduated with a degree in Electrical
              Engineering from Texas A&M University, but decided to jump into
              software development after seeing a YouTube video on the tech
              industry in Silicon Valley. It's been a long, continuous journey
              full of learning and I couldn't be more content with my decision
              to venture down this path.
              <br />
              <br />
              When I'm not coding, you'll find me:
              <ul>
                <li>
                  Playing guitar and jamming with the best musicians around
                  town!
                </li>
                <li>Learning new cooking recipies</li>
                <li>Bouldering</li>
                <li>Hiking and exploring nature</li>
              </ul>
              Below, you'll find my credentials as well as the accomplishments
              I've made throughout my journey in software development.
            </p>
            <ul className="actions">
              <li>
                <a href={resume} className="button" download>
                  Download Resume
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <a name="skill" />
            <h2>Skills</h2>

            <Skills />
          </section>

          <section id="three">
            <a name="projects" />
            <h2>Personal & Group Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  src,
                  thumbnail,
                  caption,
                  description,
                  technology,
                  github,
                  website,
                }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  technology,
                  github,
                  website,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://github.com/gv4383"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>

          <section id="four">
            <a name="contact" />
            <h2>Let's Get In Touch!</h2>
            <p>
              Like what you see? Feel free to reach out!
              <br />
              I'd love to hear about any opportunities you may have for me!
            </p>
            <div className="row">
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Austin, TX
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    (512) 350-3055
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a
                      className="no-link"
                      href="mailto:gregory.vargas18@gmail.com"
                    >
                      gregory.vargas18@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
