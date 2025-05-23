import { useLoaderData } from "react-router";
import background from "/assets/background.svg";
import DetailsHeader from "../components/Details/DetailsHeader";
import Resume from "../components/Details/Resume";
import Button from "../components/UniversalComponents/Button";

export default function Details() {
    const details = useLoaderData();
    console.log(details);


    return (
        <>
        <section className="details">
            <section className="details__background">
                <img src={background} alt="backgroundOfAnimal" className="details__background--img"/>
            </section>

            <section className="details__animal">
                <img src={details.image} alt={details.breed} className="details__animal--img"/>
            </section>


            <section className="details__specs">
            <DetailsHeader
            breed={details.breed}
            location={details.location}
            gender={details.gender}
            />
            <Resume/>
            <Button
            text="Back"
            link="dogs"
            />
            </section>

        </section>
        </>
    )
}