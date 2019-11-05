import './shoppingList.html';

Template.shoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.shoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({inMenu: true});
    }
});