import React, {useEffect, useState, useRef} from 'react';
import { moviesApi, tvApi } from "../../API";
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { TiMediaPlayOutline, TiMediaPauseOutline } from "react-icons/ti";
import "./style.css";
import styled from 'styled-components';

const Button = styled.button`
  margin: 1.3rem;
  border-style: none;
  border-bottom:2px solid;
  color: white;
  transform: scale(2);
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
`;


const BackgroundYT = (props) =>{

    const random = Math.floor(Math.random() * 20);

    const [Loading, setLoading] = useState(true)

    const [Data, setData] = useState("")

    const [Play, setPlay] = useState(false)
    const [Mute, setMute] = useState(true)

    const playerRef = useRef(null);
    
    const pauseVideo = () => {
      playerRef?.current?.internalPlayer.pauseVideo();
      setPlay(true)
    };

    const startVideo = () => {
      playerRef?.current?.internalPlayer.playVideo();
      setPlay(false)
    };

    const unmuteVideo = () => {
      playerRef?.current?.internalPlayer.unMute();
      setMute(false)
    };

    const muteVideo = () => {
      playerRef?.current?.internalPlayer.mute();
      setMute(true)
    };
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
          mute:1
        },
      };

    async function getVideoPath() {
        let id = props[random].id
        let isMovie = props[random].media_type==="movie" ? true : false
        const ParsedId = parseInt(id);
        let result = null;
        try {
                if(isMovie) {
                  ({data: result} = await moviesApi.movieDetail(ParsedId))
                  setData(result)
                } else {
                  ({data: result} = await tvApi.showDetail(ParsedId))
                  setData(result)
                }
        } catch (e) {
            console.log(e)
        } finally {
          setLoading(false)
        }
    }

    useEffect(() => {
        getVideoPath();
    }, [props])

    return (<>
        <div class="video-background">
                        <div class="video-foreground">
                            
                                                    
                        <YouTube id="yt_id" videoId={Data?.videos?.results[0]?.key} opts={opts} ref={playerRef}/>
                             
                              </div>
                        </div>
                        <div id="vidtop-content">
                            <div class="vid-info">
                                <h1>{Data && Data.title ? Data.title : Data.name }</h1>
                                    <p>{Data && Data.overview}</p>
                                    {Data.original_title ?
                                         <Link to={`/movie/${Data.id}`}> 상세 정보</Link>
                                        :
                                        <Link to={`/show/${Data.id}`}> 상세 정보</Link>
                                    }
                            </div>
                            <div class="vid-control">
                                    {Play ? <Button onClick={startVideo}><TiMediaPlayOutline/></Button> 
                                          : <Button onClick={pauseVideo}><TiMediaPauseOutline/></Button>}
                                    {Mute ? <Button onClick={unmuteVideo}><BiVolumeMute/></Button>
                                          : <Button onClick={muteVideo}><BiVolumeFull/></Button>}
                              </div>
                        </div></> 
     
    )
}

export default BackgroundYT;