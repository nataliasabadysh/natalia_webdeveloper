import { Container, Title, Content } from './banner.styles';

export default function Banner() {
  return (
    <>
      <Container>
        <Title>
          {' '}
          <h1>Software Developer</h1>
        </Title>
        <Content>
          <p className="slogan">Your Complexity, My Specialty.</p>
          <p className="description">
            I'm not just your developer but your companion.
          </p>
        </Content>
        {/* <BinaryCode>110101001</BinaryCode> */}
      </Container>
    </>
  );
}
