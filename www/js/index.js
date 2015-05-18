
function dale(){
//alert("vamos");
cordova.plugins.barcodeScanner.scan(
      function (result) {
      	var s = result.text;
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
		$('#recibeScan').html(s);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   
}
