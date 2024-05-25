var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module.exports = Map;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/set.js
var require_set = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set2(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }
    module.exports = set2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// components/modal-test/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/modal-test/index.tsx
var modal_test_exports = {};
__export(modal_test_exports, {
  config: () => config3,
  designPattern: () => designPattern2,
  layout: () => layout4,
  logic: () => logic4,
  styleRules: () => styleRules3
});
import { createFunctionComponent as createFunctionComponent3, useLogic as useLogic3 } from "@polymita/renderer";

// components/button/index.tsx
var button_exports = {};
__export(button_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import {
  ACTIVE,
  HOVER,
  useLayout,
  useLogic
} from "@polymita/renderer";

// patterns/control-active.ts
import { matchPatternMatrix } from "@polymita/renderer";
import { action, dispose, signal } from "@polymita/signal";

// patterns/token.ts
var colors = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};

// patterns/control-active.ts
function blockPatternMatrix(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}

// components/button/index.tsx
import { jsx } from "@polymita/renderer/jsx-runtime";
var meta;
var logic = (props) => {
  return {
    count: 0
  };
};
var layout = (props) => {
  const logicResult = useLogic();
  return /* @__PURE__ */ jsx(
    "buttonBox",
    {
      className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
      "is-container": true,
      "has-decoration": true,
      "is-text": true,
      selected: false,
      disabled: props.disabled,
      onClick: (e) => {
        var _a;
        if (props.disabled)
          return;
        (_a = props.onClick) == null ? void 0 : _a.call(props, e);
      },
      children: /* @__PURE__ */ jsx(
        "span",
        {
          className: "block select-none",
          children: props.children
        }
      )
    }
  );
};
var designPatterns = (props) => {
  const logicResult = useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text]
        })
      ];
      break;
    case "link":
      return [
        entry,
        strokePatternMatrix({
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]]
        })
      ];
      break;
    default:
      return [
        entry,
        strokePatternMatrix({
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]]
        })
      ];
      break;
  }
};
var styleRules = (props, draft) => {
  const logic5 = useLogic();
  const layout5 = useLayout();
  return [];
};

// components/modal/index.tsx
var modal_exports = {};
__export(modal_exports, {
  config: () => config,
  designPattern: () => designPattern,
  layout: () => layout2,
  logic: () => logic2,
  styleRules: () => styleRules2
});
import { createFunctionComponent as createFunctionComponent2 } from "@polymita/renderer";

// ../../node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlined_default = CloseOutlined;

// ../../node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/helpers.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var defaultColors = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors;
    return renderAbstractNodeToSVGElement(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement(icond.icon, options);
}
function renderAbstractNodeToSVGElement(node, options) {
  var targetAttrs = node.tag === "svg" ? __assign(__assign({}, node.attrs), options.extraSVGAttrs || {}) : node.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token = key + '="' + value + '"';
    acc.push(token);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node.tag + attrsToken + ">" + children + "</" + node.tag + ">";
  }
  return "<" + node.tag + attrsToken + " />";
}

