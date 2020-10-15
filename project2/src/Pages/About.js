import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';
import  "./AboutStyle.css";


export default class About extends Component {
  render() {
    return (
     <Container>
      <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
         <Row>
           <Col sm={3}>
             <Nav variant="button" className="flex-column mt-2">
               <Nav.Item>
                  <Nav.Link eventKey="first" className="text-dark">Доломитовые Альпы</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="second" className="text-dark">Гросглоккнер</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="third" className="text-dark">Юнгфрау</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="fourth" className="text-dark">Финстерархорн</Nav.Link>
               </Nav.Item>
             </Nav>
           </Col>
           <Col sm={9}>
              <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first">
                <img className="Mount" src="https://studtravel.com.ua/content/uploads/2019/03/Seceda-view-point.jpg" alt="Dolomit" />
                <p>Доломи́товые А́льпы (итал. Dolomiti, нем. Dolomiten) — горный массив в Восточных Альпах, входят в систему Южных Известняковых Альп. Массив располагается в северо-восточной части Италии на территории провинций Беллуно, Больцано, Порденоне, Тренто и Удине. Массив ограничен долинами рек: Изарко (северо-запад), Пустерия (север), Пьяве (восток и юго-восток), Брента (юго-запад) и Адидже (запад)[2]. Протяжённость системы составляет около 150 км, высшая точка — гора Мармолада (3342 м).</p>
             </Tab.Pane>
             <Tab.Pane eventKey="second">
               <img className="Mount" src="https://images.panoramatours.com/pt/focus/39/48/1920/810/user_upload/Sehenswuerdigkeiten/Grossglockner_Hochalpenstrasse/Grossglockner_Hochalpenstrasse_11__c__grossglockner.at.jpg" alt="Grossglockner" />
               <p>Гро́сглоккнер[2][3] (устар. передача Гро́сглокнер[4][5], нем. Großglockner; или Глокнер, нем. Glockner[6]; или Грос-Глокнер[7]) — самая высокая гора Австрии, 3798 м. Расположена на границе Каринтии и Восточного Тироля. Гора имеет две вершины — Гросглоккнер и Клайнглоккнер (3770 м). У её подножья расположен самый крупный ледник Австрии — Пастерце.
                  Впервые была покорена 28 июля 1800 г. Мартином Райхером (нем. Martin Reicher), Матиасом Хаутцендорфером (нем. Mathias Hautzendorfer) и ещё тремя восходителями.
                  Окрестности весьма живописны. В районе горы расположена экскурсионная панорамная высокогорная дорога Гросглоккнер.
                  До 1918 года гора находилась в частной собственности. В настоящее время принадлежит Австрийскому Альпийскому Сообществу (нем. Österreichischer Alpenverein).
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <img className="Mount" src="https://aws-tiqets-cdn.imgix.net/images/content/6411a96795084b7c8fc5d1b38d499377.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=25&s=892df4e14b82635d6004998a4741614a&w=375&h=250&dpr=2.625" alt="Jungfrau" />
              <p>Ю́нгфрау (нем. Jungfrau) — одна из самых известных горных вершин Швейцарии.
                 Её высота — 4158 метров над уровнем моря. Это третья по высоте гора Бернских Альп, которая образует вместе с горами Эйгер (нем. Eiger) и Мёнх (нем. Mönch) примечательное трио[2].
                 13 декабря 2001 года гора Юнгфрау в составе Юнгфрау-Алеч-Бичхорн была внесена в Список объектов всемирного наследия ЮНЕСКО в Европе и является первым в Альпах природным объектом, включённым в этот список.
              </p>
           </Tab.Pane>
           <Tab.Pane eventKey="fourth">
             <img className="Mount" src="https://sp-images.summitpost.org/489970.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=f2071c7a5644ef361a6e134387b0c406" alt="Finsteraarhorn"/>
             <p>Фи́нстера́рхорн[2][3], Финстера́архорн[4][5] (нем. Finsteraarhorn) — самая высокая гора в Бернских Альпах и в кантоне Берн, Швейцария. Она также является высшей точкой Альп за пределами главного хребта, её высота — 4 274 метра над уровнем моря.
                С 2001 года Финстерархорн, в составе региона Юнгфрау-Алеч-Бичхорн, являющегося охраняемым природным объектом, внесён в Список объектов Всемирного наследия ЮНЕСКО.
             </p>
             </Tab.Pane>
               </Tab.Content>
           </Col>
         </Row>
      </Tab.Container>
     </Container>
    );
  }
}
