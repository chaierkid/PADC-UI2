window.__justep.__ResourceEngine.loadCss([{url: '/v_ae378a4d7ab1480f9761516b873ddaf8l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_1a0d9ab11284433496d35100ecc9a385l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a88fb947d6034b3a893d7cda09170c64l_zh_CNs_d_m/system/components/comp2.min.js','/v_d142538901cc492c93b6e829c58ce0cbl_zh_CNs_d_m/system/core.min.js','/v_e41597c966884aa8944f5a032bdbc489l_zh_CNs_d_m/system/common.min.js','/v_19d4be07ac6740e0be5069be64133902l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/question/questionnaire/questionBShow'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='czAfQrq';
	this._flag_='0d36c993a94d8d23a218a93e489e9571';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"code":{"define":"code","name":"code","relation":"code","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"code","initData":"[{\"code\":\"H01\",\"name\":\"东城区\"},{\"code\":\"H02\",\"name\":\"西城区\"},{\"code\":\"H03\",\"name\":\"海淀区\"},{\"code\":\"H04\",\"name\":\"朝阳区\"},{\"code\":\"H05\",\"name\":\"丰台区\"},{\"code\":\"H06\",\"name\":\"石景山区\"},{\"code\":\"H07\",\"name\":\"门头沟区\"},{\"code\":\"H08\",\"name\":\"房山区\"},{\"code\":\"H09\",\"name\":\"大兴区\"},{\"code\":\"H10\",\"name\":\"通州区\"},{\"code\":\"H11\",\"name\":\"顺义区\"},{\"code\":\"H12\",\"name\":\"怀柔区\"},{\"code\":\"H13\",\"name\":\"密云区\"},{\"code\":\"H14\",\"name\":\"平谷区\"},{\"code\":\"H15\",\"name\":\"延庆区\"},{\"code\":\"H16\",\"name\":\"昌平区\"}]","limit":20,"xid":"data1"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"EXPRESS","label":"选择","name":"calcCheckBox","relation":"EXPRESS","type":"Boolean"},"fArea":{"define":"fArea","label":"fArea","name":"fArea","relation":"fArea","type":"String"},"fCreateDate":{"define":"fCreateDate","label":"fCreateDate","name":"fCreateDate","relation":"fCreateDate","rules":{"datetime":true},"type":"DateTime"},"fCreator":{"define":"fCreator","label":"fCreator","name":"fCreator","relation":"fCreator","type":"String"},"fEditeDate":{"define":"fEditeDate","label":"fEditeDate","name":"fEditeDate","relation":"fEditeDate","rules":{"datetime":true},"type":"DateTime"},"fEditor":{"define":"fEditor","label":"fEditor","name":"fEditor","relation":"fEditor","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fMathArea":{"define":"fMathArea","label":"fMathArea","name":"fMathArea","relation":"fMathArea","type":"String"},"fPContent":{"define":"fPContent","label":"fPContent","name":"fPContent","relation":"fPContent","type":"String"},"fPhoto":{"define":"fPhoto","label":"fPhoto","name":"fPhoto","relation":"fPhoto","type":"String"},"fPhotoTime":{"define":"fPhotoTime","label":"fPhotoTime","name":"fPhotoTime","relation":"fPhotoTime","rules":{"datetime":true},"type":"DateTime"},"fPolice":{"define":"fPolice","label":"fPolice","name":"fPolice","relation":"fPolice","type":"String"},"fPoliceCar":{"define":"fPoliceCar","label":"fPoliceCar","name":"fPoliceCar","relation":"fPoliceCar","type":"String"},"fPoliceDuty":{"define":"fPoliceDuty","label":"fPoliceDuty","name":"fPoliceDuty","relation":"fPoliceDuty","type":"String"},"fStatus":{"define":"fStatus","label":"fStatus","name":"fStatus","relation":"fStatus","type":"String"},"fStatus2":{"define":"fStatus2","label":"fStatus2","name":"fStatus2","relation":"fStatus2","type":"String"},"fStatus3":{"define":"fStatus3","label":"fStatus3","name":"fStatus3","relation":"fStatus3","type":"String"},"fStreet":{"define":"fStreet","label":"fStreet","name":"fStreet","relation":"fStreet","type":"String"},"fVContent":{"define":"fVContent","label":"fVContent","name":"fVContent","relation":"fVContent","type":"String"},"fVolunteer":{"define":"fVolunteer","label":"fVolunteer","name":"fVolunteer","relation":"fVolunteer","type":"String"},"fVolunteerDuty":{"define":"fVolunteerDuty","label":"fVolunteerDuty","name":"fVolunteerDuty","relation":"fVolunteerDuty","type":"String"},"fVolunteerStreet":{"define":"fVolunteerStreet","label":"fVolunteerStreet","name":"fVolunteerStreet","relation":"fVolunteerStreet","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":10,"queryAction":"queryTabquestionb","saveAction":"saveTabquestionb","tableName":"tabquestionb","url":"/question/question","xid":"tabquestion"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"name\":\"1、无照游商\"},{\"id\":\"2\",\"name\":\"2、占道经营\"},{\"id\":\"3\",\"name\":\"3、散发小广告\"},{\"id\":\"4\",\"name\":\"4、流浪乞讨\"},{\"id\":\"5\",\"name\":\"5、黑车营运\"},{\"id\":\"6\",\"name\":\"6、私搭乱建\"},{\"id\":\"7\",\"name\":\"7、违章停车\"},{\"id\":\"8\",\"name\":\"8、无人驾驶航空器飞行\"}]","limit":20,"xid":"check"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"content":{"define":"content","name":"content","relation":"content","type":"String"}},"directDelete":false,"events":{},"idColumn":"content","limit":20,"xid":"data3"});
}}); 
return __result;});