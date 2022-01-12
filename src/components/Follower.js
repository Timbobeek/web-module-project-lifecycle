import React from 'react';
import styled from "styled-components";

const StyledFollower = styled.div`
  width: 30%;
`;

class Follower extends React.Component {
  render() {
      return (<StyledFollower>
          <img width="100%" src={this.props.image} />
          <p>{this.props.name}</p>
      </StyledFollower>);
  }
}

export default Follower;