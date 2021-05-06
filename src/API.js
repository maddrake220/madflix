import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: "a127a7776848f42bc0b876f6e53c9203",
        language: "ko"
    }
})

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos,credits,similar"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })

}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"),
    popular: () => api.get("tv/popular"),
    showDetail: (id) => api.get(`tv/${id}`,{
        params: {
            append_to_response: "videos,credits,similar"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
            /* encodeURIComponent : 
            어떤 값이 오든 문자열로 인코딩 */
        }
    })
}

