function Home() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Seja bem-vinde! </h2>
          <p>Expresse aqui seus pensamentos e opniões</p>
        </div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.imgur.com/VpwApCU.png"
            alt="Imagem da pagina home"
            width="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
