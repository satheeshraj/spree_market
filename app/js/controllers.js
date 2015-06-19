'use strict';

/* Controllers */
//
//var spreeMarketController = angular.module('spreeMarketController', []);
//
//spreeMarket.controller('MainCtrl',['$scope','$log',function($scope,$log){



    $( document ).ready(function() {
        $("#id2").hide();
        $("#id4").hide();
        $("#id6").hide();
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

        $("#button_2").mouseover(function(){
            $(this).addClass('mouse_on_about')
        }).mouseout(function(){
            $(this).removeClass('mouse_on_about')
        });
    });


function mouseOver(e){
    if(e.id == 'SuperMedWeb'){
        $("#id1").show();
        $("#id2").show();
    }else if(e.id == 'ScreenWeek'){
        $("#id3").show();
        $("#id4").show();
    }else if(e.id == 'FanPrint'){
        $("#id5").show();
        $("#id6").show();
    }
}

function mouseOut(e){
    if(e.id == 'SuperMedWeb'){
        $("#id1").show();
        $("#id2").hide();
    }else if(e.id == 'ScreenWeek'){
        $("#id3").show();
        $("#id4").hide();
    }else if(e.id == 'FanPrint'){
        $("#id5").show();
        $("#id6").hide();
    }
}



$(window).scroll(function(){
   var window_top = $(window).scrollTop();
  if(window_top != 0){
      $('#nav').css({'background-color': 'black','border-color':'black'})
   }else{
      $('#nav').scrollTop(function(){
          $(this).css({'background-color': 'transparent','border-color':'transparent'})
      })

  }
});

//}]);
