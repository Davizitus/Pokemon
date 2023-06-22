function Botao(){
   function aaa(){
    window.alert("Olá, eu sou um evento!")
   }
    
    return (
      //html
      <div>
        <input type="button" value={"Clique aqui"}  onClick={aaa}/>
      </div>
    );
  }
  
  export default Botao;