'use strict';

/* Controllers */
//
//var spreeMarketController = angular.module('spreeMarketController', []);
//
//spreeMarket.controller('MainCtrl',['$scope','$log',function($scope,$log){



    $( document ).ready(function() {
        document.getElementById("SuperMedWeb").onmouseover = function() {mouseOver(this)};
        document.getElementById("SuperMedWeb").onmouseout = function(){mouseOut(this)};
        document.getElementById("ScreenWeek").onmouseover = function() {mouseOver(this)};
        document.getElementById("ScreenWeek").onmouseout = function(){mouseOut(this)};
        document.getElementById("FanPrint").onmouseover = function() {mouseOver(this)};
        document.getElementById("FanPrint").onmouseout = function(){mouseOut(this)};

        $(".links").mouseover(function(){
            $(this).css({'border-bottom': '2px solid'})
        }).mouseout(function(){
            $(this).css({'border-bottom': 'none'})
        });

        $("#button_1").mouseover(function(){
            $(this).addClass('mouse_on')
        }).mouseout(function(){
            $(this).removeClass('mouse_on')
        });

    });

function mouseOut(e){
    console.log(e.id);
    if(e.id == 'SuperMedWeb'){
        var t = "";
        t +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        $('#SuperMedWeb').html(t).trigger('create');

    }else if(e.id == 'ScreenWeek'){
        var y = "";
        y +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        $('#ScreenWeek').html(y).trigger('create');
    }else if(e.id == 'FanPrint'){
        var r = "";
        r +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        $('#FanPrint').html(r).trigger('create');
    }

}

function mouseOver(e){
    console.log(e.id);
    if(e.id == 'SuperMedWeb'){
        var t = "";
        t +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        t += '<div class="mouse_hover" >';
        t += '<h4 style="color: #ffffff">Supermedweb</h4>';
        t += '<button type="button" class="btn btn-default" style="  padding: 13px 23px;  font-size: 20px;background-color: #000000; border-color: #ffffff; color: white">View Details</button>';
        +'</div>';

        $('#SuperMedWeb').html(t).trigger('create');
    }else if(e.id == 'ScreenWeek'){
        var y = "";
        y +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        y += '<div class="mouse_hover" >';
        y += '<h4 style="color: #ffffff">ScreenWeek</h4>';
        y += '<button type="button" class="btn btn-default" style="  padding: 13px 23px;  font-size: 20px;background-color: #000000; border-color: #ffffff; color: white">View Details</button>';
        +'</div>';

        $('#ScreenWeek').html(y).trigger('create');
    }else if(e.id == 'FanPrint'){
        var r = "";
        r +=' <a href="#" class="thumbnail"><img src="img/life.jpg" style="height: 242px;"></a>'
        r += '<div class="mouse_hover" >';
        r += '<h4 style="color: #ffffff">FanPrint</h4>';
        r += '<button type="button" class="btn btn-default" style="  padding: 13px 23px;  font-size: 20px;background-color: #000000; border-color: #ffffff; color: white">View Details</button>';
        r += '</div>';

        $('#FanPrint').html(r).trigger('create');
    }

}



$(window).scroll(function(){
   var window_top = $(window).scrollTop();
  if(window_top != 0){
      $('#nav').css({'background-color': 'black','border-color':'black'})
   }else{
      $(nav).scrollTop(function(){
          $(this).css({'background-color': 'transparent','border-color':'transparent'})
      })

  }
});

//}]);
