import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";

export function Home() {
  const history = useHistory();

  const navigateToNewRoom = () => {
    history.push("rooms/new");
  };
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúdivas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleIconImg} alt="Logo da google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="digite o codigo a sala" />
            <Button type="submit">Entrar em uma sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}