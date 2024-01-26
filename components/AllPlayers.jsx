import { Link } from 'react-router-dom';
import { useGetPlayersQuery } from '../API/index';

const AllPlayers = () => {
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    return <p>Fetching players, please hold...</p>;
  }

  if (error) {
    alert("We are unable to fetch your players, whoopsie!")
  }

  console.log(data);

  return (
    <div className="players">
      {isLoading ? (
        <p>Fetching players, please hold...</p>
      ) : (
        data.data.players.map((player) => (
          <Link to={`/players/${player.id}`} key={player.id} className='player-link'>
            <div key={player.id} className='player-card'>
              <img
                className='player-image'
                src={player.imageUrl}
                alt={player.name}
              />
              <div className='player-details'>
                <h2>{player.name}</h2>
                <p>{player.breed}</p>
                <p>{player.status}</p>
              </div>
              <Link to={`/players/${player.id}`}>
                <button>Details</button>
              </Link>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AllPlayers;
