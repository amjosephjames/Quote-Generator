import React, { useState } from "react";
import styled from "styled-components";

const Homescreen = () => {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [word, setWord] = useState([
    { name: "joseph", quotation: "the lord is my shepherd" },
    { name: "james", quotation: "god is good" },
    { name: "joe", quotation: "fear is an illusion" },
    { name: "jim", quotation: "aim at the stars" },
  ]);

  const addQuote = () => {
    setCounter(counter + 1);
    if (counter === word.lenght) {
      setCounter(1);
    }
  };

  const reduceQuote = () => {
    setCounter(counter - 1);

    if (counter === 0) {
      setCounter(counter);
    }
  };

  const postQuote = () => {
    const value = {
      name: author,
      quotation: quote,
    };
    setWord([...word, value]);
  };

  const randy = () => {
    setCounter([Math.floor(Math.random() * word.lenght)]);
  };
  return (
    <Container>
      <Card>
        <Cardwrap>
          <Up>
            <Input
              type="text"
              placeholder="fill in your quote"
              onChange={(e) => {
                setQuote(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="fill in your quote author"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <Button onClick={postQuote}>Post quote</Button>
          </Up>
          <Holds>
            <Author>{word[counter % word.length].name}</Author>
            <Quote>{word[counter % word.length].quotation}</Quote>
          </Holds>
          <Down>
            <Btn onClick={randy}>View quote randomly</Btn>
            <Below>
              <Buttoned onClick={reduceQuote}>Prev</Buttoned>
              <Buttoned onClick={addQuote}>Next</Buttoned>
            </Below>
          </Down>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Card = styled.div`
  width: 300px;
  height: 450px;
  /* border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Up = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  outline: none;
  opacity: none;
  /* border-radius: 5px; */
  ::placeholder {
    color: black;
  }
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 13px;
  /* border-radius: 5px; */
`;
const Quote = styled.div`
  color: black;
  font-size: 13px;
  /* width: 100%; */
`;

const Author = styled.div`
  color: black;
  font-size: 13px;
  /* width: 100%; */
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 110px;
`;
const Btn = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* border-radius: 5px; */
  color: white;
  font-size: 13px;
`;
const Below = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Buttoned = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* border-radius: 5px; */
  color: white;
  font-size: 13px;
`;
const Holds = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
