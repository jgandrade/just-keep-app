let yearToDate = new Date().getFullYear();

function Footer() {
    return (
        <footer className="footer-class">
            <p>JustKeep Copyright © {yearToDate}</p>
        </footer>
    );
}

export default Footer;