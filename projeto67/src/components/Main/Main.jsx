import "./main.css";
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
            <a href="#orçamento"className="btn-primary">peça um orçamento</a>
             <a href="portofolio"className="btn-secondory">ver portofolio"</a>
        </div>
      </section>
      <section className="serviços"></section>
    </main>
  );
}
export default Main