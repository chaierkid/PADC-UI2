define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/MT/channel/aboutUs'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuUJZva';
	this._flag_='a49883fcc1aff6efa697b93fd9c0ab41';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"a":{"define":"a","name":"a","relation":"a","type":"String"},"b":{"define":"b","name":"b","relation":"b","type":"String"},"c":{"define":"c","name":"c","relation":"c","type":"String"},"d":{"define":"d","name":"d","relation":"d","type":"String"},"e":{"define":"e","name":"e","relation":"e","type":"String"},"f":{"define":"f","name":"f","relation":"f","type":"String"},"g":{"define":"g","name":"g","relation":"g","type":"String"},"h":{"define":"h","name":"h","relation":"h","type":"String"},"i":{"define":"i","name":"i","relation":"i","type":"String"},"j":{"define":"j","name":"j","relation":"j","type":"String"},"k":{"define":"k","name":"k","relation":"k","type":"String"},"l":{"define":"l","name":"l","relation":"l","type":"String"},"m":{"define":"m","name":"m","relation":"m","type":"String"},"n":{"define":"n","name":"n","relation":"n","type":"String"},"o":{"define":"o","name":"o","relation":"o","type":"String"}},"directDelete":false,"events":{},"idColumn":"a","initData":"[{\"a\":\"GG-FC1-94-7010\",\"b\":\"DD-FC1-94061-3010,-3010/MX\",\"c\":\"2BEG1P,2BMM1P\",\"d\":\"1-*\"},{\"a\":\"GG-FC1-61-1174\",\"b\":\"DD-FC1-61021-0G2/ML\",\"c\":\"2P\",\"d\":\"29-9999\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});