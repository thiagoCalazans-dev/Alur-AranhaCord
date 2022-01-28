import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import Titulo from "../components/Titulo";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";

export default function PaginaInicial() {
  const [username, setUsername] = useState("thiagoCalazans-dev");
  const rotas = useRouter();
  const [git, setGit] = useState({});  

  
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then((response)=>response.json()
    .then((data) => setGit(data))
    );         
  },[username])

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          backgroundImage:
            "url(https://www.nerdtrip.com.br/wp-content/uploads/2019/03/spider-man-into-the-spider-verse-2880x1800-miles-morales-4k-17357.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "column",
            },
            width: "100%",
            maxWidth: "400px",
            borderRadius: "5px",
            paddingLeft: "0px",
            paddingRight: "0px",
            margin: "128px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            //backgroundColor: appConfig.theme.colors.neutrals['000'],
          }}
        >
          {" "}
          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals["000"],
                // backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >                        
            </Text>
          </Box>
          {/* Photo Area */}
          {/* Formulário */}
          <Box
          onSubmit={(e) => {
            e.preventDefault();
            console.log(rotas)
            rotas.push(`/chat?username=${username}`)
          }} 
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Bem vindo ao Alur-Aranha Verso!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginTop: "8px",
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals["000"],
                //backgroundColor: appConfig.theme.colors.neutrals[900],
              }}
            >
              {}              
              {git.name}<br/>
              {git.location}
            </Text>

            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              placeholder="Usuário"
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals["600"],
                  mainColor: appConfig.theme.colors.primary["500"],
                  mainColorHighlight: appConfig.theme.colors.neutrals["600"],
                  backgroundColor: appConfig.theme.colors.neutrals["000"],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}
        </Box>
      </Box>
    </>
  );
}
