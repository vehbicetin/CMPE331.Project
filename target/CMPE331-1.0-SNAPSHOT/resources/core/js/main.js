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

function searchDept() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchDeparture");
    filter = input.value.toUpperCase();
    table = document.getElementById("excelDataTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchDest() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchDestination");
    filter = input.value.toUpperCase();
    table = document.getElementById("excelDataTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function search() {
    // Declare variables
    var input, inputTwo, filter, filterTwo, table, tr, td, i;
    input = document.getElementById("searchDeparture");
    inputTwo = document.getElementById("searchDestination");
    filter = input.value.toUpperCase();
    filterTwo = inputTwo.value.toUpperCase();
    table = document.getElementById("excelDataTable");
    tr = table.getElementsByTagName("tr");

    if (input != null && inputTwo != null){
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {


            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    td = tr[i].getElementsByTagName("td")[2];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filterTwo) > -1) {
                            tr[i].style.display = "";
                            td = tr[i].getElementsByTagName("td")[1];
                        }
                        else {
                            tr[i].style.display = "none";
                            td = tr[i].getElementsByTagName("td")[1];
                        }
                    }
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    }


}