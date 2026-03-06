class Tecnologia {
    constructor(nome, imagem, tipo) {
        this.imagem=imagem;
        this.nome=nome;
        this.tipo=tipo;
    }

    render() {
        return `
            <div>
                <img src="${this.imagem}" alt="${this.nome}">
            </div>
        `;
    }

    renderList() {
        return `
            <div class="tech">
                <img src="${this.imagem}" alt="${this.nome}">
                <p>${this.nome}</p>
            </div>
        `
    }
}

class Projeto {
    constructor(nome, tipo, imagem, tecnologiaUsada, descricao, github) {
        this.nome=nome;
        this.tipo=tipo;
        this.imagem=imagem;
        this.tecnologiaUsada=tecnologiaUsada;
        this.descricao=descricao;
        this.github=github;
    }

    render() {
        return `
            <div class="projeto-card" onclick="window.location.href='/projetos/${this.nome.replaceAll(' ', '')}.html';">
                <div class="gradiente">
                    <img src="${this.imagem}" alt="imagem">
                </div>
                <div class="info">
                    <h2>${this.nome}</h2>
                    <div id=${this.nome.replaceAll(' ', '')} class="list-tech">
                        
                    </div>
                    <p>${this.descricao}</p>
                    <a href="/projetos/${this.nome.replaceAll(' ', '')}.html">
                    Read more
                    </a>
                </div>
            </div>
        `;
    }
}

class TechManager {
    constructor() {
        this.tecnologias = [];
        this.projetos = [];
        this.projetosWeb = [];
        this.projetosDesktop = [];
        this.projetosMobile = [];
        this.mainProjetos = [];
        this.init();
    }

    init() {
        this.carregarTecnologias();
        this.carregarProjetos();
        this.filtrarProjetos();
        
        if (document.getElementById('tecnologiaContainer')) {
            this.renderizarTecnologias();
        }
        
        if (document.getElementById('projetoContainer')) {
            this.renderizarProjetos(this.projetos);
            this.renderizarTecnologiasDosProjetos(this.projetos);
        }

        if (document.getElementById('mainProjetoContainer')) {
            this.renderizarProjetosPrincipais();
            this.renderizarTecnologiasDosProjetos(this.mainProjetos);
        }
    }
    carregarTecnologias() {
        this.tecnologias = [
            new Tecnologia("Python", "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", "L"),
            new Tecnologia("Java", "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", "L"),
            new Tecnologia("JavaScript", "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", "L"),
            new Tecnologia("HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", "L"),
            new Tecnologia("CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", "L"),
            new Tecnologia("MySQL", "https://icon.icepanel.io/Technology/svg/MySQL.svg", "BD"),
            new Tecnologia("Figma", "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", "F"),
            new Tecnologia("JavaFX", "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", "BF"),
            new Tecnologia("Flask", "https://skillicons.dev/icons?i=flask", "BF"),
            new Tecnologia("Node.js", "https://skillicons.dev/icons?i=nodejs", "F"),
            new Tecnologia("TypeScript", "https://skillicons.dev/icons?i=ts", "L"),
            new Tecnologia("Git", "https://icon.icepanel.io/Technology/svg/Git.svg", "F"),
            new Tecnologia("GitHub", "https://img.icons8.com/?size=100&id=62856&format=png&color=000000", "F"),
            new Tecnologia("Maven", "https://icon.icepanel.io/Technology/svg/Apache-Maven.svg", "F"),
            new Tecnologia("Jira", "https://icon.icepanel.io/Technology/svg/Jira.svg", "F"),
            new Tecnologia("Canva", "https://icon.icepanel.io/Technology/svg/Canva.svg", "F"),
            new Tecnologia("Vercel", "https://skillicons.dev/icons?i=vercel", "F")
        ]
    }

    renderizarTecnologias() {
        const container = document.getElementById('tecnologiaContainer');
        if (!container) {
            return;
        }
        container.innerHTML = '';

        this.tecnologias.forEach(tecnologia => {
            container.innerHTML += tecnologia.render();
        })
    }

