"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerReducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initStateRegister = {
  username: '',
  nama: '',
  password: '',
  hp: '',
  umur: '',
  jenisKelamin: '',
  koordinator: '',
  alamat: '',
  nama_kota: '',
  kota: '',
  nama_kecamatan: '',
  kecamatan: '',
  nama_desa: '',
  desa: '',
  nik: ''
};

var registerReducer = function registerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initStateRegister;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.type === 'SET_REGISTER') return _objectSpread({}, state, {
    username: action.value.username,
    nama: action.value.nama,
    password: action.value.password,
    hp: action.value.hp,
    jenisKelamin: action.value.jenisKelamin,
    koordinator: action.value.koordinator,
    umur: action.value.umur
  });
  if (action.type === 'SET_ADDRESS') return _objectSpread({}, state, {
    nama_kota: action.value.nama_kota,
    kota: action.value.kota,
    nama_kecamatan: action.value.nama_kecamatan,
    kecamatan: action.value.kecamatan,
    nama_desa: action.value.nama_desa,
    desa: action.value.desa
  });
  if (action.type === 'SET_KOTA') return _objectSpread({}, state, {
    nama_kota: action.value.split('#')[1],
    kota: action.value.split('#')[0]
  });
  if (action.type === 'SET_KECAMATAN') return _objectSpread({}, state, {
    nama_kecamatan: action.value.split('#')[1],
    kecamatan: action.value.split('#')[0]
  });
  if (action.type === 'SET_DESA') return _objectSpread({}, state, {
    nama_desa: action.value.split('#')[1],
    desa: action.value.split('#')[0]
  });
  if (action.type === 'SET_ALAMAT') return _objectSpread({}, state, {
    alamat: action.value.alamat
  });
  if (action.type === 'SET_NIK') return _objectSpread({}, state, {
    nik: action.value.nik
  });
  return state;
};

exports.registerReducer = registerReducer;