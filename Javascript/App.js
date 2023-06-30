
function App() {
    const [images, setImages] = React.useState([])
    const [pageActuel, setPageActuel] = React.useState(1)
    const enrengistrementParPage = 5;
    const lastIndex = pageActuel * enrengistrementParPage
    const firstIndex = lastIndex - enrengistrementParPage
    const enrengistrements = images.slice(firstIndex, lastIndex)
    const nombreDePages = Math.ceil(enrengistrements.length / enrengistrementParPage)
    const numbers = [...Array(nombreDePages + 1).keys()]

    React.useEffect(() => {
        fetch('http://localhost:8000/albums')
            .then(reponse => reponse.json())
            .then(value => {
                setImages(value)
            })
    }, [])

    return (
        <div>
            {enrengistrements.map(item => (

                <div 
                key={item.id}>
                    <div className="nom">{item.name}</div>
                    <div className="photo" onClick={() => imageClicked(item)}><img src={item.cover_small} alt='photo'/></div>
                </div>
            ))}

            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={précedent}>Précedent</a>
                    </li>
                    {
                        numbers.map((n, i) => {
                            <li className={`page-item ${pageActuel === n ? 'active' : ''}`} key={i}>
                                <a href="#"  className='page-item' 
                                onClick={() => changePage(n)}>{n}</a>
                            </li>
                        })
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={suivant}>Suivante</a>
                    </li>
                </ul>
            </nav>

        </div>

    )
    function changePage(id){
        setPageActuel(id)
    }
    function précedent() {
        if(pageActuel !== 1){
            setPageActuel(pageActuel - 1)
        }

    }
    function suivant() {
        setPageActuel(pageActuel + 1)
    }
    function imageClicked(image){

       fetch(`http://localhost:8000/albums/${image.id}`).then(reponse => {
        return reponse.json()
       }).then(v => {
            window.location.href = `../html/détailAlbum.html?id=${v.album.id}`
        })

    }
}


ReactDOM.render(< App />, document.querySelector('.centre'));