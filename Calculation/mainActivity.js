define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		var data = this.comp("data1");
		var weixing = data.getValue("weixing");
		var jingdu = data.getValue("jingdu");
		var jingfen = data.getValue("jingfen");
		var jingmiao = data.getValue("jingmiao");
		var weidu = data.getValue("weidu");
		var weifen = data.getValue("weifen");
		var weimiao = data.getValue("weimiao");
		
		var jing = jingdu+(jingfen/60)+(jingmiao/60/60);
		var wei = weidu+weifen/60+weimiao/60/60;
		//alert(Math.round(Math.tan(Math.PI*45/180)*1000000)/1000000);
		var cos2 = (Math.round(Math.cos(Math.PI*wei/180)*1000000)/1000000)*(Math.round(Math.cos(Math.PI*(weixing-jing)/180)*1000000)/1000000);
		var fenzi = cos2-6317/(6371+35786);
		var pingfang = Math.sqrt(1-Math.pow(cos2,2));
		var value = Math.abs(Math.atan(fenzi/pingfang)*180/Math.PI);
		var v1 = Math.floor(value);//度  
        var v2 = Math.floor((value - v1) * 60);//分  
        var v3 = Math.round((value - v1) * 3600 % 60);//秒  
        this.comp("output1").set({value:v1 + '°' + v2 + '\'' + v3 + '"'});
        
        
		var tan2 = (Math.round(Math.tan(Math.PI*(weixing-jing)/180)*1000000)/1000000);
		var sin2 = (Math.round(Math.sin(Math.PI*wei/180)*1000000)/1000000);
		
		value = Math.abs(Math.atan(tan2/sin2)*180/Math.PI);
		v1 = Math.floor(value);//度  
        v2 = Math.floor((value - v1) * 60);//分  
        v3 = Math.round((value - v1) * 3600 % 60);//秒  
        this.comp("output2").set({value:v1 + '°' + v2 + '\'' + v3 + '"'});
		
		
	};

	return Model;
});