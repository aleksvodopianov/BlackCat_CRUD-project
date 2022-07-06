import { Button, Card } from "react-bootstrap";

const BootstrapComponent = () => {
    return (
        <Card style={{ width: '18rem', marginTop: '20px', marginLeft: '20px' }} >
            <Card.Img variant="top" src="https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default BootstrapComponent;
