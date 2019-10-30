import '../client/pageLayouts/homePage';
import '../client/pageLayouts/mainPage';
import '../client/recipes/recipes.html';
import '../client/recipes/newRecipe';

FlowRouter.route('/', {
    name: 'home',
    action() {
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