// Import 'useState' Hook from React
import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {
  const [friendsList, setFriendsList] = useState(friends)
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  // Name the setter method 'setFriendsList'
  // YOUR CODE HERE
  //

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
  // Update the state with the new friends list.
  // YOUR CODE HERE
  //
  const removeFriend = (idFromUserPick) => {
    const oldFriend = friendsList.filter(friend => {
      return friend.id !=idFromUserPick
    })
    setFriendsList(oldFriend)
  }

  return (
    document.title = 'Friends List',
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {/* Map through 'friendsList' and render a 'FriendCard' for each friend */
      friendsList.map(friend => {
        return (
          <FriendCard
          id = {friend.id}
          image = {friend.image}
          name = {friend.name}
          occupation = {friend.occupation}
          location = {friend.location} 
          removeFriend = {removeFriend}/>
        )
      })}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
    </Wrapper>
  );
}

export default App;