// icons/close.tsx
import { h as h2, createFunctionComponent } from "@polymita/renderer";
var CloseOutlinedSVGString = renderIconDefinitionToSVGElement(
  CloseOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap = {
  outlined: CloseOutlinedSVGString
};
var Icon = createFunctionComponent({
  layout: (props = {}) => {
    const style = {
      fontSize: (props.size || 16) + "px",
      color: props.color,
      display: "inline-block"
    };
    const cls = props.className;
    const html = styleMap[props.type || "outlined"];
    return h2("polymitaIcon", { _html: html, style, className: cls });
  }
});
var close_default = Icon;

// components/modal/index.tsx
import { jsx as jsx2, jsxs } from "@polymita/renderer/jsx-runtime";
var config = () => ({});
var logic2 = (props) => {
  return {};
};
var Button = createFunctionComponent2(button_exports);
var layout2 = (props) => {
  return /* @__PURE__ */ jsxs(
    "modalBox",
    {
      className: "block fixed z-50 left-0 top-0 w-full h-full",
      children: [
        /* @__PURE__ */ jsx2("modalMask", { onClick: props.onClose, className: "fixed top-0 left-0 w-full h-full opacity-70 bg-black" }),
        /* @__PURE__ */ jsxs(
          "modalBody",
          {
            className: "block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            style: { width: "520px" },
            children: [
              /* @__PURE__ */ jsx2("closeBox", { className: "block absolute top-4 right-4 cursor-pointer", onClick: props.onClose, children: /* @__PURE__ */ jsx2(close_default, { color: "rgba(0,0,0,.45)" }) }),
              /* @__PURE__ */ jsxs("modalContent", { className: "block p-4", style: { minHeight: "40px" }, children: [
                props.title ? /* @__PURE__ */ jsx2("contentTitle", { className: "block mb-4 font-medium", children: props.title }) : "",
                props.children
              ] }),
              /* @__PURE__ */ jsxs("footer", { className: "flex gap-2 p-4 flex-row-reverse", children: [
                /* @__PURE__ */ jsx2(Button, { type: "primary", onClick: (e) => {
                  var _a;
                  (_a = props.onOk) == null ? void 0 : _a.call(props, e);
                }, children: "\u786E\u5B9A" }),
                /* @__PURE__ */ jsx2(Button, { onClick: (e) => {
                  var _a, _b;
                  (_a = props.onCancel) == null ? void 0 : _a.call(props, e);
                  (_b = props.onClose) == null ? void 0 : _b.call(props, e);
                }, children: "\u53D6\u6D88" })
              ] })
            ]
          }
        )
      ]
    }
  );
};
var designPattern = (props) => {
};
var styleRules2 = (props) => {
};

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config2,
  designPatterns: () => designPatterns2,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta2,
  propTypes: () => propTypes
});
import { ACTIVE as ACTIVE2, FOCUS, HOVER as HOVER2, useLogic as useLogic2 } from "@polymita/renderer";
var import_set = __toESM(require_set());
var import_get = __toESM(require_get());
import { jsx as jsx3 } from "@polymita/renderer/jsx-runtime";
var meta2;
var propTypes = {};
var config2 = () => ({});
var logic3 = (props) => {
  function onFocus() {
    var _a;
    (_a = props.onFocus) == null ? void 0 : _a.call(props);
  }
  function onBlur() {
    var _a;
    (_a = props.onBlur) == null ? void 0 : _a.call(props);
  }
  return {
    onFocus,
    onBlur
  };
};
var layout3 = (props) => {
  const logic5 = useLogic2();
  const value = props["value-path"] ? (0, import_get.default)(props.value, props["value-path"]) : props.value;
  return /* @__PURE__ */ jsx3(
    "inputBox",
    {
      className: "block",
      children: /* @__PURE__ */ jsx3(
        "input",
        {
          placeholder: props.placeholder,
          "is-container": true,
          "has-decoration": true,
          "is-text": true,
          className: "block w-full select-none outline-none border-0 px-2 py-1 rounded",
          autoFocus: props.focused,
          onFocus: logic5.onFocus,
          onBlur: logic5.onBlur,
          type: props.type,
          disabled: props.disabled,
          value,
          onChange: (e) => {
            if (props["value-path"]) {
              const r = (0, import_set.default)(props.value, props["value-path"], e.target.value);
              props.onInput(__spreadValues({}, r));
            } else {
              props.onInput(e.target.value);
            }
          }
        }
      )
    }
  );
};
var designPatterns2 = (props) => {
  return [
    [HOVER2, ACTIVE2, FOCUS, "disabled"],
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[0], colors.primaries[1]]
    })
  ];
};

// components/modal-test/index.tsx
import { useState } from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "@polymita/renderer/jsx-runtime";
var config3 = () => ({});
var logic4 = (props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("-");
  return {
    visible,
    setVisible,
    name,
    setName
  };
};
var Button2 = createFunctionComponent3(button_exports);
var Modal = createFunctionComponent3(modal_exports);
var Input = createFunctionComponent3(input_exports);
var layout4 = (props) => {
  const { visible, name, setVisible, setName } = useLogic3();
  return /* @__PURE__ */ jsxs2("modalTest", { children: [
    /* @__PURE__ */ jsxs2(Button2, { onClick: () => {
      setVisible(true);
    }, children: [
      "\u663E\u793A ",
      name
    ] }),
    /* @__PURE__ */ jsx4("input", { value: name }),
    /* @__PURE__ */ jsx4(Input, { value: name, onInput: (v) => setName(v) }),
    visible ? /* @__PURE__ */ jsx4(Modal, { title: "\u6807\u9898", onClose: () => setVisible(false), children: /* @__PURE__ */ jsxs2("p", { children: [
      "name:",
      /* @__PURE__ */ jsx4(Input, { value: name, onInput: (v) => setName(v) }, "name")
    ] }) }) : ""
  ] });
};
var designPattern2 = (props) => {
};
var styleRules3 = (props) => {
};

// shared/render.ts
import { createRHRenderer } from "@polymita/renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render = RenderToReact(module);
  return (p) => {
    const content = render(p);
    return React.createElement(
      "div",
      { style: { margin: "20px", width: "50%", display: "block" } },
      content
    );
  };
}
function RenderToReact(module) {
  const renderer = createRHRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p) => {
    const r = renderer.construct(p);
    return renderer.render();
  };
}

// components/modal-test/demo.mdx
import { useState as useState2 } from "react";
var Component = RenderToReactWithWrap(modal_test_exports);
function Box() {
  const [s, setS] = useState2(0);
  return _jsxs("div", {
    children: [_jsxs("div", {
      children: [_jsxs("result-s", {
        children: ["r: ", s]
      }), _jsx("p", {
        children: _jsx("input", {
          className: "border",
          value: s,
          onChange: (e) => setS(e.target.value)
        })
      })]
    }), _jsxs(Component, {
      title: "My Modal",
      onClose: (v) => setShow(false),
      children: [_jsx("p", {
        children: " i am content row 1 "
      }), _jsx("p", {
        children: " i am content row 2 "
      })]
    })]
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "\u5185\u5D4C \u5F39\u6846"
    }), "\n", _jsx(_components.p, {
      children: "\u5185\u5D4C"
    }), "\n", _jsx(Box, {})]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var demo_default = MDXContent;
export {
  Box,
  Component,
  demo_default as default
};
