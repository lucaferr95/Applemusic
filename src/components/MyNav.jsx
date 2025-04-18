import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
    Row,
    Col,
    InputGroup,
    Modal,
  } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import { Apple, PlayFill, SkipStartFill, SkipEndFill } from 'react-bootstrap-icons';
  import { useState } from 'react';
  
  const MyNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
        <Container fluid>
          {/* 🔹 MOBILE: Toggle + Logo + Accedi */}
          <Row className="d-flex d-lg-none w-100 align-items-center justify-content-between mb-3">
            <Col xs="auto">
              <Navbar.Toggle aria-controls="main-navbar" />
            </Col>
            <Col className="text-center">
              <Navbar.Brand as={Link} to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROCjBg5U3_3gREfVamcqu-MksDdeFVwZoPA&s"
                  alt="logo"
                  style={{ width: '60px', height: '50px', objectFit: 'contain' }}
                />
              </Navbar.Brand>
            </Col>
            <Col xs="auto">
              <Button className="rounded-pill px-3 glow-button" onClick={handleShow}>
                Accedi
              </Button>
            </Col>
          </Row>
  
          {/* 🔹 DESKTOP / COLLAPSABLE */}
          <Navbar.Collapse id="main-navbar" className="w-100">
            <Row className="w-100 shadow-sm border-end border-secondary">
              {/* COLONNA SINISTRA */}
              <Col xs={12} lg={3} className="d-flex flex-column gap-3 border-end border-secondary pe-0">
                {/* Logo solo Desktop */}
                <div className="d-none d-lg-block">
                  <Navbar.Brand as={Link} to="/">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROCjBg5U3_3gREfVamcqu-MksDdeFVwZoPA&s"
                      alt="logo"
                      style={{ width: '100px', height: '70px', objectFit: 'contain' }}
                    />
                  </Navbar.Brand>
                </div>
  
                {/* Search */}
                <Form className="w-50">
                  <InputGroup>
                    <InputGroup.Text className="bg-white rounded-start-pill border-end-0">
                      <i className="bi bi-search-heart text-dark"></i>
                    </InputGroup.Text>
                    <FormControl
                      type="search"
                      placeholder="Cerca"
                      className="rounded-end-pill border-start-0 text-center"
                    />
                  </InputGroup>
                </Form>
  
                {/* Menu verticale */}
                <Nav className="d-flex flex-column gap-4 w-100">
                  <Nav.Link as={Link} to="/premium" className="glow-button w-50 text-center rounded-start-pill">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/novità" className="glow-button w-50 text-center rounded-start-pill">
                    Novità
                  </Nav.Link>
                  <Nav.Link as={Link} to="/account" className="glow-button w-50 text-center rounded-start-pill">
                    Radio
                  </Nav.Link>
                </Nav>
              </Col>
  
              {/* COLONNA DESTRA */}
              <Col xs={12} lg={9} className="d-flex flex-column justify-content-between">
                {/* 🔸 PLAYER CONTROLLI */}
                <Row className="bg-dark text-white align-items-center px-3 py-4 g-0 shadow-sm border-bottom border-secondary">
                  {/* Player mobile */}
                  <Col xs={12} className="d-flex d-lg-none align-items-center gap-2 ps-5 mb-3">
                    <Button variant="dark" className="p-0 border-0">
                      <SkipStartFill size={36} color="white" />
                    </Button>
                    <Button variant="dark" className="p-0 border-0">
                      <PlayFill size={42} color="white" />
                    </Button>
                    <Button variant="dark" className="p-0 border-0">
                      <SkipEndFill size={36} color="white" />
                    </Button>
                  </Col>
  
                  {/* Volume mobile */}
                  <Col xs={12} className="d-flex d-lg-none align-items-center gap-2 ps-3 mb-3">
                    <i className="fas fa-volume-up fs-5 text-white-50"></i>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      defaultValue="75"
                      className="form-range"
                      style={{ maxWidth: '150px' }}
                    />
                  </Col>
  
                  {/* Player desktop */}
                  <Col lg={4} className="d-none d-lg-flex gap-3 align-items-center">
                    <Button variant="dark" className="p-0 border-0">
                      <SkipStartFill size={36} color="white" />
                    </Button>
                    <Button variant="dark" className="p-0 border-0">
                      <PlayFill size={42} color="white" />
                    </Button>
                    <Button variant="dark" className="p-0 border-0">
                      <SkipEndFill size={36} color="white" />
                    </Button>
                  </Col>
  
                  {/* Apple logo solo desktop */}
                  <Col lg={2} className="text-center bg-secondary p-2 d-none d-lg-block">
                    <Apple size={36} />
                  </Col>
  
                  {/* Volume desktop */}
                  <Col lg={4} className="d-none d-lg-flex align-items-center gap-2 justify-content-center">
                    <i className="fas fa-volume-up fs-5 text-white-50"></i>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      defaultValue="75"
                      className="form-range"
                      style={{ maxWidth: '100px' }}
                    />
                  </Col>
  
                  {/* Accedi desktop bottom right */}
                  <Col lg={2} className="d-none d-lg-flex justify-content-end align-self-end">
                    <Button className="rounded-pill px-4 glow-button" onClick={handleShow}>
                      Accedi
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
  
        {/* 🔸 MODALE ACCEDI */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>
              <img src="/assets/logos/apple.svg" alt="logo apple" style={{ height: '30px' }} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            <h4 className="text-center mb-3">Prosegui con l'indirizzo email</h4>
            <p className="text-center mb-4">
              Se hai già un account puoi effettuare l’accesso, altrimenti ti aiuteremo a crearne uno.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="••••••••" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button type="submit" className="glow-button px-4 py-2">
                  CONTINUA
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Navbar>
    );
  };
  
  export default MyNav;
  