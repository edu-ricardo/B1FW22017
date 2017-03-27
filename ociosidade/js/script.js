/// <reference path="../typings/index.d.ts" />

var arrayOciosidades = [];

function Add() {
    var desc = $('#edtDescricao').val();
    var tt = $('#edtTempoTotal').val();    
    var tuso = $('#edtTempoUtilizado').val();    
    var o = new Ociosidade(desc, tt, tuso);
    arrayOciosidades.push(o);
    var table = $('#tblData');
    table.empty();
    arrayOciosidades.forEach(function(element, i) {
        table.append('<tr> <th scope=\'row\'>'+(i+1)+'</th> <td>'+element.descricao+'</td> <td>'+element.ttotal+'</td> <td>'+element.tuso+'</td> </tr>');
    }, this);
}