
function dale(){
alert("vamos");
cordova.plugins.barcodeScanner.scan(
      function (result) {
         var s = "Result: " + result.text + "<br/>" +
	"Format: " + result.format + "<br/>" +
	"Cancelled: " + result.cancelled;
	resultDiv.innerHTML = s;
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   
}
