const modalDetalhes = new bootstrap.Modal(document.getElementById('modal-detalhes'));
/**Detalhes */
function abrirModalDetalhes(id){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            resposta = xhr.responseText;
            conteudo.innerHTML = resposta;
            modalDetalhes.show();
            }
        }
        xhr.open('GET', 'ajax/detalhes.php?produto='+id);
        xhr.send();
}


/**MUDAR COR FAV */
function mudarCorFav(btn) {
    var property = document.getElementById(btn);
       if (property.style.color === "red") {
          property.style.color = "white";   
       }
       else {
          property.style.color = "red";
       }
    }
function mudarBtnFav(btn) {
    var property = document.getElementById(btn);
        if (property.classList.contains('bi-heart')) {
            property.classList.remove('bi-heart');
            property.classList.add('bi-heart-fill'); 
        }
        else {
            property.classList.remove('bi-heart-fill');
            property.classList.add('bi-heart'); 
        }
    }
        
function mudarCorFavNov(btn) {
    var property = document.getElementById(btn);
       if (property.style.color === "red") {
          property.style.color = "white"
          count = 1;        
       }
       else {
          property.style.color = "red"
          count = 0;
       }
    }

/**Registar*/

 async function registar() {
    let xhr = new XMLHttpRequest();
  
    if (
      document.getElementById("registar-confirmar-pass").value ===
      document.getElementById("registar-pass").value
    ) {
      let formData = new FormData();
  
      formData.append("nomeRegisto", document.getElementById("registar-nome").value);
      formData.append("passRegisto", document.getElementById("registar-pass").value);
      formData.append("emailRegisto", document.getElementById("registar-email").value);
      xhr.open("POST", "forms/registar.php");
      xhr.onload = function () {
        if (xhr.status === 200) {
          resposta = xhr.responseText;
          if (resposta === "deu") {
            const html =
              '<div class="mostrar-alerta alert alert-success alert-dismissible fade show" role="alert">\
              Registo com sucesso\
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
              </div>\
        ';
            avisoregistar.innerHTML = html;
            setTimeout(function () {
              window.open("login.php", "_SELF");
            }, 2000);
          } else {
            resposta = xhr.responseText;
            avisoregistar.innerHTML = "";
            avisoregistar.innerHTML = resposta;
          }
        }
      };
      xhr.send(formData);
      
    }else{
        const html = '<div class="mostrar-alerta alert alert-warning alert-dismissible fade show" role="alert">\
        As passwords não coincidem\
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
        </div>\
    ';
    avisoregistar.innerHTML = html;

    }
}


/**Login*/
  async function login() {
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
  
    formData.append("loginEmail", document.getElementById("login-email").value);
    formData.append("loginPass", document.getElementById("login-pass").value);
    xhr.open("POST", "forms/login.php");
    xhr.onload = function () {
      if (xhr.status === 200) {
        resposta = xhr.responseText;
        if (resposta === "deu") {
          const html =
            '<div class="mostrar-alerta alert alert-success alert-dismissible fade show" role="alert">\
            Login com sucesso\
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
            </div>\
                  ';
          avisologin.innerHTML = html;
          setTimeout(function () {
            window.open("index.php", "_SELF");
          }, 700);
        } else {
          resposta = xhr.responseText;
          avisologin.innerHTML = "";
          avisologin.innerHTML = resposta;
        }
      }
    };
  
    xhr.send(formData);
  }

  /**Favoritos*/
  async function favoritoajax(iduser, idcasa, favoritar) {
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
  
    formData.append("iduser", iduser);
    formData.append("idcasa", idcasa);
    formData.append("favoritar", favoritar);
    xhr.open("POST", "forms/favoritos.php");
    xhr.onload = function () {
      if (xhr.status === 200) {
        location.reload();
      }
    };
  
    xhr.send(formData);
  }

