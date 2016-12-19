<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>BAS</title>

    <spring:url value="/resources/core/css/reservation.css" var="coreCss" />
    <spring:url value="/resources/core/css/bootstrap.min.css" var="bootstrapCss" />
    <link href="${bootstrapCss}" rel="stylesheet" />
    <link href="${coreCss}" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="/resources/core/css/reservation.css">

</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">BAS - Home Page</a>
        </div>
        <
    </div>
</nav>

<div class="jumbotron">
    <div class="container">
        <p class="div1"></p>
        <h1>${title}</h1>
        <p>
            <c:if test="${not empty name}">
                Welcome ${name}
            </c:if>

            <c:if test="${empty name}">
                Welcome to the Bus Automation System!
            </c:if>
        </p>

        <form action="complete" method="post" >
            <table id="excelDataTableThree" style="display: none"></table>
            <input type="text" id="selectedS" name="selectedS" contenteditable="false" placeholder="Bus & Seat">
            <input id="name" type="text" placeholder="Name" name="name"><br>
            <input type="text" placeholder="Credit Card Number" name="c_number" size="50">
            <br><br>
            <input type="submit" value="Submit" onclick="alert(document.getElementById('name').value + ', Reservation is completed! ' + document.getElementById('selectedS').value)">
        </form>

    </div>
</div>

<br>

<footer>
    <p>&#169 Bus Automation System 2016</p>
</footer>

</div>

<spring:url value="/resources/core/css/reservation.js" var="coreJs" />
<spring:url value="/resources/core/css/bootstrap.min.js" var="bootstrapJs" />

<script src="${coreJs}"></script>
<script src="${bootstrapJs}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="/resources/core/js/reservation.js"></script>

</body>
</html>

