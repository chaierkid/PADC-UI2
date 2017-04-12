<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:511px;top:54px;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full"> 
      <div class="x-panel-top"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="企业文化"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">企业文化</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content"><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="企业文化" xid="controlGroup1" style="height:53px;">
   <div class="x-control-group-title" xid="controlGroupTitle1">
    <span xid="span1"><![CDATA[企业文化]]></span></div> </div>
  <div xid="mainList" class="x-list" component="$UI/system/components/justep/list/list" data="mainData" limit="6">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
     <div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row1">
      <div class="x-col" style="text-align: left;" bind-visible="$model.controlData.val('edit')==1" xid="col1">
       <span component="$UI/system/components/justep/button/checkbox" bind-ref="ref('calcCheckBox')" class="x-checkbox" xid="checkbox1"></span></div> 
      <div component="$UI/system/components/justep/row/row" class="x-col x-col-90" bind-click="showDetailClick" xid="row2">
       <div class="x-row" component="$UI/system/components/justep/row/row" style="background-color:#E3EFFF;" xid="row3">
        <div class="x-col" xid="col2">
         </div> 
        <div class="x-col x-col-33" style="text-align:right;color:gray" xid="col3">
         </div> </div> 
       <div class="x-row" component="$UI/system/components/justep/row/row" style="background-color:#E3EFFF;" xid="row4">
        <div class="x-col x-col-50" xid="col5">
         </div> 
        <div class="x-col" style="text-align:right;color:gray" xid="col6">
         </div> </div> 
       <div class="x-row" component="$UI/system/components/justep/row/row" style="height:10px;" xid="row5">
        <div class="x-col" style="text-align:right;color:gray" xid="col4"></div></div> </div> 
      <div class="x-col font-gray" bind-click="showDetailClick" style="text-align: right" xid="col7">
       <a component="$UI/system/components/justep/button/button" label="" class="btn btn-only-icon" icon="icon-chevron-right" xid="editBtn">
        <i class="icon-chevron-right" xid="i1"></i>
        <span xid="span2"></span></a> </div> </div> </li> </ul> </div></div>
  </div> 
</div>