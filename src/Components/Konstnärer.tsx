import { useState } from "react";
import data from "../assets/persons.json";

type KonstnärerProps = {
    name: string;
    description: string;
    url: string;
};

const Konstnärer = () => {
    const [konst, setKonst] = useState<KonstnärerProps[]>(data.persons);
    const [name, setName] = useState("");
    const [dec, setDec] = useState("");
    const [url, setUrl] = useState("");
    const [updatingDescription, setUpdatingDescription] = useState("");

    const addKonst = () => {
        if (name && dec && url) {
            const newKonst = {
                name: name,
                description: dec,
                url: url
            };
            setKonst([...konst, newKonst]);
            setName("");
            setDec("");
            setUrl("");
        }
    };

    const remove = (nameToRemove: string) => {
        const updatedKonst = konst.filter((konstnär) => konstnär.name !== nameToRemove);
        setKonst(updatedKonst);
    };

    const update = (nameToUpdate: string, updatedDescription: string) => {
        const updatedKonstList = konst.map((konstnär) => {
            if (konstnär.name === nameToUpdate) {
                return { ...konstnär, description: updatedDescription };
            }
            return konstnär;
        });
        setKonst(updatedKonstList);
    };

    return (
        <div className='konst'>
            <input type="text" placeholder="skriv konstnärs namn" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="description" value={dec} onChange={(e) => setDec(e.target.value)} />
            <input type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={addKonst}>Add Konst</button>
            <ul>
                {konst.map((per: KonstnärerProps) => (
                    <li key={per.name} className='li'>
                        <h2>Name: {per.name} </h2>
                        <p className="des"> Description: {per.description}</p>
                     
                        <img className='img' src={per.url} alt="bild" />
                        <button onClick={() => remove(per.name)}>Remove</button>
                        <input className="inp" type="text" placeholder="Update description" value={updatingDescription} onChange={(e) => setUpdatingDescription(e.target.value)} />
                        <button className="update" onClick={() => update(per.name, updatingDescription)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Konstnärer;
