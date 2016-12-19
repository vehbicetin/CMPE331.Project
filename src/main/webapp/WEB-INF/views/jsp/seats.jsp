<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>BAS</title>

    <spring:url value="/resources/core/css/seats.css" var="coreCss" />
    <spring:url value="/resources/core/css/bootstrap.min.css" var="bootstrapCss" />
    <link href="${bootstrapCss}" rel="stylesheet" />
    <link href="${coreCss}" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="/resources/core/css/seats.css">

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

    </div>
</div>

<table id="excelDataTableTwo"></table>

<br>

<form method="post" action="reservation" style="display: none" id="frmSeat">
    <input type="number" id="seat_id" name="seat_id">
    <input type="submit" value="Show Seats" id="btnSubmit">
</form>

<footer>
    <p>&#169 Bus Automation System 2016</p>
</footer>

</div>

<spring:url value="/resources/core/css/seats.js" var="coreJs" />
<spring:url value="/resources/core/css/bootstrap.min.js" var="bootstrapJs" />

<script src="${coreJs}"></script>
<script src="${bootstrapJs}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="/resources/core/js/seats.js"></script>

</body>
</html>
