import React from 'react';
import './style.css';


// Props are passed through our functional component.
function FriendCard(props) {
  return (
    <div>
    <div className="card" id={props.location}>
    </div>
          <div className="content">
          <ul>
            <ul>
              <strong>{props.name}</strong>
            </ul>
            <ul>
            <a href={props.deploy} target="_blank">
            Deployed app
            </a>
            </ul>
            <ul>
            <a href={props.gitlink} target="_blank">
            Github Source
            </a>
            </ul>
          </ul>
        </div>
      </div>
  );
}

export default FriendCard;
