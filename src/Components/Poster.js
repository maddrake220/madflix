import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;


const Image = styled.div`
    background-image:url(${props=> props.bgUrl});
    height:180px;
    background-size: cover;
    border-radius: 4px;
    background-position:center center;
    transition:opacity 0.15s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right : 6px;
    position:absolute;
    opacity:0;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color:rgba(255,255,255,0.5);
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

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => 
    <Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
    <Container>
        <ImageContainer>
            <Image bgUrl={
                imageUrl  
            ? `https://image.tmdb.org/t/p/w500${imageUrl}` 
            : require("../Assets/NoPosterSmall.png").default}/>
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐ 
                </span>{" "}
            {Math.floor((rating/2)* 10) /10}/5
            </Rating>
        </ImageContainer>
        <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
        <Year><span>{year}</span></Year>
    </Container>
    </Link>


Poster.propTypes = {
    imageUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;