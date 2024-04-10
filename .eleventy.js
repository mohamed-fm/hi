


module.exports = function(eleventyconfig){
    
    eleventyconfig.addPassthroughCopy('./src/style.css');
    eleventyconfig.addPassthroughCopy('./src/assets');
    
    return {
        dir: {
            input:"src",
            output:"public"
        }
    };
}