import { useState } from "react";
import data from "../assets/pizza.json";

type PizzaCalulatorProps = {
  name: string;
  description: string;
  price: string;
  url: string;
};

const PizzaCalulator = () => {
  const [pizza, setPizza] = useState<PizzaCalulatorProps[]>(data.pizza);

  return (
    <div className="pizzamenu">
      {pizza.map((piz) => (
        <div className="pizzacontainer">
            <ul>
                <li><h2>{piz.name}</h2></li>
                <li className="des">{piz.description}</li>
                <li>Pris: {piz.price} Kr</li>
                <li><img className="bild" src={piz.url} alt="" /></li>
            </ul>
        </div>
      ))}
    </div>
  );
};

export default PizzaCalulator;
