var app=angular.module('01HolaMundoApp');

var fnDirectiva=function(){
    var resultado={};
    resultado.restrict='AE';//A:Atributo; E:Elemento
    resultado.replace='true';
    resultado.template='<p>Hola.  Creando directivas.</p>';
    return resultado;  
};

app.directive('jvCreditos', fnDirectiva);

app.directive('jvColores', function(){
    
    var colorear=function(scope, elem){
        var $elem=angular.element(elem);
        //elem[0].style.backgroundColor='red';
        elem.css('background-color','red');
    };
    
    return{
        restrict:'AE',
        link:colorear
    };
});

app.directive('masColores', function(){
var $ = angular.element;
        var colors = ['#FFAA00', '#FFD300', '#531DFF', '#1A60FF', '#FFCF70', '#FFE670', '#9E80FF'];
 
        var replaceWithColors = function(element) {
            var originalText = element.text();
            var $newContent = $('<span>');
            for (var i=0; i < originalText.length; i++) {
                var colorIdx = i % colors.length;
                var char = originalText.charAt(i);
                $newContent.append(
                    $('<span>').css('color', colors[colorIdx]).text(char)
                );
            }
            element.html($newContent);
        };
 
        return {
            restrict: 'AE',
            link : function(scope, element, attrs) {
                replaceWithColors(element);
            }
        };
});