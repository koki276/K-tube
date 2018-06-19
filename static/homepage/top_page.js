$(function () {
   $('#mission-angle-up').click(
       function () {
           $('.mission-cover').slideUp();
       }
   )
   $('#vision-angle-up').click(
       function () {
           $('.vision-cover').slideUp();
       }
   )
   $('#value-angle-up').click(
       function () {
           $('.value-cover').slideUp();
       }
   )


   $('#mission-angle-down').click(
       function () {
           $('.mission-cover').slideToggle();
       }
   )
   $('#vision-angle-down').click(
       function () {
           $('.vision-cover').slideToggle();
       }
   )
   $('#value-angle-down').click(
       function () {
           $('.value-cover').slideToggle();
       }
   )
});