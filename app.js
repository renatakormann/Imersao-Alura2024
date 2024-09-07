function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const campoPesquisa = document.getElementById("campo-pesquisa");
    const valorPesquisa = campoPesquisa.value.trim().toLowerCase();
    const section = document.getElementById("resultados-pesquisa");
  
    if (valorPesquisa === "") {
      section.innerHTML = "<p>Por favor, digite um termo de pesquisa.</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) { 
      if (dado.titulo.toLowerCase().includes(valorPesquisa) || dado.descricao.toLowerCase().includes(valorPesquisa) || dado.tags.toLowerCase().includes(valorPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2 class="titulo-resultado">${dado.titulo}</h2>
            <p class="descricao-resultado">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank" class="link-resultado">Veja aqui</a>
          </div>
        `;
      }
    }
  
    // Atribui o HTML construído à seção de resultados ou a mensagem de "não encontrado"
    section.innerHTML = resultados || "<p>Busca não encontrada, insira nova pesquisa.</p>";
  }
