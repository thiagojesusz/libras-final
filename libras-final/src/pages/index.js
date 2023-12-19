import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../components/handposeutil";
import * as fp from "fingerpose";
import SinaisDeMao from "../components/sinais";
import { useStopwatch } from "react-timer-hook";

import { Sinalimage, Sinalpass } from "../components/imagens-sinais";

const Inicio = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    reset,
  } = useStopwatch({ autoStart: true });

  const [estadoCam, setEstadoCam] = useState("ligada");
  const [sinal, setSinal] = useState(null);

  let listaSinais = [];
  let sinalAtual = 0;

  let estadoJogo = "iniciado";

  const executarHandpose = async () => {
    const net = await handpose.load();
    _listaSinais();

    setInterval(() => {
      detectar(net);
    }, 150);
  };

  const _listaSinais = () => {
    listaSinais = gerarSinais();
  };

  const embaralhar = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const gerarSinais = () => {
    const senha = embaralhar(Sinalpass);
    return senha;
  };

  const detectar = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const larguraVideo = webcamRef.current.video.videoWidth;
      const alturaVideo = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = larguraVideo;
      webcamRef.current.video.height = alturaVideo;

      canvasRef.current.width = larguraVideo;
      canvasRef.current.height = alturaVideo;

      const mao = await net.estimateHands(video);

      if (mao.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          SinaisDeMao.aSinal,
          SinaisDeMao.bSinal,
          SinaisDeMao.cSinal,
          SinaisDeMao.dSinal,
          SinaisDeMao.eSinal,
          SinaisDeMao.fSinal,
          SinaisDeMao.gSinal,
          SinaisDeMao.hSinal,
          SinaisDeMao.iSinal,
          SinaisDeMao.jSinal,
          SinaisDeMao.kSinal,
          SinaisDeMao.lSinal,
          SinaisDeMao.mSinal,
          SinaisDeMao.nSinal,
          SinaisDeMao.oSinal,
          SinaisDeMao.pSinal,
          SinaisDeMao.qSinal,
          SinaisDeMao.rSinal,
          SinaisDeMao.sSinal,
          SinaisDeMao.tSinal,
          SinaisDeMao.uSinal,
          SinaisDeMao.vSinal,
          SinaisDeMao.wSinal,
          SinaisDeMao.xSinal,
          SinaisDeMao.ySinal,
          SinaisDeMao.zSinal,
        ]);

        const gestosEstimados = await GE.estimate(mao[0].landmarks, 6.5);

        if (estadoJogo === "iniciado") {
          document.querySelector("#titulo-aplicacao").innerText =
            'Faça um ok "👍" com a mão para começar.';
        }

        if (
          gestosEstimados.gestures !== undefined &&
          gestosEstimados.gestures.length > 0
        ) {
          const confianca = gestosEstimados.gestures.map((p) => p.confidence);
          const maxConfianca = confianca.indexOf(
            Math.max.apply(undefined, confianca)
          );

          if (
            gestosEstimados.gestures[maxConfianca].name === "thumbs_up" &&
            estadoJogo !== "jogado"
          ) {
            _listaSinais();
            estadoJogo = "jogado";
            document.getElementById("imagem-emoji").classList.add("play");
            document.querySelector(".texto-tutorial").innerText =
              "faça um gesto com a mão baseado na letra mostrada abaixo";
          } else if (estadoJogo === "jogado") {
            document.querySelector("#titulo-aplicacao").innerText = "";

            if (sinalAtual === listaSinais.length) {
              _listaSinais();
              sinalAtual = 0;
              return;
            }

            if (
              typeof listaSinais[sinalAtual].src.src === "string" ||
              listaSinais[sinalAtual].src.src instanceof String
            ) {
              document
                .getElementById("imagem-emoji")
                .setAttribute("src", listaSinais[sinalAtual].src.src);
              if (
                listaSinais[sinalAtual].alt ===
                gestosEstimados.gestures[maxConfianca].name
              ) {
                sinalAtual++;
                adicionarSegundosAoArmazenamento(
                  document.querySelector("#totalTempo").textContent
                );
                reset();
              }
              setSinal(gestosEstimados.gestures[maxConfianca].name);
            }
          } else if (estadoJogo === "finalizado") {
            return;
          }
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(mao, ctx);
    }
  };

  const adicionarSegundosAoArmazenamento = (segundos) => {
    let listaSegundos =
      JSON.parse(sessionStorage.getItem("listaSegundos")) || [];

    listaSegundos.push(segundos);

    sessionStorage.setItem("listaSegundos", JSON.stringify(listaSegundos));

    return listaSegundos;
  };

  const copiarListaParaAreaDeTransferencia = () => {
    const listaSegundos =
      JSON.parse(sessionStorage.getItem("listaSegundos")) || [];

    const listaComoString = listaSegundos.join(", ");

    const elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = listaComoString;

    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();
    document.execCommand("copy");

    document.body.removeChild(elementoTemporario);

    alert("Lista copiada para a área de transferência!");
  };

  useEffect(() => {
    executarHandpose();
  }, []);

  return (
    <div>
      <div className="container">
        <div
          style={{
            position: "absolute",
            background: "black",
            fontSize: "31px",
            left: 0,
          }}
        >
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
          <br></br>
          <br></br>
          <span>
            Total em segundos: <b id="totalTempo">{totalSeconds}</b>
          </span>
        </div>
        <div style={{ width: "100%" }}>
          <Webcam id="webcam" ref={webcamRef} audio={false} />
          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />
        </div>
        <div className="container-text">
          <div className="sinal">
            <div
              id="webcam-container"
              style={{ borderWidth: "1px", borderRadius: "12px" }}
            >
              {sinal ? (
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    right: "calc(50% - 50px)",
                    bottom: 100,
                    textAlign: "-webkit-center",
                  }}
                >
                  <h1>Letras Detectadas</h1>
                  <img
                    alt="sinalImage"
                    src={
                      Sinalimage[sinal]?.src
                        ? Sinalimage[sinal].src
                        : "/loveyou_emoji.svg"
                    }
                    style={{
                      height: 50,
                      filter: "hue-rotate(45deg)",
                    }}
                  />
                </div>
              ) : (
                " "
              )}
            </div>

            <canvas
              id="gesture-canvas"
              ref={canvasRef}
              style={{ filter: "hue-rotate(45deg)" }}
            />

            <div
              id="singmoji"
              style={{
                zIndex: 9,
                position: "fixed",
                top: "50px",
                right: "30px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{ alignItems: "center", flexDirection: "column", gap: 4 }}
            >
              <div style={{ height: "20px" }} h="20px"></div>
              <h3
                className="texto-tutorial"
                style={{ color: "white", textAlign: "center" }}
              ></h3>
              <button
                style={{ color: "black", background: "gray", padding: "5px" }}
                onClick={() => {
                  copiarListaParaAreaDeTransferencia();
                }}
              >
                Copiar valores
              </button>
              <button
                style={{ color: "black", background: "gray", padding: "5px" }}
                onClick={() => {
                  sessionStorage.removeItem("listaSegundos");
                }}
              >
                Remover valores
              </button>
              <div style={{ height: "20px" }}></div>
            </div>

            <h1
              id="titulo-aplicacao"
              style={{
                filter: "hue-rotate(45deg)",
                color: "white",
                textAlign: "center",
              }}
            >
              🖐️ carregando... 🖐️
            </h1>

            <img
              style={{
                margin: "auto",
                filter: "hue-rotate(45deg)",
                height: "150px",
                objectFit: "cover",
              }}
              id="imagem-emoji"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
