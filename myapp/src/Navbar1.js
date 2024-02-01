import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';



const Navbar1 = () => {
  const [showModal, setshowModal] = useState(false)
  const [registerModal, setregisterModal] = useState(false)
  function openLoginModal() {
    setshowModal(true)

  }
  function closeLoginModal() {
    setshowModal(false)

  }
  function openRegisterModal() {
    setregisterModal(true)
  }
  function closeRegisterModal() {
    setregisterModal(false)
  }
  return (
    <div >
      <Navbar expand="lg" className="body-tertiary" bg='primary'>
      <Container>
        {/* <Navbar.Brand href="#home">EduTech</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Course" id="basic-nav-dropdown">
              <NavDropdown.Item href="/engineering">Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/medical">Medical</NavDropdown.Item>
              <NavDropdown.Item href="/agriculture">Agriculture</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            {/* search bar */}
            <Form inline style={{paddingLeft:"5em"}}>
              <Row>
                <Col xs="auto" >
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-xs-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" style={{ backgroundColor: "rgb(255 177 60)" }}>Search</Button>
                </Col>
              </Row>
            </Form>
            {/* //login & register */}
            <div className='d-flex alignItems-right' style={{paddingLeft:"5em"}} >
              <Col xs="auto">
                <Button type="submit" style={{ backgroundColor: "#5f6272" }} onClick={openLoginModal}>Login</Button>
              </Col>
              <Button variant="link" style={{ color: "white" }} onClick={openRegisterModal}>Sign Up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      {/* login model */}
      <Modal show={showModal} onHide={closeLoginModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* form start */}
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type='email' />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
            {/* form end */}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeLoginModal}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      {/* Register modal */}

      <Modal show={registerModal} onHide={closeRegisterModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <table>
              <tbody>
                <tr>
                  <td><label>Name :</label></td>
                  <td><input type='text' name='name' /></td>
                </tr>
                <tr>
                  <td><label>Email-Id :</label></td>
                  <td><input type='email' name='email' /></td>
                </tr>
                <tr>
                  <td><label>Mob. No. :</label></td>
                  <td><input type='tel' name='mob' /></td>
                </tr>
                <tr>
                  <td><label>Password :</label></td>
                  <td><input type='password' name='password' /></td>
                </tr>
                <tr>
                  <td><label>Confirm Password :</label></td>
                  <td><input type='password' name='confirmpassword' /></td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeRegisterModal}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  )
}

export default Navbar1