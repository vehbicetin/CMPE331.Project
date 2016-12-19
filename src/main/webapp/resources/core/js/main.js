/*  CMPE331 Term Project.
 *  Adem Aldemir, Enes Nehir Gürdamar, Emir Burak Selvi, Vehbi Çetin.
 *  Here is main JavaScript page.
 *  This file making search function, building html, showing choose button and seats.
 *  Created on 08.12.2016
 */

var myList;
var btnId;

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
            if (document.getElementById('btn')){
                $('button').each(function(){
                    if (this.id == "btn"){
                        $(this).attr("id",""+btnId);
                    }
                    $("#"+this.id).click(function () {
                        document.getElementById('bus_id').value = this.id;
                        document.getElementById('seat_id').value = this.id;
                        document.getElementById('status').value = "true";
                        document.forms[0].submit();
                        if ($('#excelDataTableTwo').find('td').length == 0){
                            $.ajax({url: "/seats", success: function(result){

                                myList = result;
                                buildHtmlTableForSeats('#excelDataTableTwo');
                            }});
                        }

                        each.stop();
                    });
                });
            }
            if (cellValue == null) {
                cellValue = "";
            }
            if (colIndex==0){
                btnId = cellValue;
            }
            if (colIndex==columns.length-1){
                row$.append($('<td><button class="btn btn-primary" onclick="changeDisplay()" type="submit" id="btn"">Choose</button></td>'));

            }
            row$.append($('<td/>').html(cellValue));
        }


        $(selector).append(row$);
    }
    if (document.getElementById('btn')){
        $('button').each(function(){
            if (this.id == "btn"){
                $(this).attr("id",""+btnId);
            }
        });
    }
}

function buildHtmlTableForSeats(selector) {
    var columns = addAllColumnHeaders(myList,selector);
    for (var i=0; i<myList.length;i++){
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex<columns.length ; colIndex++){
            var cellValue = myList[i][columns[colIndex]];
            if (document.getElementById('seat')){
                $('button').each(function(){
                    if (this.id == "seat"){
                        $(this).attr("id","s"+btnId);
                    }
                });
            }
            if (cellValue == null) {
                cellValue = "";
            }
            if (colIndex==0){
                btnId = cellValue;
            }
            if (colIndex==columns.length-1){
                row$.append($('<td><button class="btn btn-primary" type="submit" onclick="changeDisplay()" id="seat"">Choose</button></td>'));

            }
            row$.append($('<td/>').html(cellValue));
        }


        $(selector).append(row$);
    }
    if (document.getElementById('seat')){
        $('button').each(function(){
            if (this.id == "seat"){
                $(this).attr("id","s"+btnId);
            }
        });
    }

}

function changeDisplay(){
    var x = document.getElementById('excelDataTable');
    x.style.display = 'none';
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
    headerTr$.append($('<th>Select</th>'));
    columnSet.push("Select");
    $(selector).append(headerTr$);

    return columnSet;
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