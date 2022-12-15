const { Character } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');


const resolvers = {
  Query: {
    //TODO: All of these queries are for characters
    characters: async () => {
      return Character.find();
    },

    character: async (parent, { dokkanId }) => {
      return Character.findOne({id: dokkanId});
    },

    charactersWithIds: async (parent, { dokkanIds }) => {
      return Character.find({id: dokkanIds});
    },

    characterName: async (parent, { name }) => {
      return Character.find({name: name});
    },

    charactersLink: async (parent, { linkskill }) => {
      return Character.find({link_skill: linkskill});  
    },

    characters6Link: async (parent, { link1, link2, link3, link4, link5, link6 }) => {
      return Character.find({ $or: [{link_skill: link1},{ link_skill:link2},{ link_skill: link3},{link_skill: link4},{link_skill: link5},{link_skill: link6}]});
    },

    characters7Link: async (parent, { link1, link2, link3, link4, link5, link6, link7 }) => {
      return Character.find({ $or: [{link_skill: link1},{link_skill:link2},{ link_skill: link3},{link_skill: link4},{link_skill: link5},{link_skill: link6},{link_skill: link7}]});
    },

    linksWithAnd: async (parent, { link1, link2 }) => {
      return Character.find({ $and: [{ link_skill: link1 }, { link_skill: link2 }] });   
    },

    links4Match: async (parent, { link1, link2, link3, link4 }) => {
      return Character.find({ $and: [{ link_skill: link1 }, { link_skill: link2 }, { link_skill: link3 }, { link_skill: link4 }] });   
    },

    //TODO: All these queries are for user
    me: async (parent, { username }) => {
      return User.findOne({ username: username });
    },

    users: async (parent, {}) => {
      return User.find();
    },
  },
   
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    saveCharacter: async (parent, { username, dokkanId}) => {
      return User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: { savedCharacters:dokkanId }
        },
        {
          new: true,
        }
      );
    },

    removeCharacter: async (parent, { username, dokkanId}) => {
      return User.findOneAndUpdate(
        { username: username },
        { $pull: { savedCharacters : dokkanId} },
        {
          new: true,
        }
      );
    },
  },
};

module.exports = resolvers;
