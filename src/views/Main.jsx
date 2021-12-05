import React from "react";
import usePeople from "../hooks/usePeople";
import { Container, Row, Col } from "../components/basics/";
import CSSBaseLine from "../components/compound/CSSBaseLine";
import Header from "../components/compound/Header";

import FormCard from "../components/templates/FormCard";
import PeopleTable from "../components/templates/PeopleTable";
import Indicators from "../components/templates/Indicators";
import styled from "styled-components";

const CustomFragment = styled(React.Fragment)`
  .no-padding-row {
    padding: 0;
  }
`;

const Main = () => {
  const { people, createPerson, getAgeAverage } = usePeople();

  return (
    <CSSBaseLine>
      <Header />
      <Container>
        <Row>
          <CustomFragment>
            <Col paddingZero lg={4} md={5} sm={12}>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <FormCard createPerson={createPerson} />
                </Col>
                <Col lg={12} md={12} sm={12}>
                  <Indicators getAgeAverage={getAgeAverage} />
                </Col>
              </Row>
            </Col>
          </CustomFragment>
          <Col lg={8} md={7} sm={12}>
            <PeopleTable people={people} />
          </Col>
        </Row>
      </Container>
    </CSSBaseLine>
  );
};

export default Main;
