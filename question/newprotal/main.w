<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model1" style="position:absolute;top:196px;left:218px;height:auto;"></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="首页"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">首页</div>  
        <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link " icon="icon-android-reminder" xid="button1" onClick="button1Click"> 
            <i class="icon-android-reminder" xid="i6">
              <span class="badge" xid="badge1" style="vertical-align:super;background-color:red;color:#FFFF80;font-family:Arial;"><![CDATA[0]]></span>
            </i>  
            <span xid="span19"/>
          </a>
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content x-bg-img"> 
      <div class="grid92"> 
        <div component="$UI/system/components/bootstrap/carousel/carousel"
          class="x-carousel carousel" xid="carousel1"> 
          <ol class="carousel-indicators" xid="ol1"/>  
          <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents"
            active="0" slidable="true" wrap="true" swipe="true" xid="contents1" style="height:240px;"> 
            <div class="x-contents-content" xid="content1"> 
              <img class="image-wall" src="./img/carouselBox21.jpg" url="./contents/content1.w"
                style="height:240px;"/> 
            </div>  
            <div class="x-contents-content" xid="content2"> 
              <img class="image-wall" src="./img/carouselBox21.jpg" bind-click="open"
                url="./contents/content1.w" style="height:240px;"/> 
            </div>  
            <div class="x-contents-content" xid="content3"> 
              <img class="image-wall" src="./img/carouselBox21.jpg" bind-click="open"
                url="./contents/content1.w" style="height:240px;"/> 
            </div>  
            <div class="x-contents-content" xid="content4"> 
              <img class="image-wall" src="./img/carouselBox21.jpg" bind-click="open"
                url="./contents/content1.w" style="height:240px;"/> 
            </div> 
          </div> 
        </div>  
        <div component="$UI/system/components/bootstrap/row/row" class="row grid"
          xid="row1"> 
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col1"> 
            <div class="card" url="./channel/menu11Pic1.w" bind-click="div1Click"
              xid="div13"> 
              <img src="./img/menu11Pic1.png" xid="image11"/>  
              <span class="title" xid="span11" style="font-size:14px;">金属材料</span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col2"> 
            <div class="card" url="./channel/menu14Pic2.w" bind-click="div2Click"
              xid="div14"> 
              <img src="./img/menu11Pic2.png" xid="image12"/>  
              <span class="title" xid="span12" style="font-size:14px;"><![CDATA[机械设备]]></span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col3"> 
            <div class="card" url="./channel/menu11Pic3.w" bind-click="div3Click"
              xid="div15"> 
              <img src="./img/menu11Pic3.png" xid="image13"/>  
              <span class="title" xid="span13" style="font-size:14px;">电子元器件</span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col4"> 
            <div class="card" url="./channel/menu11Pic4.w" bind-click="div4Click"
              xid="div16"> 
              <img src="./img/menu12Pic2.png" xid="image14"/>  
              <span class="title" xid="span14" style="font-size:16px;">标准件</span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col5"> 
            <div class="card" url="./channel/menu13Pic1.w" bind-click="div5Click"
              xid="div17"> 
              <img src="./img/menu13Pic1.png" xid="image15"/>  
              <span class="title" xid="span15" style="font-size:16px;"><![CDATA[产成品及附件]]></span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col6"> 
            <div class="card" url="./channel/menu14Pic1.w" bind-click="div6Click"
              xid="div18"> 
              <img src="./img/menu13Pic3.png" xid="image16"/>  
              <span class="title" xid="span16" style="font-size:16px;"><![CDATA[工具工装]]></span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col8"> 
            <div class="card" xid="div77" bind-click="div77Click"> 
              <img src="./img/menu11Pic1.png" xid="image2"/>  
              <span class="title" xid="span2" style="font-size:14px;"><![CDATA[未阅需求单]]></span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col11"> 
            <div class="card" url="./channel/menu11Pic1.w" xid="div19" bind-click="div19Click"> 
              <img src="./img/menu14Pic2.png" xid="image17"/>  
              <span class="title" xid="span17" style="font-size:14px;"><![CDATA[已阅需求单]]></span>
            </div> 
          </div>  
          <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col12"> 
            <div class="card" xid="div20" bind-click="div20Click"> 
              <img src="./img/menu13Pic1.png" xid="image18"/>  
              <span class="title" xid="span18" style="font-size:14px;"><![CDATA[新闻公告]]></span>
            </div> 
          </div> 
        </div>
      </div> 
    </div> 
  <div class="x-panel-bottom" xid="bottom1"></div></div> 
</div>
