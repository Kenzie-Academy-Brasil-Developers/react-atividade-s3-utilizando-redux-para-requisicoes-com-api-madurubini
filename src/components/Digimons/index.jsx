import { useSelector } from "react-redux";
import "./style.css";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => (
          <li key={index} className="Card">
            <span>{digimon.name}</span>
            <img
              src={digimon.img}
              alt={digimon.name}
              className="App-logo"
            ></img>
            Level: {digimon.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Digimons;
