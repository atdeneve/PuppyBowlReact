import { useState } from "react";
import { useAddPlayerMutation } from "../API/index";

function NewPlayerForm() {
  const [addPlayer, { isLoading }] = useAddPlayerMutation();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPlayer(playerData);
    } catch (error) {
      console.error("Error Adding New Player", error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1>Add New Player</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Player Name:
            <input
              type="text"
              name="name"
              value={playerData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Player Breed:
            <input
              type="text"
              name="breed"
              value={playerData.breed}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Player Status:
            <input
              type="text"
              name="status"
              placeholder="Enter 'field' or 'bench'"
              value={playerData.status}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Player Image URL:
            <input
              type="text"
              name="imageUrl"
              value={playerData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Player"}
          </button>
        </form>
      </div>
    </>
  );
}
export default NewPlayerForm;
