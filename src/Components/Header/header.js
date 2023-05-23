// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Header() {

        return <>
            <Col className='align-center d-flex align-items-center justify-content-center'>
            <h1 className='text-white'>
                Kareem Awad
            </h1>
            <h4 className='text-white'>
                Front end developer & Mobile developer
            </h4>
            <Button className='bg-transparent mt-5'>Contact Me</Button>{' '}
            </Col>
            <Col>2 of 2</Col>
        </>
}