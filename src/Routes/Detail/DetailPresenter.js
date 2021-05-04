
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { starFull } from "react-icons-kit/icomoon/starFull";
import { starHalf } from "react-icons-kit/icomoon/starHalf";
import { starEmpty } from "react-icons-kit/icomoon/starEmpty";
import { film } from "react-icons-kit/icomoon/film";
import { Helmet } from "react-helmet";
import Message from "../../Components/Message";
import YouTube from 'react-youtube';


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
    width: 70%;
    margin-left: 20px;

`;

const Title = styled.h3`
    font-size : 32px;
    margin-bottom : 10px;
`;

const Item = styled.span`

`;

const Video = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;
const ItemContainer = styled.div`
margin:20px 0;
`;

const Divider = styled.span`
    margin: 0 10px;
`;


const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:1.5;
    width:50%;
`;

function DetailPresenter  ({ result, loading, error }) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };
  return (
      
    loading ? (
      <>
      <Helmet>
          <title>Loading | Madflix</title>
      </Helmet>
    <Loader />
      </>
  ) : (
    error ? <Message /> : (<Container>
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
                    : result.episode_run_time && result.episode_run_time[0] } Min 
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
                    {[...Array(parseInt(Math.floor((result.vote_average/2)* 10) /10))].map((n, index) => {
                    return (<StarIconContainer icon={starFull}/>)
                })}{[...Array(result.vote_average%2 >= 0.5 ? 1 : 0)].map((n, index) => {
                    return (<StarIconContainer icon={starHalf}/>)
                })}{[...Array(result.vote_average%2 >= 0.5 ? 4-parseInt(Math.floor((result.vote_average/2)* 10) /10) 
                    : 5-parseInt(Math.floor((result.vote_average/2)* 10) /10) )].map((n, index) => {
                    return (<StarIconContainer icon={starEmpty}/>)
                })}
                {Math.floor((result.vote_average/2)* 10) /10}/5
                </Item>
                <Video>
                <YouTube videoId={result.videos.results[0].key} opts={opts}/>
                </Video>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>)
  ))};

  

DetailPresenter.propTypes = {
    result:propTypes.object,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default DetailPresenter;