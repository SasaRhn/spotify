
function Album() {
    const queryParams = new URLSearchParams(window.location.search);

    const idDeLalbum = queryParams.get('id')

    const [getAlbum, setAlbumId] = React.useState({});
    const [getTracks, setTracks] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8000/albums/${idDeLalbum}`)
            .then(reponse => reponse.json())
            .then(value => {
                setAlbumId(value.album);
                setTracks(value.tracks)
            })
    }, [])

    return (
        <div>
            <div className="text">Nom de l'album {getAlbum.name}</div>            
            <div><img src={getAlbum.cover_small} alt="album_mini_cover"/></div>            
            <div className="text">Date de sortie de l'album {getAlbum.release_date}</div>            
            <div className="text">{getTracks.length} pistes
            {
            getTracks.map(track => {
                return (
                    <div key={track.id}>
                        <div className="text">{track.name}</div>
                        <div className="text">{track.duration}</div>
                        <div className="text"><audio useref="audio_tag"src={track.mp3} controls/></div>
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}


ReactDOM.render(< Album />, document.querySelector('.album'));