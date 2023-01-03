import React, { useState, useEffect } from "react";
import db from "../../../firebaseConfig";
import SingleProjectPage from "../SingleProjectPage";
import { Container, Col, Row } from "react-bootstrap";
import moment from "moment";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Calender({ loggedInUser }) {
  const localizer = momentLocalizer(moment);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const arrOfProjects = [];

      await db
        .collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arrOfProjects.push({ id: doc.id, ...doc.data() });
          });
        });
      await setProjects(arrOfProjects);
    }
    fetchProjects();
  });

  if (loggedInUser === "")
    return (
      <Container>
        <h1>Please sign-in in order to see this page</h1>
      </Container>
    );
  else
    return (
      <Container className="container projectsPage" fluid="md">
        <div
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            margin: 9,
            padding: 3,
          }}
        >
          <b>
            <i>Deadlines Calender</i>
          </b>
        </div>
        <Row className="justify-content-md-center">
          {projects.map((project) => {
            const handleSelectEvent = (project) => {
              alert(project.title);
            };

            const events = [
              {
                start: new Date(),
                end: project.deadline,
                title: project.title,
                description: project.description,
              },
            ];

            return (
              <Col xs={12} md={4} key={project.title} className="gridSystem">
                <div
                  className="text-center"
                  style={{
                    fontSize: "1rem",
                    textAlign: "center",
                    margin: 9,
                    padding: 3,
                  }}
                >
                  {" "}
                  Name: {project.title}
                </div>
                <Calendar
                  localizer={localizer}
                  events={events}
                  views={["month"]}
                  style={{ height: 500 }}
                  onSelectEvent={handleSelectEvent}
                />
                <div>Title :{project.title}</div>
                <div>Description :{project.description}</div>
                <div>Deadline :{project.deadline}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
}

export default Calender;
