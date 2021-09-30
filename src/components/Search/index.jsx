import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <div className="SearchBar">
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
