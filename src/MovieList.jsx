import React, { useRef, useState } from 'react'
import MovieItem from './MovieItem'
import AddFilm from './AddFilm'
function MovieList() {

    const [list, setList] = useState([{ title: "dark", img: "https://fr.web.img2.acsta.net/pictures/19/06/11/09/59/0923348.jpg", description: "horreur", rate: "8/10" },
    { title: "Barbie", img: "https://fr.shopping.rakuten.com/photo/2625701665.jpg", description: "série", rate: "5/10" }
    ])

    const [filtredFilm, setFiltred] = useState(list)
    const R5 = useRef()
    const R6 = useRef()
    const filterdFilm = () => {
        const filtredtitle = list.filter(e => e.title.toUpperCase().includes(R5.current.value.toUpperCase()) || e.rate.toUpperCase().includes(R5.current.value.toUpperCase()))
        setFiltred(filtredtitle)
    }
    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "2vw", gap: "40px" }}>
            <h3>My Gift Store</h3>
            <input ref={R5} type='text' placeholder='search for a product' onChange={filterdFilm}></input>
            <div style={{ display: "flex", gap: "20px" }}>

                {filtredFilm.map(e => <MovieItem film={e}></MovieItem>)}
                <AddFilm list={list} setList={setFiltred}></AddFilm>
            </div>

        </div>
    )
}

export default MovieList
