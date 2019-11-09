import axios from 'axios';

const KEY = 'AIzaSyArpc9KjBex0bgw0PYJ1amTIcN0D8hD9c0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        keycode: KEY
    }
});
