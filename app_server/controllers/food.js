const foodArray = [{
            name: 'Oatmeal',
            type: 'Breakfast'
        },
        {
            name: 'Eggs',
            type: 'Lunch'
        },
        {
            name: 'Sushi',
            type: 'Dinner'
        }];

const myFavFood = 'Lasagna';
        

const foodlist = function(req, res) {
    res.render('foodlist', { 
        foods: foodArray,
        title: ' Food List' });

};

const favouriteFood = function(req, res) {
    res.render('favourite-food', { 
        favouriteFood: myFavFood,
        title: ' My Favourite Food ' });

};

module.exports = {
    foodlist, favouriteFood
};