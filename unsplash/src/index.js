import Unsplash from 'unsplash-js';
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({accessKey: "{dd3a806d5b621bbe58514ebedcc2910564c216c71bf9306246f3f3845ef8b7ad}"});

const unsplash = new Unsplash({
    accessKey: "{dd3a806d5b621bbe58514ebedcc2910564c216c71bf9306246f3f3845ef8b7ad}",
    headers: {"Custom-Header": "foo"}
}),
    timeout: 500});


unsplash.users.profile("naoufal").catch(err => {null});

unsplash.search.photos("dogs", 1, 10, {orientation:"portrait"}).then(toJson)
.then(json => {});
