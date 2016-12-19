/**
 * Created by Lenovo on 19.12.2016.
 */

var myList;
var isStatus = true;

$(document).ready(function() {

    if ($('#excelDataTableTwo').find('td').length == 0){
        $.ajax({url: "/res", success: function(result){
            myList = result;
            buildHtmlTableForSeats('#excelDataTableTwo');
        }});
    }
});

function buildHtmlTableForSeats(selector) {
    var columns = addAllColumnHeaders(myList,selector);
    for (var i=0; i<myList.length;i++){
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex<columns.length ; colIndex++){
            var cellValue = myList[i][columns[colIndex]];

            if (document.getElementById('seat')){
                $('button').each(function(){
                    if (this.id == "seat"){
                        $(this).attr("id",""+btnId);

                        $("#"+this.id).click(function () {
                            document.getElementById('seat_id').value = this.id;
                            document.forms["frmSeat"].submit();
                        });

                        if (isStatus!=true){
                            this.disabled =true;
                            isStatus = true;
                        }

                    }
                });
            }
            if (cellValue == null) {
                cellValue = "";
            }
            if (colIndex==0){
                selectedBus = cellValue;
            }
            if (colIndex==1){
                btnId = cellValue;
            }
            if (colIndex==2){
                isStatus = cellValue;
            }
            if (colIndex==columns.length-1){
                row$.append($('<td><button class="btn btn-primary" type="submit" id="seat"">Choose</button></td>'));

            }
            row$.append($('<td/>').html(cellValue));
        }


        $(selector).append(row$);
    }
    if (document.getElementById('seat')){
        $('button').each(function(){
            if (this.id == "seat"){
                $(this).attr("id",""+btnId);
                $(this).attr("href","reservation");
                if (isStatus!=true){
                    this.disabled =true;
                    isStatus = true;
                }
            }
        });
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
    headerTr$.append($('<th>Select</th>'));
    columnSet.push("Select");
    $(selector).append(headerTr$);

    return columnSet;
}
