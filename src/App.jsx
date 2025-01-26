import React, { useState } from 'react';
import { data } from './data';
import Card from './Card';
import './App.css';
import Page from './Page';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [condition, setCondition] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to store selected recipe details

  // Function to handle the search input change
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Function to switch to the details page
  const change = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe details
    setCondition(true);
  };

  // Function to go back to the main list
  const back = () => {
    setCondition(false);
    setSelectedRecipe(null); // Clear the selected recipe
  };

  // Filter the data based on the search input
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      {condition ? (
        // Render Page component with selected recipe details
        <Page
          name={selectedRecipe.name}
          image={selectedRecipe.image}
          process={selectedRecipe.process}
          fun={back}
        />
      ) : (
        <div className="main-container">
          <div className="search">
            <h1>Flavors of Home</h1>
            <input
              type="search"
              placeholder="Search recipe"
              onChange={handleSearch} // Call the search handler
            />
          </div>

          <ul>
            {filteredData.map((i) => (
              <li key={i.id}>
                <Card
                  image={i.image}
                  name={i.name}
                  click={() => change(i)} // Pass the recipe data to change
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
