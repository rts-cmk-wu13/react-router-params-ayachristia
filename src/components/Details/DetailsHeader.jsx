import { IoLocationOutline, IoPawOutline } from "react-icons/io5";
import genderIcon from "/assets/gender.svg";

export default function DetailsHeader({breed, location, gender}) {
    return (
        <>
        <header className="detailsHeader">
            <h1 className="detailsHeader__headline">
                {breed}
            </h1>
            <p className="detailsHeader__location">
                <IoLocationOutline className="detailsHeader__locationicon" color="#5533EA"/>
                {location}
            </p>

            <section className="detailsHeader__badges">
                <div className="detailsHeader__badge">
                    <div className="detailsHeader__badgeicon">
                        <IoPawOutline className="detailsHeader__icon" color="#F4B207"/>
                    </div>
                    <p className="detailsHeader__badgetext">{breed}</p>
                </div>

                <div className="detailsHeader__badge">
                    <div className="detailsHeader__badgeicon">
                        <img src={genderIcon} alt="badgeIcon" className="detailsHeader__icon" />
                    </div>
                    <p className="detailsHeader__badgetext">{gender}</p>
                </div>

            </section>
        </header>
        </>
    )
}