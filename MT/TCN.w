<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="a">
   <column name="a" type="String" xid="xid1"></column>
   <column name="b" type="String" xid="xid2"></column>
   <column name="c" type="String" xid="xid3"></column>
   <column name="d" type="String" xid="xid4"></column>
   <column name="e" type="String" xid="xid5"></column>
   <column name="f" type="String" xid="xid6"></column>
   <column name="g" type="String" xid="xid7"></column>
   <column name="h" type="String" xid="xid8"></column>
   <column name="i" type="String" xid="xid9"></column>
   <column name="j" type="String" xid="xid10"></column>
   <column name="k" type="String" xid="xid11"></column>
   <column name="l" type="String" xid="xid12"></column>
   <column name="m" type="String" xid="xid13"></column>
   <column name="n" type="String" xid="xid14"></column>
   <column name="o" type="String" xid="xid15"></column>
   <data xid="default1">[{&quot;a&quot;:&quot;GG-FC1-94-7010&quot;,&quot;b&quot;:&quot;DD-FC1-94061-3010,-3010/MX&quot;,&quot;c&quot;:&quot;2BEG1P,2BMM1P&quot;,&quot;d&quot;:&quot;1-*&quot;},{&quot;a&quot;:&quot;GG-FC1-61-1174&quot;,&quot;b&quot;:&quot;DD-FC1-61021-0G2/ML&quot;,&quot;c&quot;:&quot;2P&quot;,&quot;d&quot;:&quot;29-9999&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="TCN查询"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">TCN查询</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2">
    <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="height:100%;width:100%;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
      <div class="x-col x-col-10" xid="col8"></div>
      <div class="x-col" xid="col1">
       <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1"></input></div> 
      <div class="x-col x-col-20 x-col-center" xid="col3" style="text-align:center;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left" label="查询" xid="button1" icon="icon-android-search">
        <i xid="i1" class="icon-android-search"></i>
        <span xid="span1">查询</span></a> </div> </div> </div> </div> 
   <div class="x-panel-content" xid="content2">
    <div class="x-list x-inner-scroll" component="$UI/system/components/justep/list/list" data="data1" limit="20" xid="list1" autoLoad="true">
     <div class="x-list-head" xid="div1"></div>
     <div class="x-list-content x-scroll-view" xid="div2">
      <div component="$UI/system/components/justep/scrollView/scrollView" supportPullToRefresh="true" supportInfiniteLoad="true" hScroll="false" vScroll="true" hScrollbar="false" vScrollbar="true" bounce="true" class="x-scroll" xid="scrollView1">
       <div class="x-content-center x-pull-down container" xid="div3">
        <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i2"></i>
        <span class="x-pull-down-label" xid="span2">下拉刷新...</span></div> 
       <div class="x-scroll-content" xid="div4">
        <ul class="x-list-template" xid="listTemplateUl1">
         <li class="list-group-item" bind-click="li1Click" xid="li1">
          <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row4">
           <div class="x-col x-col-33 x-col-center" style="vertical-align:middle;text-align:left;" xid="col5">
            <label xid="label1" style="font-weight:normal;">更改单号：</label></div> 
           <div class="x-col x-col-center" xid="col4">
            <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("a")' xid="output1" style="font-weight:bold;"></span></div> </div> 
          <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row3">
           <div class="x-col x-col-33 x-col-center" xid="col12">
            <label xid="label6" style="font-weight:normal;">图文号：</label></div> 
           <div class="x-col" xid="col13" style="font-weight:bold;">
            <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("b")' xid="output8"></span></div> </div> 
          <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row2">
           <div class="x-col x-col-33 x-col-center" style="vertical-align:middle;text-align:left;" xid="col7">
            <label xid="label3" style="font-weight:normal;">批次：</label></div> 
           <div class="x-col x-col-center" xid="col6">
            <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("c")' xid="output3" style="font-weight:bold;"></span></div> </div> 
          <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row2">
           <div class="x-col x-col-33 x-col-center" xid="col10">
            <label xid="label8" style="font-weight:normal;">架次：</label></div> 
           <div class="x-col" xid="col11" style="font-weight:bold;">
            <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("d")' xid="output6"></span></div> </div> 
  </li> </ul> </div> 
       <div class="x-content-center x-pull-up" xid="div5">
        <span class="x-pull-up-label" xid="span3">加载更多...</span></div> </div> </div> </div> </div> </div></div>
  </div> 
</div>