function renderContact() {
    return `
        <section class="contactme" id="contactme">
        <img src="/img/venus.png" alt="venus">
        <div class="worktogether">
            <h1>Let's Work Together!</h1>
            <h2>Tell me about your next big idea.</h2>
            <button class="connect" onclick="abrirModal()">Let's connect<i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </section>
    <div id="modalOverlay" class="modal-overlay" onclick="fecharModal()">
  
  <div id="contatoModal" class="contato-modal" onclick="event.stopPropagation()">
    <div class="close-modal">
      <button onclick="fecharModal()">&times;</button>
      <h2>Let's Connect!</h2>
    </div>

    <div id="divEmail" class="div-email">
      <h3><i class="fa-regular fa-envelope"></i> Email</h3>
      <p>leticia.furtado2406@gmail.com</p>
    </div>

    <div class="redes-links">
      <a href="https://www.linkedin.com/in/leticia-furtado-053b6033a/">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/LeticiaG24">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </div>

</div>
    `
}
function renderFooter() {
    return `
        <div>
        <div class="leticia">
            <img src="/img/logo.png" alt="logo">
            <h1>Letícia Furtado</h1>
            <h3>Full Stack Developer</h3>
            <div>
              <a href="https://www.linkedin.com/in/leticia-furtado-053b6033a/"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/LeticiaG24"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
        <div class="quicklinks">
            <h2>Quick Links</h2>
            <nav>
                <a href="/index.html#home"><button>Home</button></a>
                <a href="/index.html#about"><button>About me</button></a>
                <a href="/index.html#projects"><button>Projects</button></a>
                <a href="/index.html#skills"><button>Skills</button></a>
                <a href="/index.html#certificate"><button>Certificates</button></a>
            </nav>
        </div>
        </div>
        <p>© 2025 Letícia Furtado. All rights reserved.</p>
    `
}

class FooterManager {
    constructor() {
        this.init();
    }

    init(){
        this.renderizarContact();
        this.renderizarFooter();
    }

    renderizarContact() {
        const container = document.getElementById('contactmeSection');
        container.innerHTML = '';
        container.innerHTML += renderContact();
    }
    renderizarFooter() {
        const container = document.getElementById('footer');
        container.innerHTML = '';
        container.innerHTML += renderFooter();
    }
}