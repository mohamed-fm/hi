


module.exports = function(eleventyconfig){
    
    eleventyconfig.addPassthroughCopy('./src/style.css');
    eleventyconfig.addPassthroughCopy('./src/assets');
    eleventyconfig.addPassthroughCopy('./src/admain');

    
    return {
        dir: {
            input:"src",
            output:"public"
        }
    };
}