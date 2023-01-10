import styled from "styled-components";

function Keyboard() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <Container>
      {alphabet.map((alphabet, index) => (
        <Button key={index}>{alphabet}</Button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 75%;
  left: 34%;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-gap: 20px;
`;

const Button = styled.button`
  width: 3rem;

  background: none;
  aspect-ratio: 1 / 1;
  font-size: 1.5rem;
  font-family: Chalk;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: rgba(250, 250, 250, 0.8);
`;

export default Keyboard;
