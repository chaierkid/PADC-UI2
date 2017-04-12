<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id">
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="title" name="title" type="String" xid="xid2"/>  
      <column label="imgName" name="imgName" type="String" xid="xid3"/>  
      <column label="pageName" name="pageName" type="String" xid="xid4"/>  
      <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;更改单查询&quot;,&quot;imgName&quot;:&quot;menu1Pic1.png&quot;,&quot;pageName&quot;:&quot;changeList&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;TCN管理&quot;,&quot;imgName&quot;:&quot;menu1Pic2.png&quot;,&quot;pageName&quot;:&quot;tcnMain&quot;}]</data></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="48"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" title="首页"> 
        <div class="x-titlebar-left"> 
          </div>  
        <div class="x-titlebar-title  text-success">首页</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content x-bgImg"> 
      <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" disablePullToRefresh="false" disableInfiniteLoad="false" data="data" style="height:100%;width:100%;">
   <ul class="x-list-template" xid="listTemplateUl1" style="height:70px;">
    <li class="list-group-item" style="font-size:large;vertical-align:middle;border-style:none none none none;height:200;" xid="li2" bind-click="li2Click">
     <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("title")'></div></li> 
  </ul> </div></div> 
  </div> 
</div>