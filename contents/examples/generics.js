var Map = (function () {
    function Map() {
        this.map = {};
    }
    Map.prototype.add = function (name, item) {
        this.map[name] = item;
    };
    Map.prototype.get = function (name) {
        return this.map[name];
    };
    Map.prototype.remove = function (name) {
        delete this.map[name];
    };
    return Map;
}());
var instanceA = new Map();
instanceA.add('foo', true);
console.log(instanceA.get('foo'));
