class Certificate {
    constructor(nome, instituicao, data, descricao, certificado) {
        this.nome=nome;
        this.instituicao=instituicao;
        this.data=data;
        this.descricao=descricao;
        this.certificado=certificado;
    }

    render() {
        return `
            <div class="certificado-card">
                <h3>${this.nome}</h3>
                <div>
                    <h4>${this.instituicao}</h4>
                    <h4>${this.data}</h4>
                </div>
                <p>${this.descricao}</p>
                <a href="${this.certificado}" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
        `
    }
}

class CertificateManager {
    constructor() {
        this.certificados = [];
        
        this.init();
    }

    init() {
        this.carregarCertificados();
        this.renderizarCertificados();
    }

    carregarCertificados() {
        this.certificados = [
            new Certificate("Intro to SQL", "Kaggle", "10/2025", "Fundamentos de SQL na prática, abordando seleção, filtragem, junções, agregações e manipulação de dados em bancos relacionais.", "/certificados/Intro to SQL.png"),
            new Certificate("Modelagem de dados", "Fundação Bradesco", "10/2025", "Principais conceitos de modelagem de dados, incluindo modelos conceitual, lógico e físico, normalização e boas práticas.", "/certificados/Modelagem de dados.pdf"),
            new Certificate("Curso básico de Git", "Cursa", "02/2025", "Controle de versões com Git, cobrindo criação de repositórios, commits, branches, merge e uso básico do GitHub para colaboração em projetos.", "/certificados/Git.pdf"),
            new Certificate("Imersão Agentes de IA", "Alura & Google", "09/2025", "Criação de agentes de IA utilizando ferramentas do Google, explorando conceitos de IA generativa, automações e construção de agentes práticos.", "/certificados/AluraIA.pdf")
        ]
    }
    renderizarCertificados() {
        const container = document.getElementById('certificadoContainer');
        container.innerHTML = '';

        this.certificados.forEach(certificado => {
            container.innerHTML += certificado.render();
        })
    }
}