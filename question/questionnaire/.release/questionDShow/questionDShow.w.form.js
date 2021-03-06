define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/questionnaire/questionDShow'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuaaqii';
	this._flag_='abcc1a409f3755bbdfddf60cfefa8260';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"code":{"define":"code","name":"code","relation":"code","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"code","initData":"[{\"code\":\"H01\",\"name\":\"东城区\"},{\"code\":\"H02\",\"name\":\"西城区\"},{\"code\":\"H03\",\"name\":\"海淀区\"},{\"code\":\"H04\",\"name\":\"朝阳区\"},{\"code\":\"H05\",\"name\":\"丰台区\"},{\"code\":\"H06\",\"name\":\"石景山区\"},{\"code\":\"H07\",\"name\":\"门头沟区\"},{\"code\":\"H08\",\"name\":\"房山区\"},{\"code\":\"H09\",\"name\":\"大兴区\"},{\"code\":\"H10\",\"name\":\"通州区\"},{\"code\":\"H11\",\"name\":\"顺义区\"},{\"code\":\"H12\",\"name\":\"怀柔区\"},{\"code\":\"H13\",\"name\":\"密云区\"},{\"code\":\"H14\",\"name\":\"平谷区\"},{\"code\":\"H15\",\"name\":\"延庆区\"},{\"code\":\"H16\",\"name\":\"昌平区\"}]","limit":20,"xid":"data1"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"EXPRESS","label":"选择","name":"calcCheckBox","relation":"EXPRESS","type":"Boolean"},"fArea":{"define":"fArea","label":"fArea","name":"fArea","relation":"fArea","type":"String"},"fContent":{"define":"fContent","label":"fContent","name":"fContent","relation":"fContent","type":"String"},"fCreateDate":{"define":"fCreateDate","label":"fCreateDate","name":"fCreateDate","relation":"fCreateDate","rules":{"datetime":true},"type":"DateTime"},"fCreator":{"define":"fCreator","label":"fCreator","name":"fCreator","relation":"fCreator","type":"String"},"fEditeDate":{"define":"fEditeDate","label":"fEditeDate","name":"fEditeDate","relation":"fEditeDate","rules":{"datetime":true},"type":"DateTime"},"fEditor":{"define":"fEditor","label":"fEditor","name":"fEditor","relation":"fEditor","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fPhoto":{"define":"fPhoto","label":"fPhoto","name":"fPhoto","relation":"fPhoto","type":"String"},"fPhotoTime":{"define":"fPhotoTime","label":"fPhotoTime","name":"fPhotoTime","relation":"fPhotoTime","rules":{"datetime":true},"type":"DateTime"},"fRealName":{"define":"fRealName","label":"fRealName","name":"fRealName","relation":"fRealName","type":"String"},"fStreet":{"define":"fStreet","label":"fStreet","name":"fStreet","relation":"fStreet","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":10,"queryAction":"queryTabquestiond","saveAction":"saveTabquestiond","tableName":"tabquestiond","url":"/question/question","xid":"tabquestion"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"name\":\"1、无照游商\"},{\"id\":\"2\",\"name\":\"2、占道经营\"},{\"id\":\"3\",\"name\":\"3、散发小广告\"},{\"id\":\"4\",\"name\":\"4、流浪乞讨\"},{\"id\":\"5\",\"name\":\"5、黑车营运\"},{\"id\":\"6\",\"name\":\"6、私搭乱建\"},{\"id\":\"7\",\"name\":\"7、违章停车\"},{\"id\":\"8\",\"name\":\"8、无人驾驶航空器飞行\"}]","limit":20,"xid":"check"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"content":{"define":"content","name":"content","relation":"content","type":"String"}},"directDelete":false,"events":{},"idColumn":"content","limit":20,"xid":"data3"});
}}); 
return __result;});