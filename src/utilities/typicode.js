export async function getDogs() {
    const res = await fetch("http://localhost:4000/dogs");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}

export async function getDog({ params }) {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/dogs/${id}`);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}