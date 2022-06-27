// General types
export var PROP_TYPE_ANY = undefined;
export var PROP_TYPE_ARRAY = Array;
export var PROP_TYPE_BOOLEAN = Boolean;
export var PROP_TYPE_DATE = Date;
export var PROP_TYPE_FUNCTION = Function;
export var PROP_TYPE_NUMBER = Number;
export var PROP_TYPE_OBJECT = Object;
export var PROP_TYPE_REG_EXP = RegExp;
export var PROP_TYPE_STRING = String; // Multiple types

export var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
export var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
export var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
export var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
export var PROP_TYPE_BOOLEAN_NUMBER = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER];
export var PROP_TYPE_BOOLEAN_NUMBER_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING];
export var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
export var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
export var PROP_TYPE_FUNCTION_STRING = [PROP_TYPE_FUNCTION, PROP_TYPE_STRING];
export var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
export var PROP_TYPE_NUMBER_OBJECT_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
export var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
export var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];