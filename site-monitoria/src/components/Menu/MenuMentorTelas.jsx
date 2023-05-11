import React from "react";

export default function MenuMentorTelas() {
  return (
    <div>
      <Menu
        lista={["Curso/Disciplina", "Agenda", "Chamados", "Sair"].map(
          (text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/RegisterCourseDiscipline">
                    {index == 0 && <AddIcon />}
                  </Link>
                  <Link to="/ViewTickets">
                    {index == 1 && <HeadsetMicIcon />}
                  </Link>
                  <Link to="/">{index == 2 && <PersonIcon />}</Link>
                  <Link to="/">{index == 3 && <ExitToAppIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
        titulo="Seja Bem Vindo a Monitoria"
        logo={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
      />
    </div>
  );
}
