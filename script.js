function intro() {
    document.getElementById("musica")?.play();
    setTimeout(() => {
      alert("Algo mágico está por suceder...");
    }, 2000);
  }
  
  function stay() {
    alert("Te perdiste una gran aventura...");
    window.location.href = "final.html";
  }
  
  function goAtRandom() {
    const paginas = ["cofre.html", "final.html"];
    const aleatoria = paginas[Math.floor(Math.random() * paginas.length)];
    window.location.href = aleatoria;
  }
  
  function openChest() {
    const resultado = document.getElementById("resultado");
    const tesoros = ["¡Has encontrado oro!", "¡Un monstruo te ha atrapado!", "¡El cofre estaba vacío!"];
    const azar = Math.floor(Math.random() * tesoros.length);
    resultado.textContent = tesoros[azar];
  
    setTimeout(() => {
      window.location.href = "final.html";
    }, 3000);
  }