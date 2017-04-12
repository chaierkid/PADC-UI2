<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:347px;left:216px;height:auto;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="title" name="title" type="String" xid="xid2"/>  
      <column label="imageName" name="imageName" type="String" xid="xid3"/>  
      <column label="pagename" name="pagename" type="String" xid="xid4"/>  
      <column label="bgColor" name="bgColor" type="String" xid="xid5"/>  
      <!-- ,{"id":"3","title":"评估","imageName":"menu12Pic2.png","pagename":"evaluation","bgColor":"bg-purple"},{"id":"4","title":"绩效","imageName":"menu11Pic1.png","pagename":"performance","bgColor":"bg-cyan"} -->  
      <data xid="default1">[{"id":"1","title":"暗访问卷","imageName":"menu14Pic1.png","pagename":"question","bgColor":"bg-blue"},{"id":"2","title":"暗访结果","imageName":"menu13Pic3.png","pagename":"questionResult","bgColor":"bg-orange"}]</data>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data2" idColumn="id"> 
      <column label="id" name="id" type="String" xid="column2"/>  
      <column label="title" name="title" type="String" xid="default2"/>  
      <data xid="default3">[{"id":"1","title":"街面秩序"},{"id":"2","title":"力量防控"},{"id":"3","title":"安检措施落实"},{"id":"4","title":"刀具管控"},{"id":"5","title":"重点医院"}]</data>
    </div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel4"> 
    <div class="x-panel-content" xid="content11">
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents2"> 
        <div class="x-contents-content" xid="home">
          <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
            xid="panel2"> 
            <div class="x-panel-top" xid="top1" height="60"> 
              <div component="$UI/system/components/justep/titleBar/titleBar"
                title="平安调查" class="x-titlebar" xid="titleBar1" style="height:100%;font-size:x-large;"> 
                <div class="x-titlebar-left" xid="left1" style="text-align:center;"
                  bind-click="left1Click"> 
                  <p xid="p1" style="text-align:left;vertical-align:bottom;width:100%;font-size:medium;"/>
                </div>  
                <div class="x-titlebar-title" xid="title1">平安调查</div>  
                <div class="x-titlebar-right reverse" xid="right1"/>
              </div> 
            </div>
            <div class="x-panel-content" xid="content2">
              <div component="$UI/system/components/bootstrap/carousel/carousel"
                class="x-carousel carousel" xid="carousel1"> 
                <ol class="carousel-indicators" xid="ol1"/>  
                <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents"
                  active="0" slidable="true" wrap="true" swipe="true" xid="contents1"
                  style="height:240px;"> 
                  <div class="x-contents-content" xid="content6"> 
                    <img class="image-wall" src="$UI/question/img/lb1.jpg"
                      url="./contents/content1.w" style="height:240px;" xid="image6"/> 
                  </div>  
                  <div class="x-contents-content" xid="content5"> 
                    <img class="image-wall" src="$UI/question/img/lb2.jpg"
                      url="./contents/content1.w" style="height:240px;"
                      xid="image7"/> 
                  </div>  
                  <div class="x-contents-content" xid="content3"> 
                    <img class="image-wall" src="$UI/question/img/lb3.jpg"
                      url="./contents/content1.w" style="height:240px;"
                      xid="image8"/> 
                  </div>  
                  <div class="x-contents-content" xid="content4"> 
                    <img class="image-wall" src="$UI/question/img/lb4.jpg"
                      url="./contents/content1.w" style="height:240px;" xid="image9"/> 
                  </div> 
                </div> 
              </div>
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row4"> 
                <div class="x-col" xid="col14" style="height:300;width:527;">
   <img xid="image10" class="x-img3" src="$UI/question/img/每日暗访.jpg" bind-click="image10Click"></img></div>
  <div class="x-col" xid="col12" style="height:300;width:527;">
   <img xid="image3" class="x-img3" src="$UI/question/img/暗访问卷.jpg" bind-click="image3Click"></img></div></div>  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row1" style="width:50%;"> 
                <div class="x-col" xid="col1" style="height:300;width:527;"> 
                  <img xid="image4" class="x-img3" src="$UI/question/img/暗访结果.jpg"
                    bind-click="image4Click"/>
                </div> 
              </div>
            </div> 
          </div>
        </div>  
        <div class="x-contents-content" xid="about">
          <div class="x-panel x-full" component="$UI/system/components/justep/panel/panel"
            xid="panel6"> 
            <div class="x-panel-top" height="60" style="background-color:black;"
              xid="top6"> 
              <div class="x-titlebar" component="$UI/system/components/justep/titleBar/titleBar"
                style="height:100%;font-size:x-large;" title="公司介绍" xid="titleBar4"> 
                <div class="x-titlebar-left" xid="div2"></div>  
                <div class="x-titlebar-title" xid="div2">公司介绍</div>  
                <div class="x-titlebar-right reverse" xid="div3"/>
              </div> 
            </div>  
            <div class="x-panel-content" xid="content12"> 
              <img src="$UI/question/img/公司介绍.jpg" alt="" xid="image1" class="about"/>
            </div> 
          </div>
        </div>  
        <div class="x-contents-content" xid="case">
          <div class="x-panel x-full" component="$UI/system/components/justep/panel/panel"
            xid="panel5"> 
            <div class="x-panel-top" height="60" style="background-color:black;"
              xid="top5"> 
              <div class="x-titlebar" component="$UI/system/components/justep/titleBar/titleBar"
                style="height:100%;font-size:x-large;" xid="titleBar3" title="案例"> 
                <div class="x-titlebar-left" xid="title2"></div>  
                <div class="x-titlebar-title" xid="title2">案例</div>  
                <div class="x-titlebar-right reverse" xid="right2"/>
              </div> 
            </div>  
            <div class="x-panel-content" xid="content1"> 
              <img src="$UI/question/img/工作案例.jpg" alt="" xid="image2" class="case"/>
            </div> 
          </div>
        </div>
      </div>
    </div>  
    <div class="x-panel-bottom" xid="bottom4" height="80">
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-lg btn-group-justified"
        tabbed="true" xid="buttonGroup2" style="height:100%;width:100%;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top active"
          label="首页" xid="button5" icon="icon-home" style="width:25%;font-size:large;"
          target="home"> 
          <i xid="i2" class="icon-home"/>  
          <span xid="span1">首页</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
          label="公司介绍" xid="button6" icon="icon-map" style="width:25%;font-size:large;"> 
          <i xid="i3" class="linear linear-layers icon-map"/>  
          <span xid="span2">公司介绍</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
          label="工作案例" xid="button1" icon="icon-images" style="width:25%;font-size:large;"> 
          <i xid="i9" class="icon-images"/>  
          <span xid="span4">工作案例</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
          label="法规" xid="button1" icon="icon-alert-circled" style="display:none;"> 
          <i xid="i1" class="icon-alert-circled"/>  
          <span xid="span5">法规</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
          label="个人中心" xid="button3" icon="icon-android-social-user" style="width:25%;font-size:large;"
          onClick="button3Click"> 
          <i xid="i4" class="icon-android-social-user"/>  
          <span xid="span3">个人中心</span>
        </a> 
      </div>
    </div>
  </div>
</div>
