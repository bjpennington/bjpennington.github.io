import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/bj_pennington.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3>FourScore</h3>
          <ul>
            <li>Scope and develop a full stack application to assist teachers using standards-based grading in their classrooms with tracking grades</li>
            <li>Teachers register as users, set up classrooms with students and standards, create assignments and tag them with standards, and add and view grades.</li>
            <li>Teachers are able to view all of their students’ top scores across all classroom standards at a glance</li>
            <li>Technologies used include ReactJS, Node.js, Express.js, PostgreSQL React-Redux, Redux-Sagas, Material-UI, SweetAlerts, GriddleJS</li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <h3>Full Stack Engineering Student</h3>
          <h4>Prime Digital Academy</h4>
          <p>Group Project: Gilda's Club</p>
          <ul>

          </ul>
          <p>Solo Project: FourScore Gradebook</p>
          <ul>
            <li>Scope and develop a full stack application to assist teachers using standards-based grading in their classrooms with tracking grades</li>
            <li>Teachers register as users, set up classrooms with students and standards, create assignments and tag them with standards, and add and view grades.</li>
            <li>Teachers are able to view all of their students’ top scores across all classroom standards at a glance</li>
            <li>Technologies used include ReactJS, Node.js, Express.js, PostgreSQL React-Redux, Redux-Sagas, Material-UI, SweetAlerts, GriddleJS</li>
          </ul>
          <br />
          <h3>Second Lead for Writing Vertical</h3>
          <h4>Leverage</h4>
          <ul>
          <li>Supported 14-person writing team by answering questions and resolving client issues related to writing tasks</li>
          <li>Reviewed writing tasks for quality control and client satisfaction</li>
          <li>Co-led weekly office hours to update writing team on company policies and procedures and troubleshoot concerns with writing tasks</li>
          <li>Defined and created processes for the Writing Vertical in tandem with the Writing Lead</li>
          <li>Continued to perform regular contractor duties</li>
          </ul>
          <br />
          <h3>Contractor</h3>
          <h4>Leverage</h4>
          <ul>
            <li>Collaborated with a global team of contractors on client projects</li>
            <li>Coordinated up to 15 projects at a time on a self-directed schedule</li>
            <li>Conducted regular client updates via video conference or written status updates</li>
            <li>Performed a variety of tasks for entrepreneurs and small businesses across multiple domains</li>
          </ul>
          <br />
          <h3>Digital Sales Lead</h3>
          <h4>Barnes & Noble</h4>
          <ul>
            <li>Engaged in sales conversations to drive sales of Nook e-reading devices</li>
            <li>Provided in-store support to customers for hardware and software issues</li>
            <li>Coached coworkers on sales and support knowledge</li>
            <li>Managed department promotions</li>
            <li>Supported coworkers in customer service, cashiering, and merchandising projects</li>
            <li>Continued regular bookseller duties</li>
          </ul>
          <br />
          <h3>Bookseller</h3>
          <h4>Barnes & Noble</h4>
          <ul>
            <li>Handled in-store and over-the-phone customer service requests for customer base of only significant bookstore in region</li>
            <li>Conversed with customers to determine needs and preferences in order to make product recommendations</li>
            <li>Communicated with team members regarding inventory management and orders</li>
            <li>Exceeded Membership sales goals by 45%</li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Education</h2>
          <h3>Prime Digital Academy</h3>
          <h4>Full Stack Software Engineering Certification</h4>
          <p>September 2018</p>
          <p>Prime Digital Academy is an immersive coding bootcamp teaching full-stack development. The program is a 20 week on-campus experience where students spend upwards of 60 hours a week learning coding, developing soft skills, and engaging in project-based work, culminating in a group project produced for a real-world client.</p>
          <br />
          <h3>University of Minnesota, Morris</h3>
          <h4>B.A. English</h4>
          <p>December 2016</p>
          <p>University Register | TREC/Zone | Morris Theater Co-op Volunteer</p>
          {/* <ul>
            <li>University Register</li>
            <li>TREC/Zone</li>
            <li>Morris Theater Co-op Volunteer</li>
          </ul> */}
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <span className="image profile"><img src={pic03} alt="" /></span>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className="icon fa-envelope"><span className="label">Email</span></a></li>
            <h3>Email</h3>
            <p>bjpennington112@gmail.com</p>
            <br />
            <li><a href="#" className="icon fa-phone"><span className="label">Phone</span></a></li>
            <h3>Phone</h3>
            <p>(612) 758-0951</p>
            <br />
            <li><a href="https://github.com/bjpennington" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <h3>Github</h3>
            <p>github.com/bjpennington</p>
            <br />
            <li><a href="https://www.linkedin.com/in/bjpennington/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/bjpennington</p>
            <br />
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main