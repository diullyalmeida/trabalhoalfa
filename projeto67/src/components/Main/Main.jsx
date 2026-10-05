import "./main.css";
import './ServiçoCard'
function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>criamos sites que funcionam</h1>
        <p>
          layouts resposivos,rapidos e acessiveis para on seu negócio crescer na
          web.
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            peça um orçamento
          </a>
          <a href="portofolio" className="btn-secondory">
            ver portofolio"
          </a>
        </div>
      </section>
      <section className="serviços">
        <h2>Nossos serviços</h2>
        <div className="servicos-grid">
          <div className="servicos-card"></div>
          <span>👍</span>
          <h3>Design de interface</h3>
          <p>Telas claras, pensadas para usuario</p>
        </div>
  
        <div className="servico-card">
          <span>😁</span>
          <h1>Performace</h1>
          <p>paginas leves que carregam rapido</p>
        </div>
      </section>
    </main>
  );
}
export default Main;
