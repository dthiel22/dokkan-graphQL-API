const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type Character{
    id: Int
    thumb: Int,
    art: Int,
    name: String
    title: String
    rarity: String
    type: String
    cost: Int
    ls_description: String
    ls_description_eza: String
    sa_type: String
    sa_name: String
    sa_description: String
    sa_description_eza: String
    ultra_sa_name: String
    ultra_sa_description: String
    ultra_sa_description_eza: String
    ps_name: String
    ps_description: String
    ps_description_eza: String
    sa_type_active: String
    active_skill_name: String
    active_skill: String
    active_skill_condition: String
    active_skill_condition_eza: String
    transform_type: String
    transform_condition: String
    transform_condition_eza: String
    link_skill: [String],
    category: [String],
    jp_date: String
    glb_date: String
    jp_date_eza: String
    glb_date_eza: String,
  }

  type User {
    _id: String
    username: String
    email: String
    characterCount: Int
    savedCharacters: [Int]
  }
  
  type Query {
    # TODO: These are for the characters
    characters: [Character]!

    character(dokkanId: Int): Character

    charactersWithIds(dokkanIds:[Int]):[Character]

    characterName(name: String): [Character]

    charactersLink(linkskill: String): [Character]!

    characters6Link(link1:String,link2:String,link3:String,link4:String,link5:String,link6:String):[Character]!

    characters7Link(link1:String,link2:String,link3:String,link4:String,link5:String,link6:String,link7:String):[Character]!

    linksWithAnd(link1: String, link2: String): [Character]

    links4Match(link1: String, link2: String, link3: String, link4: String): [Character]

    # TODO: These are for the Users
    me(username:String!): User

    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    saveCharacter(username: String!, dokkanId:Int):User

    removeCharacter(token:String!, dokkanId:Int):User
  }
`;

module.exports = typeDefs;