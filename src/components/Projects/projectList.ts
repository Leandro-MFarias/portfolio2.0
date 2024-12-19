import cinevault from "../../assets/cinevault-macbook.png";
import ecommerce from "../../assets/e-commerce-macbook.png";
import portfolio from "../../assets/portfolio-macbook.png";
import searchAPI from "../../assets/searchAPI-macbook.png";
import todoList from "../../assets/todoList-macbook.png";
import weather from "../../assets/weatherApp-macbook.png";

export const slides = [
  {
    title: "Cinevault",
    description: "Projeto que simula uma plataforma de streaming, desenvolvido com React, JavaScript, Tailwind CSS, React Query, e React Router DOM. Este projeto consome dados da API TMDB",
    tecnologias: "React, TypeScript, Tailwind CSS",
    site: "https://cinevault-opal.vercel.app/",
    img: cinevault,
  },
  {
    title: "E-Commerce",
    description: "Um aplicativo web totalmente funcional desenvolvido para oferecer uma experiência de compra perfeita, com foco em gerenciamento de estado, design responsivo e navegação fácil. Ele permite que os usuários naveguem pelos produtos, visualizem detalhes e adicionem itens a um carrinho de compras.",
    tecnologias: 'React, JavaScript, CSS3, Context API',
    site: "https://e-commerce-facul.vercel.app/",
    img: ecommerce,
  },
  {
    title: "Weather App",
    description: "Website de previsão do tempo, integrando a API OpenWeatherMap para buscar informações sobre o clima em tempo real. Com ele, é possível visualizar o clima atual e a previsão para os próximos 5 dias. O aplicativo também permite pesquisar cidades manualmente ou por meio de botões predefinidos.",
    tecnologias: "React, JavaScript, e Tailwind CSS",
    site: "https://weather-app-blond-nine-29.vercel.app/",
    img: weather,
  },
  {
    title: "To-do List",
    description: "Este é um aplicativo de lista de tarefas, o objetivo do projeto era criar um aplicativo de gerenciamento de tarefas totalmente funcional, onde os usuários podem adicionar, editar e excluir tarefas. O aplicativo foi projetado para ser responsivo, fornecendo uma experiência de usuário intuitiva em diferentes dispositivos.",
    tecnologias: "React, TypeScript, Tailwind CSS e Context API",
    site: "https://to-do-list-zeta-roan.vercel.app/",
    img: todoList,
  },
  {
    title: "Search API",
    description: "Primeiro projeto usando uma API, nele eu criei um layout bem simples, meu objetivo era focar no JavaScript onde eu teria que pegar o nome que o usuário colocou e buscar no GitHub onde iria mostrar as informações dele e os repositórios.",
    tecnologias: 'HTML5, CSS3, JavaScript',
    site: "https://leandro-mfarias.github.io/search-github-api/",
    img: searchAPI,
  },
];

