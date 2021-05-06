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
    transition:opacity 0.15s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right : 6px;
    position:absolute;
    opacity:0;
`;

const Name = styled.span`
    top: 5px;
    left : 6px;
    margin : 15px;
    position:relative;
    margin-bottom: 3px;
`;


const ImageContainer = styled.div`
    margin-bottom: 5px;
    position:relative;
    &:hover{
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Poster = ({imageUrl, name, isMovie = false}) => 
    <Container>
        <ImageContainer>
            <Image bgUrl={
                imageUrl  
            ? `https://image.tmdb.org/t/p/original${imageUrl}` 
            : require("../Assets/NoPosterSmall.png").default}/>
        </ImageContainer>
        <div>
            <Name/>
            </div>
    </Container>


Poster.propTypes = {
    imageUrl: PropTypes.string
}

export default Poster;