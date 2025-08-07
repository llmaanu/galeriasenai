const slides = [
  {
    id: 1,
    imagem: "https://i.postimg.cc/5NGk7Zds/biblioteca.jpg",
    titulo: "Biblioteca ",
    descricao: "Lugar onde passo o 'Pós almoço' com meus amigos!"
  },
  {
    id: 2,
    imagem: "https://i.postimg.cc/tRzszjPH/auditorio.jpg",
    titulo: "Auditório",
    descricao: "Espaço onde foi apresentado o curso e onde apresentaremos nosso TCC"
  },
  {
    id: 3,
    imagem: "https://i.postimg.cc/R0cSV7Lz/banco.jpg",
    titulo: "Banco",
    descricao: "Ficava aqui com os meus amigos em dias que a biblioteca estava fechada"
  },
  {
    id: 4,
    imagem: "https://i.postimg.cc/8CVG3FQX/bebedouro.jpg",
    titulo: "Bebedouro",
    descricao: "MELHOR BEBEDOURO DO SENAI"
  },
  {
    id: 5,
    imagem: "https://i.postimg.cc/RV7xtSnc/elevador.jpg",
    titulo: "Elevador",
    descricao: "Fiquei presa com a minha amiga Jheni na tentativa de gravar um video para a nossa campanha de arrecadação de lacres"
  },
  {
    id: 6,
    imagem: "https://i.postimg.cc/fR54H8Cy/escorpiao.jpg",
    titulo: "Escorpiao",
    descricao: "Já trolamos o tio falando que tinhamos visto um escorpião"
  },
  {
    id: 7,
    imagem: "https://i.postimg.cc/ZYNGkbH1/espac-ocoberto.jpg",
    titulo: "espaço coberto",
    descricao: "Foi o cénario para muitos dos nossos videos de arrecadação de lacres"
  },
  {
    id: 8,
    imagem: "https://i.postimg.cc/SNPBMng1/salapuff.jpg",
    titulo: "Sala dos Puffs",
    descricao: "Fizemos muitos trabalhos aquie e rolou ate algumas brigas rs KKKK"
  },
  {
    id: 9,
    imagem: "https://i.postimg.cc/vTy3wsHs/mesacafe.jpg",
    titulo: "Mesa do café",
    descricao: "Mesa que eu costumo sentar com os meus amigos e eu amo os salgados do SENAI"
  },
  {
    id: 10,
    imagem: "https://i.postimg.cc/J46cPJJm/oficina.jpg",
    titulo: "Oficina",
    descricao: "Lugar onde ri muito com meus amigos"
  },
  {
    id: 11,
    imagem: "https://i.postimg.cc/bvbxyB5N/quadra.jpg",
    titulo: "quadra",
    descricao: "Amava tomar banho de sol nos bancos da quadra"
  }
];

let index = 0;
const imgElement = document.getElementById('slide-image');
const descricaoElement = document.getElementById('slide-descricao');

function mostrarSlide() {
  const slide = slides[index];
  imgElement.src = slide.imagem;
  descricaoElement.innerText = slide.descricao;

  // Se quiser usar o id ou título no console:
  console.log(`ID: ${slide.id} | Título: ${slide.titulo}`);
}

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide();
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  mostrarSlide();
});


mostrarSlide();
