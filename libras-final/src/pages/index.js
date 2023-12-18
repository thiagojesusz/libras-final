import React, { useRef, useState, useEffect } from "react"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Handsigns from "../components/handsigns"
import { useStopwatch } from 'react-timer-hook';

import { Signimage, Signpass } from "../components/handimage"

import "@tensorflow/tfjs-backend-webgl"

export default function Home() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

    const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const [camState, setCamState] = useState("on")

  const [sign, setSign] = useState(null)

  let signList = []
  let currentSign = 0

  let gamestate = "started"

  // let net;

  async function runHandpose() {
    const net = await handpose.load()
    _signList()

    // window.requestAnimationFrame(loop);

    setInterval(() => {
      detect(net)
    }, 150)
  }

  function _signList() {
    signList = generateSigns()
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    return password
  }

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)

      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.zSign,
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)
        // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            'Faça um ok "👍" com a mão para começar.'
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence]?.name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            _signList()
            gamestate = "played"
            document.getElementById("emojimage").classList.add("play")
            document.querySelector(".tutor-text").innerText =
              "faça um gesto com a mão baseado na letra mostrada abaixo"
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = ""

            //looping the sign list
            if (currentSign === signList.length) {
              _signList()
              currentSign = 0
              return
            }

            // console.log(signList[currentSign].src.src)

            //game play state

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src.src)
              if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentSign++
                adicionarSegundosAoStorage(document.querySelector('#totalTimer').textContent)
                reset();
              }
              setSign(estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (gamestate === "finished") {
            return
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }

  function adicionarSegundosAoStorage(segundos) {
    // Obtém a lista de segundos do sessionStorage (se existir)
    let listaSegundos = JSON.parse(sessionStorage.getItem('listaSegundos')) || [];
  
    // Adiciona os segundos à lista
    listaSegundos.push(segundos);
  
    // Atualiza o sessionStorage com a lista atualizada
    sessionStorage.setItem('listaSegundos', JSON.stringify(listaSegundos));
  
    // Retorna a lista atualizada
    return listaSegundos;
  }

  function copiarListaParaClipboard() {
    // Obtém a lista de segundos do sessionStorage
    const listaSegundos = JSON.parse(sessionStorage.getItem('listaSegundos')) || [];
  
    // Converte a lista para uma string separada por vírgulas
    const listaComoString = listaSegundos.join(', ');
  
    // Cria um elemento de texto temporário para copiar para a área de transferência
    const elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = listaComoString;
  
    // Adiciona o elemento à página
    document.body.appendChild(elementoTemporario);
  
    // Seleciona e copia o conteúdo do elemento de texto
    elementoTemporario.select();
    document.execCommand('copy');
  
    // Remove o elemento temporário
    document.body.removeChild(elementoTemporario);
  
    // Exibe uma mensagem ou realiza outras ações conforme necessário
    alert('Lista copiada para a área de transferência!');
  }
  

  //   if (sign) {
  //     console.log(sign, Signimage[sign])
  //   }

  useEffect(() => {
    runHandpose()
  }, [])

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off")
    } else {
      setCamState("on")
    }
  }
  return (
    <div className="container">
 
    </div>
  );
  

}