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
            <Col xs={12} md={5} className="gridSystem">
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
                <Card.Header
                  style={{ fontSize: "1.5rem", textAlign: "center" }}
                >
                  <b>
                    <i>Fatma Nur Aydın</i>
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
                  <a href="https://www.linkedin.com/in/fatma-nur-ayd%C4%B1n-b51136252/">
                    LinkedIn
                  </a>
                  <br />
                  <a href="ftmnuraydn4@gmail.com">Email</a>
                  <br />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5} className="gridSystem">
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
            <Col xs={12} md={5} className="gridSystem">
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
                <Card.Header
                  style={{ fontSize: "1.5rem", textAlign: "center" }}
                >
                  <b>
                    <i>muhammed mustafa alnaddaf</i>
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
                  <a href="http://linkedin.com/in/muhammed-mustafa-alnaddaf-9867b01b9">
                    LinkedIn
                  </a>
                  <br />
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
