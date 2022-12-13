import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="container projectsPage" fluid="md">
      <Card className="justify-content-md-center">
        <Card.Header style={{ fontSize: "1.5rem", textAlign: "center" }}>
          <b>
            <i>Creators of Project Manager</i>
          </b>
        </Card.Header>
        <Card.Body>
          <hr />
          <Row className="justify-content-md-around">
            <Col className="gridSystem">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/69003977?v=4"
                />
                <Card.Header
                  style={{ fontSize: "1.5rem", textAlign: "center" }}
                >
                  <b>
                    <i>Khadija Hawa</i>
                  </b>
                </Card.Header>
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/khadija-hawa-160158165/">
                    LinkedIn
                  </a>
                  <br />
                  <a href="https://github.com/khadijahawa">Github</a>
                  <br />
                  <a href="mailto:khadijahawa555@gmail.com">Contact Email</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutUs;
