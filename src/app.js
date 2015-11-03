(function(){function appConfig(e,t){var a=e.extendPalette("blue",{});e.definePalette("lightText",a),e.theme("default").primaryPalette("lightText").accentPalette("yellow"),e.theme("alternative").primaryPalette("blue").accentPalette("yellow").dark();var n=function(e){return"€"+e.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};t.setOptions({tooltipTemplate:function(e){return n(e.value)},scaleLabel:function(e){return n(Number(e.value))}})}function exceptionDecorator(e){e.decorator("$exceptionHandler",["$delegate","$log",function(e,t){return function(a,n){t.debug("ERROR:"+a),e(a,n)}}])}appConfig.$inject=["$mdThemingProvider","ChartJsProvider"];var CalculatorCtrl=function(){function e(e){this.$scope=e;var t=e;t.pageTitle="ROI Calculator",t.visits=1e6,t.convRate=5,t.orderValue=50,t.visitsImp=10,t.convRateImp=11,t.orderValueImp=13;var a=function(){var t=12*e.visits*50*.05;e.data=[[t,t+e.visitsChange+e.convRateChange+e.orderValueChange]]};t.$watch(function(){var e=t.visits*t.visitsImp/100;return 12*e*.05*50},function(e){t.visitsChange=e,a()}),t.$watch(function(){var e=t.convRate*t.convRateImp/100;return 12*t.visits*e/100*50},function(e){t.convRateChange=e,a()}),t.$watch(function(){var e=t.orderValue*t.orderValueImp/100;return.05*t.visits*12*e},function(e){t.orderValueChange=e,a()}),e.labels=["Customer Current State","Goal State"]}return e.$inject=["$scope"],e.$inject=["$scope"],e}();angular.module("calculatorApp",["templates","ngMaterial","chart.js"]).controller("CalculatorCtrl",CalculatorCtrl).config(appConfig),angular.module("calculatorApp").config(exceptionDecorator),exceptionDecorator.$inject=["$provide"];}());