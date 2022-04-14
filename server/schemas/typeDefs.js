const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    highscores: [Highscore]
    avatar: String
    level: Int
    XP: Int
  }

  type Leaderboard {
    highscores: [Highscore]
  }

  type Highscore {
    _id: ID
    score: Int
    user: String
    date: String
  }

  type Query {
    me: User
    leaderboard: Leaderboard
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      highscores: [String]
    ): Auth
    addUserHighscore(score: Int): User
    addLeaderboardHighscore(score: Int): Leaderboard
    addUserXP(XP: Int!): User
  }
`;

module.exports = typeDefs;
