import React, {useState, useEffect} from "react";
import playerdata from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

function TableMain () {
  let [players, setPlayers] = useState([...playerdata]);
  // const [sortCategory, setSortCategory] = useState("username");
  // const [sortDirection, setSortDirection] = useState("descending");
  // const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    console.log("Players updated! Re-rendering.");
  }, [players])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <TableHeader text="Username" category="username" sortMethod={sortByCategory}/>
          <TableHeader text="First Name" category="firstName" sortMethod={sortByCategory}/>
          <TableHeader text="Last Name" category="lastName" sortMethod={sortByCategory}/>
          <TableHeader text="Rank" category="competitiveRank" sortMethod={sortByCategory}/>
          <TableHeader text="Main Role" category="mainRole" sortMethod={sortByCategory}/>
          <TableHeader text="Main Hero" category="mainHero" sortMethod={sortByCategory}/>
          <TableHeader text="Team" category="team" sortMethod={sortByCategory}/>
        </tr>
      </thead>
      <TableBody players={players}/>
    </Table>
  );

  function sortByCategory (category) {
    let sortedPlayers = playerdata.sort(function(a, b) {
      let catA = a[category].toUpperCase();
      let catB = b[category].toUpperCase();
      if(catA > catB) {
        return 1;
      } else if (catA < catB) {
        return -1;
      } else {
        return 0;
      }
    });

    /* NOTE I DID IT!!!!! There was a HUGE issue here where I was using `setPlayers(sortedPlayers)` and it wasn't updating state, which wasn't re-rendering the component. 
      I believe this was caused because though I was reording the array, I wasn't actually re-assigning it. 
      For some reason, spreading the array is what solved this incredibly frustrating issue.
      This article helped me solve this: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    */
    setPlayers([...sortedPlayers]);
  }
}

export default TableMain;