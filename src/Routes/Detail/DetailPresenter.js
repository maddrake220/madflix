
import React , { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { starFull } from "react-icons-kit/icomoon/starFull";
import { starHalf } from "react-icons-kit/icomoon/starHalf";
import { starEmpty } from "react-icons-kit/icomoon/starEmpty";
import { film } from "react-icons-kit/icomoon/film";
import { home } from "react-icons-kit/icomoon/home";
import { Helmet } from "react-helmet";
import Message from "../../Components/Message";
import YouTube from 'react-youtube';
import Section from "../../Components/Section";
import Carousel from 'react-elastic-carousel';
import Carousel2 from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portrait from "../../Components/Portrait";
import Poster from "../../Components/Poster";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const StarIconContainer = 
    withBaseIcon({ size: 12, style: {color: 'yellow'}}
)

const LinkIconContainer = 
    withBaseIcon({ size: 12, style: {color: 'Red'}}
)

const CantLinkIconContainer = 
    withBaseIcon({ size: 12, style: {color: 'Grey'}}
)

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Similar_stuff = styled.div`
  margin-top : 100px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Logo = styled.div`
    background-image:url(${props=> props.bgImage});
    width: auto;
    height:50px;
    background-size: 100% 100%;
    border-radius: 1px; 
`;
const LogoContainer = styled.div`
  margin-left : 15px;
  margin-top : 30px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
    width: 50%;
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size : 42px;
    margin-left : 10px;
    margin-top : 20px;
    margin-bottom : 10px;
`;

const Item = styled.span`
  font-size : 14px;
`;
const Video = styled.div`
  margin-top : 20px;
  margin-left: 20px;
`;

const ItemContainer = styled.div`
  margin:20px 0;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size:13px;
    opacity:0.7;
    line-height:1.5;
    width:60%;
`;

function DetailPresenter  ({ result, loading, error }) {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 250, itemsToShow: 2, itemsToScroll: 2 },
        { width: 348, itemsToShow: 3 },
        { width: 560, itemsToShow: 4 },
        { width: 720, itemsToShow: 5 }
      ];
    
  return (
      
    loading ? (
      <>
      <Helmet>
          <title>Loading | Madflix</title>
      </Helmet>
    <Loader />
      </>
  ) : (
    error ? <Message /> : (
    <Container>
        <Helmet>
          <title>{result.original_title 
                ? result.original_title 
                : result.original_name } | Madflix</title>
        </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../Assets/NoPosterSmall.png")
          }
        />
        <Data>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
          <Tab eventKey="home" title="영화정보">
            <Title>
                {result.original_title 
                ? result.original_title 
                : result.original_name }
            </Title>
            <ItemContainer>
                <Item>
                    {result.release_date 
                    ? result.release_date && result.release_date.substring(0,4)
                    : result.first_air_date && result.first_air_date.substring(0,4) }
                </Item>
                <Divider>.</Divider>
                <Item>
                    {result.runtime 
                    ? result.runtime
                    : result.episode_run_time && result.episode_run_time[0] } 분 
                </Item>
                <Divider>.</Divider>
                <Item>
                     {result.genres && result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                      ? genre.name : `${genre.name}/`
                        )}
                </Item>
                <Divider>.</Divider>
                <Item>
                     {result.imdb_id 
                        ? <a href={`https://www.imdb.com/title/${result.imdb_id}`}><LinkIconContainer icon={film}/></a> 
                        : <CantLinkIconContainer icon={film}/>  }
                </Item>
                <Divider>.</Divider>
                <Item>
                      {result.homepage 
                        ? <a href={result.homepage}><LinkIconContainer icon={home}/></a> 
                        : <CantLinkIconContainer icon={home}/>  }
                </Item>
                <Divider>.</Divider>
                <Item>
                      {[...Array(parseInt(Math.floor((result.vote_average/2)* 10) /10))].map((n, index) => {
                      return (<StarIconContainer icon={starFull}/>)
                  })}{[...Array(result.vote_average%2 >= 0.5 ? 1 : 0)].map((n, index) => {
                      return (<StarIconContainer icon={starHalf}/>)
                  })}{[...Array(result.vote_average%2 >= 0.5 ? 4-parseInt(Math.floor((result.vote_average/2)* 10) /10) 
                      : 5-parseInt(Math.floor((result.vote_average/2)* 10) /10) )].map((n, index) => {
                      return (<StarIconContainer icon={starEmpty}/>)
                  })} {Math.floor((result.vote_average/2)* 10) /10}/5
                </Item>
                <h3>
                  <Item>
                      {result.production_countries && result.production_countries.map((country) =>
                        `[${country.name}]`
                          )}
                  </Item>
                </h3>
                        
            </ItemContainer>
                        
                <Overview>{result.overview}</Overview>
            </Tab>
                <Tab eventKey="profile" title="제작사/출연진">
            <LogoContainer>
              <Section title="제작사">
                {result.production_companies.map(logopath => logopath.logo_path ? 
                  <Logo bgImage = {`https://image.tmdb.org/t/p/original${logopath.logo_path}`} /> : console.log(logopath.logo_path)) }
              </Section>
              출연진
              <Carousel breakPoints={breakPoints}>
                {result.credits.cast.map(credit => credit.known_for_department === "Acting" && credit.profile_path ? 
                  <Portrait imageUrl = {credit.profile_path} name = {credit.original_name} character_name = {credit.character}  /> : console.log(credit.profile_path)) }
              </Carousel>
            </LogoContainer>
            </Tab>
            <Tab eventKey="Clip" title="관련클립">
                            <Video>
                              {result.videos.results[0] ? 
                              <YouTube 
                                  videoId={result.videos.results[0] ? result.videos.results[0].key : console.log(result.videos.results)}
                                  opts={opts}/>
                              : <h5>관련 클립이 없습니다 ! </h5>
                              }
                            </Video>
                </Tab>
                
                </Tabs>
            </Data>
        
      </Content>
      <Similar_stuff>
        <Section>
        {result.original_title 
        
        ? result.similar.results.map(sim => 
                  <Poster
                  key={sim.id}
                  id={sim.id}
                  title={sim.title}
                  imageUrl={sim.poster_path}
                  isMovie={true}
                  rating={sim.vote_average}
                  year={sim.release_date && sim.release_date.substring(0,4)} />)
        : result.similar.results.map(sim => 
          <Poster
          key={sim.id}
          id={sim.id}
          title={sim.original_name}
          imageUrl={sim.backdrop_path}
          isMovie={false}
          rating={sim.vote_average}
          year={sim.first_air_date && sim.first_air_date.substring(0,4)} />)
                
                }           
        </Section>  

      </Similar_stuff>
    </Container>
    
    )
  ))};

  
DetailPresenter.propTypes = {
    result:propTypes.object,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default DetailPresenter;