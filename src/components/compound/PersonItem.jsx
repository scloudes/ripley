import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "../basics";

const PersonItemStyled = styled.div`
  margin-bottom: 1rem;
  .id {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
  .align-center {
    text-align: center;
  }
`;

const formatBirthday = (birthday) => {
  const d = new Date(birthday);
  const month = `0${d.getUTCMonth() + 1}`.slice(-2);
  const day = `0${d.getUTCDate()}`.slice(-2);
  const year = d.getUTCFullYear();
  return `${day}/${month}/${year}`;
};
const getAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
  const m = today.getUTCMonth() - birthDate.getUTCMonth();
  if (m < 0 || (m === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
    age--;
  }
  return age;
};

const PersonItem = ({ person }) => {
  return (
    <PersonItemStyled>
      <Row>
        <Col lg={1} md={1} sm={1}>
          <div className="id align-center">{person.id}</div>
        </Col>
        <Col lg={5} md={5} sm={5}>
          <div>{`${person.name} ${person.lastname}`} </div>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <div className="align-center">{formatBirthday(person.birthday)}</div>
        </Col>
        <Col lg={2} md={2} sm={2}>
          <div className="align-center">{getAge(person.birthday)}</div>
        </Col>
      </Row>
    </PersonItemStyled>
  );
};

PersonItem.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonItem;
