import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from '../Header/header.js'
import './index.css'
import AboutMe from '../Body/About Me/aboutme.js';
import Skills from '../Body/Skills/skills.js';
import Portfolio from '../Body/About Me/Portfolio/portfolio.js';
import Footer from '../Footer/footer.js';



export default function Index() {
    return (
        <Container>
            <div className='header'>
                <Row>
                    <Header />
                </Row>
            </div>
            <div className='mt-5 mb-5'>
                <Row>
                    <AboutMe />
                </Row>
            </div>
            <div className='mb-5'>
                <Row>
                    <Skills />
                </Row>
            </div>
            <div className='mb-5'>
                <Row>
                    <Portfolio />
                </Row>
            </div>
            <div className='mt-5'>
                <Row>
                    <Footer />
                </Row>
            </div>
        </Container>
    );
}

