import template from './userSkills.html';
import controller from './userSkills.controller';
import './userSkills.scss';

const userSkillsComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    skills: '<',
    skillsSummary: '<',
  },
  template,
  controller,
};

export default userSkillsComponent;
