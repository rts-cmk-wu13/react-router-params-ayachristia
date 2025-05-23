import Button from "../components/UniversalComponents/Button";
import Heroimage from "/assets/Animal.svg";


export default function Home() {
    
    return (
        <>
        <div className="home">
            <section className="home__hero">
            <img src={Heroimage} alt="AnimalInNature" />
            </section>

            <section className="home__focus">
                <h2 className="home__headline">
                    My Pets
                </h2>
                <p className="home__text">
                    Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.
                </p>
            </section>

            <Button text="Skip" link="dogs"/>

        </div>
        </>
    )
}