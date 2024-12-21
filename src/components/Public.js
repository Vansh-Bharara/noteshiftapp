import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech-Revive Repairs</span></h1>
            </header>
            <main className="public__main">
                <p>Tech-Revive Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Tech Revive Repairs<br />
                    Connaught place<br />
                    New Delhi, 110001<br />
                    <a href="tel:+91555555555">+91 (555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Tech-Revive</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public