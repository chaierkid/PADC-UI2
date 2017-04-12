<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/> 
<resource xid="resource2"><require xid="require1" url="$UI/question/forImage/islider"></require>
  <require xid="require2" url="css!$UI/question/forImage/islider"></require></resource>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background: rgba(0,0, 0, 0.5);" bind-click="panel1Click">
   <div class="x-panel-top" xid="top1" height="200"></div>
   <div class="x-panel-content" xid="content3" id="iSlider" bind-click="content3Click"></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>