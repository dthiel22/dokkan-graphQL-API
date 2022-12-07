const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  char_link: {
    type: String,
  },
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  rarity: {
    type: String,
  },
  type: {
    type: String,
  },
  cost: {
    type: Number,
  },
  ls_description: {
    type: String,
  },
  ls_description_eza: {
    type: String,
  },
  sa_type: {
    type: String,
  },
  sa_name: {
    type: String,
  },
  sa_description: {
    type: String,
  },
  sa_description_eza: {
    type: String,
  },
  ultra_sa_name: {
    type: String,
  },
  ultra_sa_description: {
    type: String,
  },
  ultra_sa_description_eza: {
    type: String,
  },
  ps_name: {
    type: String,
  },
  ps_description: {
    type: String,
  },
  ps_description_eza: {
    type: String,
  },
  sa_type_active: {
    type: String,
  },
  active_skill_name: {
    type: String,
  },
  active_skill: {
    type: String,
  },
  active_skill_condition: {
    type: String,
  },
  active_skill_condition_eza: {
    type: String,
  },
  transform_type: {
    type: String,
  },
  transform_condition: {
    type: String,
  },
  transform_condition_eza: {
    type: String,
  },
  link_skill: [{
    type: String,
   }
  ],
  category: [{
    type: String,
   }
  ],
  jp_date: {
    type: String,
  },
  glb_date: {
    type: String,
  },
  jp_date_eza: {
    type: String,
  },
  glb_date_eza: {
    type: String,
  }
},{strict: false});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
