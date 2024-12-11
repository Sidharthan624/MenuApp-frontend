import React, { useState } from "react";
import axios from "axios";
import "./CreateMenuForm.css";

const CreateMenuForm = () => {
  const [menuName, setMenuName] = useState("");
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleAddItem = () => {
    if (itemName && itemDescription && itemPrice) {
      setItems([
        ...items,
        {
          name: itemName,
          description: itemDescription,
          price: Number(itemPrice),
        },
      ]);
      setItemName("");
      setItemDescription("");
      setItemPrice("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const menuResponse = await axios.post("https://menuapp-backend-0q8t.onrender.com/api/menus", {
        name: menuName,
      });

      const menuId = menuResponse.data._id;

      for (const item of items) {
        await axios.post(`https://menuapp-backend-0q8t.onrender.com/api/menus/${menuId}/items`, item);
      }

      alert("Menu created successfully!");
      setMenuName("");
      setItems([]);
    } catch (error) {
      console.error("Error creating menu:", error.message);
    }
  };

  return (
    <div className="create-menu-container">
      <h2 className="create-menu-title">Create Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="create-menu-label">Menu Name</label>
          <input
            type="text"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            className="create-menu-input"
            required
          />
        </div>
        <hr />
        <h3 className="create-menu-title">Add Items</h3>
        <div>
          <label className="create-menu-label">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="create-menu-input"
          />
        </div>
        <div>
          <label className="create-menu-label">Item Description</label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="create-menu-textarea"
          ></textarea>
        </div>
        <div>
          <label className="create-menu-label">Item Price</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="create-menu-input"
          />
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          className="create-menu-button"
        >
          Add Item
        </button>
        <ul className="create-menu-items-list">
          {items.map((item, index) => (
            <li key={index} className="create-menu-item">
              <span>
                {item.name} - {item.description} - ${item.price}
              </span>
            </li>
          ))}
        </ul>
        <button type="submit" className="create-menu-submit">
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default CreateMenuForm;
