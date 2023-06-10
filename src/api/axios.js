import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f438a92ea58a51063a5de7e1a2b3e998",
        language: "ko-KR"
    }
});

export default instance;