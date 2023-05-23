import { Col, Row } from "react-bootstrap"
import './skills.css'
import SkillProgress from "./Progress/progress"

export default function Skills() {
    return <>
        <Col className="skills-body">
            <h1>
                Skills
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Row className="mt-5">
                <Col className="foucs-section d-flex">
                    <Row className="justify-content-md-center">
                        <Col lg={8} className="">
                            <h5 className="mb-1 text-center">MY FOCUS</h5>
                            <hr  />
                        </Col>
                        <Col lg={8} className="">
                            <h5 className="mb-1 text-start">UI/UX Design</h5>
                        </Col>
                        <Col lg={8} className="">
                            <h5 className="mb-1 text-start">Web Design</h5>
                        </Col>
                        <Col lg={8} className="">
                            <h5 className="mb-1 text-start">Mobile Design</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <SkillProgress value={5} name={'HTML'} />
                    <SkillProgress value={3} name={'CSS'} />
                    <SkillProgress value={6} name={'JS'} />
                    <SkillProgress value={9} name={'React'} />
                    <SkillProgress value={8} name={'Angular'} />
                    <SkillProgress value={10} name={'Flutter'} />
                    <SkillProgress value={7} name={'Node'} />
                    <SkillProgress value={9} name={'Firebase'} />
                </Col>
            </Row>
        </Col>
    </>
}