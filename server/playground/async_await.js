function fetchAlbums () {
    fetch('https://rallycoding.herokuapp.com/api/music_albums') //returs a promise
        .then(res => res.json()) //returns a promise
        .then(json => console.log(json));
}

fetchAlbums();

async function fetchAlbums () {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums') //returs a promise
    const json = await res.json() //returns a promise
    
    console.log(json);
}

const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums') //returs a promise
    const json = await res.json() //returns a promise
    
    console.log(json);
}

fetchAlbums();