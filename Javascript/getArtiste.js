
function Artiste() {
    const queryParams = new URLSearchParams(window.location.search);

    const idDeLartiste = queryParams.get('id')

    const [getArtiste, setArtiste] = React.useState({});
    // const [getTracks, setTracks] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8000/artists/${idDeLartiste}`)
            .then(reponse => reponse.json())
            .then(value => {
                setArtiste(value);
            })
    }, [])

    return (
        <div className="centre">
            <div className="text">{getArtiste.name}</div>            
            <div><img src={getArtiste.photo} alt="logo"/></div>
            <div className="text">{getArtiste.bio}</div>
        </div>
    )
}   


ReactDOM.render(< Artiste />, document.querySelector('#center-div'));