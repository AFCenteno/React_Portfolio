import React, {useState} from "react";
import FriendCard from '../FriendCard';
import Wrapper from '../Wrapper';
import friends from '../FriendCard/friends.json'

const Portfolio = () => {
  const [friendsList, setFriendsList] = useState(friends);
  
  return (
    <Wrapper>
      {friendsList.map(friend => (
        <FriendCard
          id={friend.id}
          key={friend.id}
          name={friend.name}
          deploy={friend.deploy}
          location={friend.location}
          gitlink={friend.gitlink}
        />
      ))}
    </Wrapper>
)};

export default Portfolio;
