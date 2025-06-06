// import { useLoaderData, useParams } from "react-router";
import background from "/assets/background.svg";
import DetailsHeader from "../components/Details/DetailsHeader";
import Resume from "../components/Details/Resume";
import Button from "../components/UniversalComponents/Button";

import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function Details() {
    // const details = useLoaderData();
    // console.log(details);


    const [dogDetails, setDogDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()
    useEffect(()=>{
        async function fetchData(){
            try{
                const url = `/data.json`
                const response = await fetch(url)
                const data = await response.json()
                const details = data.dogs.find((dog)=> dog.id === Number(id))
                setDogDetails(details)
            }catch(error){
                console.log('Problem fetching data:', error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    // console.log(dogDetails)


    return isLoading ? <h1>Loading... </h1> : (
        <>
        <section className="details">
            <section className="details__background">
                <img src={background} alt="backgroundOfAnimal" className="details__background--img"/>
            </section>

            <section className="details__animal">
                <img src={dogDetails.image} alt={dogDetails.breed} className="details__animal--img"/>
            </section>


            <section className="details__specs">
            <DetailsHeader
            breed={dogDetails.breed}
            location={dogDetails.location}
            gender={dogDetails.gender}
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