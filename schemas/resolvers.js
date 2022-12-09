const { Character } = require('../models');
const { db } = require('../models/Character');

const resolvers = {
  Query: {
    characters: async () => {
      return Character.find();
    },

    character: async (parent, { dokkanId }) => {
      return Character.findOne({id: dokkanId});
    },

    // charactersCat: async (parent, { category }) => {
    //   return Character.find({category: category});
    // },

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
  }
};

module.exports = resolvers;
