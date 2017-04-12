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
var __parent0=require('$model/UI2/MT/channel/cases'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMNZZZb';
	this._flag_='5857804f51bdc867bed9ba9403a0b1b3';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","rules":{"number":true},"type":"Float"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\",\"title\":\"黑橄榄至尊披萨\",\"price\":85},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\",\"title\":\"法式奶油焗薯蓉\",\"price\":63},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\",\"title\":\"意大利培根芝士\",\"price\":52},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\",\"title\":\"英式提拉米苏\",\"price\":33},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\",\"title\":\"白灼芥兰\",\"price\":25},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\",\"title\":\"高性能防水...\",\"price\":36},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\",\"title\":\"双卡双待入门...\",\"price\":70},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\",\"title\":\"iOS 7.1新增...\",\"price\":55},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\",\"title\":\"1299之争 小...\",\"price\":100}]","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"a":{"define":"a","name":"a","relation":"a","type":"String"},"b":{"define":"b","name":"b","relation":"b","type":"String"},"c":{"define":"c","name":"c","relation":"c","type":"String"},"d":{"define":"d","name":"d","relation":"d","type":"String"},"e":{"define":"e","name":"e","relation":"e","type":"String"},"f":{"define":"f","name":"f","relation":"f","type":"String"},"g":{"define":"g","name":"g","relation":"g","type":"String"},"h":{"define":"h","name":"h","relation":"h","type":"String"},"i":{"define":"i","name":"i","relation":"i","type":"String"},"j":{"define":"j","name":"j","relation":"j","type":"String"},"k":{"define":"k","name":"k","relation":"k","type":"String"},"l":{"define":"l","name":"l","relation":"l","type":"String"},"m":{"define":"m","name":"m","relation":"m","type":"String"},"n":{"define":"n","name":"n","relation":"n","type":"String"},"o":{"define":"o","name":"o","relation":"o","type":"String"}},"directDelete":false,"events":{},"idColumn":"a","initData":"[{\"a\":\"GG-FC1-94-7010\",\"b\":\"DD-FC1-94061-3010,-3010/MX\",\"c\":\"2BEG1P,2BMM1P\",\"d\":\"1-*\"},{\"a\":\"GG-FC1-61-1174\",\"b\":\"DD-FC1-61021-0G2/ML\",\"c\":\"2P\",\"d\":\"29-9999\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});