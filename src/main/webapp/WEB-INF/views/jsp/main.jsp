<%--
     CMPE331 Term Project.
     Adem Aldemir, Enes Nehir Gürdamar, Emir Burak Selvi, Vehbi Çetin.
     Here is main JavaServerPage.
     This file have html codes, button places, button variables and others.
     Created on 05.12.2016
--%>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>BAS</title>

    <spring:url value="/resources/core/css/main.css" var="coreCss"/>
    <spring:url value="/resources/core/css/bootstrap.min.css" var="bootstrapCss"/>
    <link href="${bootstrapCss}" rel="stylesheet"/>
    <link href="${coreCss}" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="/resources/core/css/main.css">

</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">BAS - Home Page</a>
        </div>
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

        <p>
            <input type="text" id="searchDeparture" onkeyup="search()" placeholder="Search for departures..">
            <input type="text" id="searchDestination" onkeyup="search()" placeholder="Search for destinations..">
            <a class="btn btn-primary btn-lg" id="list">List Buses</a>
        </p>

    </div>
</div>

<table id="excelDataTable"></table>

<br>

<div id="reservation" style="display:none" class="container">
    <p id="busID"></p>
    <br>
    <a id="seat1" class="btn btn-primary">1</a>
    <a id="seat2" class="btn btn-primary">2</a>
    <a id="seat3" class="btn btn-primary">3</a>
    <a id="seat4" class="btn btn-primary">4</a>
    <a id="seat5" class="btn btn-primary">5</a>
    <a id="seat6" class="btn btn-primary">6</a>
    <a id="seat7" class="btn btn-primary">7</a>
    <a id="seat8" class="btn btn-primary">8</a>
    <a id="seat9" class="btn btn-primary">9</a>
    <a id="seat10" class="btn btn-primary">10</a>

</div>

<br>
<footer>
    <p>&#169 Bus Automation System 2016</p>
</footer>

</div>

<spring:url value="/resources/core/css/main.js" var="coreJs"/>
<spring:url value="/resources/core/css/bootstrap.min.js" var="bootstrapJs"/>

<script src="${coreJs}"></script>
<script src="${bootstrapJs}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="/resources/core/js/main.js"></script>

</body>
</html>
