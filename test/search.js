var test = require('tape');
var quotemeta = require('../');

test(function (t) {
    t.plan(1);
    
    var query = new RegExp('\\d ' + quotemeta('node.js'));
    var filter = function (x) { return query.test(x) };
    var xs = [
        '0 node^js y',
        '1 node_js x',
        '2 node.js 5',
        '3 beep z',
        'X node.js Y',
        '4 boop w'
    ];
    t.same(xs.filter(filter), [ '2 node.js 5' ]);
});
