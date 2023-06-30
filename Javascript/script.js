//   fetch('http://localhost:8000/artists').then(reponse => reponse.json()).then(r => {

//         //Parcours la liste de tous les albums
//         let Albumlist= document.getElementsByClassName('listeAlbums')

//         for (let albums = 0; albums < r.length; albums++) {
//             li = document.createElement('li')
//             li.innerHTML = `
//                 </div><image src=${r[albums]['photo']}></div>
//                 <div>${r[albums]['name']}</div>
//                 <div>${r[albums]['description']}</div>
//                 <div>${r[albums]['bio']}</div>
//             `
//             Albumlist[0].appendChild(li)
//         }
//     })

