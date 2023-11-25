"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inpudataresponden = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../../config");

var _dbService = require("../../db/db-service");

var _utils = require("../../utils");

var _global = require("./global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inpudataresponden = function inpudataresponden(token, data) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(simpdatasqllite(data));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.inpudataresponden = inpudataresponden;

var simpdatasqllite = function simpdatasqllite(data, dispatch) {
  var db, dataImages, storedTodoItems;
  return regeneratorRuntime.async(function simpdatasqllite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _dbService.getDBConnection)());

        case 2:
          db = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap((0, _dbService.createTable)(db));

        case 6:
          dataImages = 'dataimages';
          delete data.images;
          _context2.next = 10;
          return regeneratorRuntime.awrap((0, _dbService.saveTodoItems)(db, JSON.stringify(data), JSON.stringify(dataImages)));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap((0, _dbService.getTodoItems)(db));

        case 12:
          storedTodoItems = _context2.sent;
          console.log('datax', storedTodoItems.value); // dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
          // await deleteTodoItem(db, 0);
          // console.log('storedTodoItems', db);

          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](3);
          console.error('error save sqllite', _context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 16]]);
};