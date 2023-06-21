import React, { useState } from "react";
import ListItem from "./ListItem";
import SharedContext from "./SharedContext";
import ThemeSwitch from "./ThemeSwitch";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function listItemChangeHandler(item) {
    let newSelectedItems = [...selectedItems];

    if (newSelectedItems.includes(item)) {
      newSelectedItems = selectedItems.filter((theItem) => item !== theItem);
    } else {
      newSelectedItems.push(item);
    }

    setSelectedItems(newSelectedItems);
  }

  return (
    <SharedContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <div
        className={`min-h-screen flex justify-center items-center ${
          theme === "light" ? "bg-slate-50" : "bg-slate-200"
        }`}
      >
        {theme}
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>
            <ul className="mt-4 flex flex-col gap-y-3">
              {["iPhone", "iPad", "MacBook", "Apple TV", "HomePod"].map(
                (item) => {
                  return (
                    <ListItem
                      key={item}
                      active={selectedItems.includes(item)}
                      onChange={listItemChangeHandler}
                    >
                      {item}
                    </ListItem>
                  );
                }
              )}
            </ul>
            <p className="mt-3 text-slate-400 text-sm">
              {selectedItems.length} item(s) selected
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">
              {selectedItems.join(", ")}
            </p>
          </div>
          <div>
            <ThemeSwitch></ThemeSwitch>
          </div>
        </div>
      </div>
    </SharedContext.Provider>
  );
}

export default App;
