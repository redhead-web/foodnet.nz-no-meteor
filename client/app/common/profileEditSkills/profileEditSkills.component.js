import template from './profileEditSkills.html';
import controller from './profileEditSkills.controller';
import './profileEditSkills.scss';

const profileEditSkillsComponent = {
  restrict: 'E',
  bindings: {
    user: '=',
    skills: '=',
  },
  template,
  controller,
};

export default profileEditSkillsComponent;
