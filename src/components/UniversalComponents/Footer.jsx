import { NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <>
        
        <section className="footer">
            <NavLink to="/dogs"  className="footer__link">
            <FiHome className="footer__icon"/>
            </NavLink>
            <NavLink to="/forum"  className="footer__link">
            <IoChatbubbleOutline className="footer__icon"/>
            </NavLink>
            <NavLink to="/favorites"  className="footer__link">
            < FaRegHeart className="footer__icon"/>
            </NavLink>
            <NavLink to="/settings"  className="footer__link">
            <FiUser className="footer__icon"/>
            </NavLink>
        </section>
        </>
    )
}