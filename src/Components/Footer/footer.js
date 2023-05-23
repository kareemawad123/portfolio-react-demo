import './footer.css';
import { Row, Col } from 'react-bootstrap';
import { CgUserList, CgMail, CgFacebook, CgTwitter } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {

    return <>
        <Col className='footer'>
            <Row>
                <Col className='text-start'>
                    <h5>GET IN TOUCH</h5>
                    <div className='d-flex'>
                        <CgMail className='icon' /><p>kareemawad120@gmail.com</p>
                    </div>
                    <div className='d-flex'>
                        <CgUserList className='icon' /><p>01121969125</p>
                    </div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <button className='btn btn-cont'>Contact Me</button>
                </Col>
                <Col className='d-flex flex-column align-items-end justify-content-end'>
                    <div className=''>
                        <a href='#'><CgFacebook /></a>
                        <a href='#'><CgTwitter /></a>
                        <a href='#'><BsLinkedin /></a>
                    </div>
                    <div className=''>
                        <p className='copy-right'>Copyright@2023KAS</p>
                    </div>
                    
                </Col>
            </Row>
        </Col>
    </>
}