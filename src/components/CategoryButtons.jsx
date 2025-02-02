import { useState } from "react";

function CategoryButtons({ setCategory }) {
    const [active, setActive] = useState("Dólares");

    const categories = ["Dólares", "Dólar Cripto", "Criptomonedas"];

    const handleClick = (cat) => {
        setCategory(cat);
        setActive(cat);
        // Añade un efecto de ripple al hacer clic
        const button = document.querySelector(`button[data-category="${cat}"]`);
        button.classList.add("ripple");
        setTimeout(() => button.classList.remove("ripple"), 600);
    };

    return (
        <div className="category-buttons">
            {categories.map((cat) => (
                <button
                    key={cat}
                    data-category={cat}
                    className={active === cat ? "active" : ""}
                    onClick={() => handleClick(cat)}
                    aria-pressed={active === cat}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default CategoryButtons;
