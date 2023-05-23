import { Row, Col } from 'react-bootstrap';
import './progress.css';

export default function SkillProgress(props) {
    return <>
            <Row className='progress-div mb-2'>
                <Col xs={2} className='bg-title'>{props.name}</Col>
                <Col xs={props.value} className='bg-progress p-0'></Col>
            </Row>
    </>
}