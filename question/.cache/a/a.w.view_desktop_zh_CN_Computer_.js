window.__justep.__ResourceEngine.loadCss([{url: '/v_1a321daa01ec4f898acc67dc952daa64l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_08147dd8c5fe48ecafe562afbeaae649l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ecc2544d80704b0981288e857fb2a11el_zh_CNs_desktopd_pc/system/core.min.js','/v_873ee97a65bb40ce9af92f71561b3310l_zh_CNs_desktopd_pc/system/common.min.js','/v_1189a5562f854982bab642e6ea3b97a7l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/a'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='crQV322';
	this._flag_='82a20d7f67fd90a38de88f5ed16551e5';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"EXPRESS","label":"选择","name":"calcCheckBox","relation":"EXPRESS","type":"Boolean"},"fEndSurevey":{"define":"fEndSurevey","label":"","name":"fEndSurevey","relation":"fEndSurevey","rules":{"datetime":true},"type":"DateTime"},"fHospitalCode":{"define":"fHospitalCode","label":"","name":"fHospitalCode","relation":"fHospitalCode","type":"String"},"fHospitalName":{"define":"fHospitalName","label":"","name":"fHospitalName","relation":"fHospitalName","type":"String"},"fQ1":{"define":"fQ1","label":"","name":"fQ1","relation":"fQ1","type":"String"},"fQ1_1_1":{"define":"fQ1_1_1","label":"","name":"fQ1_1_1","relation":"fQ1_1_1","type":"String"},"fQ1_1_1Ph":{"define":"fQ1_1_1Ph","label":"","name":"fQ1_1_1Ph","relation":"fQ1_1_1Ph","type":"String"},"fQ1_1_2":{"define":"fQ1_1_2","label":"","name":"fQ1_1_2","relation":"fQ1_1_2","type":"String"},"fQ1_1_2Ph":{"define":"fQ1_1_2Ph","label":"","name":"fQ1_1_2Ph","relation":"fQ1_1_2Ph","type":"String"},"fQ1_1_3":{"define":"fQ1_1_3","label":"","name":"fQ1_1_3","relation":"fQ1_1_3","type":"String"},"fQ1_1_3Ph":{"define":"fQ1_1_3Ph","label":"","name":"fQ1_1_3Ph","relation":"fQ1_1_3Ph","type":"String"},"fQ1_1_4":{"define":"fQ1_1_4","label":"","name":"fQ1_1_4","relation":"fQ1_1_4","type":"String"},"fQ1_1_4Context":{"define":"fQ1_1_4Context","label":"","name":"fQ1_1_4Context","relation":"fQ1_1_4Context","type":"String"},"fQ1_1_4Ph":{"define":"fQ1_1_4Ph","label":"","name":"fQ1_1_4Ph","relation":"fQ1_1_4Ph","type":"String"},"fQ2_1":{"define":"fQ2_1","label":"","name":"fQ2_1","relation":"fQ2_1","type":"String"},"fQ2_1Ph":{"define":"fQ2_1Ph","label":"","name":"fQ2_1Ph","relation":"fQ2_1Ph","type":"String"},"fQ2_2":{"define":"fQ2_2","label":"","name":"fQ2_2","relation":"fQ2_2","type":"String"},"fQ3_1":{"define":"fQ3_1","label":"","name":"fQ3_1","relation":"fQ3_1","type":"String"},"fQ3_1Ph":{"define":"fQ3_1Ph","label":"","name":"fQ3_1Ph","relation":"fQ3_1Ph","type":"String"},"fQ3_2":{"define":"fQ3_2","label":"","name":"fQ3_2","relation":"fQ3_2","type":"String"},"fQ4_1":{"define":"fQ4_1","label":"","name":"fQ4_1","relation":"fQ4_1","type":"String"},"fQ4_1Ph":{"define":"fQ4_1Ph","label":"","name":"fQ4_1Ph","relation":"fQ4_1Ph","type":"String"},"fQ4_2":{"define":"fQ4_2","label":"","name":"fQ4_2","relation":"fQ4_2","type":"String"},"fQ4_2Ph":{"define":"fQ4_2Ph","label":"","name":"fQ4_2Ph","relation":"fQ4_2Ph","type":"String"},"fQ4_3":{"define":"fQ4_3","label":"","name":"fQ4_3","relation":"fQ4_3","type":"String"},"fQ4_3Ph":{"define":"fQ4_3Ph","label":"","name":"fQ4_3Ph","relation":"fQ4_3Ph","type":"String"},"fQ4_4":{"define":"fQ4_4","label":"","name":"fQ4_4","relation":"fQ4_4","type":"String"},"fQ4_4Ph":{"define":"fQ4_4Ph","label":"","name":"fQ4_4Ph","relation":"fQ4_4Ph","type":"String"},"fQ4_5":{"define":"fQ4_5","label":"","name":"fQ4_5","relation":"fQ4_5","type":"String"},"fQ4_5Ph":{"define":"fQ4_5Ph","label":"","name":"fQ4_5Ph","relation":"fQ4_5Ph","type":"String"},"fQ5":{"define":"fQ5","label":"","name":"fQ5","relation":"fQ5","type":"String"},"fQ5_1_1GH_BL":{"define":"fQ5_1_1GH_BL","label":"","name":"fQ5_1_1GH_BL","relation":"fQ5_1_1GH_BL","type":"String"},"fQ5_1_1GH_Context":{"define":"fQ5_1_1GH_Context","label":"","name":"fQ5_1_1GH_Context","relation":"fQ5_1_1GH_Context","type":"String"},"fQ5_1_1GH_GH":{"define":"fQ5_1_1GH_GH","label":"","name":"fQ5_1_1GH_GH","relation":"fQ5_1_1GH_GH","type":"String"},"fQ5_1_1GH_PJ":{"define":"fQ5_1_1GH_PJ","label":"","name":"fQ5_1_1GH_PJ","relation":"fQ5_1_1GH_PJ","type":"String"},"fQ5_1_1GH_QT":{"define":"fQ5_1_1GH_QT","label":"","name":"fQ5_1_1GH_QT","relation":"fQ5_1_1GH_QT","type":"String"},"fQ5_1_1Height":{"define":"fQ5_1_1Height","label":"","name":"fQ5_1_1Height","relation":"fQ5_1_1Height","type":"String"},"fQ5_1_1MZ_BL":{"define":"fQ5_1_1MZ_BL","label":"","name":"fQ5_1_1MZ_BL","relation":"fQ5_1_1MZ_BL","type":"String"},"fQ5_1_1MZ_Context":{"define":"fQ5_1_1MZ_Context","label":"","name":"fQ5_1_1MZ_Context","relation":"fQ5_1_1MZ_Context","type":"String"},"fQ5_1_1MZ_GH":{"define":"fQ5_1_1MZ_GH","label":"","name":"fQ5_1_1MZ_GH","relation":"fQ5_1_1MZ_GH","type":"String"},"fQ5_1_1MZ_PJ":{"define":"fQ5_1_1MZ_PJ","label":"","name":"fQ5_1_1MZ_PJ","relation":"fQ5_1_1MZ_PJ","type":"String"},"fQ5_1_1MZ_QT":{"define":"fQ5_1_1MZ_QT","label":"","name":"fQ5_1_1MZ_QT","relation":"fQ5_1_1MZ_QT","type":"String"},"fQ5_1_1Pro":{"define":"fQ5_1_1Pro","label":"","name":"fQ5_1_1Pro","relation":"fQ5_1_1Pro","type":"String"},"fQ5_1_1Sex":{"define":"fQ5_1_1Sex","label":"","name":"fQ5_1_1Sex","relation":"fQ5_1_1Sex","type":"String"},"fQ5_1_1Size":{"define":"fQ5_1_1Size","label":"","name":"fQ5_1_1Size","relation":"fQ5_1_1Size","type":"String"},"fQ5_1_1Time":{"define":"fQ5_1_1Time","label":"","name":"fQ5_1_1Time","relation":"fQ5_1_1Time","rules":{"datetime":true},"type":"DateTime"},"fQ5_1_1Video":{"define":"fQ5_1_1Video","label":"","name":"fQ5_1_1Video","relation":"fQ5_1_1Video","type":"String"},"fQ5_1_1YN_BL":{"define":"fQ5_1_1YN_BL","label":"","name":"fQ5_1_1YN_BL","relation":"fQ5_1_1YN_BL","type":"String"},"fQ5_1_1YN_Context":{"define":"fQ5_1_1YN_Context","label":"","name":"fQ5_1_1YN_Context","relation":"fQ5_1_1YN_Context","type":"String"},"fQ5_1_1YN_GH":{"define":"fQ5_1_1YN_GH","label":"","name":"fQ5_1_1YN_GH","relation":"fQ5_1_1YN_GH","type":"String"},"fQ5_1_1YN_PJ":{"define":"fQ5_1_1YN_PJ","label":"","name":"fQ5_1_1YN_PJ","relation":"fQ5_1_1YN_PJ","type":"String"},"fQ5_1_1YN_QT":{"define":"fQ5_1_1YN_QT","label":"","name":"fQ5_1_1YN_QT","relation":"fQ5_1_1YN_QT","type":"String"},"fQ5_1_1ZL_BL":{"define":"fQ5_1_1ZL_BL","label":"","name":"fQ5_1_1ZL_BL","relation":"fQ5_1_1ZL_BL","type":"String"},"fQ5_1_1ZL_Context":{"define":"fQ5_1_1ZL_Context","label":"","name":"fQ5_1_1ZL_Context","relation":"fQ5_1_1ZL_Context","type":"String"},"fQ5_1_1ZL_GH":{"define":"fQ5_1_1ZL_GH","label":"","name":"fQ5_1_1ZL_GH","relation":"fQ5_1_1ZL_GH","type":"String"},"fQ5_1_1ZL_PJ":{"define":"fQ5_1_1ZL_PJ","label":"","name":"fQ5_1_1ZL_PJ","relation":"fQ5_1_1ZL_PJ","type":"String"},"fQ5_1_1ZL_QT":{"define":"fQ5_1_1ZL_QT","label":"","name":"fQ5_1_1ZL_QT","relation":"fQ5_1_1ZL_QT","type":"String"},"fQ5_1_1features":{"define":"fQ5_1_1features","label":"","name":"fQ5_1_1features","relation":"fQ5_1_1features","type":"String"},"fQ5_1_2GH_BL":{"define":"fQ5_1_2GH_BL","label":"","name":"fQ5_1_2GH_BL","relation":"fQ5_1_2GH_BL","type":"String"},"fQ5_1_2GH_GH":{"define":"fQ5_1_2GH_GH","label":"","name":"fQ5_1_2GH_GH","relation":"fQ5_1_2GH_GH","type":"String"},"fQ5_1_2GH_PJ":{"define":"fQ5_1_2GH_PJ","label":"","name":"fQ5_1_2GH_PJ","relation":"fQ5_1_2GH_PJ","type":"String"},"fQ5_1_2GH_QT":{"define":"fQ5_1_2GH_QT","label":"","name":"fQ5_1_2GH_QT","relation":"fQ5_1_2GH_QT","type":"String"},"fQ5_1_2Height":{"define":"fQ5_1_2Height","label":"","name":"fQ5_1_2Height","relation":"fQ5_1_2Height","type":"String"},"fQ5_1_2MZ_BL":{"define":"fQ5_1_2MZ_BL","label":"","name":"fQ5_1_2MZ_BL","relation":"fQ5_1_2MZ_BL","type":"String"},"fQ5_1_2MZ_Context":{"define":"fQ5_1_2MZ_Context","label":"","name":"fQ5_1_2MZ_Context","relation":"fQ5_1_2MZ_Context","type":"String"},"fQ5_1_2MZ_GH":{"define":"fQ5_1_2MZ_GH","label":"","name":"fQ5_1_2MZ_GH","relation":"fQ5_1_2MZ_GH","type":"String"},"fQ5_1_2MZ_PJ":{"define":"fQ5_1_2MZ_PJ","label":"","name":"fQ5_1_2MZ_PJ","relation":"fQ5_1_2MZ_PJ","type":"String"},"fQ5_1_2MZ_QT":{"define":"fQ5_1_2MZ_QT","label":"","name":"fQ5_1_2MZ_QT","relation":"fQ5_1_2MZ_QT","type":"String"},"fQ5_1_2Pro":{"define":"fQ5_1_2Pro","label":"","name":"fQ5_1_2Pro","relation":"fQ5_1_2Pro","type":"String"},"fQ5_1_2Sex":{"define":"fQ5_1_2Sex","label":"","name":"fQ5_1_2Sex","relation":"fQ5_1_2Sex","type":"String"},"fQ5_1_2Size":{"define":"fQ5_1_2Size","label":"","name":"fQ5_1_2Size","relation":"fQ5_1_2Size","type":"String"},"fQ5_1_2Time":{"define":"fQ5_1_2Time","label":"","name":"fQ5_1_2Time","relation":"fQ5_1_2Time","rules":{"datetime":true},"type":"DateTime"},"fQ5_1_2Video":{"define":"fQ5_1_2Video","label":"","name":"fQ5_1_2Video","relation":"fQ5_1_2Video","type":"String"},"fQ5_1_2YN_BL":{"define":"fQ5_1_2YN_BL","label":"","name":"fQ5_1_2YN_BL","relation":"fQ5_1_2YN_BL","type":"String"},"fQ5_1_2YN_Context":{"define":"fQ5_1_2YN_Context","label":"","name":"fQ5_1_2YN_Context","relation":"fQ5_1_2YN_Context","type":"String"},"fQ5_1_2YN_GH":{"define":"fQ5_1_2YN_GH","label":"","name":"fQ5_1_2YN_GH","relation":"fQ5_1_2YN_GH","type":"String"},"fQ5_1_2YN_PJ":{"define":"fQ5_1_2YN_PJ","label":"","name":"fQ5_1_2YN_PJ","relation":"fQ5_1_2YN_PJ","type":"String"},"fQ5_1_2YN_QT":{"define":"fQ5_1_2YN_QT","label":"","name":"fQ5_1_2YN_QT","relation":"fQ5_1_2YN_QT","type":"String"},"fQ5_1_2ZL_BL":{"define":"fQ5_1_2ZL_BL","label":"","name":"fQ5_1_2ZL_BL","relation":"fQ5_1_2ZL_BL","type":"String"},"fQ5_1_2ZL_Context":{"define":"fQ5_1_2ZL_Context","label":"","name":"fQ5_1_2ZL_Context","relation":"fQ5_1_2ZL_Context","type":"String"},"fQ5_1_2ZL_GH":{"define":"fQ5_1_2ZL_GH","label":"","name":"fQ5_1_2ZL_GH","relation":"fQ5_1_2ZL_GH","type":"String"},"fQ5_1_2ZL_PJ":{"define":"fQ5_1_2ZL_PJ","label":"","name":"fQ5_1_2ZL_PJ","relation":"fQ5_1_2ZL_PJ","type":"String"},"fQ5_1_2ZL_QT":{"define":"fQ5_1_2ZL_QT","label":"","name":"fQ5_1_2ZL_QT","relation":"fQ5_1_2ZL_QT","type":"String"},"fQ5_1_2features":{"define":"fQ5_1_2features","label":"","name":"fQ5_1_2features","relation":"fQ5_1_2features","type":"String"},"fQ5_1_GH_Context":{"define":"fQ5_1_GH_Context","label":"","name":"fQ5_1_GH_Context","relation":"fQ5_1_GH_Context","type":"String"},"fQ6":{"define":"fQ6","label":"","name":"fQ6","relation":"fQ6","type":"String"},"fQ6_1_1":{"define":"fQ6_1_1","label":"","name":"fQ6_1_1","relation":"fQ6_1_1","type":"String"},"fQ6_1_1Video":{"define":"fQ6_1_1Video","label":"","name":"fQ6_1_1Video","relation":"fQ6_1_1Video","type":"String"},"fQ6_1_2":{"define":"fQ6_1_2","label":"","name":"fQ6_1_2","relation":"fQ6_1_2","type":"String"},"fQ6_1_2Video":{"define":"fQ6_1_2Video","label":"","name":"fQ6_1_2Video","relation":"fQ6_1_2Video","type":"String"},"fQ6_1_3":{"define":"fQ6_1_3","label":"","name":"fQ6_1_3","relation":"fQ6_1_3","type":"String"},"fQ6_1_3Video":{"define":"fQ6_1_3Video","label":"","name":"fQ6_1_3Video","relation":"fQ6_1_3Video","type":"String"},"fQ6_1_4":{"define":"fQ6_1_4","label":"","name":"fQ6_1_4","relation":"fQ6_1_4","type":"String"},"fQ6_1_4Context":{"define":"fQ6_1_4Context","label":"","name":"fQ6_1_4Context","relation":"fQ6_1_4Context","type":"String"},"fQ6_1_4Video":{"define":"fQ6_1_4Video","label":"","name":"fQ6_1_4Video","relation":"fQ6_1_4Video","type":"String"},"fQ6_1_5":{"define":"fQ6_1_5","label":"","name":"fQ6_1_5","relation":"fQ6_1_5","type":"String"},"fQ6_1_5Context":{"define":"fQ6_1_5Context","label":"","name":"fQ6_1_5Context","relation":"fQ6_1_5Context","type":"String"},"fQ6_1_5Video":{"define":"fQ6_1_5Video","label":"","name":"fQ6_1_5Video","relation":"fQ6_1_5Video","type":"String"},"fStareSurevey":{"define":"fStareSurevey","label":"","name":"fStareSurevey","relation":"fStareSurevey","rules":{"datetime":true},"type":"DateTime"},"fSurveydate":{"define":"fSurveydate","label":"","name":"fSurveydate","relation":"fSurveydate","rules":{"date":true},"type":"Date"},"fUserName":{"define":"fUserName","label":"","name":"fUserName","relation":"fUserName","type":"String"}},"directDelete":true,"events":{},"filters":{"filter0":"tabquestion.tabIsDelete = 0"},"idColumn":"fId","limit":10,"queryAction":"queryTabquestion","saveAction":"saveTabquestion","tableName":"tabquestion","url":"/question/question","xid":"mainData"});
}}); 
return __result;});
