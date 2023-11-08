import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Element = styled.li`
  width: 100%;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 3);
  }
`;

export const CardContainer = styled.div`
  border-radius: 20px;
  height: 300px;
  padding: 5px;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const CardName = styled.span`
  display: block;
  text-align: end;
  font-size: 42px;
  line-height: 1.5;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.1);
  font-family: 'mr', sans-serif;
  font-weight: 800;

  &:nth-child(2) {
    color: black;
  }

  @media (min-width: 768px) {
    font-size: 62px;
  }
`;

export const Button = styled.a`
  display: flex;
  border-radius: 20px;
  position: absolute;
  bottom: 2%;
  left: 10%;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ViewCardWrapper = styled.div`
  position: relative;
  max-width: 600px;
`;

// Assuming SectionTitle is a component that represents section titles
export const SectionTitle = styled.h2`
  // Add styles for section_title if necessary
`;
