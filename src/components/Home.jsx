import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import db from '../firebase';
import Recommends from './Recommends';
import NewToDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import {useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
     let tempMovies= snapshot.docs.map((doc) => {
        //console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
//
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  });
  
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewToDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home;
 
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`