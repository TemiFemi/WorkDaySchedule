var currenTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currenTime);
var currentHour = moment().hour();
var workHour = [9, 10, 11, 12, 13, 14, 15, 16, 18];