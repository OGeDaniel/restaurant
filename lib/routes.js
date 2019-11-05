import '../client/pageLayouts/homePage';
import '../client/pageLayouts/mainPage';
import '../client/recipes/recipes.html';
import '../client/recipes/newRecipe';
import '../client/recipes/recipeSingle.html';

if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homePage');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('mainPage', {main: 'recipes'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('mainPage', {main: 'recipeSingle'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('mainPage', {main: 'menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('mainPage', {main: 'shoppingList'});
    }
});