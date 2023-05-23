import './portfolio.css';
import { Row, Col } from 'react-bootstrap';
import CartTel from './Card/cardTel';
export default function Portfolio(){
    return <>
        <Row className=''>
            <h1 className='text-start title'>Portfolio</h1>
            <Col lg={12}>
                <div className='d-flex flex-wrap justify-content-md-center'>
                <CartTel name='WEB DESIGN' color='#A9A9A9'/>
                <CartTel name='WEB DESIGN' color='#202020'/>
                <CartTel name='WEB DESIGN' color='#A9A9A9'/>
                <CartTel name='WEB DESIGN' color='#202020'/>
                <CartTel name='WEB DESIGN' color='#A9A9A9'/>
                <CartTel name='WEB DESIGN' color='#202020'/>


                </div>
            </Col>
        </Row>
    </>
}