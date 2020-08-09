function ver() {
    pagina=new ObjetoAjax();
      pagina.pedirTexto("ejemplo5_doc.html","contenido");
      }
 function ocultar() {
    document.getElementById("contenido").innerHTML="Oculto ...";
      }