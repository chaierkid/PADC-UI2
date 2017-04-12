<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="title" name="title" type="String" xid="xid2"/>  
      <column label="imageName" name="imageName" type="String" xid="xid3"/>  
      <column label="pagename" name="pagename" type="String" xid="xid4"/>  
      <column label="bgColor" name="bgColor" type="String" xid="xid5"/>  
      <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;title&quot;:&quot;暗访安排&quot;,&quot;imageName&quot;:&quot;menu11Pic1.png&quot;,&quot;pagename&quot;:&quot;arrange&quot;,&quot;bgColor&quot;:&quot;bg-blue&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;title&quot;:&quot;基本情况&quot;,&quot;imageName&quot;:&quot;menu11Pic2.png&quot;,&quot;pagename&quot;:&quot;base&quot;,&quot;bgColor&quot;:&quot;bg-orange&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;title&quot;:&quot;主要问题&quot;,&quot;imageName&quot;:&quot;menu11Pic3.png&quot;,&quot;pagename&quot;:&quot;mainQuestion&quot;,&quot;bgColor&quot;:&quot;bg-purple&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;title&quot;:&quot;工作建议&quot;,&quot;imageName&quot;:&quot;menu12Pic2.png&quot;,&quot;pagename&quot;:&quot;suggestion&quot;,&quot;bgColor&quot;:&quot;bg-cyan&quot;}]</data></div> 
  </div>  
  <div component="$UI/system/components/justep/popMenu/popMenu" class="x-popMenu"
    xid="popMenu" anchor="menuBtn" direction="left-bottom" opacity="0.7"> 
    <div class="x-popMenu-overlay" xid="div14"/>  
    <ul component="$UI/system/components/justep/menu/menu" class="x-menu dropdown-menu x-popMenu-content"
      xid="menu2"> 
      <li class="x-menu-item" xid="item2"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link"
          label="在线客服" xid="button2"> 
          <i xid="i2"/>  
          <span xid="span2">在线客服</span> 
        </a> 
      </li>  
      <li class="x-menu-divider divider" xid="divider1"/>  
      <li class="x-menu-item" xid="item3"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link"
          label="退出" xid="button3"> 
          <i xid="i3"/>  
          <span xid="span3">退出</span> 
        </a> 
      </li> 
    </ul> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="平安调查"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          </div>  
        <div class="x-titlebar-title">平安调查</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content x-cards"> 
      <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel"
        xid="carousel1"> 
        <ol class="carousel-indicators" xid="ol1"/>  
        <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents"
          active="0" slidable="true" wrap="true" swipe="true" xid="imgcontents"> 
          <div class="x-contents-content" xid="content1" url="./contents/content1.w"> 
            <img class="img-responsive x-img1" 
              bind-attr-src="$model.transUrl('./img/carouselBox21.jpg')"/> 
          </div>  
          <div class="x-contents-content" xid="content2" url="./contents/content2.w"> 
            <img class="img-responsive x-img1"
              bind-attr-src="$model.transUrl('./img/carouselBox21.jpg')"/> 
          </div>  
          <div class="x-contents-content" xid="content3" url="./contents/content3.w"> 
            <img class="img-responsive x-img1"
              bind-attr-src="$model.transUrl('./img/carouselBox21.jpg')"/> 
          </div>  
          <div class="x-contents-content" xid="content4" url="./contents/content4.w"> 
            <img class="img-responsive x-img1"
              bind-attr-src="$model.transUrl('./img/carouselBox21.jpg')"/> 
          </div> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" data="data"> 
        <div component="$UI/system/components/bootstrap/row/row" class="row panel-body x-list-template"> 
          <div class="col col-xs-4" xid="col7" bind-click="openPageClick"> 
            <div xid="div1" class="text-center" bind-css='val("bgColor")'> 
              <img xid="image1" class="x-img3" bind-attr-src="$model.transUrl($object)"/>  
              <h5 class="text-white" bind-text='val("title")'><![CDATA[]]></h5> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
