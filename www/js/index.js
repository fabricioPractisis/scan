function dale(){
//alert("vamos");
cordova.plugins.barcodeScanner.scan(
      function (result) {
		  var id = result.text;
         alert(id);
         document.getElementById("recibeScan").value = id;
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   
}
