const cities = [ "NY", "CDMX", "CHI", "LA", "SF", "ATX", "SYD", "LAX", "SFO" ];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string
}

module.exports = randomString;