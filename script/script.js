var change = $("#change");

change.click(function () {
   $(function () {
      var text1 = $("#text1").val();
      var text2 = $("#text2").val();
      var text = $("#forText").val();

      var ex =  $("#forText").text().replace(new RegExp(text1,'gi'), text2)
      
      $("#forText").text(ex)
      
   })
   
})
