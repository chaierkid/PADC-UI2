define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/misc/bind/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caEBJvm';
	this._flag_='8b46999ff5855a4e40f62a686c72ee69';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"enabledFoodCount":{"define":"enabledFoodCount","label":"启用的菜品数","name":"enabledFoodCount","relation":"enabledFoodCount","rules":{"calculate":"$model.comp('foodData').count(function(e){return e.row.val('fStatus') == 1;})"},"type":"String"},"foodCount":{"define":"foodCount","label":"菜品总数","name":"foodCount","relation":"foodCount","rules":{"calculate":"$model.comp('foodData').count()"},"type":"String"},"foodDataReadonly":{"define":"foodDataReadonly","label":"菜品数据集是否只读","name":"foodDataReadonly","relation":"foodDataReadonly","type":"Boolean"}},"directDelete":false,"events":{},"idColumn":"foodCount","limit":20,"xid":"tempData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcPriceText":{"define":"calcPriceText","label":"价格","name":"calcPriceText","relation":"calcPriceText","rules":{"calculate":"$row.val('fPrice') ? '¥ ' + $row.val('fPrice') + '元' : ''"},"type":"String"},"calcStatusText":{"define":"calcStatusText","label":"状态","name":"calcStatusText","relation":"calcStatusText","rules":{"calculate":"val('fStatus') == 1 ? '启用' : '禁用'"},"type":"String"},"fDate":{"define":"fDate","label":"日期","name":"fDate","relation":"fDate","rules":{"constraint":{"message":"日期不能大于2020年","params":{"expr":"!$val || $val < '2020-01-01'"}},"date":true,"readonly":"$row.val(\"fPrice\") >30"},"type":"Date"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"图片","name":"fImage","relation":"fImage","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","rules":{"number":true,"required":{"message":"价格是必填的","params":{"expr":"true"}}},"type":"Float"},"fStatus":{"define":"fStatus","label":"状态","name":"fStatus","relation":"fStatus","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"001\",\"fName\":\"老北京炸酱面\",\"fPrice\":20,\"fDescription\":\"苏格兰打卤面，大杯可乐\",\"fImage\":\"1.jpg\",\"fStatus\":\"1\"},{\"fID\":\"002\",\"fName\":\"宫爆鸡丁\",\"fPrice\":25,\"fDescription\":\"宫爆鸡丁一份，两碗米饭，蛋花汤\",\"fImage\":\"2.jpg\",\"fStatus\":\"0\"},{\"fID\":\"003\",\"fName\":\"剁椒鱼头套餐\",\"fPrice\":36,\"fDescription\":\"剁椒鱼头，白菜豆腐汤，四碗面条，可口凉菜\",\"fImage\":\"3.jpg\",\"fStatus\":\"1\"},{\"fID\":\"004\",\"fName\":\"老北京烤鸭套餐\",\"fPrice\":45,\"fDescription\":\"北京烤鸭，四碗米饭，大杯可乐四桶，鸡蛋汤\",\"fImage\":\"4.jpg\",\"fStatus\":\"0\"},{\"fID\":\"005\",\"fName\":\"土豆炖牛肉套餐\",\"fPrice\":35,\"fDescription\":\"土豆炖牛肉一份，米饭四碗，可口可乐，凉菜\",\"fImage\":\"5.jpg\",\"fStatus\":\"1\"}]","limit":20,"readonly":"$model.tempData.val('foodDataReadonly')","xid":"foodData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"code":{"define":"code","label":"code","name":"code","relation":"code","type":"String"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"code","initData":"[{\"code\":\"1\",\"name\":\"启用\"},{\"code\":\"0\",\"name\":\"禁用\"}]","limit":20,"xid":"statusData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});