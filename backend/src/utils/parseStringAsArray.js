module.exports = function parseStringAsArray(ArrayAsString) {
    return techs.split(',').map(tech => tech.trim());
}