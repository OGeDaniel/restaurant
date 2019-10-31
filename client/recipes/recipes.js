import '../../collections/recipes';

Template.recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
})

Template.recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
});