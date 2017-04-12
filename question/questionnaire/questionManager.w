<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:174px;left:549px;height:auto;" onActive="modelActive" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="baasData1" queryAction="queryTabquestiona" saveAction="saveTabquestiona" url="/question/question" tableName="tabquestiona" idColumn="fID" orderBy="fCreateDate:desc" confirmDelete="false" confirmRefresh="false" limit="20"><column label="fID" name="fID" type="String" xid="default59"></column>
  <column label="fArea" name="fArea" type="String" xid="default60"></column>
  <column label="fStreet" name="fStreet" type="String" xid="default61"></column>
  <column label="fProblem" name="fProblem" type="String" xid="default62"></column>
  <column label="fPhotoTime" name="fPhotoTime" type="DateTime" xid="default63"></column>
  <column label="fPhoto" name="fPhoto" type="String" xid="default64"></column>
  <column label="fCreator" name="fCreator" type="String" xid="default65"></column>
  <column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default66"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="String" xid="default67"></column>
  <column label="fEditor" name="fEditor" type="String" xid="default68"></column>
  <column label="fEditeDate" name="fEditeDate" type="DateTime" xid="default69"></column>
  <column label="fContent" name="fContent" type="String" xid="default70"></column>
  <column label="fStatus" name="fStatus" type="String" xid="default71"></column>
  <column label="fStatus2" name="fStatus2" type="String" xid="default72"></column>
  <column label="fStatus3" name="fStatus3" type="String" xid="default73"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="type" confirmDelete="false" autoNew="false">
   <column name="type" type="String" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <column name="area" type="String" xid="xid9"></column>
  <column name="time" type="Date" xid="xid3"></column>
  <column name="status" type="String" xid="xid4"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="name" type="String" xid="xid6"></column>
  <data xid="default12">[{&quot;id&quot;:&quot;访员名称&quot;,&quot;name&quot;:&quot;访员名称&quot;},{&quot;id&quot;:&quot;区域&quot;,&quot;name&quot;:&quot;区域&quot;},{&quot;id&quot;:&quot;调查时间&quot;,&quot;name&quot;:&quot;调查时间&quot;},{&quot;id&quot;:&quot;问卷状态&quot;,&quot;name&quot;:&quot;问卷状态&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="id"><column name="id" type="String" xid="xid7"></column>
  <column name="name" type="String" xid="xid8"></column>
  <data xid="default14">[{&quot;id&quot;:&quot;督导已复核&quot;,&quot;name&quot;:&quot;督导已复核&quot;},{&quot;id&quot;:&quot;督导未复核&quot;,&quot;name&quot;:&quot;督导未复核&quot;},{&quot;id&quot;:&quot;领导已审阅&quot;,&quot;name&quot;:&quot;领导已审阅&quot;},{&quot;id&quot;:&quot;领导未审阅&quot;,&quot;name&quot;:&quot;领导未审阅&quot;},{&quot;id&quot;:&quot;相关区已查看&quot;,&quot;name&quot;:&quot;相关区已查看&quot;},{&quot;id&quot;:&quot;相关区未查看&quot;,&quot;name&quot;:&quot;相关区未查看&quot;}]</data></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="code">
   <column name="code" type="String" xid="column1"></column>
   <column name="name" type="String" xid="column2"></column>
   <data xid="default13">[{&quot;code&quot;:&quot;H01&quot;,&quot;name&quot;:&quot;东城区&quot;},{&quot;code&quot;:&quot;H02&quot;,&quot;name&quot;:&quot;西城区&quot;},{&quot;code&quot;:&quot;H03&quot;,&quot;name&quot;:&quot;海淀区&quot;},{&quot;code&quot;:&quot;H04&quot;,&quot;name&quot;:&quot;朝阳区&quot;},{&quot;code&quot;:&quot;H05&quot;,&quot;name&quot;:&quot;丰台区&quot;},{&quot;code&quot;:&quot;H06&quot;,&quot;name&quot;:&quot;石景山区&quot;},{&quot;code&quot;:&quot;H07&quot;,&quot;name&quot;:&quot;门头沟区&quot;},{&quot;code&quot;:&quot;H08&quot;,&quot;name&quot;:&quot;房山区&quot;},{&quot;code&quot;:&quot;H09&quot;,&quot;name&quot;:&quot;大兴区&quot;},{&quot;code&quot;:&quot;H10&quot;,&quot;name&quot;:&quot;通州区&quot;},{&quot;code&quot;:&quot;H11&quot;,&quot;name&quot;:&quot;顺义区&quot;},{&quot;code&quot;:&quot;H12&quot;,&quot;name&quot;:&quot;怀柔区&quot;},{&quot;code&quot;:&quot;H13&quot;,&quot;name&quot;:&quot;密云区&quot;},{&quot;code&quot;:&quot;H14&quot;,&quot;name&quot;:&quot;平谷区&quot;},{&quot;code&quot;:&quot;H15&quot;,&quot;name&quot;:&quot;延庆区&quot;},{&quot;code&quot;:&quot;H16&quot;,&quot;name&quot;:&quot;昌平区&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver " direction="auto" xid="popOver1" dismissible="false" style="display:block;height:100%;width:100%;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2"><img src="$UI/question/img/13221820.gif" alt="" xid="image1"></img></div></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="街面秩序列表"
        class="x-titlebar" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">街面秩序列表</div>  
        <div class="x-titlebar-right reverse"></div> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
     
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" height="120">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col " xid="col19" style="vertical-align:middle;height:30px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-left" label="新建问卷" xid="button1" icon="icon-android-add" style="padding-top:5px;height:35px;" onClick="button1Click">
   <i xid="i2" class="icon-android-add"></i>
   <span xid="span2">新建问卷</span></a></div> 
  <div class="x-col " xid="col17" style="vertical-align:middle;height:30px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-left pull-right" label="查询" xid="button4" icon="icon-android-search" style="padding-top:5px;height:35px;" onClick="button4Click">
   <i xid="i4" class="icon-android-search"></i>
   <span xid="span5">查询</span></a></div>
  <div class="x-col " xid="col18" style="vertical-align:middle;height:30px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-left" label="清空" xid="button8" icon="icon-ios7-reload" style="padding-top:5px;height:35px;" onClick="button8Click">
    <i xid="i8" class="icon-ios7-reload"></i>
    <span xid="span8">清空</span></a> </div></div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   
   <div class="x-col x-col-33" xid="col15">
    <select component="$UI/system/components/justep/select/select" class="form-control" xid="select1" style="height:30px;" bind-ref='$model.data1.ref("type")' bind-options="data2" bind-optionsValue="name" bind-optionsLabel="id" onChange="select1Change"></select></div> 
   <div class="x-col" xid="col8">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="name" style="height:30px;" bind-ref='$model.data1.ref("name")'></input>
  <select component="$UI/system/components/justep/select/select" class="form-control" xid="area" style="display:none;height:30px;" bind-options="data3" bind-optionsValue="name" bind-ref='$model.data1.ref("area")'></select>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="date" style="display:none;height:30px;" bind-ref='$model.data1.ref("time")'></input>
  <select component="$UI/system/components/justep/select/select" class="form-control" xid="status" style="display:none;height:30px;" bind-options="data4" bind-optionsValue="id" bind-ref='$model.data1.ref("status")' bind-optionsLabel="name"></select></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col " xid="col20">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output7"></div></div> 
   </div></div>
   <div class="x-panel-content" xid="content1"><div class="x-list x-inner-scroll" component="$UI/system/components/justep/list/list" data="baasData1" limit="20" xid="list1" autoLoad="false"> 
        <div class="x-list-head" />  
        <div class="x-list-content x-scroll-view"> 
          <div component="$UI/system/components/justep/scrollView/scrollView" supportPullToRefresh="true" supportInfiniteLoad="true" hScroll="false" vScroll="true" hScrollbar="false" vScrollbar="true" bounce="true" class="x-scroll"> 
            <div class="x-content-center x-pull-down container">
			      <i class="x-pull-down-img glyphicon x-icon-pull-down"></i>
			      <span class="x-pull-down-label">下拉刷新...</span>
			</div>  
            <div class="x-scroll-content"> 
              <ul class="x-list-template"> 
              	<!-- bind-css="{ 'x-currentRow': $model.taskData.currentRow.get() == $object }" -->
                <li class="list-group-item" bind-click="li1Click" style="font-size:large;"> 
                  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row"> 
                    <div class="x-col x-col-33 x-col-center" style="vertical-align:middle;text-align:left;"> 
                      <label xid="label1" style="font-weight:normal;"><![CDATA[区县名称：]]></label></div>  
                  <div class="x-col x-col-center" xid="col1"><span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fArea")' xid="output1" style="font-weight:bold;"></span></div>
  </div>  
                  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row3">
   
   
   <div class="x-col x-col-33 x-col-center" xid="col12">
    <label xid="label6" style="font-weight:normal;">点位名称：</label></div> 
   <div class="x-col" xid="col13" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fStreet")' xid="output8"></span></div> </div><div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row1">
   <div class="x-col x-col-33 x-col-center" style="vertical-align:middle;text-align:left;" xid="col7">
    <label xid="label3" style="font-weight:normal;"><![CDATA[访员：]]></label></div> 
   <div class="x-col x-col-center" xid="col6">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fCreator")' xid="output3" style="font-weight:bold;"></span></div> 
   </div>
  
  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row2">
   
   
   <div class="x-col x-col-33 x-col-center" xid="col10">
    <label xid="label8" style="font-weight:normal;">填报时间：</label></div> 
   <div class="x-col" xid="col11" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fCreateDate")' xid="output6"></span></div> </div>
  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row4">
   <div class="x-col x-col-20 x-col-center" xid="col3">
    <label xid="label2" style="font-weight:normal;">状态：</label></div> 
   <div class="x-col" xid="col2" style="font-weight:bold;font-size:small;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fStatus2")' xid="output2"></span></div> 
   <div class="x-col" xid="col2" style="font-weight:bold;font-size:small;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fStatus")' xid="output4"></span></div> 
   <div class="x-col" xid="col3" style="font-weight:bold;font-size:small;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("fStatus3")' xid="output5"></span></div> </div>
  </li> 
              </ul> 
            </div>  
            <div class="x-content-center x-pull-up">
		        <span class="x-pull-up-label">加载更多...</span>
		    </div> 
          </div> 
        </div> 
      </div>
  </div>
   </div></div> 
  </div> 
</div>
