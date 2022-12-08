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

    charactersCat: async (parent, { category }) => {
      return Character.find({category: category});
    },

    charactersLink: async (parent, { linkskill }) => {
      return Character.find({link_skill: linkskill});  
    },

    linksWithAnd: async (parent, { link1, link2 }) => {
      return Character.find({ $and: [{ link_skill: link1 }, { link_skill: link2 }] });   
    },

    links4Match: async (parent, { link1, link2, link3, link4 }) => {
      return Character.find({ $and: [{ link_skill: link1 }, { link_skill: link2 }, { link_skill: link3 }, { link_skill: link4 }] });   
    },
    
    charactersTest: async (parent, { link1, link2 }) => {
      return Character.find({
        where: {
          link_skills: {
              name: link1
          },
          link_skills: {
            name: link2
          },
        }
      });
  }}
};

module.exports = resolvers;
