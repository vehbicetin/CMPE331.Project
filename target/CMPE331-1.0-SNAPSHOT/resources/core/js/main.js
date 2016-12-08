/**
 * Created by Lenovo on 8.12.2016.
 */

var myList;

$(document).ready(function() {
    $("#list").click(function () {
        if ($('#excelDataTable').find('td').length == 0){
            $.ajax({url: "/main", success: function(result){
                myList = result;
                buildHtmlTable('#excelDataTable');
            }});
        }
    })
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
            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
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
