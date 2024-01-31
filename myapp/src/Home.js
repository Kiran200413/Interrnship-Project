import React from 'react'
import img1 from './Assets/img1.png'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './home.css'

const Home = () => {
  return (
    <>
      <div className='row first-page'>
        <div className='col first-box'><img src={img1} /></div>
        <div className='col first-box2'>
          <h3>"Unlock Your Career Potential: Guided Paths, Top-Notch Videos, and Premium Notes – Your Free Educational Odyssey Begins Here!"</h3>
          <p>Welcome to our platform, where learning is seamless and stress-free. Enjoy free education with YouTube courses and delve into our notes section, incorporating articles and valuable information. Experience the convenience of an integrated coding environment, eliminating the need for application installations. Unlock the door to effortless and comprehensive learning on our innovative platform.</p>
          <Button variant="secondary">Explore Us</Button>
        </div>
      </div>
      {/* //second page */}

      <div className='row second-page'>
        <div className='col second-box'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/image-09.png" />
            <Card.Body>
              <Card.Title>All-In-One Learning Platform</Card.Title>
              <Card.Text>
                Discover our comprehensive All-In-One Learning Platform. Access a wide range of resources including YouTube videos, study notes, and an inbuilt coding environment. With our platform, you can enhance your skills and knowledge conveniently in one place. Enjoy friendly support to assist you every step of the way. Start your learning journey today!
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className='col second-box'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/Vector077.png" />
            <Card.Body>
              <Card.Title>Collaborative Learning Platform</Card.Title>
              <Card.Text>
              Experience collaborative learning with top-tier educators from leading companies. Our platform fosters a supportive, family-like environment, enabling seamless communication through text, audio, and video. Join sessions, engage with peers, and access quality educational content anytime, anywhere.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className='col second-box'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/Coding-Design.png" />
            <Card.Body>
              <Card.Title>All-Inclusive Learning Ecosystem</Card.Title>
              <Card.Text>
              Embark on your learning journey from start to finish with our comprehensive platform. We offer free courses curated from top-quality YouTube content and supplemented with detailed notes. Our platform provides a seamless environment where learners can access all resources in one place, enhancing their learning experience.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className='col second-box'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/price.png" height={200} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home