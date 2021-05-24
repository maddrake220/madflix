import React, {useEffect, useState} from 'react';
import { moviesApi, tvApi } from "../../API";

function GetYoutubePath (id, isMovie) {
    const [Data, setData] = useState("")
    async function getVideoPath() {
        const ParsedId = parseInt(id);
        let result = null;
        try {
            console.log(isMovie)
            if(isMovie==="movie") {
                ({data: result} = await moviesApi.movieDetail(ParsedId))
                setData(result.videos.results[0].key)
            } else {
                ({data: result} = await tvApi.showDetail(ParsedId))
                setData(result.videos.results[0].key)
            }
        } catch (e) {
            console.log(e)
        } finally {
        }
    }

    useEffect(() => {
        getVideoPath();
    }, [id])

    return Data;
}

export default GetYoutubePath;