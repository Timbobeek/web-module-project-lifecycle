import React from "react";
import Follower from "./Follower";
import styled from "styled-components";

const StyledFollowerList = styled.div`
  color: brown;
  background-color: beige;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
`;

class FollowerList extends React.Component {
  render() {
    return (
      <StyledFollowerList>
        {this.props.followers.map((follower) => {
          return (
            <Follower
              key={follower.id}
              image={follower.avatar_url}
              name={follower.login}
            />
          );
        })}
      </StyledFollowerList>
    );
  }
}

export default FollowerList;
