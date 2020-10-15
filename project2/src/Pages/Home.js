import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />

      <Container>
       <h2 className="text-center m-4">Топ місць в Карпатах </h2>
        <CardDeck>
          <Card bg="light">
            <Card.Img
              variant="top"
              src="https://karpaty.love/uploads/posts/2019-08/1564667456_vodospad-shypit-3.jpg"

             />
             <Card.Body>
               <Card.Title>Водоспад Шипіт</Card.Title>
               <Card.Text>Знаходиться гідрологічне диво в підніжжі гори Гемба, яка є серцем полонини Боржава.
               </Card.Text>
               <Button variant="dark">Read more</Button>
             </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Img
              variant="top"
              src="https://karpaty.love/uploads/posts/2019-08/1564667738_goverla-3.jpg"
              />
            <Card.Body>
              <Card.Title>Говерла (2 061 м)</Card.Title>
              <Card.Text>Говерла найбільш відвідуване місце Українських Карпат. Сюди здійснюють сходження щороку тисячі людей від травня аж до вересня. Відвідувати ці місця в іншу пору рекомендується лише професійним альпіністам.
             </Card.Text>
             <Button variant="dark">Read more</Button>
            </Card.Body>
          </Card>
          <Card bg="light">
          <Card.Img
           variant="top"
           src="https://karpaty.love/uploads/posts/2019-08/1564671890_ozero-brebeneskul-7.jpg"
          />
          <Card.Body>
          <Card.Title>Озеро Бребенескул</Card.Title>
          <Card.Text>Озеро Бребенескул – справжнє українське диво. Унікальність озера у тому, що воно є найвисокогірнішим в Україні, знаходиться на висоті 1801 м над рівнем моря. Особливість - найтепліша водойма на Чорногірському хребті.
          </Card.Text>
          <Button variant="dark">Read more</Button>
          </Card.Body>
          </Card>
       </CardDeck>
      </Container>
      </>
    );
  }
}
