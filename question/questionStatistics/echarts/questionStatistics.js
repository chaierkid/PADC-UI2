define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("./dist/echarts-all");
	var Model = function() {
		this.callParent();
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		this.close();
	};

	Model.prototype.col1Click = function(event) {
		justep.Shell.showPage("statisticsList");
	};

	Model.prototype.col2Click = function(event) {
		justep.Shell.showPage("about");
	};

	Model.prototype.col3Click = function(event) {
		justep.Shell.showPage("case");
	};

	Model.prototype.col9Click = function(event) {
		if (null === this.getParent().userName || "" === this.getParent().userName || this.getParent().userName === undefined) {
			justep.Shell.showPage("login");
		} else {
			if (confirm("当前用户：" + this.getParent().userName + ",是否更换账号登录")) {
				justep.Shell.showPage("login");
			}
		}
	};

	Model.prototype.modelLoad = function(event) {
		var self = this;
		var querydata = this.comp("data1");
		var area = querydata.getValue("area");
		if (area == '全市') {
			area = '';
		}
		var street = querydata.getValue("street");
		var startdate = querydata.getValue("startdate");
		var enddate = querydata.getValue("enddate") ;
		if(startdate!==null &&startdate!==''&& startdate!==undefined ){
			startdate =  startdate + " 00:00:00";
		}
		if(enddate!==null &&enddate!==''&& enddate!==undefined ){
			enddate = enddate + " 23:59:59";
		}

		justep.Baas.sendRequest({
			"url" : "/question/question",
			"action" : "statistics",
			"async" : false,
			"params" : {
				area : area,
				street : street,
				startDate : startdate,
				endDate : enddate
			},
			"success" : function(resultData) {
				var dianwei = 0;
				if (resultData.fstreet !== undefined && resultData.fstreet !== '' && resultData.fstreet !== null) {
					dianwei = resultData.fstreet;
				}
				self.comp("output2").set({
					value : "两轮暗访共调查点位665个，查出问题点位221"
				});
				self.comp("output1").set({
					value : "街面秩序、力量防控、安检措施、刀具管控、重点医院"
				});
//				self.comp("output2").set({
//					value : resultData.farea + "个区，" + dianwei + "个点位"
//				});
//				self.comp("output1").set({
//					value : resultData.problem
//				});
				var areaname = '';
				var streetname = '';
				var areavalue = '';
				var streetvalue = '';
				if (resultData.areaname !== undefined && resultData.areaname !== '' && resultData.areaname !== null) {
					areaname = resultData.areaname;
					streetname = resultData.streetname;
					streetvalue = resultData.streetvalue;
					areavalue = resultData.areavalue;
				}
				var option = {
					tooltip : {
						trigger : '',
						formatter : "{a} <br/>{b} : {c} ({d}%)"
					},
					toolbox : {
						show : true,
						feature : {
							mark : {
								show : false
							},
							dataView : {
								show : true,
								readOnly : true
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					calculable : true,
					series : [ {
						name : '',
						type : 'pie',
						radius : [ '30%', '40%' ],
						itemStyle : {
							normal : {
								label : {
									show : true
								},
								labelLine : {
									show : true
								}
							},
							emphasis : {
								label : {
									show : true,
									position : 'center',
									textStyle : {
										fontSize : '30',
										fontWeight : 'bold'
									}
								}
							}
						},
						data : (function() {
							var res = [];
							var len = areaname.split(",").length;
							while (len--) {
								res.push({
									name : areaname.split(",")[len],
									value : areavalue.split(",")[len]
								});
							}
							return res;
						})()
					} ]
				};
				var myChart = echarts.init(self.getElementByXid('areaImage'));
				myChart.setOption(option);
				window.addEventListener("resize", function() {
					myChart.resize();
				});
			},
			"error" : function(msg) {
				justep.Util.hint("登录失败，请检查网络是否正常！", {
					"type" : "danger"
				});
			}
		});
			var option = {
					tooltip : {
						trigger : '',
						formatter : "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:['街面秩序','力量防控','安检措施','刀具管控','重点医院']
				    },
					toolbox : {
						show : true,
						feature : {
							mark : {
								show : false
							},
							dataView : {
								show : true,
								readOnly : true
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					calculable : true,
					series : [ {
						name : '',
						type : 'pie',
						radius : [ '30%', '40%' ],
						itemStyle : {
							normal : {
								label : {
									show : true
								},
								labelLine : {
									show : true
								}
							},
							emphasis : {
								label : {
									show : true,
									position : 'center',
									textStyle : {
										fontSize : '30',
										fontWeight : 'bold'
									}
								}
							}
						},
						data : [
						{value:163, name:'街面秩序'},
						{value:21, name:'力量防控'},
						{value:32, name:'安检措施'},
						{value:0, name:'刀具管控'},
						{value:5, name:'重点医院'}
						
						]
					} ]
				};
				var myChart2 = echarts.init(this.getElementByXid('problemImage'));
				myChart2.setOption(option);
				window.addEventListener("resize", function() {
					myChart2.resize();
				});

	};

	Model.prototype.button3Click = function(event) {
		var self = this;
		var querydata = this.comp("data1");
		var area = querydata.getValue("area");
		var street = querydata.getValue("street");
		var startdate = querydata.getValue("startdate");
		var enddate = querydata.getValue("enddate") ;
		if(startdate!==null &&startdate!==''&& startdate!==undefined ){
			startdate =  startdate + " 00:00:00";
		}
		if(enddate!==null &&enddate!==''&& enddate!==undefined ){
			enddate = enddate + " 23:59:59";
		}
		if (area == '全市') {
			area = '';
		}
		justep.Baas.sendRequest({
			"url" : "/question/question",
			"action" : "statistics",
			"async" : false,
			"params" : {
				area : area,
				street : street,
				startDate : startdate,
				endDate : enddate
			},
			"success" : function(resultData) {
				var dianwei = 0;
				if (resultData.fstreet !== undefined && resultData.fstreet !== '' && resultData.fstreet !== null) {
					dianwei = resultData.fstreet;
				}
				self.comp("output2").set({
					value : resultData.farea + "个区，" + dianwei + "个点位"
				});
				self.comp("output1").set({
					value : resultData.problem
				});
				var areaname = '';
				var streetname = '';
				var areavalue = '';
				var streetvalue = '';
				if (resultData.areaname !== undefined && resultData.areaname !== '' && resultData.areaname !== null) {
					areaname = resultData.areaname;
					streetname = resultData.streetname;
					streetvalue = resultData.streetvalue;
					areavalue = resultData.areavalue;
				}
				var option = {
					tooltip : {
						trigger : '',
						formatter : "{a} <br/>{b} : {c} ({d}%)"
					},
					toolbox : {
						show : true,
						feature : {
							mark : {
								show : false
							},
							dataView : {
								show : true,
								readOnly : true
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					calculable : true,
					series : [ {
						name : '',
						type : 'pie',
						radius : [ '30%', '40%' ],
						itemStyle : {
							normal : {
								label : {
									show : true
								},
								labelLine : {
									show : true
								}
							},
							emphasis : {
								label : {
									show : true,
									position : 'center',
									textStyle : {
										fontSize : '30',
										fontWeight : 'bold'
									}
								}
							}
						},
						data : (function() {
							var res = [];
							var len = areaname.split(",").length;
							while (len--) {
								res.push({
									name : areaname.split(",")[len],
									value : areavalue.split(",")[len]
								});
							}
							return res;
						})()
					} ]
				};
				// var option = {
				// tooltip : {
				// trigger: 'item',
				// formatter: "{a} <br/>{b} : {c} ({d}%)"
				// },
				// legend: {
				// orient : 'vertical',
				// x : 'left',
				// data:streetname.split(",")
				// },
				// toolbox: {
				// show : true,
				// feature : {
				// mark : {show: false},
				// dataView : {show: false, readOnly: false},
				// magicType : {
				// show: false,
				// type: ['pie', 'funnel']
				// },
				// restore : {show: false},
				// saveAsImage : {show: true}
				// }
				// },
				// calculable : false,
				// series : [
				// {
				// name:'访问来源',
				// type:'pie',
				// selectedMode: 'single',
				// radius : [0, '35%'],
				//
				// x: '70%',
				// width: '40%',
				// funnelAlign: 'right',
				// max: 1548,
				//
				// itemStyle : {
				// normal : {
				// label : {
				// position : 'inner'
				// },
				// labelLine : {
				// show : false
				// }
				// }
				// },
				// data: (function(){
				// var res = [];
				// var len = areaname.split(",").length;
				// while (len--) {
				// res.push({
				// name: areaname.split(",")[len],
				// value: areavalue.split(",")[len]
				// });
				// }
				// return res;
				// })()
				// },
				// {
				// name:'访问来源',
				// type:'pie',
				// radius : ['50%', '75%'],
				//
				// x: '60%',
				// width: '35%',
				// funnelAlign: 'left',
				// max: 1048,
				//
				// data:(function(){
				// 
				// var res = [];
				// var len = streetname.split(",").length;
				// while (len--) {
				//			                                	res.push({
				//			                                		name: streetname.split(",")[len],
				//			                                		value: streetvalue.split(",")[len]
				//			                                	});
				//			                                }
				//			                                return res;
				//			                                })()
				//						          }
				//						          ]
				//				};
				var myChart = echarts.init(self.getElementByXid('areaImage'));
				myChart.setOption(option);
			},
			"error" : function(msg) {
				justep.Util.hint("登录失败，请检查网络是否正常！", {
					"type" : "danger"
				});
			}
		});
	};

	Model.prototype.modelActive = function(event){
		this.modelLoad();
	};

	return Model;
});