<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <script src="js/islider.js"></script>
<script src="js/plugins/islider_desktop.js"></script>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full"> 
      <div class="x-panel-top"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="MTittle">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content"><div id="non-looping" class="iSlider-effect" style="height:100%;width:100%;"></div></div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="left:105px;top:16px;" onReceive="windowReceiver1Receive"></span><resource xid="resource2"><require xid="require1" url="css!$UI/lawranceMob/picList/css/zzsc"></require></resource></div>