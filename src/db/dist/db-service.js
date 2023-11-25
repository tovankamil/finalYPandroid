"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteTable = exports.deleteTodoItem = exports.saveTodoItems = exports.getTodoItems = exports.createTable = exports.getDBConnection = void 0;
var react_native_sqlite_storage_1 = require("react-native-sqlite-storage");
var tableName = 'Respondens';
react_native_sqlite_storage_1.enablePromise(true);
exports.getDBConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // return openDatabase({name: 'todo-datalocal.db', location: 'default'});
        try {
            return [2 /*return*/, react_native_sqlite_storage_1.openDatabase({
                    name: 'yp.db',
                    location: 'default',
                    createfromlocation: 'yp.db'
                }, function () {
                    // Success callback
                    console.log('Database opened successfully.');
                }, function (error) {
                    // Error callback
                    console.error('Failed to open database:', error);
                })];
        }
        catch (error) {
            throw Error('Failed openDatabase !!!');
        }
        return [2 /*return*/];
    });
}); };
exports.createTable = function (db) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // create table if not exists
        // db.transaction(tx => {
        //   tx.executeSql(
        //     'DROP TABLE Respondens',
        //     [],
        //     (_, result) => {
        //       // console.log('Table created successfully');
        //     },
        //     (_, error) => {
        //       // console.log('Error creating table:', error);
        //     },
        //   );
        // });
        try {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Respondens (id INTEGER PRIMARY KEY AUTOINCREMENT, value BLOB,image BLOB)', [], function (_, result) {
                    console.log('Table created successfully');
                }, function (_, error) {
                    console.log('Error creating table:', error);
                });
            });
        }
        catch (error) {
            throw Error('Failed create table !!!', error);
        }
        return [2 /*return*/];
    });
}); };
exports.getTodoItems = function (db) { return __awaiter(void 0, void 0, Promise, function () {
    var todoItems_1, results, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                todoItems_1 = [];
                return [4 /*yield*/, db.executeSql("SELECT * FROM " + tableName)];
            case 1:
                results = _a.sent();
                results.forEach(function (result) {
                    for (var index = 0; index < result.rows.length; index++) {
                        // console.log('result.rows.item(index)', result.rows.item(index));
                        todoItems_1.push(result.rows.item(index));
                    }
                });
                return [2 /*return*/, todoItems_1];
            case 2:
                error_1 = _a.sent();
                throw Error('Failed to get todoItems', error_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.saveTodoItems = function (db, todoItems, images) { return __awaiter(void 0, void 0, void 0, function () {
    var insertQuery;
    return __generator(this, function (_a) {
        insertQuery = "insert into " + tableName + " (value,image) values('" + todoItems + "','" + images + "')";
        // `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
        // todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');
        return [2 /*return*/, db.executeSql(insertQuery)];
    });
}); };
exports.deleteTodoItem = function (db, id) { return __awaiter(void 0, void 0, void 0, function () {
    var deleteQuery;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('delete', id);
                deleteQuery = "DELETE from " + tableName;
                return [4 /*yield*/, db.executeSql(deleteQuery)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteTable = function (db) { return __awaiter(void 0, void 0, void 0, function () {
    var query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = "drop table " + tableName;
                return [4 /*yield*/, db.executeSql(query)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
