import React from "react";
import styled from "styled-components";
import { Row, Col } from "../basics";
import PersonItem from "../compound/PersonItem";
import Card from "../compound/Card";

const StyledPeopleTable = styled.div`
  hr {
    margin: 0.5rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
`;

const PeopleTable = ({ people }) => {
  return (
    <Card title="Lista de clientes">
      <StyledPeopleTable>
        <Row>
          <Col lg={1} md={1} sm={1}>
            <h3>Id</h3>
          </Col>
          <Col lg={5} md={5} sm={5}>
            <h3>Nombre Completo</h3>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <h3>Fecha Nac.</h3>
          </Col>
          <Col lg={2} md={2} sm={2}>
            <h3>Edad</h3>
          </Col>
        </Row>
        {people.map((person, index) => (
          <React.Fragment key={person.id}>
            <PersonItem person={person} />
            {index !== people.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </StyledPeopleTable>
    </Card>
  );
};

export default PeopleTable;
