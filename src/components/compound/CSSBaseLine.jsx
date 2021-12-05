import styled from "styled-components";

const CSSBaseLine = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    color: ${(props) => props.theme.colors.primary};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.bodyMobile};
    h1 {
      font-size: ${(props) => props.theme.fontSizes.h1Mobile};
    }
    h2 {
      font-size: ${(props) => props.theme.fontSizes.h2Mobile};
    }
    h3 {
      font-size: ${(props) => props.theme.fontSizes.h3Mobile};
    }
  }
`;

export default CSSBaseLine;
