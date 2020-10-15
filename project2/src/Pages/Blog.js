import React, {Component} from 'react';
import { Media, Container, Col, Row, Card, ListGroup } from 'react-bootstrap';


export default class Blog extends Component {
  render() {
    return(
  <Container>
    <Row>
      <Col md="9">
        <Media className="m-5">
          <img
           width={150}
           height={150}
           className="mr-3"
           src="https://lh3.googleusercontent.com/proxy/Wz5tyBvOkfTxWl4XMVd_oPooxeKDosYhgcImLZhigZjzYkz11SU13zETQuqGPGyiW85RTdzD4SprEZHqAZZ7kj1pJvCwE7W7fD4b9AUaE2zOCtsJmxGjoPmqLJCmAw"
            alt="ImgBlog"
           />
              <Media.Body>
          <h5>Blog Post</h5>
          <p>
            «В горах нужно зависеть только от себя, от своих сил, поэтому рассчитывать, что на большой высоте кто-то окажет помощь – это аморально.»
          </p>
             </Media.Body>
          </Media>
          <Media className="m-5">
            <img
             width={150}
             height={150}
             className="mr-3"
             src="https://www.polscha.travel/images/uk-UA/Co_Robic/sport/Bieszczady_wspincaczka540_360.jpg"
            alt="ImgBlog2"
             />
          <Media.Body>
            <h5>Blog Post</h5>
              <p>
               «Лучше гор могут быть только горы,
               На которых еще не бывал.»
              </p>
          </Media.Body>
         </Media>
            <Media className="m-5">
              <img
               width={150}
               height={150}
               className="mr-3"
               src="https://i2.wp.com/dlia-sporta.ru/wp-content/uploads/2020/04/Alpiniz-1.jpg?fit=400%2C254&ssl=1"
               alt="ImgBlog3"
               />
                  <Media.Body>
              <h5>Blog Post</h5>
              <p>
              «Если вы идете в горы, где нет опасности, вы не настоящий альпинист.»
              </p>
                 </Media.Body>
              </Media>
      </Col>
      <Col md="3">
       <h5 className="text-center mt-5">Categories</h5>
       <Card>
         <ListGroup variant="flush">
           <ListGroup.Item>Story</ListGroup.Item>
           <ListGroup.Item>Quotes</ListGroup.Item>
           <ListGroup.Item>Mountaineering</ListGroup.Item>
         </ListGroup>
       </Card>
       <Card className="mt-3" bg="light">
       <Card.Body>
       <Card.Title>Side widget</Card.Title>
       <Card.Text>
       </Card.Text>
       За мною гори <br />
       Яке там горе?
       </Card.Body>
       </Card>
      </Col>
    </Row>
  </Container>
    );
  }
}
