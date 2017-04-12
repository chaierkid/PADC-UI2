<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="default1"/>  
      <column label="title" name="title" type="String" xid="default2"/>  
      <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;安保调查&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;公共场所调查&quot;}]</data></div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="暗访问卷"
        class="x-titlebar" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">暗访问卷</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" disablePullToRefresh="false" disableInfiniteLoad="false" data="data" style="width:100%;height:100%;"> 
        <ul class="x-list-template" xid="listTemplateUl1" style="height:70px;"> 
          <li bind-click="open" class="center-block list-group-item" style="height:100%;font-size:large;vertical-align:middle;"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-only-icon pull-right"
              label="button" xid="button1" icon="icon-ios7-arrow-right"> 
              <i xid="i1" class="icon-ios7-arrow-right text-muted"/>  
              <span xid="span1"/> 
            </a>  
             
          <h5 bind-text="ref('title')" class="text-black" style="font-size:large;vertical-align:middle;"><![CDATA[]]></h5></li> 
        </ul> 
      </div> 
    </div> 
  <div class="x-panel-bottom" xid="bottom2" height="80">
   <div component="$UI/system/components/justep/row/row" class="x-row text-center" xid="row1" style="background-color:#B3D6F4;">
   <div class="x-col x-col-25" xid="col1" bind-click="col1Click">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top" label="首页" xid="bookshelvesBtn" icon="icon-android-book">
     <i xid="i5" class="icon-android-book"></i>
     <span xid="span7">首页</span></a> </div> 
   <div class="x-col x-col-25" xid="col2" bind-click="col2Click">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top" label="公司介绍" xid="bookCityBtn" icon="glyphicon glyphicon-eye-open">
     <i xid="i6" class="glyphicon glyphicon-eye-open"></i>
     <span xid="span8">公司介绍</span></a> </div> 
   <div class="x-col x-col-25" xid="col3" bind-click="col3Click">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top" label="工作案例" xid="button2" icon="glyphicon glyphicon-list-alt">
     <i xid="i8" class="glyphicon glyphicon-list-alt"></i>
     <span xid="span10">工作案例</span></a> </div> 
   <div class="x-col" xid="col10" style="display:none">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top" label="法规" xid="button4" icon="icon-alert-circled">
     <i xid="i10" class="icon-alert-circled"></i>
     <span xid="span12">法规</span></a> </div> 
   <div class="x-col" xid="col9" bind-click="col9Click">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top" label="个人中心" xid="personalCenterBtn" icon="icon-android-contact">
     <i xid="i7" class="icon-android-contact"></i>
     <span xid="span9">个人中心</span></a> </div> </div></div></div> 
</div>
