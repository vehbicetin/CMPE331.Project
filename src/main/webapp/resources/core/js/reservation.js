/*  CMPE331 Term Project.
 *  Adem Aldemir, Enes Nehir Gürdamar, Emir Burak Selvi, Vehbi Çetin.
 *  Here is reservation JavaScript page.
 *  This file making reservation on selected bus and seat. Making them reserved to avoid another reservation.
 *  Created on 19.12.2016
 */

var myList;
var sBus;
var sSeat;

$(document).ready(function() {

    if ($('#excelDataTableThree').find('td').length == 0){
        $.ajax({url: "/selected", success: function(result){
            myList = result;
            buildHtmlTable('#excelDataTableThree');
        }});
    }
});

function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(myList,selector);
    for (var i=0; i<myList.length;i++){
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex<columns.length ; colIndex++){
            var cellValue = myList[i][columns[colIndex]];
            if (cellValue == null) {
                cellValue = "";
            }
            if (colIndex==0){
                sBus = cellValue;
            }
            if (colIndex==1){
                sSeat = cellValue;
            }
            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
    document.getElementById('selectedS').value = "Selected bus: " + sBus + " Selected seat: " + sSeat;
}

function addAllColumnHeaders(myList,selector){
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for(var i=0;i<myList.length;i++){
        var rowHash = myList[i];
        for (var key in rowHash){
            if ($.inArray(key,columnSet) == -1){
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}
