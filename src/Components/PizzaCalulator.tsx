import React, { useState } from "react";
import data from "../assets/pizza.json";

type PizzaCalculatorProps = {
  name: string;
  description: string;
  price: string;
  url: string;
};

type SelectedPizza = PizzaCalculatorProps & { count: number };

const PizzaCalculator = () => {
  const [pizza, setPizza] = useState<PizzaCalculatorProps[]>(data.pizza);
  const [selectedPizzas, setSelectedPizzas] = useState<SelectedPizza[]>([]);

  const handleAddPizza = (name: string, price: string) => {
    const existingPizza = selectedPizzas.find((pizza) => pizza.name === name);

    if (existingPizza) {
      const updatedPizzas = selectedPizzas.map((pizza) =>
        pizza.name === name ? { ...pizza, count: pizza.count + 1 } : pizza
      );
      setSelectedPizzas(updatedPizzas);
    } else {
      setSelectedPizzas([...selectedPizzas, { name, description: "", price, url: "", count: 1 }]);
    }
  };

  const handleRemovePizza = (name: string) => {
    const existingPizza = selectedPizzas.find((pizza) => pizza.name === name);

    if (existingPizza) {
      const updatedPizzas = selectedPizzas.map((pizza) =>
        pizza.name === name && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza
      );
      setSelectedPizzas(updatedPizzas);
    }
  };

  const calculateTotalPrice = () => {
    return selectedPizzas.reduce((total, pizza) => total + parseFloat(pizza.price) * pizza.count, 0).toFixed(2);
  };

  return (
    <div className="pizza-calculator">
      <h2>Betäll pizza!</h2>
      <ul>
        {pizza.map((piz) => (
          <div key={piz.name}>
            <li>
              {piz.name} - {piz.price}
            </li>
            <button onClick={() => handleAddPizza(piz.name, piz.price)}>Lägg till</button>
          </div>
        ))}
      </ul>
      <h3 className="valda">Valda pizzor:</h3>
      <ul>
        {selectedPizzas.map((pizza) => (
          <li key={pizza.name}>
            {pizza.name} - Antal: {pizza.count} - Pris: {(parseFloat(pizza.price) * pizza.count).toFixed(2)}
            <button onClick={() => handleRemovePizza(pizza.name)}>Ta bort</button>
          </li>
        ))}
      </ul>
      <h3>Totalt pris: {calculateTotalPrice()}</h3>
    </div>
  );
};

export default PizzaCalculator;
