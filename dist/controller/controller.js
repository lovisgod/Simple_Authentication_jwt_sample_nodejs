'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.getUser = exports.postUser = undefined;

var _db = require('../db/db');

var model = _interopRequireWildcard(_db);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _verify = require('../verify/verify');

var _verify2 = _interopRequireDefault(_verify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var postUser = exports.postUser = function postUser(req, res) {
    var user = {
        name: req.body.name,
        password: req.body.password,
        about: req.body.about
    };

    model.userDetails.push(user);
    res.status(200).send(user);
};

var getUser = exports.getUser = function getUser(req, res) {
    _jsonwebtoken2.default.verify(req.token, 'mysecretkey', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'post created',
                my: model.userDetails
            });
        }
    });
    // res.status(200).send(model.userDetails);
};

var login = exports.login = function login(req, res) {
    var user = {
        name: req.body.name,
        password: req.body.password
    };
    var username = model.userDetails.filter(function (c) {
        return c.password === user.password;
    });
    if (username.length == 0) {
        res.status(400).send('no user by that name');
    } else {
        _jsonwebtoken2.default.sign({ user: user }, 'mysecretkey', function (err, token) {
            res.json({
                token: token,
                message: 'you successfully logged in'
            });
        });
    }
};