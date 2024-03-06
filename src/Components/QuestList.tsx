import { useState } from "react";

type QuestListProps = {
  id: number;
  compleate: boolean;
  description: string;
  reward?: 100 | 500;
};

const QuestList = () => {
  const startQuest: QuestListProps[] = [
    { id: 1, compleate: false, description: "beskrivning ett" },
    { id: 2, compleate: true, description: "beskrivning två" },
    { id: 3, compleate: false, description: "beskrivning tre" },
    { id: 4, compleate: true, description: "beskrivning fyra"}
  ];
  const [quest, setQuest] = useState(startQuest);

  const handleClicked = (id: number) => {
    setQuest((ques) =>
      ques.map((item) =>
        item.id === id ? { ...item, compleate: !item.compleate } : item
      )
    );
  };

  return (
    <div className="questlist">
      <h1>QuestList</h1>
      <ul>
        {quest.map((ques: QuestListProps) => (
          <li key={ques.id}>
            {ques.compleate ? (
              <span onClick={() => handleClicked(ques.id)}>✅</span>
            ) : (
              <span onClick={() => handleClicked(ques.id)}>⬜</span>
            )}{" "}
            {ques.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestList;
