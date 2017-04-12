<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="default1"></column>
  <column label="title" name="title" type="String" xid="default2"></column>
  <column label="imageName" name="imageName" type="String" xid="xid1"></column>
  <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;汇总报告&quot;,&quot;imageName&quot;:&quot;huizong.jpg&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;统计数据&quot;,&quot;imageName&quot;:&quot;tongji.jpg&quot;}]</data></div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="暗访结果"
        class="x-titlebar" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">暗访结果</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" disablePullToRefresh="false" disableInfiniteLoad="false" data="data" style="width:100%;height:100%;"> 
        <ul class="x-list-template" xid="listTemplateUl1" style="height:70px;"> 
          <li bind-click="open" class="center-block list-group-item" style="font-size:large;vertical-align:middle;border-style:none none none none;height:200;"> 
            <img alt="" xid="image1" class="imagelist" style="vertical-align:middle;text-align:right;" bind-attr-src="$model.transUrl($object)"></img></li> 
        </ul> 
      </div> 
    </div> 
  </div> 
</div>