    carregarProjetos() {
        const [python, java, javascript, html, css, mysql, figma, javafx, flask, node, typescript, git, github, maven, jira, canva] = this.tecnologias;

        this.projetos = [
            new Projeto("SIRAAS", "W","/img/siraas.jpg", [python, flask, html, css, figma, canva], "SIRAAS é um site de envio e gerenciamento de atestados médicos e times scrum. Seu sistema inclui gráficos estatísticos e exportação de arquivos.", "https://github.com/Gabrielle0905/SIRAAS"),
            new Projeto("Sphera", "D","/img/sphera.png", [java, javafx, mysql, css, figma, maven],"Sphera é um sistema de PDI desenvolvido em Java que auxilia empresas no acompanhamento do desenvolvimento profissional de colaboradores.", "https://github.com/Minerva2025/Minerva"),
            new Projeto("Mothers3", "D","/img/Mothers3.png", [java, javafx, mysql, css, figma, maven], "Mothers3 é uma aplicação Java Desktop para o planejamento e gerenciamento de encontros de mães de uma igreja.", "https://github.com/LeticiaG24/Mothers3"),
            new Projeto("Kids Helper", "M","/img/kids-helper.png", [figma], "Kids Helper é um protótipo de aplicativo mobile gamificado que incentiva crianças a realizarem tarefas diárias, permitindo que os pais acompanhem o progresso e ofereçam recompensas de forma lúdica."),
        ]
    }

    renderizarProjetosPrincipais() {
        const [siraas, sphera, mothers3, kidsHelper] = this.projetos;
        this.mainProjetos = [siraas, sphera, mothers3];
        const container = document.getElementById('mainProjetoContainer');
        container.innerHTML = '';

        this.mainProjetos.forEach(projeto => {
            container.innerHTML +=  projeto.render();
        });
    }

    renderizarProjetos(lista) {
        const container = document.getElementById('projetoContainer');
        container.innerHTML = '';

        lista.forEach(projeto => {
            container.innerHTML += projeto.render();
        });
    }

    renderizarTecnologiasDosProjetos(lista) {
        lista.forEach(projeto => {
            this.renderTechUsada(projeto.tecnologiaUsada, projeto.nome.replaceAll(' ', ''));
        });
    }

    renderTechUsada(lista, projeto) {
        const container = document.getElementById(projeto);
        container.innerHTML = '';

        lista.forEach(t => {
            container.innerHTML += t.renderList();
        })
    }

    encontrarProjetoPorNome(nome) {
        return this.projetos.find(projeto => 
            projeto.nome.toLowerCase().replaceAll(' ', '') === nome.toLowerCase().replaceAll(' ', '')
        );
    }

    renderDetalhesProjeto(nome) {
        const projeto = this.encontrarProjetoPorNome(nome);
        const container = document.getElementById('visao-geral');

        container.innerHTML = `
                <div class="gradiente">
                    <img src="${projeto.imagem}" alt="${projeto.nome}">
                </div>
                <div class="info">
                    <div class="titulo">
                        <h1>${projeto.nome}</h1>
                        <a href="${projeto.github}"><button class="github-btn">GitHub <i class="fa-brands fa-github"></i></button></a>
                    </div>
                        <div id=${projeto.nome.replaceAll(' ', '')} class="list-tech">
                            
                        </div>
                    <p>${projeto.descricao}</p>
                </div>
        `;

        this.renderTechUsada(projeto.tecnologiaUsada, projeto.nome.replaceAll(' ', ''));
    }
    filtrarProjetos() {
        this.projetosWeb = this.projetos.filter(projeto => projeto.tipo === "W");
        this.projetosDesktop = this.projetos.filter(projeto => projeto.tipo === "D");
        this.projetosMobile = this.projetos.filter(projeto => projeto.tipo === "M");
    }
}