import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import appConfig from "../config.json";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { ButtonSendSticker } from "../components/ButtonSendSticker";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTUxNiwiZXhwIjoxOTU4ODY3NTE2fQ.PKlDzLO36IZbbp0ge_INYvnOObfZhmQPh_lrpMHzG-E";
const SUPABASE_URL = "https://gcmncofetsevuetdlblu.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function atualizaChatTempoReal(adicionaMensagem) {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", (respostaAoVivo) => {
      adicionaMensagem(respostaAoVivo.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const rotas = useRouter();
  const usuario = rotas.query.username;
  const [mensagem, setMensagem] = useState();
  const [chat, setChat] = useState([]);

  useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setChat(data);
      });

    atualizaChatTempoReal((novaMensagem) => {
      setChat((valorAtualDoChat) => {
        console.log(valorAtualDoChat);
        return [novaMensagem, ...valorAtualDoChat];
      });
    });
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      de: usuario,
      texto: novaMensagem,
    };

    supabaseClient
      .from("mensagens")
      .insert([mensagem])
      .then(({ data }) => {
        //  setChat([data[0], ...chat]);
        console.log("criando mensagem: ", data);
      });
    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://i.redd.it/d3h7ofnt73621.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          //backgroundColorappConfig.theme.colors.neutrals[700],:
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            boxShadow: "auto",
            //backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {<MessageList mensagens={chat} />}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Insira sua mensagem aqui..."
              onChange={(e) => {
                setMensagem(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              value={mensagem}
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals["999"],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals["000"],
              }}
            />
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                handleNovaMensagem(":sticker:" + sticker);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
