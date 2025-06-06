import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

export default function DogCard({asset, breed, location, focus, describe, id, children}) {
        const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
        const details = {asset, breed, location, focus, id, describe}
        const isFavorited = favorites.some(fave => fave.id === id);

        const addToSaved = (item) =>{
            const favesUpdated = [...favorites, item]
            localStorage.setItem('favorites', JSON.stringify(favesUpdated))
            setFavorites(favesUpdated)
        }

        const removeFromSaved = (itemId) => {
            const favesUpdated = favorites.filter((fave) => fave.id !== itemId )
            localStorage.setItem('favorites', JSON.stringify(favesUpdated))
            setFavorites(favesUpdated)
        }
    

    return (
        <>
            <section className="dogcard">
            <Link to={`/details/${id}`} className="dogcard__info">
            <section className="dogcard__imgcontainer">
                <img src={asset} alt={breed} className="dogcard__img"/>
            </section>

            <section className="dogcard__content">
                <section className="dogcard__top">
                <h1 className="dogcard__breed">{breed}</h1>
                </section>
                <p className="dogcard__location">
                    <IoLocationOutline className="dogcard__locationicon"/>
                    {location}
                    </p>
                <p className="dogcard__focus">{focus}</p>
            </section>
            </Link>
            
            <button className="dogcard__logocontainer" onClick={
                ()=>{
                    if(isFavorited){
                        removeFromSaved(id)
                    }else{
                        addToSaved(details)
                    }
                }
            }>
                {isFavorited ? (
                    <FaHeart className="dogcard__heart dogcard__heart--filled" />
                    ) : (
                        <CiHeart className="dogcard__heart dogcard__heart--empty" />
                    )
                }

            </button>



            </section>
            
            
        </>
    )
}