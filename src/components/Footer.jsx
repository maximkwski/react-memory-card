import gitIcon from '../assets/github-logo.png'

function Footer() {
    return (
        <footer>
            <div className="container">
            <span>built & designed by
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/maximkwski">maximkwski</a>
            </span>   |
            <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/maximkwski/library-project"><img
                        id="git-icon" src={gitIcon} alt="github-icon" /></a>
                source
            </span>
            </div>
        </footer>
    )
}

export default Footer;