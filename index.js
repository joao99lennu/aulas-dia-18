$.support.cors= true;
$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina1.html")
    }
)

$('#btPagina1').click(

    function (){ 
        console.log("log do console....");
        $('#conteudo').load("pages/pagina1.html")

    }

)

$('#btPagina2').click(
    function(){
        console.log("log do console2....");
        $('#conteudo').load("pages/pagina1.html")
    }
)
