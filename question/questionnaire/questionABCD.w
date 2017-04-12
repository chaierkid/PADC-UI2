<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="default1"></column>
  <column label="title" name="title" type="String" xid="default2"></column>
  <column label="imageName" name="imageName" type="String" xid="xid1"></column><!-- ,{&quot;id&quot;:&quot;5&quot;,&quot;title&quot;:&quot;重点医院&quot;,&quot;imageName&quot;:&quot;zhongdian.jpg&quot;} -->
  <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;街面秩序&quot;,&quot;imageName&quot;:&quot;jiemian.jpg&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;力量防控&quot;,&quot;imageName&quot;:&quot;liliang.jpg&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;title&quot;:&quot;安检措施落实&quot;,&quot;imageName&quot;:&quot;anquan.jpg&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;title&quot;:&quot;刀具管控&quot;,&quot;imageName&quot;:&quot;daoju.jpg&quot;}]</data></div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="安保调查列表"
        class="x-titlebar" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">安保调查列表</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" disablePullToRefresh="false" disableInfiniteLoad="false" data="data" style="height:100%;width:100%;"> 
        <ul class="x-list-template" xid="listTemplateUl1" style="height:70px;"> 
          <li bind-click="open" class="list-group-item" style="font-size:large;vertical-align:middle;border-style:none none none none;height:200;"> 
            <img alt="" xid="image1" class="imagelist" style="vertical-align:middle;text-align:right;" bind-attr-src="$model.transUrl($object)"></img></li> 
        </ul> 
      </div> 
    </div> 
  </div> 
</div>
