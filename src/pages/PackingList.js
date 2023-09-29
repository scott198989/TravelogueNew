import React, { useState } from "react";
import "../styles/PackingList.css";

const PackingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="container__packing-list">
            <h2 className="header__packing-list">
                Packing List
            </h2>
            <div className="form__packing-list">
                <input
                    type="text"
                    value={newItem}
                    onChange={handleInputChange}
                    placeholder="Add an item"
                />
                <button onClick={addItem}>
                    Add
                </button>
            </div>
            <ul className="items__packing-list">
                {items.map((item, index) => (
                    <li className="item__packing-list" key={index}>
                        <span>
                            {item}
                        </span>
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackingList;