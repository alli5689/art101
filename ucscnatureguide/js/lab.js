//code for dropdown menus
var dropDownCode = function(){
     var dropIds = ["dropdown0"];
     var Buttons = [
          [
               {text:"hi", func: function(){console.log("hi")}},
               {text:"hello", func: function(){console.log("hello")}}
          ]
     ];
     var buttonHeight = 30;
     var Widths = [];
     var Heights = [];
     var YOffsets = [];
     var XShift = -4;
     var YShift = 4;
     var WShift = 4;
     var tops = [];
     var bottoms = [];
     var isDowns = [];
     for(var i = 0; i < dropIds.length;i++){
          var temp = $("#" + dropIds[i]);
          Widths.push(temp.width());
          Heights.push(temp.height());
          YOffsets.push((-Buttons[i].length * buttonHeight) + buttonHeight);
          isDowns.push(false);
          bottoms.push($("<div class=dropdown></div>"));
          bottoms[i].css("background-color", "#AAAAAA");
          bottoms[i].css("width", (Widths[i]) + "px");
          temp.append(bottoms[i]);
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button = $("<button>" + Buttons[i][o].text + "</button>");
               Buttons[i][o].button.css("width", (Widths[i] + WShift) + "px");
               Buttons[i][o].button.css("height", buttonHeight + "px");
               Buttons[i][o].button.css("position", "absolute");
               Buttons[i][o].button.css("top", ((o * buttonHeight) + YOffsets[i]) + "px");
               Buttons[i][o].button.css("right", XShift + "px");
               Buttons[i][o].button.hide();
               temp.append(Buttons[i][o].button);
               Buttons[i][o].button.click(Buttons[i][o].func);
               bottoms[i].css("height", ((o * buttonHeight) + YOffsets[i]) + "px");
          }
          tops.push($("<div class=dropdown></div>"));
          // background-color: #AAAAAA;
          // border: solid 0px black;
          tops[i].css("background-color", "#AAAAAA");
          tops[i].css("border", "solid 2px black");
          tops[i].css("width", (Widths[i]) + "px");
          temp.append(tops[i]);
     }
     for(var i = 0; i < dropIds.length;i++){
          var dropdownEl = $("#" + dropIds[i]);
          dropdownEl.css("height", Heights[i] + "px");
          dropdownEl.css("width", Widths[i] + "px");
     }
     var update = function(i){
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button.css("width", (Widths[i] + WShift) + "px");
               Buttons[i][o].button.css("height", buttonHeight + "px");
               Buttons[i][o].button.css("top", ((o * buttonHeight) + YOffsets[i]) + "px");
               Buttons[i][o].button.css("right", XShift + "px");
               bottoms[i].css("width", (Widths[i] + WShift) + "px");
               bottoms[i].css("height", ((o * buttonHeight) + YOffsets[i] + buttonHeight) + "px");
               Buttons[i][o].button.hide();
               if(((o * buttonHeight) + YOffsets[i]) >= 0){
                    Buttons[i][o].button.show();
               }
          }
     }
     var Index = 0;
     var dropdown = function(){
          var index = Index;
          var sy = 0;

          var expand = function(){
               if(isDowns[index] && YOffsets[index] < buttonHeight + YShift){
                    YOffsets[index] += sy;
               } else if(isDowns[index] === false && YOffsets[index] > (-Buttons[index].length * buttonHeight) + buttonHeight){
                    YOffsets[index] -= sy;
               }
               if(YOffsets[index] > buttonHeight + YShift){
                    YOffsets[index] = buttonHeight + YShift;
               }
               if(YOffsets[index] < (-Buttons[index].length * buttonHeight) + buttonHeight){
                    YOffsets[index] = (-Buttons[index].length * buttonHeight) + buttonHeight;
               }
               update(index);
               // if(YOffsets[index] < Buttons[index].length * buttonHeight){
               //   YOffsets[index]++;
               //   update(index);
               // }
          }
          sy = 1;
          id = setInterval(expand, 1);
          var activateDrop = function(){
               isDowns[index] = true;
          }
          var deactivateDrop = function(){
               isDowns[index] = false;
          }
          tops[index].mouseenter(activateDrop);
          tops[index].mouseleave(deactivateDrop);
          bottoms[index].mouseenter(activateDrop);
          bottoms[index].mouseleave(deactivateDrop);
          for(var o = 0; o < Buttons[index].length;o++){
               Buttons[index][o].button.mouseenter(activateDrop);
               Buttons[index][o].button.mouseleave(deactivateDrop);
          }
     }
     Index = 0;
     while(Index < dropIds.length){
          dropdown();
          Index++;
     }
}

//code for links (the animals and plants linked together at the bottom)
var linkCode = function(){
     var width = 295;
     var tabs = 3;
     var padding = 5;
     var animal_data =
     [
          {
               title: "test",
               tabs:[
                    {
                         title: "tab1",
                         info:
                         "this is the text for tab 1"
                    },
                    {
                         title: "tab2",
                         info:
                         "this is the text for tab 2"
                    },
                    {
                         title: "tab3",
                         info:
                         "this is the text for tab 3"
                    }
               ]
          },
          {
               title: "test2",
               tabs:[
                    {
                         title: "tab11",
                         info:
                         "this is the text for tab 11"
                    },
                    {
                         title: "tab22",
                         info:
                         "this is the text for tab 22"
                    },
                    {
                         title: "tab33",
                         info:
                         "this is the text for tab 33"
                    },
                    {
                         title: "tab33",
                         info:
                         "this is the text for tab 33"
                    }
               ]
          }
     ];
     var links = [];
     $(".link").each(function(i){
          links.push({body: $(this)});
     });
     for(var i = 0; i < links.length;i++){
          links[i].title = links[i].body.attr('id');
          links[i].data = {title:"none", tabs:[{title:"none"}]};
          for(var a = 0; a < animal_data.length; a++){
               if(animal_data[a].title == links[i].title){
                    links[i].data = animal_data[a];
               }
          }
          links[i].html = "";
          links[i].head = $("<div class=linkhead>" + links[i].title + "</div>");
          links[i].t = [];
          for(var x = 0; x < width; x += width/(links[i].data.tabs.length)){
               //links[i].t.push($("<div class=linktab>" + links[i].data.tabs[links[i].t.length].title + "</div>"));
               links[i].t.push($("<div class=linktab>tab</div>"));
               links[i].t[links[i].t.length - 1].text(links[i].data.tabs[links[i].t.length - 1].title);
               //links[i].t[links[i].t.length - 1].css("top", "105px");
               links[i].t[links[i].t.length - 1].css("left", (5 + x) + "px");
               links[i].t[links[i].t.length - 1].css("width", (width/(links[i].data.tabs.length) - 2*padding) + "px");
               links[i].t[links[i].t.length - 1].css("height", (36-2*padding) + "px");
               links[i].t[links[i].t.length - 1].css("padding", (padding) + "px");
               links[i].t[links[i].t.length - 1].click()
               // top: 105px;
               // left: 5px;
               // padding: 20px;
               // width: 20px;
               // height: 20px;
          }
          links[i].p = $("<div class=linkp>this is some information</div>");
          links[i].body.append(links[i].head);
          for(var o = 0; o < links[i].t.length;o++){
               links[i].body.append(links[i].t[o]);
          }
          links[i].body.append(links[i].p);
     }
}

dropDownCode();
linkCode();
