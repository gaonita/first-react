import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 1ec0d851a92c1de03a4a8b21ce98e8317feb4de14829c9878f0535c409c86c07'
    }
});
