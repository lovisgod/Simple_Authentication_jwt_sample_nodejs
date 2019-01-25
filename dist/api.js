'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _route = require('./router/route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.json());

app.use('/api/v1', _route2.default);

var port = process.env.PORT || 2400;

app.listen(port, function () {
    console.log('connecting through port ' + port + "...... please wait ");
});