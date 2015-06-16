'use strict';

/* Controllers */

var spreeMarketController = angular.module('spreeMarketController', []);

spreeMarket.controller('MainCtrl',['$scope','$log',function($scope,$log){

$(".links").mouseover(function(){
    $(this).css({'border-bottom': '2px solid'})
}).mouseout(function(){
    $(this).css({'border-bottom': 'none'})
});

$("#button").mouseover(function(){
    $(this).css({'background-color': 'white','color':'black !important'})
}).mouseout(function(){
    $(this).css({'background-color': 'black','color':'white !important'})
});

    //$('html, body').animate({scrollTop:0 }, function(){
    //    $log.debug("33333");
    //});

   $(window).scroll(function(){
       var window_top = $(window).scrollTop();
      if(window_top != 0){
          $('#nav').css({'background-color': 'black','border-color':'black'})
       }else{
          $(nav).scrollTop(function(){
              $(this).css({'background-color': 'transparent','border-color':'transparent'})
          })

       //   $(nav).scroll(function(){
       //       $(this).css({'background-color': 'transparent','border-color':'transparent'})
       //   })
      }
   })

}]);
