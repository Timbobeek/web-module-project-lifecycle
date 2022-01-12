import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 18%;
`;

class User extends React.Component {
  render() {
    return (
      <div>
        <h2>Current User: {this.props.name}</h2>
        <StyledImage src={this.props.image} />
        <h3>{this.props.username}</h3>
        <h3>Total Repos: {this.props.totalRepos}</h3>
        <h3>Total Followers: {this.props.totalFollowers}</h3>
      </div>
    );
  }
}

export default User;
