import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/gregoryvargas/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gv4383"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:gregory.vargas18@gmail.com"
                className="icon fa-envelope-o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>Greg Vargas</li>
            <li>
              Design:{' '}
              <a
                className="no-link"
                href="http://html5up.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5 UP
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
