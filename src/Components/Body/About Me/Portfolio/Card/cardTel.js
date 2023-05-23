import './cardTel.css'
import Card from 'react-bootstrap/Card';


export default function CartTel(props) {
    return (
        <Card style={{
            width: '18rem',
            backgroundColor: props.color
        }} className='card-dee'>
            <Card.Text>
                <Card.Title>{props.name}</Card.Title>
                <hr style={{
                    width: '50%',
                    margin: 'auto',
                    size: '2rem',
                }} />
            </Card.Text>

        </Card>
    )
}