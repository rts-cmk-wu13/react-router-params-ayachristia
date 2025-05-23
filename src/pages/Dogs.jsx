import { useLoaderData } from "react-router";
import DogCard from "../components/Dogs/DogCard";
import AnimalCategories from "../components/Dogs/AnimalCategories";


export default function Dogs() {
    const dogsList = useLoaderData();



    return (
        <>
        <section className="dogs">
        <AnimalCategories/>

            <section className="dogs__list">
                {dogsList.map(dog =>(
                        <DogCard key={dog.id}
                        asset={dog.image}
                        breed={dog.breed}
                        location={dog.location}
                        focus={dog.short_description}
                        id={dog.id}
                        />
                
                ))}
            </section>


        </section>
        </>
    )
}