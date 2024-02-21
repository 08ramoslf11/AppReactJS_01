import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import CustominputLabel from "@/components/CustominputLabel";

export default function Home() {
    
  function salvarDados()
  {
    const dadosProduto = {
      Id : 0,
      Nome : document.getElementById('txtNome').value,
      Descricao : document.getElementById('txtDescricao').value,
      Imagem : document.getElementById('txtImagem').value,
      Preco : document.getElementById('txtPreco').value,
      Disponivel : document.getElementById('txtDisponivel').checked,
      Novidade : document.getElementById('txtNovidade').checked,
    }    

    fetch('https://localhost:7282/api/Produto', {
      method: "POST",
      body: JSON.stringify(dadosProduto),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

    console.log(dadosProduto)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <CustominputLabel id="txtNome" texto="Nome" col="8" />
        <CustominputLabel id="txtPreco" texto="Preço" col="4" />
        <CustomTextAreaLabel id="txtDescricao" texto="Descrição" col="12" />
        <CustominputLabel id="txtImagem" texto="Imagem" col="12" />
        <CustomCheckboxLabel id="txtCheckbox" texto="Disponivel" col="6"/>
        <CustomCheckboxLabel id="txtCheckbox" texto="Novidade" col="6"/>
        <div className="col-12 mb-3">
          <button className="btn btn-primary" onClick={() => salvarDados()}> Salvar </button> 
        </div>
      </div>
    </div>


  );
}
