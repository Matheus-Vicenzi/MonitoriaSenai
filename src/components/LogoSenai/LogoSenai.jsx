import "/src/index.css";
import "./LogoSenai.css";

export default function LogoSenai(props) {
  return (
    <div className="main-logo-box">
      <img className="main-logo" src={props.url} alt={props.alt} />
    </div>
  );
}
