import React from "react";
import styled from "styled-components";
import BgImg from "../Assets/Chalkboard.png";
import { useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard";
import { useState } from "react";

function Hangman() {
  const navigate = useNavigate();

  const [genre, setGenre] = useState("");

  const data = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <Background>
      <Title>HANGMAN - MOVIE EDITION</Title>
      <div>
        <FormWrapper>
          <Form action="#">
            <FormGroup>
              <Genre>Genre:</Genre>
              <InputSelect
                name="genre"
                onChange={(event) => setGenre(event.target.value)}
                required
                value={genre}
              >
                <option value="">----Select a category----</option>
                {data &&
                  data.map((g, index) => {
                    return (
                      <option key={index} value={g}>
                        {g}
                      </option>
                    );
                  })}
              </InputSelect>
            </FormGroup>
          </Form>
        </FormWrapper>
      </div>
      <Button onClick={() => navigate("/")}>NEW GAME</Button>
      <Keyboard />
    </Background>
  );
}

export default Hangman;

const Background = styled.div`
  background: url(${BgImg});
  width: 100%;
  background-size: cover;
  height: 100vh;
  color: #f5f5f5;
`;

const Title = styled.p`
  color: rgba(250, 250, 250, 0.8);
  position: absolute;
  font-family: Chalk;
  top: 5%;
  left: 40%;
  font-size: 2rem;
  letter-spacing: 5px;
`;

const Genre = styled.label`
  font-family: Chalk;
  font-size: 1, 7rem;
  padding-right: 15px;
`;

const Button = styled.button`
  position: absolute;
  top: 42%;
  left: 5%;
  width: 200px;
  height: 50px;
  background: none;
  border-radius: 50px;
  font-family: Chalk;
  color: rgba(250, 250, 250, 0.8);
  font-size: 1rem;
  letter-spacing: 5px;
`;

const FormWrapper = styled.div`
  position: absolute;
  display: inline;
  top: 17%;
  left: 40%;
`;

const FormGroup = styled.div`
  display: inline;
`;

const Form = styled.form`
  display: inline-block;
  background-color: none;
`;

const InputSelect = styled.select`
  background: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: Chalk;
  font-size: 0.8rem;
  color: rgba(250, 250, 250, 0.8);
  border: 1px solid rgba(250, 250, 250, 0.8);
`;
