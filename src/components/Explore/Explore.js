import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import swizImg from '../../assets/images/switzerland.jpg';
import usaImg from '../../assets/images/usa.jpg';
import indiaImg from '../../assets/images/india.jpg';
import chinaImg from '../../assets/images/china.jpg';
import japanImg from '../../assets/images/japan.jpg';
import italyImg from '../../assets/images/italy.jpg';
import franceImg from '../../assets/images/france.jpg';
import ausImg from '../../assets/images/australia.jpg';
import thailandImg from '../../assets/images/thailand.jpg';
import canadaImg from '../../assets/images/canada.jpg';
import './Explore.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ImgArr = [{
  img: swizImg,
  name: "Switzerland",
  content: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters,with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails.Banking and finance are key industries, and Swiss watches and chocolate are world renowned."
}, {
  img: usaImg,
  name: "USA",
  content: "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center,and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking."
}, {
  img: indiaImg,
  name: "India",
  content: "India, officially the Republic of India, is a country in South Asia .It is the seventh-largest country by area; the most populous country as of June 2023 and from the time of its independence in 1947, the world's most populous democracy. "
}, {
  img: chinaImg,
  name: "China",
  content: "China, officially the People's Republic of China, is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country. China spans the equivalent of five time zones and borders fourteen countries by land. "
}, {
  img: japanImg,
  name: "Japan",
  content: "Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south."
}, {
  img: italyImg,
  name: "Italy",
  content: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces. Venice, the city of canals; and Milan, Italy’s fashion capital"
}, {
  img: franceImg,
  name: "France",
  content: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."
}, {
  img: canadaImg,
  name: "Canada",
  content: "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline. "
}, {
  img: ausImg,
  name: "Australia",
  content: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country."
}, {
  img: thailandImg,
  name: "Thailand",
  content: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok,the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew).Nearby beach resorts include bustling Pattaya and fashionable Hua Hin."
}]


function GridCard() {
  const [show, setShow] = useState(false);
  const [ImgTitle, setImgTitle] = useState('');

  const handleClose = (event) => {
    setShow({show : false});
    console.log(" close", show)
    console.log("eeeeee", event.target)
    event.preventDefault();
    setImgTitle('')
  }
  const handleShow = (event) => {
    setImgTitle(event.target.alt)
    setShow({show : true});
    console.log("showww open", show)

  };

  return (
    <>
      <Row xs={2} md={5} className="g-4">
        {ImgArr.map((item, idx) => (

          <Col key={idx}>

            <Card className='card-hghlght' onClick={handleShow} >
              <Card.Img variant="top" src={item.img} alt={item.name} className="grid-img"
              />
              <Card.Body>
                <Card.Text> {item.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton >

          <Modal.Title >{ImgTitle}</Modal.Title>
        </Modal.Header>


        <Modal.Body >
          {/* <getModalContent placeDetail={ImgArr} modalTitle={ImgTitle} /> */}
          {ImgArr.map((user, index) => (
        <div key={index}>
          {user.name == ImgTitle &&
            <>
              <img className="grid-modal-img" src={user.img} alt={user.name}
                width={30} height={15}></img>
              <br />
              {user.content}
            </>
          }

        </div>
      ))}
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>

  );
}

function getModalContent(props) {
  const placeDetail = props.placeDetail;
  const title = props.modalTitle;
  return (
    <div>
      {ImgArr.map((user, index) => (
        <div key={index}>
          {user.name == title &&
            <>
              <img className="grid-modal-img" src={user.img} alt={user.name}
                width={30} height={15}></img>
              <br />
              {user.content}
            </>
          }

        </div>
      ))}
    </div>
  );
}

const Explore = () => {
  return (
    <div className='wrapper'>
      <header className='header'> <h5>Places to Explore</h5></header>
      <GridCard />
    </div>
  )
}

export default Explore