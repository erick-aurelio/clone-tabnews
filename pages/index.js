function Home() {
  const fundoEstilo = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-nTbWT-3TPSibvpGuLsX9uNRticHzV6uDM6tsAUp1jvrVEUOJuOm-m9v&s=10')", // Substitua pelo link da sua imagem
    backgroundSize: "cover", // Faz a imagem cobrir a tela inteira
    backgroundPosition: "center", // Centraliza a imagem
    backgroundRepeat: "no-repeat", // Evita que a imagem fique se repetindo
    minHeight: "100vh", // Garante que o fundo ocupe toda a altura da tela
    display: "flex", // Ativa o flexbox para centralizar o texto
    justifyContent: "center", // Centraliza horizontalmente
    alignItems: "center", // Centraliza verticalmente
    margin: 0, // Remove margens padrão
  };

  return (
    <div style={fundoEstilo}>
      <h1 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
        Vinícius putão da barra 👥👩‍❤️‍💋‍👨
      </h1>
    </div>
  );
}

function teste() {
  console.log("teste");
}

function teste2() {
  console.log("identação errada");
}

export default Home;
