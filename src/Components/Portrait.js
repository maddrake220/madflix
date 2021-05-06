import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;


const Image = styled.div`
    background-image:url(${props=> props.bgUrl});
    width: 110px;
    height:180px;
    background-size: cover;
    border-radius: 2px;
    background-position:center center;
`;

const Rating = styled.span`
    bottom: 5px;
    right : 6px;
    position:absolute;
    opacity:0;
`;

const Name = styled.h2`
    position:relative;
    margin-bottom: 3px;
`;

const Character_name = styled.h3`
    position:relative;
    margin-bottom: 3px;
`;



const ImageContainer = styled.div`
    margin-bottom: 5px;
    position:relative;
`;

const Data = styled.div`
`;
const Poster = ({imageUrl, name, character_name,  isMovie = false}) => 
    <Container>
        <ImageContainer>
            <Image bgUrl={
                imageUrl  
            ? `https://image.tmdb.org/t/p/original${imageUrl}` 
            : require("../Assets/NoPosterSmall.png").default}/>
            <Name>-{name}</Name>
            <Character_name>-{character_name}</Character_name>
        </ImageContainer>
        <Data>
        </Data>
    </Container>


Poster.propTypes = {
    imageUrl: PropTypes.string,
    name : PropTypes.string,
    character_name : PropTypes.string,
    isMovie : PropTypes.bool.isRequired
}

export default Poster;