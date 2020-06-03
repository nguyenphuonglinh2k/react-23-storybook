import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap';

class BookListItem extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="3">
                        <div className="BookListItem">
                            <Card>
                                <CardImg top width="100%" src="https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9ciNDU90MYyMjAF75GZw=/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>The Alchemist</CardTitle>
                                    <CardText>Câu chuyện về cậu bé theo đuổi giấc mơ</CardText>
                                    <Button style={{margin: 5}}>Xóa</Button>
                                    <Button>Update</Button>
                                    <Button style={{margin: 5}}>Thêm vào giỏ</Button>
                                    <Button>Thuê sách</Button>        
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookListItem;