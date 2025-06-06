// import { useLoaderData } from "react-router";
import DogCard from "../components/Dogs/DogCard";
import AnimalCategories from "../components/Dogs/AnimalCategories";
import { useEffect, useState } from "react";


export default function Dogs() {
    // const dogsList = useLoaderData();

    const [dogData, setDogData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            try{
                const url = "/data.json"
                const response = await fetch(url)
                const data = await response.json()
                setDogData(data)
            }catch(error){
                console.log('Problems fetching errors:', error);
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    console.log(dogData)

    return (
        <>
        <section className="dogs">
        <AnimalCategories/>

            <section className="dogs__list">
                {isLoading ? <p>Loading ....</p> : dogData.dogs.map(dog =>(
                        <DogCard key={dog.id}
                        asset={dog.image}
                        breed={dog.breed}
                        location={dog.location}
                        focus={dog.short_description}
                        describe={dog.long_description}
                        id={dog.id}
                        />
                
                ))}
            </section>


        </section>
        </>
    )
}