define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};


	Model.prototype.modelParamsReceive = function(event){
		this.getImageUrl(event.params.fattached_file,event.params.parentID);
	};
	
	Model.prototype.getImageUrl = function(value,ownerID) {
		var newArray = [];
		if (value) {
			try {
				var jsonList = eval("(" + value+ ")");
				if (jsonList instanceof Array) {
					for(var i = 0 ;i<jsonList.length ;i++){
						var realFileName = jsonList[i]["realFileName"];
						var storeFileName = jsonList[i]["storeFileName"];
						var operateType = "browse";
						var url = '/baas/justep/attachment/simpleFileStore?realFileName=' + realFileName + '&storeFileName=' + storeFileName + '&ownerID=' + ownerID + '&operateType=' + operateType;
						var fImgUrl = require.toUrl(url);
                        newArray.push({"content":'<div style ="margin:0 auto;text-align:center;" ><a href="#"><img  class="imageClick"  alt="" src="'+fImgUrl+'" ></a></div>'});
					}
				}
			} catch (e) {
				console.log(e);
			}
		}
		
		var islider = new iSlider({
			data: newArray,
			type: 'dom',
			dom: document.getElementById("iSlider"),
		});
		islider.addDot();
	};


	Model.prototype.content3Click = function(event){
		this.close();
	};


	Model.prototype.panel1Click = function(event){
		this.close();
	};


	return Model;
});