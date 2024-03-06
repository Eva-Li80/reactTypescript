import React, { useState } from "react";
import data from "../assets/pizza.json";
import MenyPizza from "./MenyPizza";

type PizzaCalulatorProps = {
  name: string;
  description: string;
  price: string;
  url: string;
  ingridiensdeg: string;
};

const PizzaDetails = () => {
  const [pizza, setPizza] = useState<PizzaCalulatorProps[]>(data.pizza);
  const [selectedPizza, setSelectedPizza] =
    useState<PizzaCalulatorProps | null>(null);
  const [details, setDetails] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = pizza.find((p) => p.name === e.target.value);
    setSelectedPizza(selected || null);
    setDetails(true);
  };

  return (
    <div className="pizza">
      <MenyPizza />
      <div className="pizzacalc">
        <h2>Läs mer om pizzan du önskar</h2>
        <div>
          {!details &&
            pizza.map((piz) => (
              <div className="inside">
                <input
                  key={piz.name}
                  type="radio"
                  value={piz.name}
                  checked={selectedPizza?.name === piz.name}
                  onChange={handleChange}
                />
                <h2>{piz.name}</h2>
              </div>
            ))}
          {selectedPizza && details && (
            <div className="details">
              <h2>{selectedPizza.name}</h2>
              <p>Beskrivning: {selectedPizza.description}</p>
              <p>Ingridens: {selectedPizza.ingridiensdeg}</p>
              <p>Pris: {selectedPizza.price}</p>
              <img
                className="bild"
                src={selectedPizza.url}
                alt={selectedPizza.name}
              />
              <button onClick={() => setDetails(false)}>close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
