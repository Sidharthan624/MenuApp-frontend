import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MenuTabs.css";
import logo from "../assets/images/cina2.png";
import logo2 from "../assets/images/pasta.png";
import menu from '../assets/images/menu.jpeg'

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [menuItems, setMenuItems] = useState({});
  const [tabs, setTabs] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://MenuApp-backend.com/api/menus");
        const menus = response.data;

      
        const formattedMenus = {};
        menus.forEach((menu) => {
          formattedMenus[menu.name] = menu.items.map((item) => ({
            name: item.name,
            price: `$${item.price}`,
            description: item.description,
            image: item.image, 
          }));
        });

        setMenuItems(formattedMenus);
        setTabs(Object.keys(formattedMenus));
        setActiveTab(Object.keys(formattedMenus)[0]); 
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch menus. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchMenus();
  }, []);

  if (isLoading) {
    return <div className="menu-tabs">Loading...</div>;
  }

  if (error) {
    return <div className="menu-tabs">{error}</div>;
  }

  return (
    <div className="menu-tabs">
      
      <img src={logo} alt="Logo" className="menu-logo" />

      
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active-tab" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="menu-items">
        {menuItems[activeTab]?.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={menu} alt={item.name} />
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <span className="menu-item-price">{item.price}</span>
          </div>
        ))}
      </div>

      <img src={logo2} alt="Logo" className="menu-logo2" />
    </div>
  );
};

export default MenuTabs;
