import { Routes, Route } from 'react-router-dom';
import SinglePlayer from "./SinglePlayer"
import NewPlayerForm from "./NewPlayerForm"
import AllPlayers from './AllPlayers'
import Home from './Home'

const Container = () => {


  return(
      <div id="navbar-container">
        <div id="navbar">
          <Routes> {/* Error occurred after adding Routes element */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/players" element={<AllPlayers/>}></Route>
            <Route path="/players/:playerid" element={<SinglePlayer/>}></Route>
            <Route path="/NewPlayerForm" element={<NewPlayerForm/>}></Route>
          </Routes>
        </div>
      </div>
  )
}

export default Container;
