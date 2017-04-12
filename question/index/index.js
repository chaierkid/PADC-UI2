define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
 	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
 	require("$UI/question/index/appVersionChecker");

	var Model = function() {
		this.callParent();
		this.userName=null;
		this.userType = null;
		this.openType = null;
		this.shellImpl = new ShellImpl(this, {
			contentsXid : "pages",
			wingXid : "wing",
			pageMappings : {
				"AQDCindex":{
					url : require.toUrl('./AQDCindex.w')
				},
				"login":{
					url : require.toUrl('./login.w')
				},
				"main":{
					url : require.toUrl('./main.w')
				},
				"mainActivity":{
					url : require.toUrl('./mainActivity.w')
				},
				"selfreadlist":{
					url : require.toUrl('./selfreadlist.w')
				},
				"selfread":{
					url : require.toUrl('./selfread.w')
				},
				"Allreadlist":{
					url : require.toUrl('./Allreadlist.w')
				},
				"about":{
					url : require.toUrl('./about.w')
				},
				"case":{
					url : require.toUrl('./case.w')
				},
				"person":{
					url : require.toUrl('./person.w')
				},
				"question":{
					url : require.toUrl('../questionnaire/question.w')
				},
				"questionABCD":{
					url : require.toUrl('../questionnaire/questionABCD.w')
				},
				"questionManager":{
					url : require.toUrl('../questionnaire/questionManager.w')
				},
				"questionA":{
					url : require.toUrl('../questionnaire/questionA.w')
				},
				"questionAShow":{
					url : require.toUrl('../questionnaire/questionAShow.w')
				},
				"questionBManager":{
					url : require.toUrl('../questionnaire/questionBManager.w')
				},
				"questionB":{
					url : require.toUrl('../questionnaire/questionB.w')
				},
				"questionBShow":{
					url : require.toUrl('../questionnaire/questionBShow.w')
				},
				"questionCManager":{
					url : require.toUrl('../questionnaire/questionCManager.w')
				},
				"questionC":{
					url : require.toUrl('../questionnaire/questionC.w')
				},
				"questionCShow":{
					url : require.toUrl('../questionnaire/questionCShow.w')
				},
				"questionDManager":{
					url : require.toUrl('../questionnaire/questionDManager.w')
				},
				"questionD":{
					url : require.toUrl('../questionnaire/questionD.w')
				},
				"questionDShow":{
					url : require.toUrl('../questionnaire/questionDShow.w') 
				},
				"questionEManager":{
					url : require.toUrl('../questionnaire/questionEManager.w')
				},
				"questionE":{
					url : require.toUrl('../questionnaire/questionE.w')
				},
				"questionEShow":{
					url : require.toUrl('../questionnaire/questionEShow.w')
				},
				"statisticsList":{
					url : require.toUrl('../questionStatistics/statisticsList.w')
				},
				"questionStatistics":{
					url : require.toUrl('../questionStatistics/echarts/questionStatistics.w')
				},
				"reportStatistics":{
					url : require.toUrl('../questionStatistics/statisticsReport.w')
				},
				"showImage":{
					url : require.toUrl('../forImage/showImage.w')
				},
				"everydayList":{
					url : require.toUrl('../everyday/everydayQuestion.w')
				}
			}
		});
	};
 
	return Model;
});