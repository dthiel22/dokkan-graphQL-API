const { Character } = require('../models');

const resolvers = {
  Query: {
    characters: async () => {
      return Character.find();
    },

    character: async (parent, { dokkanId }) => {
      return Character.findOne({id: dokkanId});
    },

    charactersCat: async (parent, { category }) => {
      return Character.find({category: category});
    },

    charactersLink: async (parent, { linkskill }) => {
      return Character.find({link_skill: linkskill});  
    },
    

  },
};

module.exports = resolvers;
