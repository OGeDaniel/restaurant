import './menu.html';

Template.menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.menu.helpers({
    recipes: () => {
        return Recipes.find({inMenu: true});
    }
});