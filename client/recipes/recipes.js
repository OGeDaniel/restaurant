import '../../collections/recipes';

Meteor.subscribe('recipes');

console.log(Meteor.settings.public.ga.account);