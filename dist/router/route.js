'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('../controller/controller');

var controller = _interopRequireWildcard(_controller);

var _verify = require('../verify/verify');

var _verify2 = _interopRequireDefault(_verify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/user', controller.postUser);
router.get('/users', _verify2.default, controller.getUser);
router.put('/userlog', controller.login);

exports.default = router;