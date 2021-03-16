const initState = {
    recipes: [
        {id:'0', name:'Butter Chicken', author:'Erika W', description:'delicious yummy wow so good yes nom nom nom', ingredients:['chicken','rice','butter','spices'], instructions:['spin around', 'shake it down', 'take a bow'], notes:'wow its so delicious', img:'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg', tags:'yum'},
        {id:'1', name:'Ice Cream', author:'James S', description:'delicious yummy wow so good yes nom nom nom', ingredients:['ice','cream'], instructions:['mix','chop','spin','bake','chill'], notes:'be careful about your temperature', img:'https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16.jpg', tags:'yum'},
        {id:'2', name:'Rice', author:'Tina W', description:'delicious yummy wow so good yes nom nom nom', ingredients:['rice','water'], instructions:['cook rice'], notes:'', img:'https://www.thespruceeats.com/thmb/ubqzuOrew468AJJtvFRJqFrZ2C4=/4288x2412/smart/filters:no_upscale()/how-to-make-basic-white-rice-2355883-10-5b0da96eba6177003622896e.jpg', tags:'yum'},
        {id:'3', name:'Space Pancakes', author:'Danielle L', description:'delicious yummy wow so good yes nom nom nom', ingredients:['flour', 'eggs', 'choco chips', 'sprinkles', 'alien blood'], instructions:['prepare sacrifice','gather dry ingredients','bleed alien into flour','bake for 50','put on sprinkles'], notes:'fight me', img:'https://cdn.shopify.com/s/files/1/1921/3233/articles/SUNCORE_FOODS_PURPLE_SWEET_POTATO_PANCAKES_800x800_245a7754-f524-4a83-8433-89f9911430e2_large.jpg?v=1591139133' , tags:'yum'},
        {id:'4', name:'Pho', author:'Barb S', description:'delicious yummy wow so good yes nom nom nom', ingredients:['noodles', 'beef', 'basil', 'lime', 'soup base', 'chicken stock'], instructions:['pray to god','put stuff in pot','simmer for all day','order takeout instead'], notes:'also fight me', img:'https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg', tags:'yum'},
    ]
}

const recipeReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_RECIPE':
            console.log("CREATE_RECIPE: ", action.recipe);
            return state;
        case 'CREATE_RECIPE_ERROR':
            console.log("CREATE_PROJECT_ERROR: ", action.err);
            return state;
        default:
            return state;
    }
}

export default recipeReducer