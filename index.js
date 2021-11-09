function countryToLiveIn(language, isIsland, population, country) {
    // isIsland = Boolean() ;
    // population = int ;
    // country = "" ;
    // language = "" ;
    
    if ((language === 'English') && (population <= 50) && (isIsland === false)) {
        return `you should live in ${country}`;
    }
    return `${country} does not meet your criteria`;
}
console.log(countryToLiveIn("English", false, 40, "Finland"));
console.log(countryToLiveIn("Dutch", false, 60, "Germany"));