import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
export default function DogCard({asset, breed, location, focus, id}) {
    return (
        <>
            <Link to={`/details/${id}`} className="dogcard" >
            <section className="dogcard__imgcontainer">
                <img src={asset} alt={breed} className="dogcard__img"/>
            </section>

            <section className="dogcard__content">
                <section className="dogcard__top">
                <h1 className="dogcard__breed">{breed}</h1>
                <span className="dogcard__logocontainer">
                <FaHeart className="dogcard__heart"/>
                </span>
                </section>
                <p className="dogcard__location">
                    <IoLocationOutline className="dogcard__locationicon"/>
                    {location}
                    </p>
                <p className="dogcard__focus">{focus}</p>
            </section>
            </Link>
        </>
    )
}