import { Link } from "react-router";

export default function Button({text, link}) {
    return (
        <>
        
        <Link to={`/${link}`} className="button">
        {text}
        </Link>
        </>
    )
}