import { SVG } from '../../app/svg';
import {
  CardContainer,
  CardName,
  Button,
  ViewCardWrapper,
} from './Tech.styles';

export const ViewCard = ({ name = '', color = '', url = '' }) => {
  const bg = { backgroundColor: color };

  return (
    <ViewCardWrapper>
      <CardContainer style={bg}>
        <CardName>{name}</CardName>
        <CardName>{name}</CardName>
        <CardName>{name}</CardName>
        <CardName>{name}</CardName>
      </CardContainer>
      <Button>
        read more
        <span>{SVG.arrow}</span>
      </Button>
    </ViewCardWrapper>
  );
};
