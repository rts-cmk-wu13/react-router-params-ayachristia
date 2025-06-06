import { useState } from "react";
import { Link } from "react-router";

export default function Favorites() {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    return (
        <>
        

        <section className="favorites">
        <h1 className="favorites__headline">Favorites</h1>
            {favorites.map((fave)=>(
                <Link to={`/details/${fave.id}`} className="favorites__dog">
                    <h2>{fave.breed}</h2>
                    <p className="favorites__description">{fave.describe}</p>
                </Link>
            ))}
        </section>
        </>
    )
}