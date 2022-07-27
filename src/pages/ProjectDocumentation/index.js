import styles from './styles.module.scss';

import Header from "../../components/Header";
import Footer from '../../components/Footer';

import { AiFillCheckSquare } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ProjectDocumentation() {

   function handleLicense(){
      toast.warning("Em breve...")
   };

   const phasesProjet = [
      "Entendimento do projeto",
      "Instalação das dependências",
      "Conexão com o firebase",
      "Contexto de autenticação",
      "Privatização de rotas",
      "Cadastro de usuário",
      "Login do usuário",
      "LogOut do usuário",
      "Desenvolvimento das páginas: Dashboard, SignIn, SignUp, News e ForgotPassword",
      "Estilização",
      "Adição de modais na aplicação",
      "Hook usePublication",
      "Desenvolvimento das páginas: Profile, Repositories, Repository e MyProjects",
      `Implementação da seção "Meus projetos" na página Profile`,
      "Responsividade da página Dashboard",
      "Variáveis de ambiente",
      "Implementação da página para visualizar usuário",
      "Implementação dos componentes NewsBox e JoinDiscord",
      "Página contribuidores",
      "Página NotFoundUser"
   ];

   return (
      <>
         <Header />

         <div className={styles.container}>
            <h1>📄 Documentação</h1>
            <hr />
            <br />
            <h2>🔎 Sobre o projeto</h2><br />
            <p>
               O projeto se chama <strong>Dev Social Networking</strong> e foi realizado através de um Pair Programming. Ele é uma <i>rede social direcionada para os desenvolvedores</i>, sendo possível: registrar uma conta, editar o perfil, criar publicações, encontrar repositórios da API do Github, salvar publicações, entre outras funcionalidades.
               <br /><br />
               A tela inicial do projeto é a tela de login que necessita de uma conta criada para ter acesso ao site. Assim, você deve clicar no botão para cadastrar-se e criar uma conta. Após criar a conta, o usuário será direcionado automaticamente para a timeline do site.
               <br /><br />
               <b>Na timeline a pessoa tem acesso a diversas funcionalidades disponíveis:</b>
            </p>
            <br />
            <ul>
               <li>
                  <b>• Início:</b> a opção de criar uma publicação, acessar as notícias na barra lateral, acessar a nossa comunidade do discord, acessar o menu que apresenta a opção de “meu perfil”, “seguidores”, “meus projetos”, “encontrar repositórios” e “salvos”.
               </li>
               <hr />
               <br />
               <li>
                  <b>• Perfil:</b> o usuário consegue alterar a imagem do perfil, definir um banner, alterar o nome de usuário, adicionar a função, adicionar localização, adicionar uma biografia, adicionar o link do github e linkedin.
               </li>
               <hr />
               <br />
               <li>
                  <b>• Meus projetos:</b> a opção de adicionar um projeto que vai abrir um modal para que possa completar as informações, como, por exemplo, imagem do projeto, descrição do projeto, link do projeto e da aplicação.
               </li>
               <hr />
               <br />
               <li>
                  <b>• Encontrar repositórios:</b> a página consome a API do github com os repositórios de qualquer pessoa que tenha um repo público.
               </li>
               <hr />
               <br />
               <li>
                  <b>• Notícias:</b> elas são fictícias, mas simulam notícias que o site apresenta na sidebar na timeline.
               </li>
            </ul>
            <br />
            <hr />
            <h2>📁 Páginas</h2>
            <br />
            <p><b>O site tem no total 15 páginas, sendo elas:</b></p>
            <br />

            <p> • SignIn: página de login;</p><br />

            <p> • SignUp: página de cadastro de usuário;</p><br />

            <p> • Followers: página dos seguidores;</p><br />

            <p> • ForgotPassword: página para resetar senha;</p><br />

            <p> • Message: página de mensagens;</p><br />

            <p> • ProfileUser: página de perfil de algum usuário;</p><br />

            <p> • Repository: página que mostra o repositório escolhido pelo usuário.</p><br />

            <p> • NotFound: página para rotas não encontradas.</p><br />

            <Link to="/dashboard" target="_blank">
               <b>• Dashboard: página principal, onde estão as publicações;</b>
            </Link><br /><br />

            <Link to="/contributors" target="_blank">
               <b>• Contributors: página dos contribuidores dos projetos;</b>
            </Link><br /><br />

            <Link to="/myprojects" target="_blank">
               <b>• MyProjects: página para registrar e visualizar seus projetos;</b>
            </Link><br /><br />

            <Link to="/news" target="_blank">
               <b>• News: página de notícias;</b>
            </Link><br /><br />

            <Link to="/profile" target="_blank">
               <b>• Profile: página de perfil do usuário logado;</b>
            </Link><br /><br />

            <Link to="/repositories" target="_blank">
               <b>• Repositories: página para procurar repositórios de acordo com a API do GitHub;</b>
            </Link><br /><br />

            <Link to="/suggestions" target="_blank">
               <b>• Suggestions: página para compartilhar novas ideias para o projeto e/ou relatar erros.</b>
            </Link>
            <br /><br />
            <hr />

            <h2>🎯 Etapas</h2>

            <div className={styles.phasesBox}>
               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[0]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[1]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[2]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[3]}</p>
               </div>
               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[4]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[5]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[6]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[7]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[8]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[9]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[10]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[11]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[12]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[13]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[14]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[15]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[16]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[17]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[18]}</p>
               </div>

               <div className={styles.contentBox}>
                  <AiFillCheckSquare />
                  <p>{phasesProjet[19]}</p>
               </div>
            </div>
            <br />
            <hr />

            <h2>🚀 Tecnologias</h2>
            <br />
            <p><b>No projeto foram utilizadas as seguintes tecnologias:</b></p>

            <div className={styles.linksBox}>
               <div className={styles.contentLinksBox}>
                  <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">
                     • ReactJS
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                     • Sass
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">
                     • React Icons
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">
                     • Axios
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://pt-br.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">
                     • ContextAPI
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://sweetalert2.github.io/" target="_blank" rel="noreferrer">
                     • SweetAlert2
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://firebase.google.com/?hl=pt" target="_blank" rel="noreferrer">
                     • Firebase
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">
                     • React Router Dom
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://fkhadra.github.io/react-toastify/introduction" target="_blank" rel="noreferrer">
                     • React Toastify
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://swiperjs.com/" target="_blank" rel="noreferrer">
                     • Swiper
                  </a>
               </div>

               <div className={styles.contentLinksBox}>
                  <a href="https://mui.com/pt/" target="_blank" rel="noreferrer">
                     • MUI Design
                  </a>
               </div>
            </div><br/><hr />

            <h2>📝 Licença</h2><br />
            <p>Este projeto está sob licença. Consulte o arquivo <strong className={styles.licenseLink} onClick={handleLicense}>LICENSE</strong> para obter mais detalhes.</p>

         </div>

         <Footer />
      </>
   )
}