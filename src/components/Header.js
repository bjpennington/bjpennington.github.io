import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>BJ Pennington</h1>
                <p>Developer, programmer, writer, editor, and creative problem solver committed to <br />
                building a more socially just community through technology and writing.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Education</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
