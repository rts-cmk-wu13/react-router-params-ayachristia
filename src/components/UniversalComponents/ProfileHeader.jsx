import { FaLocationDot } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
export default function ProfileHeader({portrait}) {
    return (
        <>
        
        <section className="profileHeader">
            <section className="profileHeader__personal">
            <div className="profileHeader__imgcontainer">
                <img src={portrait} alt="profile__img" />
            </div>

            <section className="profileHeader__specs">
                <span className="profileHeader__iconL">
                    <FaLocationDot color="black"/>
                </span>
                <select name="location" id="location" class="profileHeader__select">
                    <option value="NewYork">New York City</option>
                </select>
            </section>
            </section>

            <span className="profileHeader__icon">
                <FaRegBell />
            </span>
        </section>
        </>
    )
}