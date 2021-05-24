import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 20px;
`;


const Image = styled.div`
    background-image:url(${props=> props.bgUrl});
    height:480px;
    background-size: cover;
    border-radius: 5px;
    background-position:center center;
    transition:opacity 0.15s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right : 6px;
    position:absolute;
    opacity:0;
    color: white;
`;

const Title = styled.span`
    top: 5px;
    left : 6px;
    margin : 15px;
    display: block;
    position:absolute;
    margin-bottom: 3px;
    opacity: 0;
    color: white;
`;


const ImageContainer = styled.div`
    margin-bottom: 5px;
    position:relative;
    overflow:hidden ;
    &:hover{
        ${Image} { 
            transform: scale(1.3);
            opacity: 1;
        }
        ${Rating} {
            opacity: 1;
        }
        ${Title} {
            opacity: 1;
        }
    }
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => 
    <Link to={isMovie? `/movie/${id}` : `/show/${id}`}  >
    <Container>
        
        <ImageContainer>
            <Image bgUrl={
                imageUrl  
            ? `https://image.tmdb.org/t/p/w500${imageUrl}` 
            : require("../Assets/NoPosterSmall.png").default}/>
            <Title>{title && title.length > 18 ? `${title.substring(0, 18)}...` : title} ({year})</Title>
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐ 
                </span>{" "}
            {Math.floor((rating/2)* 10) /10}/5
            </Rating>
        </ImageContainer>
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