import '../../collections/recipes';

Template.recipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
})

Template.recipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});