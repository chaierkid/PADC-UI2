<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:215px;left:569px;height:auto;"
    onLoad="modelLoad" onActive="modelActive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="data1" idColumn="area" confirmDelete="false" autoNew="true">
      <column name="area" type="String" xid="xid1"/>  
      <column name="street" type="String" xid="xid2"/>  
      <column name="startdate" type="Date" xid="xid3"/>  
      <column name="enddate" type="Date" xid="xid4"/>
    </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="code">
   <column name="code" type="String" xid="column1"></column>
   <column name="name" type="String" xid="column2"></column>
   <data xid="default2">[{&quot;code&quot;:&quot;全市&quot;,&quot;name&quot;:&quot;全市&quot;},{&quot;code&quot;:&quot;H01&quot;,&quot;name&quot;:&quot;东城区&quot;},{&quot;code&quot;:&quot;H02&quot;,&quot;name&quot;:&quot;西城区&quot;},{&quot;code&quot;:&quot;H03&quot;,&quot;name&quot;:&quot;海淀区&quot;},{&quot;code&quot;:&quot;H04&quot;,&quot;name&quot;:&quot;朝阳区&quot;},{&quot;code&quot;:&quot;H05&quot;,&quot;name&quot;:&quot;丰台区&quot;},{&quot;code&quot;:&quot;H06&quot;,&quot;name&quot;:&quot;石景山区&quot;},{&quot;code&quot;:&quot;H07&quot;,&quot;name&quot;:&quot;门头沟区&quot;},{&quot;code&quot;:&quot;H08&quot;,&quot;name&quot;:&quot;房山区&quot;},{&quot;code&quot;:&quot;H09&quot;,&quot;name&quot;:&quot;大兴区&quot;},{&quot;code&quot;:&quot;H10&quot;,&quot;name&quot;:&quot;通州区&quot;},{&quot;code&quot;:&quot;H11&quot;,&quot;name&quot;:&quot;顺义区&quot;},{&quot;code&quot;:&quot;H12&quot;,&quot;name&quot;:&quot;怀柔区&quot;},{&quot;code&quot;:&quot;H13&quot;,&quot;name&quot;:&quot;密云区&quot;},{&quot;code&quot;:&quot;H14&quot;,&quot;name&quot;:&quot;平谷区&quot;},{&quot;code&quot;:&quot;H15&quot;,&quot;name&quot;:&quot;延庆区&quot;},{&quot;code&quot;:&quot;H16&quot;,&quot;name&quot;:&quot;昌平区&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="350"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="统计数据"
        class="x-titlebar" style="font-size:x-large;height:60px;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">统计数据</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col25">
    <label xid="label11">统计条件</label></div> 
   <div class="x-col" xid="col27" style="text-align:right;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-icon-left" label="查询" xid="button3" icon="icon-android-search" onClick="button3Click">
     <i xid="i3" class="icon-android-search"></i>
     <span xid="span4">查询</span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-20 x-col-center" xid="col24">
    <label xid="label12" style="font-weight:normal;">区县</label></div> 
   <div class="x-col" xid="col23">
    <select component="$UI/system/components/justep/select/select" class="form-control" style="height:30px;" bind-ref='$model.data1.ref("area")' bind-options="data2" bind-optionsValue="name" bind-optionsLabel="name" xid="select2"></select></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col x-col-20 x-col-center" xid="col6">
    <label xid="label6" style="font-weight:normal;">填报时间</label></div> 
   <div class="x-col" xid="col18">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" style="height:30px;" bind-ref='$model.data1.ref("startdate")'></input></div> 
   <div class="x-col x-col-20 x-col-center" xid="col11" style="text-align:center;">
    <label xid="label7" style="font-weight:normal;">至</label></div> 
   <div class="x-col" xid="col19">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" style="height:30px;" bind-ref='$model.data1.ref("enddate")'></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-center" xid="col28">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit1">
     <label class="x-label" xid="label8">调查范围：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-center" xid="col20">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit2">
     <label class="x-label" xid="label10">调查内容：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-center" xid="col26">
    <label xid="label9" style="font-weight:normal;">存在的问题，如下饼图：</label></div> </div></div>  
    <div class="x-panel-content" xid="content1" style="overflow: auto;"> 
      <div component="$UI/system/components/justep/tabs/tabs" class="x-tabs" xid="tabs1">
   <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="panel1">
    <div class="x-panel-top" xid="top1">
     <ul class="nav nav-tabs" xid="navs1">
      <li class="active" xid="li1">
       <a content="tabContent_1" xid="tabItem1"><![CDATA[各区分布图]]></a></li> 
  <li xid="li2">
   <a content="tabContent1" xid="tabItem2"><![CDATA[各种问题分布图]]></a></li></ul> </div> 
    <div class="x-panel-content" xid="content2">
     <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="contents1">
      <div class="x-contents-content active" xid="areaImage"></div>
  <div class="x-contents-content" xid="problemImage"></div></div> </div> </div> </div></div>  
    </div> 
</div>
