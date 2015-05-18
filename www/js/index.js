function dale(){
//alert("vamos");
cordova.plugins.barcodeScanner.scan(
      function (result) {
		  var id = result.text;
         
		$.post('https://www.practisis.net/nubeposboot/www/saberDatos.php',{
		id:id
		}).done(function(data){
			alert(data);
		});
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   
}
