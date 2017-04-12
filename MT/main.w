<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id">
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="title" name="title" type="String" xid="xid2"/>  
      <column label="imgName" name="imgName" type="String" xid="xid3"/>  
      <column label="pageName" name="pageName" type="String" xid="xid4"/>  
      <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;一级分发&quot;,&quot;imgName&quot;:&quot;menu1Pic1.png&quot;,&quot;pageName&quot;:&quot;aboutUs&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;二级分发&quot;,&quot;imgName&quot;:&quot;menu1Pic2.png&quot;,&quot;pageName&quot;:&quot;product&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;title&quot;:&quot;检验执行管理&quot;,&quot;imgName&quot;:&quot;menu1Pic3.png&quot;,&quot;pageName&quot;:&quot;cases&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;title&quot;:&quot;生产执行管理&quot;,&quot;imgName&quot;:&quot;menu1Pic4.png&quot;,&quot;pageName&quot;:&quot;promotion&quot;},{&quot;id&quot;:&quot;5&quot;,&quot;title&quot;:&quot;工艺执行管理&quot;,&quot;imgName&quot;:&quot;menu1Pic5.png&quot;,&quot;pageName&quot;:&quot;dynamic&quot;},{&quot;id&quot;:&quot;6&quot;,&quot;title&quot;:&quot;归零管理&quot;,&quot;imgName&quot;:&quot;menu1Pic6.png&quot;,&quot;pageName&quot;:&quot;contactUs&quot;},{&quot;id&quot;:&quot;7&quot;,&quot;title&quot;:&quot;CMO组内传阅&quot;,&quot;imgName&quot;:&quot;menu1Pic3.png&quot;,&quot;pageName&quot;:&quot;cmo&quot;}]</data></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="48"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" title="TCN管理"> 
        <div class="x-titlebar-left"> 
          </div>  
        <div class="x-titlebar-title  text-success">TCN管理</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content x-bgImg"> 
      <ul component="$UI/system/components/justep/list/list" class="x-list x-list-template"
        xid="list2" data="data"> 
        <li xid="li2" class="col-xs-6 text-center">
        	<div bind-click="openPageClick"> 
            <img bind-attr-src="$model.transUrl($object)"
              class="x-img2"/>  
            <h5 class="text-white" bind-text="ref('title')"><![CDATA[关于我们]]></h5>
          </div>
        </li>
      </ul>
    </div> 
  </div> 
</div>