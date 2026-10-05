import './ServiçoCard.css'
function ServiçoCard(icone, titulo ,descricao){
    return(
        <div className="servicos-card">
          <span>(icone)</span>
          <h3>(titulo)</h3>
          <p>(descricao)</p>
        </div>

    );
}
export default ServiçoCard;