import { Link } from "react-router";

export default function AnimalCategories() {
    return (
        <>
        <section className="categories">
            <Link to="/" className="categories__item">
                Cats
            </Link>
            <Link to="/" className="categories__item">
                Dogs
            </Link>
            <Link to="/" className="categories__item">
                Birds
            </Link>
            <Link to="/" className="categories__item">
                Other
            </Link>
        </section>
        </>
    )
}