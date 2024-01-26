import { useParams } from 'react-router-dom';
import { useGetPlayerQuery } from "../API/index";

const SinglePlayer = () => {
  const { playerid } = useParams();
  const { data, error, isLoading } = useGetPlayerQuery({ playerid });

  console.log(data);

  if (isLoading) {
    return <p>Loading player data...</p>;
  }

  if (error) {
    return <p>Error fetching player data: {error.message}</p>;
  }

  return (
    <div key={data.data.player.id} className="player-card">
      <img
        src={data.data.player.imageUrl}
        alt={data.data.player.name}
        className="player-image"
      />

      <div className="player-details">
        <h2>{data.data.player.name}</h2>
        <p>{data.data.player.breed}</p>
        <p>{data.data.player.status}</p>
      </div>
    </div>

  );
}

export default SinglePlayer;
