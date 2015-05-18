
function dale(){
//alert("vamos");
cordova.plugins.barcodeScanner.scan(
      function (result) {
      	var s = result.text;
          alert(s);
		$('#recibeScan').html(s);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   
}
