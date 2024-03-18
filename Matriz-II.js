var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
var intervaloColor;
var colorPorDefecto; 

var contenedor2 = document.getElementById('canvasContainer2')
var troublesh = document.getElementById('troubleshooting')
var grafica2 = document.getElementById('MiGrafica') 
var linkIni1 = document.getElementById('links-inicialesI')
var linkIni2 = document.getElementById('links-iniciales') 
var arrayAllPneumatica = ['contImaginario-II','vid-pneumatic','bailarina','padre-neumat','pneumatico','control-neumatico','imag1','imag2','imag3','imag4','contImaginario','vid-basculante','rodillo-infeed','puesta-punto','contImgEntrenos']
const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentadorId, .unidpre-prensaProceso, .rebobinador, .contTorrImp')
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var contImgsDistribuidor = document.getElementById("images-distribuidor")
var contImgsEntintador = document.getElementById("images-entintador")
var contiVidDistribuidor = document.getElementById('conti-video-distribuidor')
var contiVidEntintador = document.getElementById('conti-video-entintador') 
var contImgsSmed = document.getElementById('images-smed') 
var contImageneSmed = document.getElementById('imgsIsopropil') 
var contiVidSmed = document.getElementById('conti-video-smed')
var contibotsDistriV = document.getElementById('contenedor-7-VII')
var buttRepuestIII = document.getElementById('conti-boton-repuestos-II')
var padreImgsDistribuidor = document.getElementById("contene-images") 
var contiBotsDesbobina = document.getElementById('conti-boton-desb')
var contiBotsFreno = document.getElementById('conti-boton-freno')
var contibotsDistri = document.getElementById('contenedor-7')
var contibotsDistriII = document.getElementById('contenedor-7-V')
var contibotsDistriIII = document.getElementById('contenedor-7-VI')
var contibotsDistriIV = document.getElementById('contenedor-7-IV')
var contibotsDistriVI = document.getElementById('contenedor-8')
var btnsIniciales = document.querySelectorAll('.btn-bloque')
var buttRepuest = document.getElementById('butt-repuestos')
var buttRepuestI = document.getElementById('butt-repuestos-I')
var buttRepuestV = document.getElementById('conti-boton-repuestos-III')
var contVideo = document.getElementById('video-entintado')
var contVideoSmed = document.getElementById('conti-video-bancada')

let firstClick = true;
var iterations;
var arrayIdButtsMA = ['resultados','troubleshoot','def1','def2','adtBut','fua1','lup','kaizen']
var arrayButtsKaizen = ['btn10','btn11','btn12','btn17']
var arrayButtsPlanos = ['btn13','btn14','btn15']
var arrayImgsRodilleria = document.querySelectorAll ('.durezas')
var arrayButtsInstructivos = ['contBotCasos','contBotInfeed']
var enlacesIDs = ['link1', 'link2', 'link3', 'link4','link5'] 
var arrayPosicionnador = []
var destino = 257
var idsArray = [];
var idsArrayEliminados = []
var idsMA = ['control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','casos-kaizen','mejoras-kai','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','planos-kaizen','materiales-kaizen','kaizenCont','conti-boton-planos', 'conti-boton-kaizen','troubleshooting','canvasContainer2','contChecks','canvasContainer3', 'contImagNeg',,'contImagGraf','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II']
var contenedoresMA = ['troubleshooting','canvasContainer2','contChecks','canvasContainer3','contImagNeg','contImagGraf','kaizenCont']
var idsMAhijos = ['contBotCasos','materiales-kaizen','troubleshooting','canvasContainer2','contChecks','canvasContainer3','contImagNeg','contImagGraf']
var lineasGrid = document.getElementById('contLineas')
var lineasGridII = document.getElementById('contLineas-II')

var contAdministrar = document.getElementById('cont-titulo-admin')
var contComercial = document.getElementById('cont-titulo-comercial')
var contCalidad = document.getElementById('cont-titulo-calidad')
var contOperativa = document.getElementById('cont-titulo-operacion')
var previousElementID
var elementoEliminado
var contPadre = document.getElementById('conti-boton-freno')
var linkList = document.getElementById("linkList")
var linkListI = document.getElementById("linkListI")
var uTeñido = document.getElementById('uTeñidos')
var arrayIdButtsCheck = ['boton2','boton3','boton4','boton5','boton6','boton7','boton8','boton9','boton10','boton11','boton12','btn600','btn700','btn800']
var contiBtt = ['archivo','btt2','btt3','btt4','btt5','btt6','btt7'] 
var currentID = null;
var butInicio = document.getElementById('bot-inic')
var contInicial = document.getElementById('container1')
var botonMa = document.getElementById('bot-mantaut')
var allContenedores = ['padre-interfaz','hijo-interaz-1','hijo-interaz-2','MiGrafica9-II','contLineas-II','contLineas','title-interfaz','vidElem','kaizen-propuestos','canvasContainer3','troubleshooting','conti-boton','canvasContainer2','contChecks','conteneMantaut','MiGrafica','contImaginario-II','contImaginario-III','padre-1','padre-2','imag3','imag4','contImaginario','bailarina','pneumatico','padre-neumat','contBotInfeed','largoImpresion','contImgEntrenos','imag1','imag2','linksMA','linkLis','sitio-en-construccion','curado-uv','video-container','conti-video-background','video-background-planas','conti-videos-planas','conti-img-planas','conti-videos-infoprint','video-infoprint-I','video-infoprint-II','video-infoprint-III','contenedor-9','conti-video-bancada','plate-smed-I','contVid-smed-I','butt-repuestos-III','conti-boton-repuestos-III','imgsIsopropil','contenedor-8','bancada','contVid-smed','contenedor-7-VII','butt-repuestos-II','butt-repuestos-I','conti-boton-repuestos-II','conti-boton-repuestos-I','contenedor-7-VI','sector-smed','sector-entintador','sector-distribuidor','conti-video-smed','conti-video-entintador','conti-video-distribuidor','conti-boton-repuestos','contenedor-7-V','plate-smed','contenedor-7','contenedor-7-II','contenedor-7-III','contenedor-7-IV','butt-repuestos','images-entintador','toggleVideoButton','videoElement1-II','video-entintado','videos-training','videoElement2','contenedor-7','contene-images','container1','cuartoContDensito','tercerContDensito','segundoContDensito','contDensito','imgs-densito','conte-botDensitoII','imgs-prepress','links-inicialesI','linkListI','links-iniciales','impresorImg','agrupaOblicuos-IX','container01','imagenes-manta','cont-titulo-operacion','cont-titulo-calidad','cont-titulo-comercial','cont-titulo-admin','control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','mejoras-kai','casos-kaizen','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','materiales-kaizen','planos-kaizen','conti-boton-kaizen','conti-boton-planos','kaizenCont','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','verticales-alimentador','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','pantalla-tintero','cont-links','imgTorre','imgsRepuestos','agrupaOblicuos-II','pantalla-frente','pantalla-mandos','pantalla-servicio','pantalla-atras','videosTraining','contPortPlaca','contPerfilesPlancha','contPortManta','contPerfilesManta','contImpresor','contPerfilesImpresor','contImgDistribuidor','contImgEntintador','cont-variable','cont-plana','bancada-torre-II','bateria-entintado-II','cont-secador','sitema-humedad','pre-prensa','agrupaOblicuos-placa','densitometria','contImagGraf','contImagNeg','lubricacion','title-interfaz','iconos','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II','conte-secundario','contenedor-vertical','franja-gris','franja-Blanca','cont-titulo','videoBackground','videoBackgroundII','lubri-II','lubri-I','images-smed','images-distribuidor','lubri-III','freno','uniTeñido','rodilleria', 'cont-user','cont-userI']

var linksIniciales = ['links-inicialesI','links-iniciales']
var allContIzquierdos = ['desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador']
var contenedoresHijo = ['contImgDistribuidor','rodillForma','portaPlancha','portaMantilla','cilindroImpresor']
var allContTintero = ['pantalla-tintero','cont-links','imgTorre','vidTintero','imgsRepuestos','agrupaOblicuos-II','container2']
var contVid = document.getElementById('videosTraining')
var contIMPlaca = document.getElementById('placa')
var contIMmanta = document.getElementById('manta')
var arrayButtsRutilantes = ['butt-113','butt-12','butt-16','butt-21','butt-22','butt-1130','butt-120','butt-160','butt-210','butt-220']
var arrayButtsRutilantesI = ['butt-024000','butt-023000','butt-015000','butt-013000','butt-7112000']
var arrayButtsRutilantesII = ['butt-01130','butt-012','butt-016','butt-021','butt-0202','butt-011300','butt-0120']
var arrayButtsRutilantesIII = ['butt-001130','butt-0012','butt-0016','butt-0021','butt-00202']
var buttonsMA = document.getElementsByClassName("butt-mautonomo")
var buttsToyota = ['toyota8', 'toyota7', 'toyota6', 'toyota5','toyota4','toyota3','toyota2','toyota1']
var contienePasos = document.getElementById('puesta-punto')
let contPlana = document.getElementById('cont-plana')
let contiButtCasos = document.getElementById('mejoras-kai')
const textToColor = document.getElementById("textToColor")
const textToColorI = document.getElementById("textToColorI")
const line = document.getElementById("line")
const lineI = document.getElementById("lineI")
let hoverTimeout;
let hideTimeout;
let contadorClicks = 0;

var container1 = document.getElementById('container01')

const uniTeñido = document.getElementById('uTeñidos')
const alimentadorId = document.getElementById('alimentadorId')
const reBobinado = document.getElementById('rebobinador')
const seccionTintero = document.getElementById('pantalla-tintero')
const pantallas = ['pantalla-frente', 'pantalla-mandos','pantalla-servicio','pantalla-atras']
const imgsRepuestos = document.getElementById('imgsRepuestos')

const videoElements = document.querySelectorAll('.video-training')   
const video = document.getElementById("videoBackground")
const imgsDistribuidor = document.getElementById('contImgDistribuidor')
const imgsForma = document.getElementById('contImgEntintador')
const images = document.querySelectorAll('.image-training') 
const contImpresor = document.getElementById('contImpresor')
const input = document.querySelectorAll('.input-class')
const checks = document.querySelectorAll('.input-class')
const inpt = document.querySelectorAll('grafMini')

let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d')
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d')
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d')
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d')
let miCanvas = document.getElementById('MiGrafica').getContext('2d')
let miCanvas6 = document.getElementById('MiGrafica4').getContext('2d')
let miCanvas6II = document.getElementById('MiGrafica4-II').getContext('2d')
let miCanvas7 = document.getElementById('MiGrafica5').getContext('2d')
let miCanvas7II = document.getElementById('MiGrafica5-II').getContext('2d')
let miCanvas8 = document.getElementById('MiGrafica6').getContext('2d')
let miCanvas8II = document.getElementById('MiGrafica6-II').getContext('2d')

let miCanvas9 = document.getElementById('MiGrafica7').getContext('2d')
let miCanvas9II = document.getElementById('MiGrafica7-II').getContext('2d')

let miCanvas10 = document.getElementById('MiGrafica8').getContext('2d')
let miCanvas10II = document.getElementById('MiGrafica8-II').getContext('2d')

let miCanvas11 = document.getElementById('MiGrafica9').getContext('2d');
let miCanvas11II = document.getElementById('MiGrafica9-II').getContext('2d')


var botones = document.querySelectorAll('.butt-mautonomo')
var arrayButtsIniciales = ['bot-atras','bot-inicial','iniciar','bot-atras12']

let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;
idsArray.push("cont-titulo") 
idsArrayEliminados.push('cont-titulo')

function VolveraInicio(){
  location.reload()
  idsArray = []
  idsArrayEliminados = []
}
function botoGrand() {
}
function muestraBateria(elementId){  
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContTintero.length; i++) {
    var elemento = document.getElementById(allContTintero[i])
    if (elemento) {
      elemento.style.display = 'flex'
    }
  }  

  for (var i = 0; i < linksIniciales.length; i++) {
    var elemento = document.getElementById(linksIniciales[i])
    if (elemento) {
      elemento.style.display = 'block'
    }
  }

  var videoBackground = document.getElementById('videoBackground')
  videoBackground.pause()
  videoBackground.style.display = 'none' // Oculta el video
  seccionTintero.style.display='block'

  const video = document.getElementById("vidTintero")

  // Reproducir el video
  video.play()
  // Después de 3 segundos, ocultar el video
  setTimeout(function() {
  video.style.display = "none"; // Esto ocultará el elemento de video
  }, 977) // 2000 milisegundos = 2 segundos
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function setInitialPosition(){
  var contiBoton = document.querySelector('.conti-boton')
  // Aplica los estilos al elemento
  contiBoton.style.position = 'absolute';
  contiBoton.style.display = 'flex';
  contiBoton.style.top = '257px';
  contiBoton.style.left = '270px';
  contiBoton.style.transform = ''; // Restablecer la transformación
}
function ElementosMaII(elementId){
  var elementosExcluidos = ['conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales']  
  /* document.getElementById('linkList').style.display = 'none' */
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  document.body.style.zoom = "100%"
  container1.style.left=''
  showButtonsMAconRetraso()
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    arrayIdButtsMA .forEach(function (elto) {                                                                                          /// RESTAURA GRIS A BOTONES
      var elemento = document.getElementById(elto)    
      if (elemento) {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    })
    // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId)
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  } 
}
function showButtonsMAconRetraso(){
  var botones = document.querySelectorAll('.butt-mautonomo') // Selecciona todos los botones
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      boton.style.marginTop = '10px';      
      setTimeout(function() {
        mostrarBotonConRetraso(i + 1)
      }, 50) // 100 milisegundos de retraso entre botones
    }
  }
  mostrarBotonConRetraso(0) // Comienza desde el primer botón
}
function changeButtonStyles(elementId){
  switch (elementId) {
    case 'pantalla-tintero':
      var elementosExcluidos = ['cont-links','pantalla-inicial','pantalla-tintero','container01','links-inicialesI','links-iniciales','agrupaOblicuos-II','imgTorre','video-entintado','videoElement1-II']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      videoElements.forEach(video => {
      if (video.id === 'vidTintero') {
        video.style.top = '17px'
        video.style.display = 'block'
        video.play();
    
        // Después de 977 milisegundos, ocultar el video
        setTimeout(function () {
          video.style.display = 'none'
        }, 977);
      } else {
        video.style.display = 'none'
      }
      });
     if(screenWidth < 500){        
        var elementosExcluidos = ['cont-links','pantalla-inicial','pantalla-tintero','container01','links-inicialesI','links-iniciales','agrupaOblicuos-II','imgTorre','video-entintado','videoElement1-II']  
        var contLinksTintero = document.getElementById('cont-links')
        var contOblicuos = document.getElementById('agrupaOblicuos-II')
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
          contLinksTintero.style.marginTop = '-3.7%'
          contOblicuos.style.marginLeft = '-2.4%'
        }
      }
  

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;    
    case 'bateria-entintado-II': 
      var elementosExcluidos = ['contenedor-7','container01','links-inicialesI','links-iniciales','video-entintado','videoElement1-II','bateria-entintado-II'];         
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      videoElements.forEach(video => {
        if (video.id === 'videoElement1-II') {
          video.style.display = 'block'
          video.currentTime = 0
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistri.style.marginTop = '1%'
      const buttonElements = document.querySelectorAll('.boton-f')
      var delay = 10;
      for (var i = 0; i < buttonElements.length; i++) {
        setTimeout(function(index) {
          buttonElements[index].style.display = 'flex'
      }, delay * i,i)}

      if (screenWidth < 500) {   
        var elementosExcluidos = ['links-iniciales','links-inicialesI','container01','contenedor-7','video-entintado','videoElement1-II','bateria-entintado-II'];
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        contibotsDistri.classList.remove('move-up')
        contVideo.classList.remove('move-up-left')
        contVid.style.display='block' 
        videoElements.forEach(video => {
          if (video.id === 'videoElement1-II') {
            video.play()      
          } else {
            video.style.display = 'none'
          }
        })
        desplegarBotones()
      }
      //////////////////////////////////////////////////////////////////////////////////////////
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'bancada-torre-II': 
      var elementosExcluidos = ['conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','container01','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      } 
      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      videoElements.forEach(video => {
        if (video.id === 'plate-smed-I') {
          video.currentTime = 0
          video.style.display = 'block'
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      //EFECTO BOTONES
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)

    if (screenWidth < 500) {   
      var elementosExcluidos = ['conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','container01','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }

      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      //EFECTO BOTONES
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)
      videoElements.forEach(video => {
        if (video.id === 'plate-smed-I') {
          video.style.display = 'flex'
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistriVI.classList.remove('move-butts-IV')
      contVideoSmed.classList.remove('move-vid-smed-II')
      contImageneSmed.classList.remove('move-images-IV')
      buttRepuestV.classList.remove('move-repuest-IV')
      /* contVid.style.display='block' */ 
      desplegarBotonesV()  
     }

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'sitema-humedad':     
      var elementosExcluidos = ['container01','sitema-humedad','links-inicialesI','links-iniciales','sitio-en-construccion']                                                     /// OCULTA TODO MENOS (2 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;
    case 'fua':
    break;
    case 'lup':
    break;
    default:
  }  
} 
function desplegarBotones(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementos()
  }, 477);
}
function desplegarBotonesII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosII()
  }, 477);
}
function desplegarBotonesIII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIII()
  }, 477);
}  
function desplegarBotonesIV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIV()
  }, 477);
}
function desplegarBotonesV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosV()
  }, 477);
}
function cambioContenedor(elementId){
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador,.links-inicialesI,.links-iniciales') 
  var torreImpresion = document.getElementById('torre-imp') // PADRE TORRE IMPRESION  */
  var botonTorre = document.getElementById('toggleVideoButton')
  var botAtras = document.getElementById('bot-atras10')
  var botTrasII = document.getElementById('bot-atras11')


  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none'
  }

  botAtras.style.display='block'
  botTrasII.style.display='block'
  torreImpresion.style.position='absolute'
  torreImpresion.style.left='77px'
  botonTorre.style.position='absolute'
  botonTorre.style.left='307px'

  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function cierraContenedores(elementId){
  var arrayGeneral = ['btn1','btn2','btn3','btn4','btn5','btn60','btn70','btn80','btn600','btn700','btn800']
  var arrayButtsRojos = ['boton2','boton3','boton4','boton5','boton6','boton8','boton9','boton10','boton11','boton12']
  for (var i = 0; i < arrayButtsRojos.length; i++) {                                                                                  /// QUITAR ESTILOS A BOTONES
    var button = arrayButtsRojos[i]
    if (button) {
      document.getElementById(button).style.backgroundColor = ''
    }
  }   
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (firstClick) {                                                                                                                       /// LOGICA PRIMER CLICK
    var uTeñido = document.getElementById('uTeñidos');

    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }     
    switch (elementId) {
      case 'desbobinadorId':
        // Obtén el elemento padre 'pantalla-inicial'
        var pantallaInicial = document.getElementById('pantalla-inicial');
        if (pantallaInicial) {
          // Oculta todos los hijos directos de 'pantalla-inicial'
          for (var i = 0; i < pantallaInicial.children.length; i++) {
            var hijo = pantallaInicial.children[i];
            if (i === 0) {
              // Deja visible el primer hijo
              hijo.style.display = 'block'; // O el valor deseado ('block', 'inline', etc.)
              hijo.style.marginLeft = '1%'
            } else {
              // Oculta el resto de los hijos
              hijo.style.display = 'none';
            }
          }
        }      
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        video.style.display = 'none'
        aumentarTamanosDeBotones()
      break;
      case 'uTeñido':
        // Obtén el elemento padre 'pantalla-inicial'
        var pantallaInicial = document.getElementById('pantalla-inicial');
        if (pantallaInicial) {
          // Oculta todos los hijos directos de 'pantalla-inicial'
          for (var i = 0; i < pantallaInicial.children.length; i++) {
            var hijo = pantallaInicial.children[i];
            if (i !== 1) {
              // Deja visible el primer hijo
              hijo.style.display = 'none'; // O el valor deseado ('block', 'inline', etc.)
            } else {
              // Oculta el resto de los hijos
              hijo.style.marginLeft = '1%';
              hijo.style.display = 'block';
            }
          }
        }      
        video.style.display = 'none'        
        aumentarTamanosDeBotonesII()
      break;
      case 'alimentadorId':
        // Obtén el elemento padre 'pantalla-inicial'
        var pantallaInicial = document.getElementById('pantalla-inicial');
        if (pantallaInicial) {
          // Oculta todos los hijos directos de 'pantalla-inicial'
          for (var i = 0; i < pantallaInicial.children.length; i++) {
            var hijo = pantallaInicial.children[i];
            if (i === 2) {
              // Deja visible el primer hijo
              hijo.style.display = 'block'; // O el valor deseado ('block', 'inline', etc.)
              hijo.style.marginLeft = '1%'
            } else {
              // Oculta el resto de los hijos
              hijo.style.display = 'none';
            }
          }
        }      
       aumentarTamanosDeBotonesIII()
      break;
      case 'unidProceso':
        // Obtén el elemento padre 'pantalla-inicial'
        var pantallaInicial = document.getElementById('pantalla-inicial');
        if (pantallaInicial) {
          // Oculta todos los hijos directos de 'pantalla-inicial'
          for (var i = 0; i < pantallaInicial.children.length; i++) {
            var hijo = pantallaInicial.children[i];
            if (i === 3) {
              // Deja visible el primer hijo
              hijo.style.display = 'block'; // O el valor deseado ('block', 'inline', etc.)
              hijo.style.marginLeft = '1%'
            } else {
              // Oculta el resto de los hijos
              hijo.style.display = 'none';
            }
          }
        }      
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
       aumentarTamanosDeBotonesIV()        
      break;
      case 'rebobinador':
        // Obtén el elemento padre 'pantalla-inicial'
        var pantallaInicial = document.getElementById('pantalla-inicial');
        if (pantallaInicial) {
          // Oculta todos los hijos directos de 'pantalla-inicial'
          for (var i = 0; i < pantallaInicial.children.length; i++) {
            var hijo = pantallaInicial.children[i];
            if (i !== 4) {
              // Deja visible el primer hijo
              hijo.style.display = 'none'; // O el valor deseado ('block', 'inline', etc.)
            } else {
              // Oculta el resto de los hijos
              hijo.style.marginLeft = '1%';
              hijo.style.display = 'block';
              console.log(hijo.id)
            }
          }
        }      
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
       aumentarTamanosDeBotonesV()
      break;
      default:
    }    
    firstClick = false;
  } else {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    arrayGeneral.forEach(element => {                                                                   /// SEGUNDO CLICK OCULTA BOTONES / CARGA SECCION CONINUA
      var elemento = document.getElementById(element)
      if (elemento) {
          elemento.style.display = 'none'
      } 
    }) 
    // En el segundo clic, carga la seccion
    btnsIniciales.forEach(elemento =>{
      if (elemento){
        elemento.style.background = ''
        elemento.style.color = ''
      }
    })    
    abrirSeccionContinua() 
  }

}
function muestraRodillo (vidElem, imgCont){
  switch(vidElem){
    case 'videoElement2':
    /// OCULTA TODO MENOS LO NECESARIO          
    var elementosExcluidos = ['sector-distribuidor','butt-repuestos','conti-video-distribuidor','videoElement2','images-distribuidor','conti-boton-repuestos','contenedor-7-V','container01','links-iniciales','links-inicialesI','videosTraining']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
   // VISIBLES BOTONES  
    const container = document.getElementById(imgCont)
    const pict = container.getElementsByTagName('img')
    container.style.display = 'flex'
    for (var i = 0; i < images.length; i ++) {
      var pic = images[i]
      pic.style.display = 'flex'
    }
    //EFECTO BOTONES
    setTimeout(() => {
      applyImageEffects1() 
    }, 277)

    // REPRODUCE VIDEO
    for (const video of videoElements) {
      if (video.id === vidElem) {
        video.currentTime = 0;           
        video.play() // Reproduce el video
      } else {
        video.style.display = 'none'
        video.pause()
      }
      } 
      if (screenWidth < 500) { 
        var elementosExcluidos = ['sector-distribuidor','conti-boton-repuestos','butt-repuestos','container01','links-iniciales','links-inicialesI','contene-images','images-distribuidor','contenedor-7-V','videosTraining','videos-training','conti-video-distribuidor','videoElement2']; 
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
        }

        contibotsDistriII.classList.remove('move-butts')
        contImgsDistribuidor.classList.remove('move-images')
        buttRepuest.classList.remove('move-repuest')
        contiVidDistribuidor.classList.remove('move-video')    

        videoElements.forEach(video => {
          if (video.id === 'videoElement2') {
            video.play()      
          } else {
            video.style.display = 'none'
          }
        })
        desplegarBotonesII()
      }
    break;
    case 'videoElement3':
      /// OCULTA TODO MENOS LO NECESARIO          
      var elementosExcluidos = ['sector-entintador','conti-boton-repuestos-I','butt-repuestos-I','conti-video-entintador','videoElement3','images-entintador','contenedor-7-VI','container01','links-iniciales','links-inicialesI','videosTraining']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      setTimeout(() => {
        applyImageEffects()
      }, 277) 

      for (const video of videoElements) {
      if (video.id === vidElem) {
        video.style.display = 'flex' 
        video.currentTime = 0;           
        video.play()
      } else {
        video.style.display = 'none' 
        video.pause() 
      }
      }
      if (screenWidth < 500) {
        var elementosExcluidos = ['sector-entintador','conti-boton-repuestos-I','butt-repuestos-I','conti-video-entintador','videoElement3','images-entintador','contenedor-7-VI','container01','links-iniciales','links-inicialesI','videosTraining']; 
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
        }
        videoElements.forEach(video => {
          if (video.id === 'videoElement3') {
            video.play()      
          } else {
            video.style.display = 'none'
          }
        })
        contibotsDistriIII.classList.remove('move-butts-II')
        contImgsEntintador.classList.remove('move-images-II') 
        buttRepuestI.classList.remove('move-repuest-II')
        contiVidEntintador.classList.remove('move-vid-entintador')
        desplegarBotonesIII()      
      }
    break;
    case 'plate-smed' :
      /// OCULTA TODO MENOS LO NECESARIO          
      var elementosExcluidos = ['sector-smed','conti-boton-repuestos-II','butt-repuestos-II','conti-video-smed','plate-smed','images-smed','contenedor-7-VII','container01','links-iniciales','links-inicialesI','videosTraining']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      setTimeout(() => {
        applyImageEffects3()
      }, 277)            
      for (const video of videoElements) {
        if (video.id === vidElem) {
          video.style.display = 'flex'
          video.currentTime = 0;           
          video.play()
        } else {
          video.style.display = 'none' 
          video.pause() 
        }
        }      
      if (screenWidth < 500) {
        var elementosExcluidos = ['sector-smed','conti-boton-repuestos-II','butt-repuestos-II','conti-video-smed','plate-smed','images-smed','contenedor-7-VII','container01','links-iniciales','links-inicialesI','videosTraining'];
        for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
        }
        for (const video of videoElements) {
          if (video.id === vidElem) {
            video.style.display = 'flex' 
            video.currentTime = 0;           
            video.play()
          } else {
            video.style.display = 'none' 
            video.pause() 
          }
          }          
          contImgsSmed.classList.remove('move-images-III')  
          contiVidSmed.classList.remove('move-vid-smed')
          contibotsDistriV.classList.remove('move-butts-III')
          buttRepuestIII.classList.remove('move-repuest-III')
          desplegarBotonesIV()  
      }
    break;  
    case 'videoElement5' :
      var elementosExcluidos = ['sector-smed','contenedor-7-VII','container01','links-iniciales','links-inicialesI']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }

      setTimeout(() => {
        applyImageEffects()
      }, 200) // Retardo de 0.9 segundos (900 milisegundos)      
      
      for (const video of videoElements) {
        if (video.id === vidElem) {
          video.style.display = 'block' // Muestra el video
          video.currentTime = 0;           
          video.play() // Reproduce el video
        } else {
          video.style.display = 'none' // Oculta el video
          video.pause() // Pausa el video
        }
      }

    break; 
    case 'videoElement6' :
      var elementosExcluidos = ['sector-smed','contenedor-7-VII','container01','links-iniciales','links-inicialesI']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
    break;  
    case 'videoElement7' :
      var elementosExcluidos = ['sector-smed','contenedor-7-VII','container01','links-iniciales','links-inicialesI']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
    break;
    default:
  }
}
function muestraHumedad(){
  var contImgsIsopropil = document.getElementById('imgsIsopropil')
  const pict = contImgsIsopropil.getElementsByTagName('img') // Obtiene todas las etiquetas 'img' dentro del 
  contImgsIsopropil.style.display = 'flex'
  // Recorre las imágenes y las muestra
  for (let i = 0; i < pict.length; i++) {
    pict[i].style.display = 'block' // Muestra cada imagen
  }
}
function applyImageEffects() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('#imageElement6,#imageElement7')
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(2.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 177) }}applyEffect()


}
function applyImageEffects1() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('#imageElement, #imageElement2, #imageElement3, #imageElement4, #imageElement5')
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(2.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 177) }}applyEffect()
}
function applyImageEffects2() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('#imageElement6, #imageElement7')
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(2.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 177) }}applyEffect()
}
function applyImageEffects3() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('#imageElement11,#imageElement22,#imageElement33,#imageElement44,#imageElement55')
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(2.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 177) }}applyEffect()
}
function applyImageEffects4() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('#isopropil1,#isopropil2,#isopropil3')
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(2.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 177) }}applyEffect()
}
function alternarVisibilidad(docId) {
  var elementosParaAlternar = document.querySelectorAll('.bot-entre, .video-training,.image-training, .butt-partes, .documentos')
  for (var i = 0; i < elementosParaAlternar.length; i++) {
    if (elementosParaAlternar[i].id === docId) {
      elementosParaAlternar[i].style.display = "block";
    } else {
      elementosParaAlternar[i].style.display = "none";
    }
  }

}
function mostrarBotMa(id) {
  var elemento = document.getElementById(id)
  if (elemento.style.display === 'none') {
      elemento.style.display = 'block'
  } else {
      elemento.style.display = 'none'
  }
}
function showNextGraf() {
  if (nowIndex < inpt.length ){
    inpt[nowIndex].style.display = 'block'
    nowIndex++;
    setTimeout(showNextGraf, 57)
  }
}
function showRepuesto(elementId) {
  var imgsContra = document.getElementById('impresorImg')
  switch (elementId) {
    case 'contImgDistribuidor': 
      var elementosExcluidos = ['contImgDistribuidor','container01','links-iniciales','links-inicialesI'];         
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      if (screenWidth < 500) {
        var elementosExcluidos = ['contImgDistribuidor','container01','links-iniciales','links-inicialesI'];         
        for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }}
      }  
        

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'contImgEntintador':
      var elementosExcluidos = ['contImgEntintador','container01','links-iniciales','links-inicialesI'];         
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      if (screenWidth < 500) {
        var elementosExcluidos = ['contImgEntintador','container01','links-iniciales','links-inicialesI'];         
        for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }}
      } 

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'contPortPlaca':  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
     var elementosExcluidos = ['contPortPlaca', 'agrupaOblicuos-placa','container01','links-iniciales','links-inicialesI'];                                                              /// OCULTA TODO MENOS (2 ELEMENTOS)          
     for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
      }
      videoElements.forEach(video => {
      if (video.id !== 'video-placa') {
      video.style.display = 'none'   
      } else {
      video.style.display = 'block'
      video.currentTime = 0;
      video.play()   
      }})
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
      }
    break;       
    case 'contPortManta':
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var elementosExcluidos = ['contPortManta', 'container01','agrupaOblicuos-IX','links-iniciales','links-inicialesI'];                                                              /// OCULTA TODO MENOS (2 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id !== 'videoManta') {
        video.style.display = 'none'   
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()   
      }})
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
      } 
    break;
    case 'contImpresor':
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var elementosExcluidos = ['agrupaOblicuos-XXIII','impresorImg','contImpresor','container01','links-iniciales','links-inicialesI'];                                                              /// OCULTA TODO MENOS (2 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id !== 'video-impresor') {
        video.style.display = 'none'   
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()   
      }})
      /* imgsContra.style.display = 'flex' */
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    default: 
  }  
} 
function ladosPlancha(elementId){ 
  var video = document.getElementById('video-placa')
  var imgPlancha = document.querySelectorAll('.imagesTorre') 
  var imagesPlancha = document.getElementById('contPerfilesPlancha')
  var imgsPlancha = document.getElementById('imagenes-plancha')
  var contImagen = document.getElementById('imagen1')
  var contImagen2 = document.getElementById('imagen2')
  var contImagen3 = document.getElementById('imagen3')
  var contImagen4 = document.getElementById('imagen4')

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var elementosExcluidos = ['contPortPlaca', 'agrupaOblicuos-placa','container01','links-iniciales','links-inicialesI']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  switch (elementId) {
    case 'imagen1':
      // Detener el video
      video.pause()
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none'
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca') {
          imagen.style.display = 'block'
        }else{
          imagen.style.display = 'none'
        }
      })
      contIMPlaca.style.display='none' 
      if (screenWidth < 500) {  
        contImagen.style.left = '-27%'
        contImagen.style.top = '1%'
      }  
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }      
    break;
    case 'imagen2':
      // Detener el video
      video.pause()
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none'
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca2') {
          imagen.style.display = 'block'
        }else{
          imagen.style.display = 'none'
        }
      })
      contIMPlaca.style.display='none' 
      if (screenWidth < 500) {  
        contImagen2.style.left = '-27%'
        contImagen2.style.top = '-8%'
      }  
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
      break; 
    case 'imagen3':
      // Detener el video
      video.pause()
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none'    
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca3') {
          imagen.style.display = 'block'
        }else{
          imagen.style.display = 'none'
        }
      })
      contIMPlaca.style.display='none' 
      if (screenWidth < 500) {  
        contImagen3.style.left = '-27%'
        contImagen3.style.top = '-17%'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
      break;
    case 'imagen4':
      // Detener el video
      video.pause()
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none'    
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca4') {
          imagen.style.display = 'block'
        }else{
          imagen.style.display = 'none'
        }
      })
      contIMPlaca.style.display='none' 
      if (screenWidth < 500) {  
        contImagen4.style.left = '-27%'
        contImagen4.style.top = '-26%'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
      break;
    default:
  }
}
function ladosMantilla(elementId){
  var contChildManta = document.getElementById('imagenes-manta')
  var imgsManta = document.querySelectorAll('.imgMant')
  var videoCaucho = document.getElementById('videoManta')
  var imgsMantasI = document.getElementById('manta')
  imgsMantasI.style.display = 'none'

  switch (elementId) {
    case 'mantilla1':
     var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
     for (var i = 0; i < allContenedores.length; i++) {
       var elemento = document.getElementById(allContenedores[i])  
       if (elemento) {
       elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
     }}
     videoCaucho.pause()
     videoCaucho.style.display = 'none'
      contChildManta.style.display='flex' 
      imgsManta.forEach(function (imagen) {
      if (imagen.id === 'manta0' || imagen.id === 'manta1') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      if (screenWidth < 500) {   
        var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        imgsMantasI.style.marginlef = '-22%'
      }  

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
      break;
    case 'mantilla2':
      var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }}
      videoCaucho.pause()
      videoCaucho.style.display = 'none'
       contChildManta.style.display='flex' 
       imgsManta.forEach(function (imagen) {
       if (imagen.id === 'manta2' || imagen.id === 'manta3') {
         imagen.style.display = 'block'
       }else{
         imagen.style.display = 'none'
       }
       })
       if (screenWidth < 500) {   
         var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
         for (var i = 0; i < allContenedores.length; i++) { 
           var elemento = document.getElementById(allContenedores[i]) 
           if (elemento) {
             // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
             elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
           }
         }
       }  
 
       if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
         idsArray.push(elementId);
         console.log(idsArray);
       }
 
    break;     
    case 'mantilla3':
      var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }}
      videoCaucho.pause()
      videoCaucho.style.display = 'none'
      contChildManta.style.display='flex' 
      imgsManta.forEach(function (imagen) {
      if (imagen.id === 'manta4' || imagen.id === 'manta5') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;
    case 'mantilla4':
      var elementosExcluidos = ['contPerfilesManta','imagenes-manta','contPortManta','agrupaOblicuos-IX','container01','links-inicialesI','links-iniciales']  
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }}
      videoCaucho.pause()
      videoCaucho.style.display = 'none'
      contChildManta.style.display='flex' 
      imgsManta.forEach(function (imagen) {
      if (imagen.id === 'manta6' || imagen.id === 'manta7') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    default:
  }
} 
 function ladosImpresor(elementId){
  var contChildImpresor = document.getElementById('imagenes-impresor')
  var imgsImpresor = document.querySelectorAll('.imgImpresor')
  var imgImpresorI = document.getElementById('impresorImg')
  imgImpresorI.style.display = 'none'
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < linksIniciales.length; i++) {
    var elemento = document.getElementById(linksIniciales[i]);
    elemento.style.display = 'flex'
  }  

  switch (elementId) {
    case 'forward':
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var elementosExcluidos = ['contImpresor','contPerfilesImpresor','agrupaOblicuos-XXIII','container01'];                   /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id == 'video-impresor') {
      video.style.display = 'none'   
      }})       
      contChildImpresor.style.display='flex'      
      imgsImpresor.forEach(function (imagen) {
      if (imagen.id === 'impresor' || imagen.id === 'impresor1') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
      break;
    case 'comands':
      var elementosExcluidos = ['contImpresor','contPerfilesImpresor','agrupaOblicuos-XXIII','container01'];                   /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id == 'video-impresor') {
      video.style.display = 'none'   
      }})       
      contChildImpresor.style.display='flex'      
      imgsImpresor.forEach(function (imagen) {
      if (imagen.id === 'impresor2' || imagen.id === 'impresor3') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;     
    case 'service':
      var elementosExcluidos = ['contImpresor','contPerfilesImpresor','agrupaOblicuos-XXIII','container01'];                   /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id == 'video-impresor') {
      video.style.display = 'none'   
      }})       
      contChildImpresor.style.display='flex'      
      imgsImpresor.forEach(function (imagen) {
      if (imagen.id === 'impresor4' || imagen.id === 'impresor5') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'back':
      var elementosExcluidos = ['contImpresor','contPerfilesImpresor','agrupaOblicuos-XXIII','container01'];                   /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      videoElements.forEach(video => {
      if (video.id == 'video-impresor') {
      video.style.display = 'none'   
      }})       
      contChildImpresor.style.display='flex'      
      imgsImpresor.forEach(function (imagen) {
      if (imagen.id === 'impresor6' || imagen.id === 'impresor7') {
        imagen.style.display = 'block'
      }else{
        imagen.style.display = 'none'
      }
      })
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    default:
  }
} 
function showNextInputChec() {
  var conteneChecks = document.getElementById('contChecks')
  if (conteneChecks.style.display === 'block') {
    for (var i = 0; i < checks.length; i++) {
      checks[i].style.display = 'none'
    }
    conteneChecks.style.display = 'none'
  } else {
    conteneChecks.style.display = 'block'
    if (actualtIndex < input.length) {
      input[actualtIndex].style.display = 'block'
      actualtIndex++;
    } else {
      actualtIndex = 0; // Restablecer el índice si alcanza el final
    }
    setTimeout(showNextInputChec, 37) // Ajusta el tiempo de espera en milisegundos  
  }
}
function mantAutonomo (idElement) {
  var conteLinksI = document.getElementById('links-inicialesI')
  var videoBackground = document.getElementById('videoBackground')
  videoBackground.pause()
  videoBackground.style.display = 'none' // Oculta el video
  switch (idElement) {
    case 'troubleshooting':       
        deslizarTrouble(idElement)
      /*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
       /* modificarPosicion() */
      /*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'canvasContainer2':   
       deslizarCanvas2(idElement)
    break;
    case 'contChecks':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion')
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      var contCheck = document.getElementById('contChecks')
      var inpts = document.querySelectorAll('.input-class')
      if (contCheck.style.display === 'block') {
      // Ocultar los elementos
      contCheck.style.display = 'none'
      for (var i = 0; i < inpts.length; i++) {
      inpts[i].style.display = 'none'
      }
      } else {
      // Ejecutar la lógica si el contenedor está visible
      contCheck.style.display = 'block'
      // Mostrar cada input con un intervalo de 77 milisegundos
      for (var i = 0; i < inpts.length; i++) {
      (function(index) {
      setTimeout(function() {
      inpts[index].style.display = 'block'
      }, 77 * index)
      })(i)
      }
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1)
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'canvasContainer3':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion')
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;

      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;      }

      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      const contGrafitos = document.getElementById('canvasContainer3')
      if (contGrafitos.style.display !== 'block') {
        contGrafitos.style.display = 'block' 
        conteLinksI.style.left='547px'
      } else {
        contGrafitos.style.display = 'none'
        conteLinksI.style.left='187px'
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1)
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'contImagNeg':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion')
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
        /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/    
      var contGrafColor = document.getElementById('contImagNeg')
      if (contGrafColor.style.display === 'block') {
      contGrafColor.style.display = 'none' 
      } else {
      contGrafColor.style.display = 'block'
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1)
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador) 
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'contImagGraf':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion')
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }}
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
        /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/    
      var contGrafNeg = document.getElementById('contImagGraf')
      if (contGrafNeg.style.display === 'block') {
      contGrafNeg.style.display = 'none' 
      } else {
      contGrafNeg.style.display = 'block'
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1)
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
  default:
}}
function deslizaContenedor(identificador, idButton) { 
  var contBotKaizen = document.getElementById('conti-boton-kaizen')
  contBotKaizen.removeAttribute('style')
  linkIni1.style.left = ''
  linkIni2.style.left = ''  
  arrayIdButtsMA.forEach(element => {                                                                                                        
    var elemento = document.getElementById(element)
    if (elemento) {
      if (element === idButton) {
         elemento.style.backgroundColor = 'orange'
         elemento.style.color = 'black'
      } else {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    }
  })
  contiBtt.forEach(element => {                                                                                                                                                   
    var elemento = document.getElementById(element)
    if (elemento) {
      elemento.style.backgroundColor = ''
    }
  })

   contenedoresMA.forEach(element => {
    var elementos = document.getElementById(element)
    if(elementos){
      elementos.removeAttribute('style');
    }
  })

  if (document.body.style.zoom !== "100%") {                                                                                         
    document.body.style.zoom = "100%";
  }
  container1.style.left = '50%'
  switch(identificador){
    case 'troubleshooting' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var contenedor = document.getElementById(identificador)                                                     
      if (identificador !== 'troubleshooting' && contenedor) {
        contenedor.style.display = 'flex'
        contenedor.style.left = '257%'   
      } else{
        var contenedorPadre = document.getElementById(identificador)
        if (contenedorPadre) {
          contenedorPadre.style.display = 'flex'  
          var elementosHijos = contenedorPadre.children;  
          for (var i = 0; i < elementosHijos.length; i++) {
            elementosHijos[i].style.display = 'none'
          }
        }
      }
      mostrarTroublesshIntervalo()
    break;
    case 'canvasContainer2' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer2','MiGrafica']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
    break;
    case 'contChecks' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','contChecks']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      break;
    case 'canvasContainer3' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','canvasContainer3']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
    break;
    case 'contImagNeg' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagNeg']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
    break;
    case 'contImagGraf' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagGraf']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
    break;
    case 'conti-boton-kaizen' :
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      hideButtonsKaizenRetraso()


      setTimeout(function() {
        showButtonsKaizenRetraso();
      }, 500);
      break;
    default:
  }
}
function mostrarTroublesshIntervalo() {
  var contenedor = document.getElementById('troubleshooting')
  var elementos = contenedor.children;
  var index = 0;
  function hacerVisibleSiguienteElemento() {
    if (index < elementos.length) {
      elementos[index].style.display = 'block'
      index++;
      setTimeout(hacerVisibleSiguienteElemento, 33)
    }
  }
  // Inicia la primera visibilidad
  hacerVisibleSiguienteElemento()
}

function deslizAutomatic(){
  var elementosExcluidos = ['container01','links-inicialesI', 'links-iniciales', 'conteneMantaut', 'conti-boton','troubleshooting','canvascontainer2','MiGrafica','canvascontainer3','kaizenCont','vidElem'];
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }}
    for (var i = 0; i < contiBtt.length; i++) {
      var elemento = document.getElementById(contiBtt[i]);
      if (elemento) {
        elemento.style.backgroundColor = ''
     }
    } 
    arrayPosicionnador = []  
    troublesh.removeAttribute('style') 
    destino = 277;
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  idsMA.forEach(function (elto) {                                                                                                            /// OCULTA TODO M.A
    var elemento = document.getElementById(elto)    
    if (elemento) {
      elemento.style.display = 'none'
    }})
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  arrayIdButtsMA.forEach(function (elto) {                                                                                            /// RESTAURA GRIS A BOTONES
    var elemento = document.getElementById(elto)    
    if (elemento) {
      elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
      elemento.style.color = ''
    }}) 
  document.body.style.zoom = "67%";  
  container1.style.left = '33%'
  desencadenar('troubleshooting')
    setTimeout(function() {
      desencadenar('canvasContainer2') 
    }, 277) 
      setTimeout(function() {
        desencadenar('contChecks')
      }, 677) 
        setTimeout(function() {
          desencadenar('canvasContainer3')
        }, 1077) 
            setTimeout(function() {
              desencadenar('kaizenCont')
            }, 1477)  
}
function desencadenar(idElemento) {
  var vidkaizen = document.getElementById('vidElem')
  var contBotsMA = document.getElementById('conti-boton')
  var troubleCont = document.getElementById('troubleshooting')
  var troublesh = document.getElementById(idElemento);
  container1.style.left = '50%'

  switch(idElemento){
    case 'troubleshooting' :
      if (troublesh) {
        troublesh.style.display = 'flex';
        troublesh.style.left = '100%'; 
        troublesh.classList.add('move-grafica');
        setTimeout(function () {
          troublesh.style.left = '207px';
        }, 277);
      }       
      if(screenWidth < 500){
        contBotsMA.style.marginTop = '15%'
        troubleCont.style.marginTop = '7%'
        setTimeout(function () {
          troublesh.style.left = '25%';
        }, 277);       
      }
    break;
    case 'contChecks' :
      if (troublesh) {
        troublesh.style.display = 'flex';
        troublesh.style.left = '100%'; 
        troublesh.classList.add('move-grafica');
        setTimeout(function () {
          troublesh.style.left = '777px';
        }, 277);
      } 
      if(screenWidth < 500){
        contBotsMA.style.marginTop = '15%'
        troubleCont.style.marginTop = '7%'
        troublesh.style.marginTop = '14%';
        setTimeout(function () {
          troublesh.style.left = '57%';
        }, 277);       
      }
    break;
    case 'canvasContainer2' :
      if (troublesh) {
        console.log(contFriends)
        troublesh.style.display = 'flex';
        troublesh.style.left = '100%'; 
        troublesh.classList.add('move-grafica');
        setTimeout(function () {
          troublesh.style.left = '414px';
        }, 277);
        console.log(troublesh.id);
      } 
      if(screenWidth < 500){
        contBotsMA.style.marginTop = '15%'
        troubleCont.style.marginTop = '7%'
        troublesh.style.marginTop = '14%';
        setTimeout(function () {
          troublesh.style.left = '61%';
        }, 277);       
      }
    break;
    case 'canvasContainer3' :
      if (troublesh) {
        console.log(contFriends)
        troublesh.style.display = 'flex';
        troublesh.style.left = '100%'; 
        troublesh.classList.add('move-grafica');
        setTimeout(function () {
          troublesh.style.left = '817px';
        }, 277);
        console.log(troublesh.id);
      } 
      if(screenWidth < 500){
        contBotsMA.style.marginTop = '15%'
        troubleCont.style.marginTop = '7%'
        troublesh.style.marginTop = '77%';
        setTimeout(function () {
          troublesh.style.left = '3%';
        }, 277);       
      }
    break;
    case 'kaizenCont' :
      if (troublesh) {
        vidkaizen.style.display = 'flex'
        vidkaizen.currentTime = 0
        vidkaizen.play()

        troublesh.style.display = 'flex';
        troublesh.style.top = '-1%'
        troublesh.style.left = '100%'; 
        troublesh.classList.add('move-grafica');
        setTimeout(function () {
          troublesh.style.left = '1033px';
        }, 277);
        console.log(troublesh.id);
      } 
      if(screenWidth < 500){
        contBotsMA.style.marginTop = '15%'
        troubleCont.style.marginTop = '7%'
        troublesh.style.marginTop = '107%';
        troublesh.style.width = '377px'
        troublesh.style.height = '263px'
        setTimeout(function () {
          troublesh.style.left = '37%';
        }, 277);       
      }
    break;
    default:
  }
}
function deslizaContenedorII(idElement, idButton) {
  var originalButtonColors = {}; // Objeto para almacenar los colores originales de los 
  var elementoAnterior = null;
  var elementoActual = null;
  
  if(screenWidth < 500){
    destino = 22;
    var troubble = document.getElementById('troubleshooting')
    var canvas2 = document.getElementById('canvasContainer2')
    var canvas3 = document.getElementById('canvasContainer3')
    var contiboton = document.getElementById('conti-boton')
    var imagGraf = document.getElementById('contImagGraf')
    var imgNeg = document.getElementById('contImagNeg')
    var checks = document.getElementById('contChecks')
    var grafica = document.getElementById('MiGrafica')
    var kaizen = document.getElementById('kaizenCont')
    contiboton.style.top = '50%'
    imagGraf.style.top = '347%'
    troubble.style.top = '347%' 
    canvas3.style.top = '347%'
    canvas2.style.top = '347%'
    checks.style.top = '347%'
    kaizen.style.top = '347%'
    imgNeg.style.top = '347%'
  } 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   if (idElement === 'kaizenCont') {
    for (const video of videoElements) {
      // Compara si el video está dentro del elemento 'kaizenCont'
      if (video.closest('#kaizenCont')) {
        video.style.display = 'flex' // Muestra el video
        video.currentTime = 0;
        video.play() // Reproduce el video
      }
    }
  }
  if (idElement === 'canvasContainer2') {
    var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer2','MiGrafica']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
  }
  if (idElement === 'troubleshooting') {
    var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','troubleshooting']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
  }
  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement)
  }

  var contenedor = document.getElementById(idElement)  
  contenedor.style.display = 'flex'
  contenedor.style.left = '257px'
  var inicio = 1100;
  var velocidad = 500;
  var duracion = Math.abs(destino - inicio) / velocidad * 100;
  var inicioTiempo = null;

  function animar(tiempo) {
    if (!inicioTiempo) inicioTiempo = tiempo;
    var progreso = (tiempo - inicioTiempo) / duracion;
    var izquierda = inicio + progreso * (destino - inicio)
    if (progreso < 1) {
      contenedor.style.left = izquierda + 'px'
      requestAnimationFrame(animar)
    } else {
      contenedor.style.left = destino + 'px'
    }
  }
  requestAnimationFrame(animar)

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i])
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1])

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior)
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'))
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'))

      destino = posicionAnterior + anchoAnterior;
    }
  }
  console.log(arrayPosicionnador)
  // Cambiar el color de fondo del botón al hacer clic
  var boton = document.getElementById(idButton)
  if (originalButtonColors[idButton] === undefined) {
    originalButtonColors[idButton] = boton.style.backgroundColor; // Guarda el color original 
  }
  boton.style.backgroundColor = 'orange'
  setTimeout(function () {    
  }, 300)
}
function resetBotns() {  
  var contProblema = document.getElementById('linksMA')
  var contProblema2 = document.getElementById('contImgEntrenos')
  var contVidPlanos = document.getElementById('kaizenCont')
  var botSpecial = document.getElementById('contBotInfeed')
  var contImaginario = document.getElementById('contImaginario')
  var contImaginario2 = document.getElementById('contImaginario-II')   

  var padre1 = document.getElementById('padre-1')
  var padre2 = document.getElementById('padre-2')
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  botSpecial.style.display = 'none'
  padre1.style.display = 'none'
  padre2.style.display = 'none'
  contImaginario.style.display = 'none'
  contImaginario2.style.display = 'none'
  linkIni1.style.left= ''  
  linkIni2.style.left = ''   
  if (document.body.style.zoom !== "100%") {                                                                                                /// PANTALLA AL 100%
    document.body.style.zoom = "100%";
  }
  // Ocultar otros elementos y realizar otras acciones necesarias
  contProblema.style.display = 'none'
  contProblema2.style.display = 'none'
  console.log(arrayPosicionnador)
  // Ocultar elementos de M.A
  idsMA.forEach(function (elto) {
    var elemento = document.getElementById(elto)    
    if (elemento) {
      elemento.style.display = 'none'
    }
  })
  arrayPosicionnador = []
  container1.style.left = ''
  destino = 257;
  // Restaurar el color original de los botones
  var miBoton1 = document.getElementById("troubleshoot")
  function handleClickEvent(event) {
  deslizaContenedor('troubleshooting', 'troubleshoot')
  }
  miBoton1.addEventListener("click", handleClickEvent)
  var miBoton2 = document.getElementById("def1")
  function handleClickEvent2(event) {
  deslizaContenedor('canvasContainer2','def1')
  }
  miBoton2.addEventListener("click", handleClickEvent2)
  var miBoton3 = document.getElementById("def2")
  function handleClickEvent3(event) {
  deslizaContenedor('contChecks','def2')
  }
  miBoton3.addEventListener("click", handleClickEvent3)
  var miBoton4 = document.getElementById("adtBut")
  function handleClickEvent4(event) {
  deslizaContenedor('canvasContainer3','adtBut')
  }
  miBoton4.addEventListener("click", handleClickEvent4)
  var miBoton5 = document.getElementById("fua1")
  function handleClickEvent5(event) {
  deslizaContenedor('contImagNeg','fua1')
  }
  miBoton5.addEventListener("click", handleClickEvent5)
  var miBoton6 = document.getElementById("lup")
  function handleClickEvent6(event) {
  deslizaContenedor('contImagGraf','lup')
  }
  miBoton6.addEventListener("click", handleClickEvent6)
  var miBoton7 = document.getElementById("kaizen")
  function handleClickEvent7(event) {
  deslizaContenedor('conti-boton-kaizen','kaizen')
  }
  miBoton7.addEventListener("click", handleClickEvent7)
  // Restaura color gris a los botones
  arrayIdButtsMA.forEach(function (buttonId) {
  var button = document.getElementById(buttonId)
  button.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
  button.style.color = ''
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  videoElements.forEach(video => {                                                                                                       /// OCULTA PADRE / VIDEO
    if (video) {
      video.pause()
      video.style.display = 'none'
    }
  })
  contVidPlanos.style.display = 'none'
  arrayPosicionnador = []
  console.log(arrayPosicionnador)
}
function deslizarTrouble(idElemento) {
  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElemento)) {
    arrayPosicionnador.push(idElemento)
  }
  console.log(arrayPosicionnador)
  console.log(destino)
}
function deslizarCanvas2(idElement) {
  var index = arrayPosicionnador.indexOf(idElement) // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1)
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  /*////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor = document.getElementById('troubleshooting')
  var contenedor1 = document.getElementById('canvasContainer2')
  if (contenedor1) {
    var estilo = getComputedStyle(contenedor1)
    var left = estilo.getPropertyValue('left')
    var width = estilo.getPropertyValue('width')

    // Convierte los valores de left y width a números
    var leftValue = parseFloat(left)
    var widthValue = parseFloat(width)

    // Suma los valores y almacénalos en ultimaPosicion
    var ultimaPosicion = leftValue + widthValue;

    console.log(ultimaPosicion)
  } else {
  console.error("El contenedor con ID 'troubleshooting' no se encontró.")
  }
  /*////////////////////////////////////////////////////////////////////////////////////////////////*/  
  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block'
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px'
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor.style.left) + contenedor.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'
    
      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
        /* deslizarChecks() */
      }
    }
    requestAnimationFrame(animar)
  } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
  }
}
function deslizarChecks(idElement) {
  var index = arrayPosicionnador.indexOf(idElement) // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1)
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contChecks')
  var contenedor2 = document.getElementById('canvasContainer2')  


  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'flex'
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px'
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function deslizarCanvas3(idElement) {
  var index = arrayPosicionnador.indexOf(idElement) // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1)
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('canvasContainer3')
  var contenedor2 = document.getElementById('contChecks')

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block'
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px'
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function deslizarContImagNeg(idElement) {
  var index = arrayPosicionnador.indexOf(idElement) // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1)
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contImagNeg')
  var contenedor2 = document.getElementById('canvasContainer3')

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block'
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px'
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function deslizarContImagGraf(idElement) {
  var index = arrayPosicionnador.indexOf(idElement) // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1)
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contImagGraf')
  var contenedor2 = document.getElementById('contImagNeg')

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block'
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px'
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function modificarPosicion() {  
  // Valor fijo para el primer elemento
  var destino = '257px'
  // Iterar a través de los IDs y calcular la posición left
  arrayPosicionnador.forEach(function(id) {
  // Seleccionar el elemento por su ID
  var elemento = document.getElementById(id)
  if (elemento) {
    // Asignar el valor de destino como posición left al elemento actual
    elemento.style.left = destino;
    // Obtener el ancho (width) de cada elemento
    var width = window.getComputedStyle(elemento).getPropertyValue('width')   
    // Eliminar 'px' del valor y convertirlo a un número
    var ancho = parseFloat(width)
    // Calcular la nueva posición left para el próximo elemento
    destino = parseInt(destino) + ancho + 'px'
    // Mostrar la posición en la consola
    console.log(id + " - posicion left:", destino)
  } else {
    console.error("Elemento con ID '" + id + "' no encontrado.")
  }
}) 
}
function muestraTorres(seleccion) {
  seccionTintero.style.display = 'none'
  for (var i = 0; i < pantallas.length; i++) {
    var elemento = document.getElementById(pantallas[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  switch (seleccion) {
    case 'frente':
      var contOblicuoT = document.getElementById('agrupaOblicuos-II')
      contOblicuoT.style.display = 'flex'
      contOblicuoT.style.marginTop = '3px'
      contOblicuoT.style.marginLeft = '3px'   

      const elementoMandosFrente = document.getElementById('pantalla-frente')
      if (elementoMandosFrente) {  
        elementoMandosFrente.style.display = 'block'
        elementoMandosFrente.style.marginRight = '150px'

      }

      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'mandos':
      const elementoMandos = document.getElementById('pantalla-mandos')
      if (elementoMandos) {
        elementoMandos.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'servicio':
      const elementoServicio = document.getElementById('pantalla-servicio')
      if (elementoServicio) {
        elementoServicio.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'atras':
      const elementoAtras = document.getElementById('pantalla-atras')
      if (elementoAtras) {
        elementoAtras.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    default:
      break;
  }
}
function muestraTorresI (elementId) {  // BOTON OBLICUO
  var imagsTinter = document.getElementById('imgsRepuestos')
  seccionTintero.style.display='none'
  imagsTinter.style.display = 'none'

  switch (elementId) {    
    case 'pantalla-frente':
      var elementosExcluidos = ['pantalla-frente','container01','links-inicialesI','links-iniciales','agrupaOblicuos'];          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      if (screenWidth < 500) {  
        var agrupaOblicuos = document.getElementById('agrupaOblicuos') 
        var elementosExcluidos = ['pantalla-frente','container01','links-inicialesI','links-iniciales','agrupaOblicuos'];          
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        agrupaOblicuos.style.left = '77%'
      }
      // 4. Verificar si el elemento está definido y si ya existe en arrayIds
      if (typeof elementId !== 'undefined') {
        const index = idsArray.indexOf(elementId);
        if (index !== -1) {
          // 4. Si el elemento ya existe, moverlo a la última posición
          idsArray.splice(index, 1); // Elimina el elemento en la posición actual
        }
        // 5. Agregar el elemento al final de arrayIds
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break; 
    case 'pantalla-mandos':
      var elementosExcluidos = ['pantalla-mandos',,'container01','links-inicialesI','links-iniciales','agrupaOblicuos-III'];          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      if (screenWidth < 500) {  
        var agrupaOblicuosIII = document.getElementById('agrupaOblicuos-III') 
        var elementosExcluidos = ['pantalla-mandos',,'container01','links-inicialesI','links-iniciales','agrupaOblicuos-III'];          
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        agrupaOblicuosIII.style.left = '77%'
      }
      if (typeof elementId !== 'undefined') {
        const index = idsArray.indexOf(elementId);
        if (index !== -1) {
          idsArray.splice(index, 1); // Elimina el elemento en la posición actual
        }
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;
    case 'pantalla-servicio': 
    var elementosExcluidos = ['pantalla-servicio','container01','links-inicialesI','links-iniciales','agrupaOblicuos-IV'];          
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    if (screenWidth < 500) {  
      var agrupaOblicuosIV = document.getElementById('agrupaOblicuos-IV') 
      var elementosExcluidos = ['pantalla-servicio','container01','links-inicialesI','links-iniciales','agrupaOblicuos-IV'];          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      agrupaOblicuosIV.style.left = '77%'
    }
    if (typeof elementId !== 'undefined') {
      const index = idsArray.indexOf(elementId);
      if (index !== -1) {
        // 4. Si el elemento ya existe, moverlo a la última posición
        idsArray.splice(index, 1); // Elimina el elemento en la posición actual
      }
      idsArray.push(elementId);
      console.log(idsArray);
    } 
    break;
    case 'pantalla-atras':
      var elementosExcluidos = ['pantalla-atras','container01','links-inicialesI','links-iniciales','agrupaOblicuos-V'];          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      if (screenWidth < 500) {  
        var agrupaOblicuosV = document.getElementById('agrupaOblicuos-V') 
        var elementosExcluidos = ['pantalla-atras','container01','links-inicialesI','links-iniciales','agrupaOblicuos-V'];          
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        agrupaOblicuosV.style.left = '77%'
      }
  


      if (typeof elementId !== 'undefined') {
        const index = idsArray.indexOf(elementId);
        if (index !== -1) {
          idsArray.splice(index, 1); // Elimina el elemento en la posición actual
        }
        // 5. Agregar el elemento al final de arrayIds
        idsArray.push(elementId);
        console.log(idsArray);
      }  
    break;
    default:
  }
}
function videosImpresor(videoId) {
  const video = document.getElementById(videoId)  
  switch (videoId) {
    case 'videoTrain00':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none'   
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()   
      } 
    })
    break;
    case 'videoTrain02':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none'     
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()           
      } 
    })
    break;

    default: 
  } 
} 
function abrirSeccionContinua(elementId) {
  var botonesIniciales = document.querySelectorAll('.btn-bloque')
  var botonesC = document.querySelectorAll('.boton-c') 
  toggleVideoButton.style.display = 'block'
  var elementosExcluidos = ['toggleVideoButton','container01','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador','torre-imp','torre-imp','tinter-o','bateria-entintado'];                                                              
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }

  var bloqueTintero = document.getElementById('tinter-o');
  // Restablecer estilos por defecto
  bloqueTintero.style.position = '';
  bloqueTintero.style.display = '';
  bloqueTintero.style.left = '';
  bloqueTintero.style.top = '';

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < allContIzquierdos.length; i++) {                                        // ELIMINA ESTILOS APLICADOS DESDE OTRAS FUNCIONES A LOS ELEMENTOS 
    var elemento = document.getElementById(allContIzquierdos[i]);
    
    if (elemento) {
        elemento.removeAttribute('style'); // Elimina todos los estilos en línea
    }
 }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  document.body.style.zoom = "100%"
  container1.style.left=''
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  botonesC.forEach(function(boton) {                                                                                     /// DEVUELVE ESTILOS A BOTONES AMARILLOS                 
    boton.style.background = 'linear-gradient(45deg, rgba(250, 250, 1) 15%, rgb(27, 27, 28, 0.076) 85%)'
    boton.style.color = 'rgb(0, 0, 0)'
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  botonesIniciales.forEach(function(botton) {                                                                                /// DEVUELVE ESTILOS A BOTONES ROJOS
    botton.style.background = 'linear-gradient(45deg,  rgb(255, 24, 55) 55%,  rgba(255, 24, 55, 0.33) 99%)'    
    botton.style.color = 'white'
  })
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function eliminarEstilosEnLinea(elemento) {                                                                                       /// ELIMINAR ESTILOS EN LINEA
    elemento.removeAttribute('style');
  }
  arrayIdButtsMA.forEach(function (id) {
  var elemento = document.getElementById(id);
  if (elemento) {
    eliminarEstilosEnLinea(elemento);
  }
  });
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds desde ahi es que se llevan las demas                 
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds   
    idsArray.push(elementId);
    console.log(idsArray);
  }
  firstClick = true;   
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
document.addEventListener("DOMContentLoaded", function () {                                                                   // BOTON EN ROJO * 0.2 SEGUNDOS 
  var buttons = document.querySelectorAll('.Bot-inicio3');
  buttons.forEach(function(currentButton) {
    currentButton.addEventListener("mouseover", function () {
      currentButton.style.backgroundColor = "red"; 
      setTimeout(function () {
        currentButton.style.backgroundColor = "";
      }, 200);
    });
  });
});
function abrirSeccionOperativa(elementId){
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
    element.style.display = 'none'
    }    
  });
  contOperativa.style.display = 'flex'
  container1.style.display = 'flex'
  // Retrasar la llamada a cambiarColoresConRetraso después de 100 msg
  setTimeout(function () {
    cambiarColoresConRetrasoI();
  }, 100);
  for (var i = 0; i < arrayButtsIniciales.length; i++) {
  var botonId = arrayButtsIniciales[i];
  // Obtener el elemento del DOM por su ID
  var boton = document.getElementById(botonId);
  // Verificar si el elemento existe antes de intentar cambiar su estilo
  if (boton) {
  // Cambiar el color de fondo a 'rgb
  boton.style.backgroundColor = 'rgb(0,0,255)'
  boton.style.color = 'white'
  }}  
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionAdministrativa(elementId) {  
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });

  // Retrasar la llamada a cambiarColoresConRetraso después de 100 msg
  setTimeout(function () {
    cambiarColoresConRetraso();
  }, 100);

  contAdministrar.style.display = 'flex'
  container1.style.display = 'flex'

  var elementosOblicuos = document.getElementsByClassName('oblicuosInicio')
  var arrayOblicuos = Array.from(elementosOblicuos)
  for (var i = 0; i < arrayOblicuos.length; i++) {
    var elemento = arrayOblicuos[i];
    elemento.style.display = "block";
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < arrayButtsIniciales.length; i++) {                                                                          /// COLECCION BOTONES DAR COLOR
    var botonId = arrayButtsIniciales[i];
    var boton = document.getElementById(botonId);
    if (boton) {
      boton.style.backgroundColor = 'rgb(213, 245, 7)'
      boton.style.color = 'black'
  }}
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionComercial(elementId) {
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });
  contComercial.style.display = 'flex'
  container1.style.display = 'flex'
  // Retrasar la llamada a cambiarColoresConRetraso después de 1 segundo
  setTimeout(function () {
    cambiarColoresConRetrasoII();
  }, 100);

  for (var i = 0; i < arrayButtsIniciales.length; i++) {
    var botonId = arrayButtsIniciales[i];
    // Obtener el elemento del DOM por su ID
    var boton = document.getElementById(botonId);
    // Verificar si el elemento existe antes de intentar cambiar su estilo
    if (boton) {
      // Cambiar el color de fondo a 'rgb
      boton.style.backgroundColor = 'rgb(0, 255, 0)'
      boton.style.color = 'black'
  }}
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionCalidad(elementId){ 
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });
  contCalidad.style.display = 'flex'
  container1.style.display = 'flex'
  // Retrasar la llamada a cambiarColoresConRetraso después de 1 segundo
  setTimeout(function () {
    cambiarColoresConRetrasoIII();
  }, 100);

  for (var i = 0; i < arrayButtsIniciales.length; i++) {
  var botonId = arrayButtsIniciales[i];
  // Obtener el elemento del DOM por su ID
  var boton = document.getElementById(botonId);
  // Verificar si el elemento existe antes de intentar cambiar su estilo
  if (boton) {
  // Cambiar el color de fondo a 'rgb
  boton.style.backgroundColor = 'rgb(252, 5, 224)'
  boton.style.color = 'white'
  }}
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function cambiarColoresConRetraso() {
  function cambiarColorConRetraso(indice) {
    document.getElementById(arrayButtsRutilantes[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantes.length) {
      setTimeout(function () {
        cambiarColorConRetraso(indice);
      }, 37);
    } else {
      // Todas las iteraciones han terminado, ahora puedes llamar a devolverColoresConRetraso
      devolverColoresConRetraso();
    }
  }

  setTimeout(function () {
    cambiarColorConRetraso(0);
  }, 7);
}
function devolverColoresConRetraso() {
// Función para cambiar el color de un botón y programar el siguiente cambio después de 77 milisegundos
function cambiarColorConRetraso(indice) {
  // Cambiar el color del botón en el índice dado a rojo
  document.getElementById(arrayButtsRutilantes[indice]).style.backgroundColor = '';

  // Incrementar el índice
  indice++;

  // Verificar si hay más botones
  if (indice < arrayButtsRutilantes.length) {
    // Programar el cambio de color para el siguiente botón después de 77 milisegundos
    setTimeout(function () {
      cambiarColorConRetraso(indice);
    }, 37);
  }
}
// Iniciar el proceso cambiando el color del primer botón después de 77 milisegundos
setTimeout(function () {
  cambiarColorConRetraso(0);
}, 77);
}
function cambiarColoresConRetrasoIII() {
  function cambiarColorConRetrasoIII(indice) {
    document.getElementById(arrayButtsRutilantesIII[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantesIII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoIII(indice);
      }, 37);
    } else {
      // Todas las iteraciones han terminado, ahora puedes llamar a devolverColoresConRetraso
      devolverColoresConRetrasoIII();
    }
  }

  setTimeout(function () {
    cambiarColorConRetrasoIII(0);
  }, 37);
}
function devolverColoresConRetrasoII() {
  // Función para cambiar el color de un botón y programar el siguiente cambio después de 77 milisegundos
  function cambiarColorConRetrasoII(indice) {
    // Cambiar el color del botón en el índice dado a rojo
    document.getElementById(arrayButtsRutilantesII[indice]).style.backgroundColor = '';

    // Incrementar el índice
    indice++;

    // Verificar si hay más botones
    if (indice < arrayButtsRutilantesII.length) {
      // Programar el cambio de color para el siguiente botón después de 77 milisegundos
      setTimeout(function () {
        cambiarColorConRetrasoII(indice);
      }, 77);
    }
  }

  // Iniciar el proceso cambiando el color del primer botón después de 77 milisegundos
  setTimeout(function () {
    cambiarColorConRetrasoII(0);
  }, 77);
}
function cambiarColoresConRetrasoII() {
  function cambiarColorConRetrasoII(indice) {
    document.getElementById(arrayButtsRutilantesII[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantesII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoII(indice);
      }, 37);
    } else {
      // Todas las iteraciones han terminado, ahora puedes llamar a devolverColoresConRetraso
      devolverColoresConRetrasoII();
    }
  }

  setTimeout(function () {
    cambiarColorConRetrasoII(0);
  }, 37);
}
function cambiarColoresConRetrasoI(){
  function cambiarColorConRetrasoI(indice) {
    document.getElementById(arrayButtsRutilantesI[indice]).style.backgroundColor = 'black';
    indice++;
    if (indice < arrayButtsRutilantesI.length) {
      setTimeout(function () {
        cambiarColorConRetrasoI(indice);
      }, 37);
    } else {
      // Todas las iteraciones han terminado, ahora puedes llamar a devolverColoresConRetraso
      devolverColoresConRetrasoI();
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoI(0);
  }, 37);
}
function devolverColoresConRetrasoI() {
  // Función para cambiar el color de un botón y programar el siguiente cambio después de 77 milisegundos
  function cambiarColorConRetrasoI(indice) {
    // Cambiar el color del botón en el índice dado a rojo
    document.getElementById(arrayButtsRutilantesI[indice]).style.backgroundColor = '';

    // Incrementar el índice
    indice++;

    // Verificar si hay más botones
    if (indice < arrayButtsRutilantesI.length) {
      // Programar el cambio de color para el siguiente botón después de 77 milisegundos
      setTimeout(function () {
        cambiarColorConRetrasoI(indice);
      }, 77);
    }
  }

  // Iniciar el proceso cambiando el color del primer botón después de 77 milisegundos
  setTimeout(function () {
    cambiarColorConRetrasoI(0);
  }, 77);
}
function devolverColoresConRetrasoIII() {
  // Función para cambiar el color de un botón y programar el siguiente cambio después de 77 milisegundos
  function cambiarColorConRetrasoIII(indice) {
    // Cambiar el color del botón en el índice dado a rojo
    document.getElementById(arrayButtsRutilantesIII[indice]).style.backgroundColor = '';

    // Incrementar el índice
    indice++;

    // Verificar si hay más botones
    if (indice < arrayButtsRutilantesIII.length) {
      // Programar el cambio de color para el siguiente botón después de 77 milisegundos
      setTimeout(function () {
        cambiarColorConRetrasoIII(indice);
      }, 77);
    }
  }

  // Iniciar el proceso cambiando el color del primer botón después de 77 milisegundos
  setTimeout(function () {
    cambiarColorConRetrasoIII(0);
  }, 77);
}
function abrirSeccionVariable(elementId){
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var elementosExcluidos = ['container01','cont-variable','conti-videos-infoprint','video-infoprint-I','video-infoprint-II','video-infoprint-III','links-inicialesI','links-iniciales'];  
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  document.body.style.zoom = "100%";
  container1.style.left=''
  videoElements.forEach(video => {
    if (video.id === 'video-infoprint-I' || video.id === 'video-infoprint-II' || video.id === 'video-infoprint-III') {
      video.style.width = '268px'
      video.style.display = 'block'
      video.play();
    } else {
      video.style.display = 'none'
    }
    });
    if (screenWidth < 500) {   
      var elementosExcluidos = ['container01','cont-variable','conti-videos-infoprint','video-infoprint-I','video-infoprint-II','video-infoprint-III','links-inicialesI','links-iniciales'];  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      document.body.style.zoom = "100%";
      container1.style.left=''    
      videoElements.forEach(video => {
        if (video.id === 'video-infoprint-I' || video.id === 'video-infoprint-II' || video.id === 'video-infoprint-III') {
          video.style.width = '213px'
          video.style.display = 'block'
          video.play();
        } else {
          video.style.display = 'none'
        }
        }); 
    }     
  }
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }
} 
function abrirSeccionPlanas(elementId){
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var elementosExcluidos = ['container01','conti-video-background','video-background-planas','cont-plana','conti-videos-planas','video-planas-I','video-planas-II','video-infoprint-III','conti-img-planas','links-inicialesI','links-iniciales'];
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  document.body.style.zoom = "100%"
  container1.style.left=''
  videoElements.forEach(video => {
    if (video.id === 'video-planas-I' || video.id === 'video-planas-II' || video.id === 'video-planas-III' || video.id === 'video-background-planas') {
      video.style.width = '268px'
      video.style.display = 'block'
      video.play();
    } else {
      video.style.display = 'none'
    }
    });
    if (screenWidth < 500) {   
      var elementosExcluidos = ['container01','conti-video-background','video-background-planas','cont-plana','conti-videos-planas','video-planas-I','video-planas-II','video-infoprint-III','conti-img-planas','links-inicialesI','links-iniciales'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      document.body.style.zoom = "100%";
      container1.style.left=''    
      videoElements.forEach(video => {
        if (video.id === 'video-planas-I' || video.id === 'video-planas-II' || video.id === 'video-planas-III' || video.id === 'video-background-planas') {
          video.style.width = '213px'
          video.style.display = 'block'
          video.play();
        } else {
          video.style.display = 'none'
        }
        }); 
    }     
  }   
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function abrirSeccionCurado(elementId){
  var elementosExcluidos = ['cont-secador','container01','video-container','curado-uv','links-inicialesI','links-iniciales'];                                                       /// OCULTA TODO MENOS (2 ELEMENTOS)  
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  document.body.style.zoom = "100%";
  container1.style.left=''
  videoElements.forEach(video => {
    try {
      if (video.id !== 'curado-uv') {             
        video.style.display = 'none'     
      } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()           
      } 
    } catch (error) {
      // Manejar la excepción aquí si es necesario
      console.error('Error al manipular videos:', error)
    }
  })  
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function cerrarSecciones(){
 linkList.style.display = "none";
 linkListI.style.display = "none";
}
function abrirPilarMA(){
  linkListI.style.display = "none";    
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  botonMa.style.display='block'
  butInicio.style.display='block'
  const buttonElements = document.querySelectorAll('.butt-mautonomo')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'block'
    }, delay * i,i)
  }    
}
function abrirPrepress(elementId) {
  var elementosExcluidos = ['conte-botDensitoII','imgs-prepress','pre-prensa','container01'];                                /// OCULTA TODO MENOS (2 ELEMENTOS) 
  document.getElementById('linkList').style.display = 'none'         
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  for (var i = 0; i < linksIniciales.length; i++) {
    var elemento = document.getElementById(linksIniciales[i]);
    elemento.style.display = 'flex'
  }
  document.body.style.zoom = "100%"
  container1.style.left=''
  // Crear un array con los IDs de los videos
  const videoIds = ["vidCicodelia", "vid01", "vid02", "vid03"]
  // Reproducir los videos simultáneamente
  videoIds.forEach(function (videoId) {
    const video = document.getElementById(videoId);
    // Asegurarse de que el elemento de video existe antes de intentar reproducirlo
    if (video) {
      video.style.display = 'block'
      video.currentTime = 0
      video.play();
    }
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function abrirDensitometria(elementId){
  var elementosExcluidos = ['densitometria','container01','imgs-densito','contDensito','segundoContDensito','tercerContDensito','cuartoContDensito'] /// OCULTA TODO MENOS (2 ELEMENTOS)          
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < linksIniciales.length; i++) {
    var elemento = document.getElementById(linksIniciales[i]);
    elemento.style.display = 'flex'
  }
  document.body.style.zoom = "100%"
  container1.style.left=''
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var vidDensitometria = document.getElementById('vidCicodeliaII')
  vidDensitometria.style.display = 'block'
  vidDensitometria.pause();
  setTimeout(function() {
    vidDensitometria.currentTime = '0'
    vidDensitometria.play();
  }, 77);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
  const imagenesDensito = document.querySelectorAll('.imgDensito');

  // Paso 2: Recorrer el array y hacer las imágenes visibles
  imagenesDensito.forEach((imagen) => {
      // Hacer visible cada imagen
      imagen.style.display = 'flex';
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
  // 4. Verificar si el elemento está definido y si ya existe en arrayIds
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      // 4. Si el elemento ya existe, moverlo a la última posición
      idsArray.splice(index, 1); // Elimina el elemento en la posición actual
    }
    // 5. Agregar el elemento al final de arrayIds
    idsArray.push(elementId);
    console.log(idsArray);
  }
} 
function muestraVidPrisma(elementId) {
  if (screenWidth > 900) {
      allContenedores.forEach(contenedor => {
    if (contenedor === 'vidColor') {
      if(contenedor.style.display !== 'none'){
        contenedor.style.display = 'none'
      }             
    }  
    })  
    var contImgsTeoria = document.getElementsByClassName('imgTeoria') // Obtén elementos por su 
    for (var i = 0; i < contImgsTeoria.length; i++) {
      var teorImage = contImgsTeoria[i] // Accede al elemento actual
      teorImage.style.display = 'none' // Oculta el elemento  
    }
    videoElements.forEach(video => {
    if (video.id === 'prisma-vid') {
      video.style.display = 'block'
      video.play()      
    } else {
      video.pause()
      video.style.display = 'none'
    }
    })
    const videos = document.querySelectorAll('.vidTeoria')
    // Detener todos los videos simultáneamente
    videos.forEach(video => {
        video.pause()
        video.style.display='none'
    })
    /* // 4. Verificar si el elemento está definido y si ya existe en arrayIds
    if (typeof elementId !== 'undefined') {
      const index = idsArray.indexOf(elementId);
      if (index !== -1) {
        // 4. Si el elemento ya existe, moverlo a la última posición
        idsArray.splice(index, 1); // Elimina el elemento en la posición actual
      }
      // 5. Agregar el elemento al final de arrayIds
      idsArray.push(elementId);
      console.log(idsArray);
    } */
  }else{
    var contiVidPrisma = document.getElementById('vidColor')
    var vidPrisma = document.getElementById('prisma-vid')
    contiVidPrisma.style.display = 'flex'
    vidPrisma.style.display = 'flex'
    vidPrisma.currentTime = '0'
    vidPrisma.play()
  }  
}
function muestraVidColor(elementId){
  if (screenWidth > 900) {
    allContenedores.forEach(contenedor => {
    if (contenedor === 'vidColor') {
      if(contenedor.style.display !== 'none'){
        contenedor.style.display = 'none'
      }             
    } 
    })
    var contImgsTeoria = document.getElementsByClassName('imgTeoria') // Obtén elementos por su
    for (var i = 0; i < contImgsTeoria.length; i++) {
      var teorImage = contImgsTeoria[i] // Accede al elemento actual
      teorImage.style.display = 'none' // Oculta el elemento  
    }
    videoElements.forEach(video => {
    if (video.id === 'color-vid') {
      video.style.display = 'block'
      video.play()      
    } else {
      video.style.display = 'none'
    }
    })
    const videos = document.querySelectorAll('.vidTeoria') 
    // Reproducir todos los videos simultáneamente
        videos.forEach(video => {
            video.pause()
            video.style.display='none'
        })
    /* // 4. Verificar si el elemento está definido y si ya existe en arrayIds
    if (typeof elementId !== 'undefined') {
      const index = idsArray.indexOf(elementId);
      if (index !== -1) {
        // 4. Si el elemento ya existe, moverlo a la última posición
        idsArray.splice(index, 1); // Elimina el elemento en la posición actual
      }
      // 5. Agregar el elemento al final de arrayIds
      idsArray.push(elementId);
      console.log(idsArray);
    } */ 
  }else{
    var contiVidPrisma = document.getElementById('vidColor-II')
    var vidPrisma = document.getElementById('color-vid')
    contiVidPrisma.style.display = 'flex'
    vidPrisma.style.display = 'flex'
    vidPrisma.currentTime = '0'
    vidPrisma.play()
  }  
}
function irContenedorAnterior() {
  var previousElementID = idsArray[idsArray.length - 2];

  switch (previousElementID ) {  
    case "cont-titulo":
    location.reload()
    break;
    case 'cont-titulo-operacion':
      abrirSeccionOperativa()        
    break;
    case 'cont-titulo-admin':
      abrirSeccionAdministrativa()        
    break; 
    case 'cont-titulo-comercial':
      abrirSeccionComercial()        
    break; 
    case 'cont-titulo-calidad':
      abrirSeccionCalidad()        
    break;     
    case "pantalla-inicial":        
    abrirSeccionContinua('pantalla-inicial')
    break; 
    case "pantalla-tintero":
      var botonesInicio = document.getElementById('container01')                  
      botonesInicio.style.display='block'
      changeButtonStyles('pantalla-tintero')  
    break;
    case "videoElement1-II":
      changeButtonStyles('videoElement1-II')  
    break;          
    case "contImgEntintador":
      showRepuesto('contImgEntintador')
    break; 
    case "contImgDistribuidor":
      showRepuesto ('contImgDistribuidor') 
    break;          
    case "contPortPlaca":
      contIMPlaca.style.display='block'
      showRepuesto('contPortPlaca')
    break;
    case "contPortManta":
      var contBotManta = document.getElementById('container01')
      contBotManta.style.display='block'
      contIMmanta.style.display='block'
      showRepuesto('contPortManta', 'videoTrain03')  
    break;
    case "contImpresor":
      showRepuesto('contImpresor', 'videoTrain01')
    break;
    case "imagen1":
      ladosPlancha('imagen1')
    break;
    case "imagen2":
      ladosPlancha('imagen2')
    break; 
    case "imagen3":
      ladosPlancha('imagen3')
    break;
    case "imagen4":
      ladosPlancha('imagen4')
    break; 
    case "cont-variable":
      abrirSeccionVariable('cont-variable')
    break; 
    case "cont-plana":
      abrirSeccionPlanas('cont-plana')
    break; 
    case "cont-secador":
      abrirSeccionCurado('cont-secador')
    break;
    case "bateria-entintado-II":
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break; 
    case "bancada-torre-II":
      changeButtonStyles('bancada-torre-II')
    break; 
    case "conteneMantaut":
      ElementosMa('conteneMantaut')
    break; 
    case "torre-imp":
      location.reload()
    break; 
    case "frente":
      muestraTorresI('frente')
    break;  
    case "sitema-humedad":
      changeButtonStyles('sitema-humedad')
    break; 
    case "pre-prensa":
      abrirPrepress()
    break; 
    case "densitometria":
      abrirDensitometria('densitometria')
    break;  
    case "vidColor":
      var mostrario = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor')
      mostrario.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vide => {
      if (vide.id === 'prisma-vid') {
        vide.style.display = 'block'
        vide.currentTime = 0;
        vide.loop = true;               
        vide.play()      
      } else {
        vide.style.display = 'none'
      }
      })
    break; 
    case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor-II')
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
      if (vid.id === 'color-vid') {
        vid.style.display = 'block'
        vid.currentTime = 0;
        vid.loop = true;                            
        vid.play()      
      } else {
        vid.style.display = 'none'
      }
      })
    break; 
    case "mantilla1" :
      ladosMantilla('mantilla1')
    break;
    case "mantilla2" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla2')
    break;
    case "mantilla3" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla3')
    break; 
    case "mantilla4" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla4')
    break;
    case 'forward':
      ladosImpresor('forward')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break;
    case 'comands':
      ladosImpresor('comands')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break; 
    case 'service':
      ladosImpresor('service')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break;
    case 'back':
      ladosImpresor('back')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'        
    break; 
    case 'desbobinadorId':
      var elementosExcluidos = ['pantalla-inicial','desbobinadorId','cont-Verticales1','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 0) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      }  
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }   
      video.style.display = 'none'
      aumentarTamanosDeBotones()
    break;
    case 'uTeñido':
      var elementosExcluidos = ['pantalla-inicial','uTeñidos','cont-Verticales2','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 1) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
      video.style.display = 'none'        
      aumentarTamanosDeBotonesII()   
    break;
    case 'alimentadorId':
      var elementosExcluidos = ['pantalla-inicial','alimentadorId','verticales-alimentador','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 2) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
      video.style.display = 'none'        
      aumentarTamanosDeBotonesIII()
    break;
    case 'unidProceso':
      var elementosExcluidos = ['pantalla-inicial','unidProceso','cont-Verticales7','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 3) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
      video.style.display = 'none'
      aumentarTamanosDeBotonesIV()
    break;
    case 'rebobinador':
      var elementosExcluidos = ['pantalla-inicial','rebobinador','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 4) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 



      video.style.display = 'none'
      aumentarTamanosDeBotonesV()
    break;
    case 'pantalla-frente':
      muestraTorresI('pantalla-frente')
    break;
    case 'pantalla-mandos':
      muestraTorresI('pantalla-mandos')
    break;
    case 'pantalla-servicio':
      muestraTorresI('pantalla-servicio')
    break;
    case 'pantalla-atras':
      muestraTorresI('pantalla-atras')
    break;
    default:
  } 
  let elementoEliminado = idsArray.pop();
  // Verificar si el elemento ya existe en el segundo array
  if (!idsArrayEliminados.includes(elementoEliminado)) {
    // Si no existe, hacer push
    idsArrayEliminados.push(elementoEliminado);
  } 
  console.log('1.', idsArray)
}
function irContenedorSiguiente() {
  var previousElementID = idsArrayEliminados[idsArrayEliminados.length - 1];
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  switch (previousElementID ) {  
    case "cont-titulo":
    location.reload()
    break;
    case 'cont-titulo-operacion':
      abrirSeccionOperativa()        
    break;
    case 'cont-titulo-admin':
      abrirSeccionAdministrativa()        
    break; 
    case 'cont-titulo-comercial':
      abrirSeccionComercial()        
    break; 
    case 'cont-titulo-calidad':
      abrirSeccionCalidad()        
    break;     
    case "pantalla-inicial":        
    abrirSeccionContinua('pantalla-inicial')
    break; 
    case "pantalla-tintero":
      var botonesInicio = document.getElementById('container01')                  
      botonesInicio.style.display='block'
      changeButtonStyles('pantalla-tintero')  
    break;
    case "videoElement1-II":
      changeButtonStyles('videoElement1-II')  
    break;          
    case "contImgEntintador":
      showRepuesto('contImgEntintador')
    break; 
    case "contImgDistribuidor":
      showRepuesto ('contImgDistribuidor') 
    break;          
    case "contPortPlaca":
      contIMPlaca.style.display='block'
      showRepuesto('contPortPlaca')
    break;
    case "contPortManta":
      var contBotManta = document.getElementById('container01')
      contBotManta.style.display='block'
      contIMmanta.style.display='block'
      showRepuesto('contPortManta', 'videoTrain03')  
    break;
    case "contImpresor":
      showRepuesto('contImpresor', 'videoTrain01')
    break;
    case "imagen1":
      ladosPlancha('imagen1')
    break;
    case "imagen2":
      ladosPlancha('imagen2')
    break; 
    case "imagen3":
      ladosPlancha('imagen3')
    break;
    case "imagen4":
      ladosPlancha('imagen4')
    break; 
    case "cont-variable":
      abrirSeccionVariable('cont-variable')
    break; 
    case "cont-plana":
      abrirSeccionPlanas('cont-plana')
    break; 
    case "cont-secador":
      abrirSeccionCurado('cont-secador')
    break;
    case "bateria-entintado-II":
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break; 
    case "bancada-torre-II":
      changeButtonStyles('bancada-torre-II')
    break; 
    case "conteneMantaut":
      ElementosMa('conteneMantaut')
    break; 
    case "torre-imp":
      location.reload()
    break; 
    case "frente":
      muestraTorresI('frente')
    break;  
    case "sitema-humedad":
      changeButtonStyles('sitema-humedad')
    break; 
    case "pre-prensa":
      abrirPrepress()
    break; 
    case "densitometria":
      abrirDensitometria('densitometria')
    break;  
    case "vidColor":
      var mostrario = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor')
      mostrario.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vide => {
      if (vide.id === 'prisma-vid') {
        vide.style.display = 'block'
        vide.currentTime = 0;
        vide.loop = true;               
        vide.play()      
      } else {
        vide.style.display = 'none'
      }
      })
    break; 
    case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor-II')
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
      if (vid.id === 'color-vid') {
        vid.style.display = 'block'
        vid.currentTime = 0;
        vid.loop = true;                            
        vid.play()      
      } else {
        vid.style.display = 'none'
      }
      })
    break; 
    case "mantilla1" :
      ladosMantilla('mantilla1')
    break;
    case "mantilla2" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla2')
    break;
    case "mantilla3" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla3')
    break; 
    case "mantilla4" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          elemento.style.display='none'
        }
      ladosMantilla('mantilla4')
    break;
    case 'forward':
      ladosImpresor('forward')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break;
    case 'comands':
      ladosImpresor('comands')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break; 
    case 'service':
      ladosImpresor('service')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'
    break;
    case 'back':
      ladosImpresor('back')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'

      var boton01 = document.getElementById('bot-inic')
      boton01.style.display = 'block'        
    break; 
    case 'desbobinadorId':
      var elementosExcluidos = ['pantalla-inicial','desbobinadorId','cont-Verticales1','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 0) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      }  
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }   
      video.style.display = 'none'
      aumentarTamanosDeBotones()
    break;
    case 'uTeñido':
      var elementosExcluidos = ['pantalla-inicial','uTeñidos','cont-Verticales2','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 1) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
      video.style.display = 'none'        
      aumentarTamanosDeBotonesII()   
    break;
    case 'alimentadorId':
      var elementosExcluidos = ['pantalla-inicial','alimentadorId','verticales-alimentador','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 2) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
      video.style.display = 'none'        
      aumentarTamanosDeBotonesIII()
    break;
    case 'unidProceso':
      var elementosExcluidos = ['pantalla-inicial','unidProceso','cont-Verticales7','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 3) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
      video.style.display = 'none'
      aumentarTamanosDeBotonesIV()
    break;
    case 'rebobinador':
      var elementosExcluidos = ['pantalla-inicial','rebobinador','container01']                                           /// OCULTA TODO MENOS (3 ELEMENTOS)          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        // Oculta todos los hijos directos de 'pantalla-inicial'
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 4) {
            // Deja visible el primer hijo
            hijo.style.display = 'flex'; // O el valor deseado ('block', 'inline', etc.)
          } else {
            // Oculta el resto de los hijos
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 



      video.style.display = 'none'
      aumentarTamanosDeBotonesV()
    break;
    case 'pantalla-frente':
      muestraTorresI('pantalla-frente')
    break;
    case 'pantalla-mandos':
      muestraTorresI('pantalla-mandos')
    break;
    case 'pantalla-servicio':
      muestraTorresI('pantalla-servicio')
    break;
    case 'pantalla-atras':
      muestraTorresI('pantalla-atras')
    break;
    default:
  } 

  idsArrayEliminados.pop();
  console.log('2.', idsArrayEliminados)
}
function listaEntrenamientosII(btnList) {
  document.body.style.zoom = "100%"; 
  container1.style.left = ''
  linkIni1.style.left = ''
  linkIni2.style.left = ''  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  enlacesIDs.forEach(function (id) {                                                                                                   // VINCULOS COLOR BLANCO
  var enlace = document.getElementById(id)
  if (enlace) {
    enlace.style.color = 'white'
  }
  })  
  var troubleTable = document.getElementById('troubleshooting') 
  troubleTable.removeAttribute('style')                                                                                                                    
  switch(btnList){                                                                                                                      
    case 'archivo': 
    var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos','linksMA','linkLis']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        /* elemento.removeAttribute('style'); */
      }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < contiBtt.length; i++) {                                                                                            /// NARANJA A BOTON
      var botonId = contiBtt[i];
      var boton = document.getElementById(botonId);
      // Restablecer el color de fondo para todos los botones
      boton.style.backgroundColor = '';
      if (botonId === btnList) {
          // Cambiar el color de fondo a naranja para el botón seleccionado
          boton.style.backgroundColor = 'orange';
      }
    }
      if(screenWidth < 500){
        var elementosExcluidos = ['largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'  
          }
        } 
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        for (var i = 0; i < contiBtt.length; i++) {                                                                                            /// NARANJA A BOTON
          var botonId = contiBtt[i];
          var boton = document.getElementById(botonId);
          // Restablecer el color de fondo para todos los botones
          boton.style.backgroundColor = '';
          if (botonId === btnList) {
              // Cambiar el color de fondo a naranja para el botón seleccionado
              boton.style.backgroundColor = 'orange';
          }
        }
      }
    break;
    case 'btt2':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;
    case 'btt3':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;  
    case 'btt4':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;  
    case 'btt5':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;  
    case 'btt6':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;  
    case 'btt7':
      var elementosExcluidos = ['conteneMantaut','conti-boton','troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contiBtt.length; i++) {                                                                                             /// NARANJA A BOTON
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        // Restablecer el color de fondo para todos los botones
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
            // Cambiar el color de fondo a naranja para el botón seleccionado
            boton.style.backgroundColor = 'orange';
        }
      }
    break;    
    default:
  }
  if(screenWidth < 500){
    var vinculosTrouble = document.getElementById('linkLis')
    vinculosTrouble.style.position = 'absolute'    
    vinculosTrouble.style.marginLeft = '-64%'
    vinculosTrouble.style.marginTop = '13%'

  }
}   
function listaEntrenamientos(){
  var videoBackground = document.getElementById('videoBackground')
  var contTraining = document.getElementById('largoImpresion')
  var contBotMA = document.getElementById('conti-boton')
  var contLinksMA = document.getElementById('linksMA')

  videoBackground.pause()
  videoBackground.style.display = 'none' 

  var elementosExcluidos = ['conteneMantaut','links-inicialesI','links-iniciales','container01']         
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      // Si el elemento está en la lista de excluidos, mostrarlo, de lo contrario, ocultarlo.
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  contTraining.style.display='block'
  contTraining.style.top='73px'
  contLinksMA.style.display='block'
  contLinksMA.style.marginLeft='427px'
  contLinksMA.style.marginTop='-16px'
  contBotMA.style.marginTop='45px'
}
function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari y Opera
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen()
    }
  }
}
function imagenesPasoApaso(padreId,idCont,idButt,idImg,id,contImgs) {
  linkIni1.style.left= '-24%'  
  linkIni2.style.left = '-20%'  
  var linkOrange = document.getElementById(id)      
  var troubleTable = document.getElementById('troubleshooting') 
  troubleTable.style.marginLeft = '-7%'
  container1.style.left = ''  
  document.body.style.zoom = "67%"
  if(screenWidth < 500){
    document.body.style.zoom = "100%" 
    troubleTable.style.left = '47%'
  }      
  switch (id) {
    case 'link1':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','linksMA','linkLis','imag1','contImgEntrenos','largoImpresion','control-neumatico','contBotInfeed','padre-1','troubleshooting']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }    
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      linkOrange.style.color = 'orange'                                                                                                       ///  LINK NARANJA
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick')
      for (var i = 0; i < botones.length; i++) {
        if (botones[i].id !== id) {
        botones[i].style.color = ''
      }}
         
      if(screenWidth < 500){
        var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','linksMA','linkLis','largoImpresion','imag1','contImgEntrenos','largoImpresion','control-neumatico','padre-1','troubleshooting']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }   
      }       
    break;
    case 'link2':
      var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-2','imag2','pneumatico','contImaginario-III','contBotInfeed']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }   
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      linkOrange.style.color = 'orange'                                                                                                       ///  LINK NARANJA
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick')
      for (var i = 0; i < botones.length; i++) {
        if (botones[i].id !== id) {
        botones[i].style.color = ''
      }}         
      if(screenWidth < 500){
        var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-2','imag2','pneumatico','contImaginario-III']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }  
      }
      var linksTraining = document.getElementById('linkLis')
      linksTraining.style.marginlef = '64px'
      var vidFesto = document.getElementById('vid-pneumatic')
      vidFesto.style.display = 'block'      
      vidFesto.currentTime = '0'
      vidFesto.play()
    break;
    case 'link3':
      var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','contImaginario','imag3','bailarina','contBotInfeed']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }   
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      linkOrange.style.color = 'orange'                                                                                                       ///  LINK NARANJA
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick')
      for (var i = 0; i < botones.length; i++) {
        if (botones[i].id !== id) {
        botones[i].style.color = ''
      }}         
      if(screenWidth < 500){
        var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','contImaginario','imag3','bailarina']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }   
      }      
      var vidBasculante = document.getElementById('vid-basculante')
      vidBasculante.style.display = 'block'      
      vidBasculante.currentTime = '0'
      vidBasculante.play()
  
    break;
    case 'link4':  
    var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','imag4','rodillo-infeed','contBotInfeed','contImaginario-II']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }   
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    linkOrange.style.color = 'orange'                                                                                                       ///  LINK NARANJA
    // Cambiar otros enlaces a azul
    var botones = document.getElementsByClassName('colorClick')
    for (var i = 0; i < botones.length; i++) {
      if (botones[i].id !== id) {
      botones[i].style.color = ''
    }}         
    if(screenWidth < 500){
      
      var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','imag4','rodillo-infeed','contImaginario-II']      
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }   
    }     
    iniciarMovimiento('rodillo-infeed')                               
    break;  
    case 'link5':
      var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','puesta-punto','contBotInfeed']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }   
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      linkOrange.style.color = 'orange'                                                                                                       ///  LINK NARANJA
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick')
      for (var i = 0; i < botones.length; i++) {
        if (botones[i].id !== id) {
        botones[i].style.color = ''
      }}         
      if(screenWidth < 500){
        var elementosExcluidos = ['troubleshooting','container01','links-inicialesI','links-iniciales','largoImpresion','linksMA','linkLis','conteneMantaut','conti-boton','largoImpresion','contImgEntrenos','padre-neumat','puesta-punto']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }   
      }     
    iniciarMovimiento('puesta-punto')
    break;  
    default: 
  }        
}
function lubricacion(buttId,btnIniId){ 
  var arrayGeneral = ['btn1','btn2','btn3','btn4','btn5','btn60','btn70','btn80',]
  var contVidLub = ['lubri-I', 'lubri-II','lubri-III', 'frec-lubrica','freno','uniTeñido'] 
  var elementos = [
    document.getElementById('frec-lubrica'),
    document.getElementById('lubri-I'),
    document.getElementById('lubri-II')
  ]
  var padreLubriIII = document.getElementById('lubri-III')
  var contLubrica = document.getElementById('lubricacion')
  var arrayIdButtsLubII = ['btn60', 'btn70', 'btn80']
  var botones = document.querySelectorAll('.btn-bloque')
  var contenedor = document.getElementById('torre-imp')

  var computedStyleUteñido = window.getComputedStyle(uTeñido);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonDesbob();
  }
  if (contenedor.style.display === 'none' || contenedor.style.display === '') {
    contLubrica.style.display = 'flex'  
    for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i]
      // Obtener la propiedad 'display' usando window.getComputedStyle
      var estiloDisplay = window.getComputedStyle(elemento).display;
      // Verificar si el estilo es 'none' y convertirlo a 'flex'
      if (estiloDisplay === 'none') {
          elemento.style.display = 'flex'
      }
    }
    arrayGeneral.forEach(element => {
      var elemento = document.getElementById(element)
      if (elemento) {
          elemento.style.display = 'none'
      } 
    })
    switch (buttId) {
      case 'boton2':        
        var computedStyleUteñido = window.getComputedStyle(uTeñido);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonDesbob();
        }
      
        for (var i = 0; i < contVidLub.length; i++) {
          var eltoId = contVidLub[i]
          var eltoLubrica = document.getElementById(eltoId)         

          if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
          } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
          }
        }
        if (padreLubriIII) {
          // Recorrer los elementos hijos del padre
          for (var i = 0; i < padreLubriIII.children.length; i++) {
            var hijo = padreLubriIII.children[i]            
            // Obtener el valor actual de la propiedad display
            var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')      
            // Verificar si el valor actual es 'none'
            if (displayValue === 'flex') {
                // Cambiar la propiedad display a 'flex'
                hijo.style.display = 'none'
            }
          }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        var contiBotsDesbobina = document.getElementById('conti-boton-desb')                                                              /// MUESTRA PADRE BOTONES ...
        var computedStyle = getComputedStyle(contiBotsDesbobina)     
        var displayValue = computedStyle.getPropertyValue("display")
        if (displayValue.toLowerCase() === "none") {
          // Cambia el valor de 'display' a 'flex'
          contiBotsDesbobina.style.display = "flex";
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        var contVidLub = ['btn1','btn2','btn3','btn4','btn5']                                                                          /// MUESTRA LOS BOTONES  
        for (var i = 0; i < contVidLub.length; i++) {
          var elementId = contVidLub[i]
          var element = document.getElementById(elementId)      
          if (element) { // Verifica si el elemento existe
            element.style.color = "white";
            element.style.background = '#333333'            
          }
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        for (var i = 0; i < arrayIdButtsCheck.length; i++) {                                                                            /// PONE VERDE EL BOTON
          var button = arrayIdButtsCheck[i]
          if (button === buttId) {
            // Cambia el color del botón seleccionado a rojo
            document.getElementById(button).style.backgroundColor = 'rgb(0,255,0)'
          } else {
            // Restablece el color de los otros botones
            document.getElementById(button).style.backgroundColor = '' // Esto elimina cualquier estilo en línea
          }
        } 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        botones.forEach(function(boton) {                                                                                            /// VERDE AL BOTON INICIAL
          var idBoton = boton.id;
          if (idBoton === btnIniId) {
              boton.style.backgroundColor = 'rgb(0,255,0)'
          }
        })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        if (contenedor.style.display === 'none'){                                                                   /// SI ESTA OCULTO EL PADRE EJECUTA FUNCION 
          showButtonsMAconRetrasoDesb()
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////  
      break;
      case 'boton3':
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
        for (var i = 0; i < contVidLub.length; i++) {                                                                  /// OCULTA TODOS ELEMENTOS LUBRICACION
          var eltoId = contVidLub[i]
          var eltoLubrica = document.getElementById(eltoId)    

          if (eltoId) {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'none'
          } 
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        for (var i = 0; i < arrayIdButtsCheck.length; i++) {                                                                        /// PONE AMARILLO EL BOTON
          var button = arrayIdButtsCheck[i]
          if (button === buttId) {
            // Cambia el color del botón seleccionado a rojo
            document.getElementById(button).style.backgroundColor = 'rgba(255,255,0,15)'
          } else {
            // Restablece el color de los otros botones
            document.getElementById(button).style.backgroundColor = ''
          }
        } 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        botones.forEach(function(boton) {                                                                                         /// AMARILLO AL BOTON INICIAL
          var idBoton = boton.id;
          if (idBoton === btnIniId) {
              boton.style.backgroundColor = 'rgba(255,255,0,15)'
          }
        })
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var contenedorFreno = document.getElementById('freno')                                                            /// OCULTA HIJOS VISIBILIZA BOTONES

        // Obtener todos los hijos del contenedor
        var hijosFreno = contenedorFreno.children;
        // Bucle para recorrer los hijos
        for (var i = 0; i < hijosFreno.length; i++) {
          var hijo = hijosFreno[i]
          // Obtener el valor de la propiedad 'display'
          var estiloDisplay = window.getComputedStyle(hijo).getPropertyValue('display')
          // Verificar si el hijo es visible ('flex') y si no es el contenedor de botones
          if (estiloDisplay === 'flex' && !hijo.classList.contains('conti-boton')) {
            // Cambiar el valor de 'display' a 'none'
            hijo.style.display = 'none'
          }
        }
        // Mostrar solo el contenedor de botones
        contPadre.style.display = 'flex'
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        for (var i = 0; i < arrayIdButtsLubII.length; i++) {                                                                     /// COLOR GRIS A LOS BOTONES                                                            
          var button = arrayIdButtsLubII[i]                                                                                         
          if (button) {
            // Cambia el color del botón a rojo
            document.getElementById(button).style.backgroundColor = '#333333'
            document.getElementById(button).style.color = 'white'      
          } 
        }  

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        if (contenedor.style.display === 'none'){                                                                    /// SI ESTA OCULTO EL PADRE EJECUTA FUNCION 
          showButtonsFrenoconRetrasoDesb()
        } 
      break;
      case 'boton4':
          palpitarBotonDesbob()     
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
        for (var i = 0; i < contVidLub.length; i++) {                                                                  /// OCULTA TODOS ELEMENTOS LUBRICACION
          var eltoId = contVidLub[i]
          var eltoLubrica = document.getElementById(eltoId)    

          if (eltoId) {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'none'
          } 
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        for (var i = 0; i < arrayIdButtsCheck.length; i++) {                                                                            /// PONE ROJO EL BOTON
          var button = arrayIdButtsCheck[i]
          if (button === buttId) {
            // Cambia el color del botón seleccionado a rojo
            document.getElementById(button).style.backgroundColor = ''
          } else {
            // Restablece el color de los otros botones
            document.getElementById(button).style.backgroundColor = '' // Esto elimina cualquier estilo en línea
          }
        } 
      break;
      case 'boton5':
        palpitarBotonDesbob()        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
        for (var i = 0; i < contVidLub.length; i++) {                                                                  /// OCULTA TODOS ELEMENTOS LUBRICACION
          var eltoId = contVidLub[i]
          var eltoLubrica = document.getElementById(eltoId)    

          if (eltoId) {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'none'
          } 
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        for (var i = 0; i < arrayIdButtsCheck.length; i++) {                                                                            /// PONE ROJO EL BOTON
          var button = arrayIdButtsCheck[i]
          if (button === buttId) {
            // Cambia el color del botón seleccionado a rojo
            document.getElementById(button).style.backgroundColor = ''
          } else {
            // Restablece el color de los otros botones
            document.getElementById(button).style.backgroundColor = '' // Esto elimina cualquier estilo en línea
          }
        } 
      break;
      case 'boton6':
        palpitarBotonDesbob()        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
        for (var i = 0; i < contVidLub.length; i++) {                                                                  /// OCULTA TODOS ELEMENTOS LUBRICACION
          var eltoId = contVidLub[i]
          var eltoLubrica = document.getElementById(eltoId)    

          if (eltoId) {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'none'
          } 
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        for (var i = 0; i < arrayIdButtsCheck.length; i++) {                                                                            /// PONE ROJO EL BOTON
          var button = arrayIdButtsCheck[i]
          if (button === buttId) {
            // Cambia el color del botón seleccionado a rojo
            document.getElementById(button).style.backgroundColor = ''
          } else {
            // Restablece el color de los otros botones
            document.getElementById(button).style.backgroundColor = '' // Esto elimina cualquier estilo en línea
          }
        } 
      break;
      default:
    }
  }
}  
function showButtonsMAconRetrasoDesb() {
  var botones = document.querySelectorAll('.butt-mautonomo-desb') // Selecciona todos los botones
  function mostrarBotonConRetrasoFreno(i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
        mostrarBotonConRetrasoFreno(i + 1)
      }, 150) // 150 milisegundos de retraso entre botones
    }
  }
  mostrarBotonConRetrasoFreno(0) // Comienza desde el primer botón
}
function LubricaDesbobinador(idButt) {
  var arrayIdButtsLub = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn60', 'btn70', 'btn80']
  var contVidLub = ['lubri-I', 'lubri-II','lubri-III', 'frec-lubrica'] 
  var padreLubriIII = document.getElementById('lubri-III')
  var arrayIdButtsLubII = ['btn60', 'btn70', 'btn80']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  var contFreno = document.getElementById('freno')
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var arrayIdButtsCheck = ['lub-diario', 'lub-semanal', 'lub-mensual']                                                  /// COLOR VERDE A LOS BOTONES REDONDOS                   
  for (var i = 0; i < arrayIdButtsCheck.length; i++) {
    var button = arrayIdButtsCheck[i]
    if (button) {
      // Cambia el color del botón a rojo
      document.getElementById(button).style.backgroundColor = 'rgb(0, 255, 0)'
    } 
  }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   arrayLabels.forEach(label => {                                                                                                    ///COLOR AMARILLO A LABELS
    if (label) {
      document.getElementById(label).style.color = 'rgb(0, 255, 0)'
    }
  })  
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < arrayIdButtsLub.length; i++) {                                                        /// COLOR VERDE A LOS BOTONES Y COLOR NEGRO AL TEXTO                                                       
    var button = arrayIdButtsLub[i]                                                                                         
    if (button === idButt) {
      // Cambia el color del botón a rojo
      document.getElementById(button).style.backgroundColor = 'rgb(0, 255, 0)'
      document.getElementById(button).style.color = 'black'
 
    } else {
      // Cambia el color del resto de botones a gris
      document.getElementById(button).style.backgroundColor= '#333333'
      document.getElementById(button).style.color = 'white'
    }
  }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   for (var i = 0; i < arrayIdButtsLubII.length; i++) {                                                  /// COLOR AMARILLO A LOS BOTONES Y COLOR NEGRO AL TEXTO                                                            
    var button = arrayIdButtsLubII[i]                                                                                         
    if (button === idButt) {
      // Cambia el color del botón a rojo
      document.getElementById(button).style.backgroundColor = 'rgba(217, 255, 0, 1)'
      document.getElementById(button).style.color = 'black'

    } else {
      // Cambia el color del resto de botones a gris
      document.getElementById(button).style.backgroundColor= '#333333'
      document.getElementById(button).style.color = 'white'

    }
  }  
  switch (idButt) {
    case 'btn1':
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contVidLub.length; i++) {                                                              /// OCULTA TODOS ELEMENTOS LUBRICACION MENOS UNO
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)
    
        if (eltoId === 'frec-lubrica') {
            eltoLubrica.style.display = 'flex'
        } else {
            eltoLubrica.style.display = 'none'
        }
      }
      showLablsLubricacion()
      break;
    case 'btn2':
      for (var i = 0; i < contVidLub.length; i++) {
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)    

        if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
        } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
        }
    }
    if (padreLubriIII) {
      // Recorrer los elementos hijos del padre
      for (var i = 0; i < padreLubriIII.children.length; i++) {
          var hijo = padreLubriIII.children[i]
          
          // Obtener el valor actual de la propiedad display
          var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
  
          // Verificar si el valor actual es 'none'
          if (displayValue === 'none') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'flex'
          }
      }
    }
    break; 
    case 'btn3':
      for (var i = 0; i < contVidLub.length; i++) {
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)    

        if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
        } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
        }
      }
    if (padreLubriIII) {
      // Recorrer los elementos hijos del padre
      for (var i = 0; i < padreLubriIII.children.length; i++) {
          var hijo = padreLubriIII.children[i]
          
          // Obtener el valor actual de la propiedad display
          var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
   
          // Verificar si el valor actual es 'none'
          if (displayValue === 'flex') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'none'
          }
      }
    }
    break;
    case 'btn4':
      for (var i = 0; i < contVidLub.length; i++) {
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)    

        if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
        } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
        }
    }
    if (padreLubriIII) {
      // Recorrer los elementos hijos del padre
      for (var i = 0; i < padreLubriIII.children.length; i++) {
          var hijo = padreLubriIII.children[i]
          
          // Obtener el valor actual de la propiedad display
          var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
  
          // Verificar si el valor actual es 'none'
          if (displayValue === 'flex') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'none'
          }
      }
    }
    break; 
    case 'btn5':
      for (var i = 0; i < contVidLub.length; i++) {
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)    

        if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
        } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
        }
     }
     if (padreLubriIII) {
      // Recorrer los elementos hijos del padre
      for (var i = 0; i < padreLubriIII.children.length; i++) {
          var hijo = padreLubriIII.children[i]
          
          // Obtener el valor actual de la propiedad display
          var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
  
          // Verificar si el valor actual es 'none'
          if (displayValue === 'flex') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'none'
          }
      }
     }
    break;
    case 'btn60': 
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contVidLub.length; i++) {                                         ///  MUESTRA EL CONTENEDOR PADRE DE LUBRICANTES Y OCULTA LOS HIJOS
        var eltoId = contVidLub[i]
        var eltoLubrica = document.getElementById(eltoId)    

        if (eltoId === 'lubri-III') {
            // Si es 'lubri-III', establecer la propiedad display a 'flex'
            eltoLubrica.style.display = 'flex'
        } else {
            // Si no es 'lubri-III', ocultar el elemento
            eltoLubrica.style.display = 'none'
        }
      }
      if (padreLubriIII) {
        // Recorrer los elementos hijos del padre
        for (var i = 0; i < padreLubriIII.children.length; i++) {
            var hijo = padreLubriIII.children[i]
            
            // Obtener el valor actual de la propiedad display
            var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')

            // Verificar si el valor actual es 'flex'
            if (displayValue === 'flex') {
                // Cambiar la propiedad display a 'none'
                hijo.style.display = 'none'
            }
        }
      }
      padreLubriIII.style.display = 'none' 
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < contFreno.children.length; i++) {                                                         /// RECORRE HIJOS DE FRENO Y LOS VISIBILIZA
        var hijo = contFreno.children[i]
        // Obtener el valor actual de la propiedad display
        var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
        // Verificar si el valor actual es 'none'
        if (displayValue === 'none') {
          // Cambiar la propiedad display a 'flex'
          hijo.style.display = 'flex'
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var vidFreno = document.getElementById('freno-vid')                                                                                 /// REPRODUCE VIDEO    
      // Establecer el tiempo de reproducción en cero (inicio)
      vidFreno.currentTime = 0;  
      // Reproducir el video
      vidFreno.play()     
    break;
    case 'btn70': 
      // Paso 1: Obtener el elemento padre
      var contFreno = document.getElementById('freno')
      // Paso 2: Iterar a través de los elementos hijos
      for (var i = 0; i < contFreno.children.length; i++) {
        var hijo = contFreno.children[i]
        // Paso 3: Verificar si el hijo tiene la propiedad 'flex' en la propiedad de estilo
        var estiloCalculado = window.getComputedStyle(hijo)
        if (estiloCalculado.getPropertyValue('display') === 'flex') {
          // Paso 4: Cambiar la propiedad de estilo 'display' a 'none'
          hijo.style.display = 'none'
        }
      }
      // Paso 5: Hacer visible solo el hijo con la clase 'conti-boton'
      contPadre.style.display = 'flex'  // Suponiendo que 'flex' es la propiedad de estilo 
    break;
    case 'btn80': 
      // Paso 1: Obtener el elemento padre
      var contFreno = document.getElementById('freno')
      // Paso 2: Iterar a través de los elementos hijos
      for (var i = 0; i < contFreno.children.length; i++) {
        var hijo = contFreno.children[i]
        // Paso 3: Verificar si el hijo tiene la propiedad 'flex' en la propiedad de estilo
        var estiloCalculado = window.getComputedStyle(hijo)
        if (estiloCalculado.getPropertyValue('display') === 'flex') {
          // Paso 4: Cambiar la propiedad de estilo 'display' a 'none'
          hijo.style.display = 'none'
        }
      }
      // Paso 5: Hacer visible solo el hijo con la clase 'conti-boton'
      contPadre.style.display = 'flex'  // Suponiendo que 'flex' es la propiedad de estilo 
    break;    
    default:
  }   
} 
function UnidadTeñido(buttId,btnIniId){
  var alimenta = document.getElementById('alimentadorId')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton8','boton9','boton10','boton11','boton12',]
  var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08']
  arrayPadres = ['uniTeñido',`rodilleria`]
  var contenedorPadre = document.getElementById('uniTeñido')
  var contiDesbobina = document.getElementById('desbobinadorId')
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
  botsDesplegables.forEach(boton => {                                                                                           ///OCULTA BOTONES INICIALMENTE
    botDesplegable = document.getElementById(boton)
    if(botDesplegable){
      botDesplegable.style.display = 'none'
    }
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    
  arrayPadres.forEach(unidad => {                                                                                                ///OCULTA PADRES INICIALMENTE
    padre = document.getElementById(unidad)
    if(padre){
      padre.style.display = 'none'
    }
  })  
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonTeñido();
  }

  if(alimenta.style.display === 'none'){                                                                                         /// SI "ALIMENTA" ESTÁ OCULTA
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonTeñido();
        }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                   /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                              /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsDesplegables.length; i++) {                                                                                   /// ROJO MISMO BOTON
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                              ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })     
      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        botsDesplegables.forEach(boton => {                                                                                           ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                  /// MAGENTA BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                            /// MAGENTA MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      showButtonsRodilleria()      
      break; 
      case 'boton10' :
        palpitarBotonTeñido()
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                            ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      break; 
      case 'boton11' : 
      palpitarBotonTeñido()
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                            ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                              /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      break; 
      case 'boton12' :
        palpitarBotonTeñido()
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                            ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      break; 
      case 'btn600' :
        palpitarBotonTeñido()
        showButtonsUTeñidoconRetraso()
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
       for (var i = 0; i < contenedorPadre.children.length; i++) {                                                           /// MUESTRA TODOS LOS HIJOS DEL PADRE
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'flex' // O el valor que prefieras
       }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = '#333333'

        }
      } 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var vidFreno = document.getElementById('teñido-vid')                                                                                 /// REPRODUCE VIDEO    
        // Establecer el tiempo de reproducción en cero (inicio)
        vidFreno.currentTime = 0;  
        // Reproducir el video
        vidFreno.play()        
      break; 
      case 'btn700' :
        palpitarBotonTeñido()
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                                    /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        var contiPadreTeñido = document.getElementById('uniTeñido')
        if (contiPadreTeñido) {
          contiPadreTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'none' // O el valor que prefieras
            }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                              /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'  
          }
        } 
        showButtonsUTeñidoconRetraso()        
      break; 
      case 'btn800' :
        palpitarBotonTeñido()
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
} 
function UnidadAlimenta(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton14','boton15','boton16','boton17','boton18']
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonAlimenta()
  }

  if(alimenta.style.display === 'none'){                                                                                                  /// SI "ALIMENTA" ESTÁ OCULTA

    switch (buttId) {
      case 'boton14' :
        palpitarBotonAlimenta()
      break;
      case 'boton15' :
        palpitarBotonAlimenta()
      break; 
      case 'boton16' :
        palpitarBotonAlimenta()
      break; 
      case 'boton17' : 
      palpitarBotonAlimenta()
      break; 
      case 'boton18' :
        palpitarBotonAlimenta()
      break; 
      case 'btn600' :
        palpitarBotonAlimenta()
        showButtonsUTeñidoconRetraso()
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
       for (var i = 0; i < contenedorPadre.children.length; i++) {                                                           /// MUESTRA TODOS LOS HIJOS DEL PADRE
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'flex' // O el valor que prefieras
       }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = '#333333'

        }
      } 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var vidFreno = document.getElementById('teñido-vid')                                                                                 /// REPRODUCE VIDEO    
        // Establecer el tiempo de reproducción en cero (inicio)
        vidFreno.currentTime = 0;  
        // Reproducir el video
        vidFreno.play()        
      break; 
      case 'btn700' :
        palpitarBotonAlimenta()
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                                    /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        var contiPadreTeñido = document.getElementById('uniTeñido')
        if (contiPadreTeñido) {
          contiPadreTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'none' // O el valor que prefieras
            }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                              /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'  
          }
        } 
        showButtonsUTeñidoconRetraso()        
      break; 
      case 'btn800' :
        palpitarBotonAlimenta()
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadProceso(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton20','boton21','boton22','boton23','boton24']
  /* var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08'] */
  /* arrayPadres = ['uniTeñido',`rodilleria`] */
  /* var contenedorPadre = document.getElementById('uniTeñido') */
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    

  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonUProceso()
  }
  if(alimenta.style.display === 'none'){                                                                                                 /// SI "ALIMENTA" ESTÁ OCULTA
    switch (buttId) {
      case 'boton20' :
          palpitarBotonUProceso()
      break;
      case 'boton21' :
        palpitarBotonUProceso()
      break; 
      case 'boton22' :
        palpitarBotonUProceso()        
      break; 
      case 'boton23' : 
      palpitarBotonUProceso()      
      break; 
      case 'boton24' :
        palpitarBotonUProceso()
      break; 
      default:
    }
  }
}
function UnidadRebonina(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton26','boton27','boton28','boton29','boton30']
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonRebobina()
  }
  if(alimenta.style.display === 'none'){                                                                                                  /// SI "ALIMENTA" ESTÁ OCULTA

    switch (buttId) {
      case 'boton26' :
          palpitarBotonRebobina()
      break;
      case 'boton27' :
        palpitarBotonRebobina()
      break; 
      case 'boton28' :
        palpitarBotonRebobina()
      break; 
      case 'boton29' : 
      palpitarBotonRebobina()
      break; 
      case 'boton30' :
        palpitarBotonRebobina()
      break; 
      default:
    }
  }
}
function UnidadTintero(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton31','boton32','boton33','boton34','boton35','boton36']
  /* var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08'] */
  /* arrayPadres = ['uniTeñido',`rodilleria`] */
  /* var contenedorPadre = document.getElementById('uniTeñido') */
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    

  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonTintero()
  }

  if(alimenta.style.display === 'none'){                                                                                                  /// SI "ALIMENTA" ESTÁ OCULTA

    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonTintero()
        }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsDesplegables.length; i++) {                                                                                    /// ROJO MISMO BOTON
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                              ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
          botsDesplegables.forEach(boton => {                                                                                           ///GRIS A BOTONES DERECHOS
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsTorre.length; i++) {                                                                                  /// MAGENTA BOTON * PARAMETRO
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsUnidadT.length; i++) {                                                                            /// MAGENTA MISMO BOTON IZQUIERDO
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadBateria(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton37','boton38','boton39','boton40','boton41']
  /* var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08'] */
  /* arrayPadres = ['uniTeñido',`rodilleria`] */
  /* var contenedorPadre = document.getElementById('uniTeñido') */
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    

  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonBateria()
  }

  if(alimenta.style.display === 'none'){                                                                                                  /// SI "ALIMENTA" ESTÁ OCULTA

    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonBateria()
        }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsDesplegables.length; i++) {                                                                                    /// ROJO MISMO BOTON
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                              ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
          botsDesplegables.forEach(boton => {                                                                                           ///GRIS A BOTONES DERECHOS
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsTorre.length; i++) {                                                                                  /// MAGENTA BOTON * PARAMETRO
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsUnidadT.length; i++) {                                                                            /// MAGENTA MISMO BOTON IZQUIERDO
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadTorre(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton42','boton43']
  /* var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08'] */
  /* arrayPadres = ['uniTeñido',`rodilleria`] */
  /* var contenedorPadre = document.getElementById('uniTeñido') */
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonTorre()
  }
  if(alimenta.style.display === 'none'){                                                                                                 /// SI "ALIMENTA" ESTÁ OCULTA
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonTorre()
        }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsDesplegables.length; i++) {                                                                                    /// ROJO MISMO BOTON
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                              ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
          botsDesplegables.forEach(boton => {                                                                                           ///GRIS A BOTONES DERECHOS
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsTorre.length; i++) {                                                                                  /// MAGENTA BOTON * PARAMETRO
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsUnidadT.length; i++) {                                                                            /// MAGENTA MISMO BOTON IZQUIERDO
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadSisHumedad(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton44','boton45','boton4']
  /* var botsDesplegables = ['btn600','btn700','btn800','btn06','btn07','btn08'] */
  /* arrayPadres = ['uniTeñido',`rodilleria`] */
  /* var contenedorPadre = document.getElementById('uniTeñido') */
  var contiDesbobina = document.getElementById('desbobinadorId')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////    
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonHumedad()
  }
  if(alimenta.style.display === 'none'){                                                                                                 /// SI "ALIMENTA" ESTÁ OCULTA
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonHumedad()
        }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsTorre.length; i++) {                                                                                     /// ROJO BOTON * PARAMETRO
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsUnidadT.length; i++) {                                                                               /// ROJO MISMO BOTON IZQUIERDO
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      for (var i = 0; i < botsDesplegables.length; i++) {                                                                                    /// ROJO MISMO BOTON
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      botsDesplegables.forEach(boton => {                                                                                              ///GRIS A BOTONES DERECHOS
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
         }
       })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
          botsDesplegables.forEach(boton => {                                                                                           ///GRIS A BOTONES DERECHOS
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsTorre.length; i++) {                                                                                  /// MAGENTA BOTON * PARAMETRO
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        for (var i = 0; i < botsUnidadT.length; i++) {                                                                            /// MAGENTA MISMO BOTON IZQUIERDO
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < contenedorPadre.children.length; i++) {                                                               /// OOCULTAR HIJOS MENOS BOTONES
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex' // O el valor que prefieras
        }

        // Recorre los hijos del contenedor padre
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            // Verifica si el hijo es un botón y lo muestra
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex' // O el valor que prefieras
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        for (var i = 0; i < botsDesplegables.length; i++) {                                                                         /// ROJO MISMO BOTON IZQUIERDO
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function showButtonsUTeñidoconRetraso() {
  var botones = document.querySelectorAll('.butt-mautonomo-teñido') // Selecciona los botones
  var contPadre = document.getElementById('conti-boton-teñido')
  var parentContainer = document.getElementById('uniTeñido')
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  parentContainer.style.display='flex'                                                                                                /// OCULTA HIJOS MENOS LOS BOTONES
  contPadre.style.display='flex'

  var childContainers = parentContainer.children;
  for (var i = 0; i < childContainers.length; i++) {
    var container = childContainers[i]
    if (container.id === 'conti-boton-teñido') {
      container.style.display = 'flex'
    } else {
      container.style.display = 'none'
    }
  }

  function mostrarBotonConRetrasoTeñido (i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
      mostrarBotonConRetrasoTeñido(i + 1)
      }, 150) // 150 milisegundos de retraso entre botones
    }
  } 
  mostrarBotonConRetrasoTeñido(0)
}
function showButtonsFrenoconRetrasoDesb() {
  var botones = document.querySelectorAll('.butt-mautonomo-freno') // Selecciona todos los botones
  var contBotonesFreno = document.getElementById('freno')

  contBotonesFreno.style.display = 'flex'
  contPadre.style.display = 'flex'
  function mostrarBotonConRetrasoFrenoI (i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
        mostrarBotonConRetrasoFrenoI(i + 1)
      }, 150) // 150 milisegundos de retraso entre botones
    }
  }  
  mostrarBotonConRetrasoFrenoI(0)
}
function showButtonsRodilleria() {
  var botones = document.querySelectorAll('.butt-mautonomo-rodilleria') // Selecciona los botones
  var contPadre = document.getElementById('conti-boton-rodilleria')
  var parentContainer = document.getElementById('rodilleria')

  parentContainer.style.display='flex'
  contPadre.style.display='flex'

  var childContainers = parentContainer.children;
  for (var i = 0; i < childContainers.length; i++) {
    var container = childContainers[i]
    if (container.id === 'conti-boton-rodilleria') {
      container.style.display = 'flex'
    } else {
      container.style.display = 'none'
    }
  }

  function mostrarBotonRodilleria (i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
        mostrarBotonRodilleria(i + 1)
      }, 150) // 150 milisegundos de retraso entre botones
    }
  } 
  mostrarBotonRodilleria(0)
}
function rodillosTeñido(botId) {
  var rodilleria = document.getElementById('rodilleria')
  var contVideoTeñido = document.getElementById('rodilleria-vid')
  var pantaInicial = document.getElementById('pantalla-inicial')
  var padreDurezas = document.getElementById('durezas')
  var contenedoresHijos = rodilleria.children;
  for (var i = 0; i < contenedoresHijos.length; i++) {
    var hijo = contenedoresHijos[i]
    var estiloComputado = window.getComputedStyle(hijo)
    if (estiloComputado.display === 'flex' && hijo === 'conti-boton-rodilleria') {
      hijo.style.display = 'none'
    }
  }

  switch(botId) {
    case 'btn06':
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      var childContainers = rodilleria.children;                                                                              /// OCULTA HIJOS MENOS LOS BOTONES
      for (var i = 0; i < childContainers.length; i++) {
        var container = childContainers[i]
        if (container) {
          container.style.display = 'flex'
        } else {
          container.style.display = 'none'
        }
      }
      padreDurezas.style.display = 'none'                                                                                             /// MUESTRA IMAGENES DUREZA
      for (var i = 0; i < arrayImgsRodilleria.length; i++) {                                                                           
        var imagen = arrayImgsRodilleria[i];
        imagen.style.display = 'none';
      }

      contVideoTeñido.style.display = 'flex'
      contVideoTeñido.currentTime = '0'
      contVideoTeñido.play()
    break;
    case 'btn07':
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      var childContainers = rodilleria.children;                                                                              /// OCULTA HIJOS MENOS LOS BOTONES
      for (var i = 0; i < childContainers.length; i++) {
        var container = childContainers[i]
        if (container.id !== 'conti-boton-rodilleria') {
          container.style.display = 'none'
        } else {
          container.style.display = 'flex'
        }
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      padreDurezas.style.display = 'flex'                                                                                             /// MUESTRA IMAGENES DUREZA
      for (var i = 0; i < arrayImgsRodilleria.length; i++) {                                                                           
        var imagen = arrayImgsRodilleria[i];
        imagen.style.display = 'flex';
      }
    break;
    case 'btn08':
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      var childContainers = rodilleria.children;                                                                              /// OCULTA HIJOS MENOS LOS BOTONES
      for (var i = 0; i < childContainers.length; i++) {
        var container = childContainers[i]
        if (container.id !== 'conti-boton-rodilleria') {
          container.style.display = 'none'
        } else {
          container.style.display = 'flex'
        }
      }
    break;
    default:
  } 

}
function showLablsLubricacion() { 
  var botones = document.querySelectorAll('.labl-lub') // Selecciona todos los botones
  function mostrarLabelConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
        mostrarLabelConRetraso(i + 1)
      }, 150) // 100 milisegundos de retraso entre botones
    }
  }
  mostrarLabelConRetraso(0) // Comienza desde el primer botón
}
function lubricaDiario(butId,labelId){
  var contLubricador = document.getElementById('lubri-I')
  var contLubricadorII = document.getElementById('lubri-II')
  var arrayIdButtsLub = ['lub-diario', 'lub-semanal', 'lub-mensual']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  for (var i = 0; i < arrayIdButtsLub.length; i++) {
    var button = arrayIdButtsLub[i]
    if (button === butId) {
      // Cambia el color del botón a rojo
      document.getElementById(button).style.backgroundColor = 'rgb(0,255,0)'
    } else {
      // Cambia el color del resto de botones a gris
      document.getElementById(button).style.backgroundColor= 'rgba(217, 255, 0, 1)'
    }
  }
  arrayLabels.forEach(label => {
    if (label === labelId) {
      document.getElementById(label).style.color = 'rgb(0, 255, 0)'
    }else{
      document.getElementById(label).style.color = 'rgb(255, 255, 0)'
    }
  })  

  switch(butId) {
    
    case 'lub-diario':
      contLubricador.style.display = 'flex'
      contLubricadorII.style.display = 'flex'  
      videoElements.forEach(video => {
      if (video.id === 'lubri-vid') {
        video.style.display = 'flex'
        video.currentTime = 0;          
        video.play()      
      } else {
        video.style.display = 'none'
      }})   
     // Obtener el elemento padre
      var contenedorPadre = document.getElementById('lubri-I')
      var contenedorPadreII = document.getElementById('lubri-II')
      // Verificar si se encontró el elemento padre
      if (contenedorPadre) {
          // Recorrer los elementos hijos del padre
        for (var i = 0; i < contenedorPadre.children.length; i++) {
          var hijo = contenedorPadre.children[i]
          // Obtener el valor actual de la propiedad display
          var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
          // Verificar si el valor actual es 'none'
          if (displayValue === 'none') {
            // Cambiar la propiedad display a 'flex'
            hijo.style.display = 'flex'
          }
        }
      }
      // Verificar si se encontró el elemento padre
      if (contenedorPadreII) {
        // Recorrer los elementos hijos del padre
      for (var i = 0; i < contenedorPadreII.children.length; i++) {
        var hijoI = contenedorPadreII.children[i]
        // Obtener el valor actual de la propiedad display
        var displayValueI= window.getComputedStyle(hijoI).getPropertyValue('display')
        // Verificar si el valor actual es 'none'
        if (displayValueI === 'none') {
          // Cambiar la propiedad display a 'flex'
          hijoI.style.display = 'flex'
        }
      }
    }      
 
    break;
    case 'lub-semanal':
      videoElements.forEach(video => {
        if (video.id === 'lubri-vid') {
          video.style.display = 'none'
          video.pause()      
        }})     
  
       // Obtener el elemento padre
        var contenedorPadre = document.getElementById('lubri-I')
        var contenedorPadreII = document.getElementById('lubri-II')
  
        // Verificar si se encontró el elemento padre
        if (contenedorPadre) {
            // Recorrer los elementos hijos del padre
          for (var i = 0; i < contenedorPadre.children.length; i++) {
            var hijo = contenedorPadre.children[i]
            // Obtener el valor actual de la propiedad display
            var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
            // Verificar si el valor actual es 'none'
            if (displayValue === 'flex') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'none'
            }
          }
        }
  
        // Verificar si se encontró el elemento padre
        if (contenedorPadreII) {
          // Recorrer los elementos hijos del padre
        for (var i = 0; i < contenedorPadreII.children.length; i++) {
          var hijoI = contenedorPadreII.children[i]
          // Obtener el valor actual de la propiedad display
          var displayValueI= window.getComputedStyle(hijoI).getPropertyValue('display')
          // Verificar si el valor actual es 'none'
          if (displayValueI === 'flex') {
            // Cambiar la propiedad display a 'flex'
            hijoI.style.display = 'none'
          }
        }
      }      
    break;
    case 'lub-mensual':
      videoElements.forEach(video => {
        if (video.id === 'lubri-vid') {
          video.style.display = 'none'
          video.pause()      
        }})     
  
       // Obtener el elemento padre
        var contenedorPadre = document.getElementById('lubri-I')
        var contenedorPadreII = document.getElementById('lubri-II')
  
        // Verificar si se encontró el elemento padre
        if (contenedorPadre) {
            // Recorrer los elementos hijos del padre
          for (var i = 0; i < contenedorPadre.children.length; i++) {
            var hijo = contenedorPadre.children[i]
            // Obtener el valor actual de la propiedad display
            var displayValue = window.getComputedStyle(hijo).getPropertyValue('display')
            // Verificar si el valor actual es 'none'
            if (displayValue === 'flex') {
              // Cambiar la propiedad display a 'flex'
              hijo.style.display = 'none'
            }
          }
        }
  
        // Verificar si se encontró el elemento padre
        if (contenedorPadreII) {
          // Recorrer los elementos hijos del padre
        for (var i = 0; i < contenedorPadreII.children.length; i++) {
          var hijoI = contenedorPadreII.children[i]
          // Obtener el valor actual de la propiedad display
          var displayValueI= window.getComputedStyle(hijoI).getPropertyValue('display')
          // Verificar si el valor actual es 'none'
          if (displayValueI === 'flex') {
            // Cambiar la propiedad display a 'flex'
            hijoI.style.display = 'none'
          }
        }
      }        
    break;
    default:
  }
}
function antesImagenes(){
  var contImagenAntes = document.getElementById('toyota-kaizen-antes')
  contImagenAntes.style.display = 'flex'
}

function resultadosEmpleado(idEmpleado, functionExe,icono) {
  var colors = ['rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'orangered'] // Colores en formato RGB
  const iconosPermitidos = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];
  /* var contUserScroll = document.getElementById('contenedor-vertical') */
  var contUserElementsI = document.getElementsByClassName('cont-userI') 
  var contSecundario = document.getElementById('conte-secundario')
  var contUserArrayI = Array.from(contUserElementsI)  
  var contUserElements = document.getElementsByClassName('cont-user')   
  var colorIndex = 0; // Índice del color actual
  var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','iconos','conte-secundario','contenedor-vertical','title-interfaz','contLineas','canvasContainer4','MiGrafica4','canvasContainer5','MiGrafica5','canvasContainer6','MiGrafica6','canvasContainer7','MiGrafica7','canvasContainer9','MiGrafica9']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  

  for (var i = 0; i < contUserElements.length; i++) {
    var element = contUserElements[i]
    if (element.id === idEmpleado) {
      contSecundario.style.display = 'flex'
      element.style.position = 'fixed'
      element.style.display = 'flex'
      element.style.height = '19.6%'
      element.style.width = '12%'
      element.style.top = '10.7%'
      element.style.left = '3%'

      // Accede al label dentro del div
      var label = element.querySelector('label')
      if (label) {
        intervaloColor = setInterval(function () {
          label.style.color = colors[colorIndex] // Cambia el color del texto
          colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
        }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
      }
    } else {
      element.style.display = 'none'
    }
   } 

    /*    if (contUserScroll) {
        contUserScroll.style.display = 'flex'
      } */
    contUserArrayI.forEach(element => {
    if (element.id === idEmpleado) {  
      var originalColor = element.style.backgroundColor = '';
      element.style.backgroundColor = 'green';
      (function (element, originalColor) {
        setTimeout(function () {
          element.style.backgroundColor = originalColor;
        }, 200);
      })(element, originalColor);
    }
  });

  if(screenWidth < 500){
    var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','iconos','contLineas-II','contenedor-vertical','canvasContainer4-II','MiGrafica4-II','canvasContainer5-II','MiGrafica5-II','canvasContainer6-II','MiGrafica6-II','canvasContainer7-II','MiGrafica7-II','canvasContainer9-II','MiGrafica9-II']
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }  

    for (var i = 0; i < contUserElements.length; i++) { 
      var element = contUserElements[i]
      if (element.id === idEmpleado) {
        contSecundario.style.display = 'flex'
        element.style.position = 'fixed'
        element.style.display = 'flex'
        element.style.height = '15%'
        element.style.top = '21.5%'
        element.style.left = '5%' 

              // Accede al label dentro del div
      var label = element.querySelector('label')
      if (label) {
        intervaloColor = setInterval(function () {
          label.style.color = colors[colorIndex] // Cambia el color del texto
          colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
        }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
      }
    } else {
      element.style.display = 'none'
    }
  } 
    
  if (iconosPermitidos.includes(icono)) {
      iniciarMovimiento('contenedor-vertical');
  }    
  }

switch (idEmpleado) {
    case 'icon-carlos-I':
      var ContIconoAnaI = document.getElementById('icon-carlos')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.display = 'flex'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'       
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-andres-I':
      var ContIconoAnaI = document.getElementById('icon-andres')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-jorge-I':
      var ContIconoAnaI = document.getElementById('icon-jorge')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-jesus-I':
      var ContIconoAnaI = document.getElementById('icon-jesus')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-sandra-I':
      var ContIconoAnaI = document.getElementById('icon-sandra')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-mario-I':
      var ContIconoAnaI = document.getElementById('icon-mario')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    case 'icon-ana-I':
      var ContIconoAnaI = document.getElementById('icon-ana')
      var contSecundarios = document.getElementById('conte-secundario')
      contSecundarios.style.position = 'absolute'
      contSecundarios.style.marginTop = '2%'
      ContIconoAnaI.style.position = 'absolute'
      ContIconoAnaI.style.display = 'flex'
      ContIconoAnaI.style.height = '65%'
      ContIconoAnaI.style.width = '12%'
      ContIconoAnaI.style.top = '-66%'
      ContIconoAnaI.style.left = '3%'
      if(screenWidth < 500){
        contSecundarios.style.display = 'flex'
        contSecundarios.style.marginTop = '2%'
        ContIconoAnaI.style.position = 'absolute'
        ContIconoAnaI.style.display = 'flex'
        ContIconoAnaI.style.height = '44%'
        ContIconoAnaI.style.top = '-22%'
        ContIconoAnaI.style.left = '3%' 
        // Accede al label del contenedor
        var etqt = ContIconoAnaI.querySelector('label')
        if (etqt) {
          setInterval(function () {
            etqt.style.color = colors[colorIndex] // Cambia el color del texto
            colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
          }, 200) // Cambia el color cada 0.2 segundos (200 milisegundos)
        }
      }
    break;
    default:
    break;
  }      
  switch (functionExe) {
    case 'updateAna':
      updateAna() 
      updateAnaII()
    break;
    case 'updateMario':
      updateMario()
      updateMarioII()
    break;
    case 'updateSandra':
      updateSandra()
      updateSandraII()
    break;
    case 'updateJesus':
      updateJesus()
      updateJesusII()      
    break;
    case 'updateJorge':
      updateJorge()
      updateJorgeII()      
    break;
    case 'updateAndres':
      updateAndres()
      updateAndresII()      
    break;
    case 'updateCarlos':
      updateCarlos()
      updateCarlosII()      
    break;
    default:
    break;
  }
}

function resultadosMA(){
  var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','iconos','conte-secundario','title-interfaz']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  document.body.style.zoom = "100%";
  var contiUsers = document.getElementsByClassName('cont-user'); 
  for (var i = 0; i < contiUsers.length; i++) {
    var usuario = contiUsers[i];
    usuario.style.top = '';
    usuario.style.display = 'flex';
    usuario.style.position = '';
    usuario.style.height = '';
    usuario.style.width = '';
    usuario.style.left = '';
    var label = usuario.querySelector('label');
    clearInterval(intervaloColor); // Detiene el intervalo de cambio de colores
    if (label) {
        label.style.color = 'yellow'; // Cambia el color del texto a amarillo
    }
  }

  if(screenWidth < 500){
    var etiquetasIconos = document.getElementsByClassName('lblNombres');
    for(var i = 0; i < etiquetasIconos.length; i++){
        var labelIcon = etiquetasIconos[i];
        clearInterval(intervaloColor); // Detiene el intervalo de cambio de colores
        if(labelIcon){
          labelIcon.style.color = 'yellow'; // Cambia el color del texto a amarillo
        }    
    }

  }
}

function aumentarTamaño(element, factor, tiempo) {
  const originalWidth = element.clientWidth; // Ancho original del elemento
  const originalHeight = element.clientHeight; // Alto original del elemento

  element.style.transition = `transform ${tiempo}s`; // Aplica una transición CSS para la animación
  element.style.transform = `scale(${factor})`; // Escala el elemento al tamaño aumentado

  // Después de un tiempo, quita la transición y restaura el tamaño original
  setTimeout(() => {
    element.style.transition = 'none'
    element.style.transform = 'scale(1)'
  }, tiempo * 500)
}
function deslizaMosaico(){

  //setTimeout(function() {
    deslizaMosaicoII('icon-carlos', 'troubleshoot')  
    // Esperar 400 milisegundos y ejecutar la tercera función
    setTimeout(function() {
      deslizaMosaicoII('icon-andres', 'def1')  
      // Esperar 400 milisegundos y ejecutar la tercera función
      setTimeout(function() {
        deslizaMosaicoII('icon-jorge', 'def2')  
        // Esperar 400 milisegundos y ejecutar la cuarta función
        setTimeout(function() {
          deslizaMosaicoII('icon-jesus', 'adtBut')  
          // Esperar 400 milisegundos y ejecutar la quinta función
          setTimeout(function() {
            deslizaMosaicoII('icon-sandra', 'fua1')  
            // Esperar 400 milisegundos y ejecutar la sexta función
            setTimeout(function() {
              deslizaMosaicoII('icon-mario', 'lup')
              setTimeout(function() {
              deslizaMosaicoII('icon-ana', 'lup')
            }, 300)
          }, 300)
        }, 300)
      }, 300)
    }, 300)
    }, 300)
  //}, 50) 
}

function graficosAutomaticos(idGrafico){

  for (var i = 0; i < idsMA.length; i++) {
    var elto = idsMA[i]
    var elemento = document.getElementById(elto)
    
    if (elto === idGrafico) {
      elemento.style.display = 'flex'      
    }
  }
}
function updateAna() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)

  var nuevosDatos = [/* Nuevos valores de datos */ 0,70,30,70,50,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 55,5,95,30,10,10]
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 30,50,60,77,20,8]
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 5,17,8,30,44,10]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 11,50,20,80,10,100]
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 5,17,33,45,51,57,67,99]           
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update() 

}
function updateAnaII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos    
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 /*setTimeout(function() {
   graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms) */
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')  
 }, 700) // 0.3 segundos (300 ms + 300 ms)

 var nuevosDatos = [/* Nuevos valores de datos */ 0,70,30,70,50,90]
 // Actualiza los datos del gráfico
 chart7II.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7II.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 55,5,95,30,10,10]            
 // Actualiza los datos del gráfico
 chart8II.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8II.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 30,50,60,77,20,8]        
 // Actualiza los datos del gráfico
 chart9II.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosIII = [/* Nuevos valores de datos */ 5,17,8,30,44,10]
 // Actualiza los datos del gráfico
 chart10II.data.datasets[0].data = nuevosDatosIII;
 // Actualiza el gráfico
 chart10II.update()
   //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 11,50,20,80,10,100]
 // Actualiza los datos del gráfico
 chart11II.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 5,17,33,45,51,57,67,99]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update() 

}
function updateMario() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 100,20,70,10,80,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 30,25,90,110,50,77]
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 100,90,10,30,70,10]
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update() 
    //////////////////////////////////////////////////////////////////
    var nuevosDatosIII = [/* Nuevos valores de datos */ 99,11,70,47,17,80]
    // Actualiza los datos del gráfico
    chart10.data.datasets[0].data = nuevosDatosIII;
    // Actualiza el gráfico
    chart10.update()
      //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 10,80,50,20,90,40]
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 55,67,73,70,65,80,80,91]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update() 
}
function updateMarioII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 /*setTimeout(function() {
   graficosAutomaticos('canvasContainer8')
 }, 700) // 0.3 segundos (300 ms + 300 ms)*/ 
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 100,20,70,10,80,90]
 // Actualiza los datos del gráfico
 chart7II.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7II.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 30,25,90,110,50,77]
 // Actualiza los datos del gráfico
 chart8II.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8II.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 100,90,10,30,70,10]
 // Actualiza los datos del gráfico
 chart9II.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9II.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 99,11,70,47,17,80]
   // Actualiza los datos del gráfico
   chart10II.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10II.update()
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 10,80,50,20,90,40]
 // Actualiza los datos del gráfico
 chart11II.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 55,67,73,70,65,80,80,91]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update() 
}
function updateSandra() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 33,20,100,50,80,10]
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 30,75,20,100,50,17]
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 33,50,30,90,100,5]
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update() 
 //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,5,70,97,37,60]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
  //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 30,40,250,600,45,800]
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 50,37,33,17,51,77,67,70]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateSandraII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
   graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms) */ 
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 33,20,100,50,80,10]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 30,75,20,100,50,17]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 33,50,30,90,100,5]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
//////////////////////////////////////////////////////////////////
 var nuevosDatosIII = [/* Nuevos valores de datos */ 9,5,70,97,37,60]
 // Actualiza los datos del gráfico
 chart10II.data.datasets[0].data = nuevosDatosIII;
 // Actualiza el gráfico
 chart10II.update()
 //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 30,40,250,600,45,800]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 50,37,33,17,51,77,67,70]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update()  
}
function updateJesus() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,100,10,20,50,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()  
  ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 100,50,10,100,50,17]
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 10,100,50,30,10,90]
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,90,70,47,87,10]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 100,8,50,70,30,10]
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 33,37,33,77,45,77,80,87]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()   
}
function updateJesusII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 /*setTimeout(function() {
    graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms) */ 
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 10,100,10,20,50,90]
 // Actualiza los datos del gráfico
 chart7II.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7II.update()  
 ///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 100,50,10,100,50,17]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 10,100,50,30,10,90]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosIII = [/* Nuevos valores de datos */ 9,90,70,47,87,10]
 // Actualiza los datos del gráfico
 chart10II.data.datasets[0].data = nuevosDatosIII;
 // Actualiza el gráfico
 chart10II.update()
   //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 100,8,50,70,30,10]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 33,37,33,77,45,77,80,87]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update()   
}
function updateJorge() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,20,50,10,10,5]
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 77,33,44,66,55,17]
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 50,5,5,10,100,77]
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 55,17,77,100,47,7]
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update()
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 44,99,17,77,10,5]
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 100,37,55,77,77,77,81,99]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateJorgeII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
   graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)  */
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 10,20,50,10,10,5]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 77,33,44,66,55,17]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 50,5,5,10,100,77]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 55,17,77,100,47,7]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 44,99,17,77,10,5]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 100,37,55,77,77,77,81,99]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update()  
}
function updateAndres() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 0,20,10,0,0,5]
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 7,3,4,6,5,7]
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 5,15,55,10,100,77]
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 0,17,37,50,97,27]
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update()
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 5,29,17,47,3,19]
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 77,37,55,41,33,77,50,60]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateAndresII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
   graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms) */ 
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 0,20,10,0,0,5]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 7,3,4,6,5,7]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 5,15,55,10,100,77]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 0,17,37,50,97,27]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 5,29,17,47,3,19]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 77,37,55,41,33,77,50,60]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update()  
}
function updateCarlos() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 17,99,44,0,7,5]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 27,33,84,6,15,97]
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 15,5,55,90,100,17]
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 20,97,27,80,7,77]
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update()
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 50,91,17,77,33,89]
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 17,37,22,30,5,60,77,80]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateCarlosII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
   graficosAutomaticos('canvasContainer4-II')
 },500) // 0.3 segundos
 setTimeout(function() {
   graficosAutomaticos('canvasContainer7-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer5-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 setTimeout(function() {
   graficosAutomaticos('canvasContainer6-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
   graficosAutomaticos('canvasContainer8-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms) */ 
 setTimeout(function() {
   graficosAutomaticos('canvasContainer9-II')
 }, 700) // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 17,99,44,0,7,5]
 // Actualiza los datos del gráfico
 chart7II.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7II.update()
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 27,33,84,6,15,97]
 // Actualiza los datos del gráfico
 chart8II.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8II.update()
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 15,5,55,90,100,17]
 // Actualiza los datos del gráfico
 chart9II.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 20,97,27,80,7,77]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 50,91,17,77,33,89]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
 //////////////////////////////////////////////////////////////////
 var nuevosDatosV = [/* Nuevos valores de datos */ 17,37,22,30,5,60,77,80]
 // Actualiza los datos del gráfico
 chart12II.data.datasets[0].data = nuevosDatosV;
 // Actualiza el gráfico
 chart12II.update()  
}
function deslizaMosaicoII(idElement) {
  var contLinkMant = document.getElementById('linksMA')
  var elementoAnterior = null;
  var elementoActual = null;

  if (contLinkMant !== null && contImgEntrenos !== null) {
    contLinkMant.style.display = 'none'
    contImgEntrenos.style.display = 'none'
  }

  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement)
  }

  var contenedor = document.getElementById(idElement)
  
  contenedor.style.display = 'flex'
  contenedor.style.left = '257px'

  var inicio = 1100;
  var velocidad = 500;
  var duracion = Math.abs(destino - inicio) / velocidad * 100;
  var inicioTiempo = null;

  function animar(tiempo) {
    if (!inicioTiempo) inicioTiempo = tiempo;
    var progreso = (tiempo - inicioTiempo) / duracion;
    var izquierda = inicio + progreso * (destino - inicio)
    if (progreso < 1) {
      contenedor.style.left = izquierda + 'px'
      requestAnimationFrame(animar)
    } else {
      contenedor.style.left = destino + 'px'
    }
  }
  requestAnimationFrame(animar)

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i])
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1])

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior)
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'))
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'))

      destino = posicionAnterior + anchoAnterior;
    }
  }

}
function ampliaIndicaciones(index) {
  var botonConico = document.getElementById('bot-indicacionesII')
  var indicEjeI = document.getElementById('indicaciones-conico')
  var indicEje = document.getElementById('indicaciones-eje') 
  var conico = document.getElementById('conico')
  var eje = document.getElementById('eje')

  switch (index) {
    case 'eje':
    eje.style.width = (window.innerWidth * 0.75) + 'px' 
    eje.style.height = window.innerHeight + 'px' 
    indicEje.style.display = 'flex'
    eje.style.position = 'fixed'
    conico.style.zIndex = '0'     
    eje.style.zIndex = '999'
    eje.style.left = '0' 
    eje.style.top = '0' 
    
    break;
    case 'conico':
      botonConico.style.display = 'block'
      indicEjeI.style.display = 'flex' 
      conico.style.position = 'fixed'
      conico.style.height = window.innerHeight + 'px' 
      conico.style.width = (window.innerWidth * 0.75) + 'px'    
      conico.style.zIndex = '999'
      conico.style.left = '0' 
      conico.style.top = '0'    
      break;
    case 2:
    break;
    case 3:
    break;
    default:
    break;
  }
}
function ocultarIndicaciones(idIndicador) {
  /* var contenedor = document.getElementById('imgsRepuestos') */
  var indicEjeI = document.getElementById('indicaciones-conico')
  var indicEje = document.getElementById('indicaciones-eje')
  var conico = document.getElementById('conico')
  var eje = document.getElementById('eje')

  switch(idIndicador) {
    case 'eje':
      indicEje.style.display = 'none'
      eje.style.position = 'relative'
      eje.style.height = '117px'
      eje.style.display = 'flex'
      eje.style.width = '143px'
    break;
    case 'conico':
      conico.style.position = 'relative'
      indicEjeI.style.display = 'none'
      conico.style.display = 'flex'  
      conico.style.height = '117px'
      conico.style.width = '143px'
    break;  
    default:
  }
  linkListI.style.display = "none";  
  linkList.style.display = "none";

}
function rodillosKaizen(idButton,vidElem) {
  var buttsTerceros = document.getElementsByClassName('butt-mautonomo-planos') 
  /* var kaizenPropuestos = document.getElementById('kaizen-propuestos') */
  var contMateriales = document.getElementById('materiales-kaizen')
  var contplanosKaizen = document.getElementById('planos-kaizen')
  var videoKaizen = document.getElementById('videoElem')
  var imgsPlanos = document.getElementsByClassName('imgs-Planos')
  var contBotKaizen = document.getElementById('conti-boton-kaizen')
  var conPlanos = document.getElementById('planos-kaizen')
  var bton12 = document.getElementById('btn12')
  var contiButts = document.getElementById('conti-boton-planos') 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (bton12 !== null) {                                                                                                             /// DEVUELVE ESTILO A BOTON
    bton12.style.backgroundColor = '' // Elimina el fondo
    bton12.style.color = '' // Restablece el color del texto
    bton12.innerText = 'IMPLEMENTADOS'
  }
  switch(idButton){
    case 'btn10':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','toyota-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < buttsToyota.length; i++) {                                            /// OBTENER 'window.getcomputedStyle' DE LAS (8 IMAGENES EN UNA)
        var elemento = document.getElementById(buttsToyota[i])      
        if (elemento) {
          // Accede a la propiedad 'display' utilizando window.getComputedStyle
          var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display')
      
          // Verifica si la propiedad 'display' es 'none' y cámbiala a 'flex' si es necesario
          if (estiloDisplay === 'none') {
            elemento.style.display = 'flex'
          }
        }
      }
      transicionImagenes()

      if(screenWidth < 500){
        
      }
    break;
    case 'btn11':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < arrayButtsPlanos.length; i++) {                                                                            /// OCULTA TERCEROS BOTONES
        var elemento = document.getElementById(arrayButtsPlanos[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }
    break; 
    case 'btn12':
      var miBot = document.getElementById('btn12')
      var videoKaizen = document.getElementById('vidElem')
      var contBotKaizen = document.getElementById('conti-boton-kaizen')
      contadorClicks++;
      console.log(contadorClicks)
      // Verificar si es el primer o segundo clic
      if (contadorClicks === 1) {
        miBot.innerText = 'ANTES';
        miBot.style.backgroundColor = 'red' 
        var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','toyota-kaizen-antes']
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        } 

        if (screenWidth < 500){
          /* contiButts.style.top = '7%' */
          contiButts.removeAttribute('style')
          /* contBotKaizen.removeAttribute('style') */
        }
     
      } else if (contadorClicks === 2) {
          miBot.innerText = 'DESPUES';
          miBot.style.backgroundColor = 'green' 
          var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','kaizenCont','vidElem']  
          for (var i = 0; i < allContenedores.length; i++) { 
            var elemento = document.getElementById(allContenedores[i])  
            if (elemento) {
              elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
            }
          } 
          videoKaizen.style.display = 'flex'
          videoKaizen.currentTime = 0
          videoKaizen.play() 

          // Reiniciar la variable a cero después del segundo clic
          contadorClicks = 0;
          if (screenWidth < 500){
            /* contiButts.style.top = '7%' */
            /* contiButts.removeAttribute('style') */
            contBotKaizen.removeAttribute('style')
          }
  
        }

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      // Paso 2: Recorrer la colección y hacer visibles los botones con un intervalo de 0.3 segundos              /// BOTONES CON AUMENTO Y TRANSICION
      for (var i = 0; i < buttsTerceros.length; i++) {
        var boton = buttsTerceros[i]
        // Mostrar el botón con un intervalo de 0.3 segundos
        setTimeout(function(currentBoton) { 
          return function() {
            currentBoton.style.display = 'block'
            // Paso 3: Aumentar el tamaño al doble y luego volver al tamaño normal después de 0.3 segundos
            setTimeout(function() {
              currentBoton.style.transform = 'scale(4)'
              // Después de 0.3 segundos, volver al tamaño normal
              setTimeout(function() {
                currentBoton.style.transform = 'scale(1)'
              }, 100)
            }, 100)
          };
        }(boton), i * 100) // Multiplicar por i para aplicar el intervalo adecuado
      }       
    break;
    case 'btn13':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','planos-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
        var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
        if (element) {
          element.style.display = 'inline-block'
        }
      })
      conPlanos.style.display = 'flex'
      for(var i = 0; i < imgsPlanos.length; i ++ ){
        var elto = imgsPlanos[i]
        if(elto){
          elto.style.display = 'flex'
        }
      }
      contplanosKaizen.style.display = 'flex'
    break;  
    case 'btn14':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','materiales-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
        var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
        if (element) {
          element.style.display = 'inline-block'
        }
      })
      contMateriales.style.display = 'flex'
    break;  
    case 'btn15':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
        var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
        if (element) {
          element.style.display = 'inline-block'
        }
      })
    break;
    case 'btn17':
      var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','kaizen-propuestos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
    break;       
    default:
  }
}
function transicionImagenes() {
  var casoEstudio = document.getElementById('casos-kaizen')
  var index = 0;
  casoEstudio.style.display = 'none'

  function ocultarSiguienteImagen() {
      var imageId = buttsToyota[index]
      var image = document.getElementById(imageId)
      if (image) {
        image.style.display = 'none'
      }
      index++;
      if (index < buttsToyota.length) {
        // Si hay más imágenes, programa la siguiente ocultación después de 0.3 segundos
        setTimeout(ocultarSiguienteImagen, 150)
      } else {
        // Después de mostrar todas las imágenes, ejecuta el código adicional
        var imgToyota = document.getElementById('toyota7')
        imgToyota.style.display = 'flex'
        casoEstudio.style.display = 'flex'                                                                     
        // Aquí, pasa el índice 0 a la función mostrarBotonConRetardo
        /* mostrarBotonConRetardo(0) */
        aumentarTamanosDeBotonesVI()
      }
  }
  // Inicia la primera ocultación
  ocultarSiguienteImagen()
}
function mostrarBotonConRetardo(index) {
  let arrayButtCasos = ['caso1', 'caso2', 'caso3']

  contiButtCasos.style.display = 'flex'

  if (index < arrayButtCasos.length) {

    let casoId = arrayButtCasos[index]
    document.getElementById(casoId).style.display = 'flex'

    // Luego de 1 segundo, mostrar el siguiente botón
    setTimeout(function () {
        mostrarBotonConRetardo(index + 1)
    }, 350)
  }
}
function showButtonsKaizenRetraso() {
  var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
  contiButtsKaizen.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsKaizen.length) {
      var botonId = arrayButtsKaizen[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'inline-block'
        boton.color = ''
        boton.style.backgroundColor = ''
        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 150) // 150 milisegundos de retraso entre botones
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function hideButtonsKaizenRetraso() {
  var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
  contiButtsKaizen.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsKaizen.length) {
      var botonId = arrayButtsKaizen[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'none'
        boton.style.color = ''
        boton.style.backgroundColor = ''
          if(boton.id === 'btn12'){
            boton.textContent = 'IMPLEMENTADOS';        
          }
        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 17) 
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function showButtonsPlanosRetraso() {
  var contiButtsPlanos = document.getElementById('conti-boton-planos')
  contiButtsPlanos.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsPlanos.length) {
      var botonId = arrayButtsPlanos[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'inline-block' // o 'inline-block' según tus necesidades

        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 150) // 150 milisegundos de retraso entre botones
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function aumentoBotonesBody() {
  var contiRebobinador = document.getElementById('rebobinador')
  contInicial.style.display = 'none' 
  contiRebobinador.style.display = 'none'
  const buttonsIds = ['butt-7', 'butt-5', 'butt-3', 'butt-111'];
  container1.style.display = 'none'

  // Función para aumentar el tamaño de un botón y luego restaurarlo
  function aumentarYRestaurar(index) {
    if (index < buttonsIds.length) {
      const buttonId = buttonsIds[index];
      const button = document.getElementById(buttonId);
      // Aumentar el tamaño del botón
      if (button) {
        button.style.transform = 'scale(7)'
        // Después de 0.5 segundos, devolverlo al tamaño normal
        setTimeout(function () {
          button.style.transform = 'scale(1)'
          // Llamada a la función para eliminar estilos después de restaurar el tamaño
          /* eliminarEstilosEnLinea(); */
          // Llamada recursiva para pasar al siguiente botón en el array
          aumentarYRestaurar(index + 1);
        }, 177);
      }
    }
  }
  // Iniciar el proceso con el primer botón
  aumentarYRestaurar(0);
}
function tamaño100(){
  var elementosExcluidos = ['container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','troubleshooting','linksMA','linkLis']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  troublesh.removeAttribute('style')
  document.body.style.zoom = "100%"
  linkIni1.style.left = ''
  linkIni2.style.left = ''  
  container1.style.left=''
}
// Obtén todas las imágenes con la clase "aumentar"
const imagenesAumentar = document.querySelectorAll('img.aumentar')
// Agrega un evento click a cada imagen con la clase "aumentar"
imagenesAumentar.forEach(image => {
  image.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (image.requestFullscreen) {
        image.requestFullscreen()
      } else if (image.mozRequestFullScreen) { // Firefox
        image.mozRequestFullScreen()
      } else if (image.webkitRequestFullscreen) { // Chrome, Safari y Opera
        image.webkitRequestFullscreen()
      } else if (image.msRequestFullscreen) { // IE/Edge
        image.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen()
      }
    }
  })
})
//////////////////////////////////////////////////////////////////////////
// Recorrer todos los botones y hacerlos visibles
botones.forEach(function(boton) {
var id = boton.getAttribute('id')
alternarVisibilidad(id)
}) 
document.addEventListener("DOMContentLoaded", function() {
  toggleVideoButton.addEventListener("click", function() {
    video.pause()
  })

})
// LOGICA PARA FULL SCREEN A IMAGENES
images.forEach(image => {
  let isFullscreen = false;
  image.addEventListener('click', () => {
    if (!isFullscreen) {
      if (image.requestFullscreen) {
        image.requestFullscreen()
      } else if (image.mozRequestFullScreen) {
        image.mozRequestFullScreen()
      } else if (image.webkitRequestFullscreen) {
        image.webkitRequestFullscreen()
      } else if (image.msRequestFullscreen) {
        image.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    isFullscreen = !isFullscreen;
  })
})
// Iterar a través de las imágenes y agregar eventos de mouse
images.forEach((image, index) => {
  // Añadir el evento de aumento de tamaño al hacer clic
  image.addEventListener('click', () => {
    // Guardar el tamaño original para volver a él después
    const originalWidth = image.width;
    const originalHeight = image.height;
    // Aumentar el tamaño de la imagen en un 30% durante 0.1 segundos
    image.style.transition = 'transform 0.1s'
    image.style.transform = 'scale(1.3)'    
    // Volver al tamaño original después de 0.1 segundos
    setTimeout(() => {
      image.style.transition = 'transform 0.1s'
      image.style.transform = 'scale(1)'
    }, 400) 
  })
})
var chart = new Chart(miCanvas, {
    type: 'bar',    
    data: {
        labels: ['TROUBLESHOOTING', 'DEFECTOS TIPO 1', 'DEFECTOS TIPO 2', 'ADT', 'FUA', 'LUP'],
        datasets: [
            {
                label: 'Participación en M.A',
                backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'],
                data: [57, 88, 62, 33, 14, 20]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' ,// Color de las etiquetas de texto en el eje X

                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'y', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart3 = new Chart(miCanvas2, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(0,0,255)', 'rgb(255, 102, 0)', 'rgb(255, 0, 0)'],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart4 = new Chart(miCanvas3, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(255, 102, 0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 255)' ],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart5 = new Chart(miCanvas4, {
    type: 'pie',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['#ff1700', '#ff2e00', '#ff4500', '#ff7300', '#ffa200)', '#ffff00'],
                data: [15, 25, 35, 20, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart6 = new Chart(miCanvas5, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0,255,0)', '#ff1700', 'green', '#ff1700', '#ffa200)', '#ffff00'],
                data: [55, -65, 35, -90, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
// BARRAS
var chart7 = new Chart(miCanvas6, { 
  type: 'bar',
  data: {
      labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
      datasets: [
          {
              label: 'Participación en M.A',
              backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
              data: [57, 88, 62, 33]
          }
      ]
  },
  options: {
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 9
                  }
              }
          },
          y: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 10
                  },
                  beginAtZero: true
              }
          }
      },
      indexAxis: 'x',
      plugins: {
          legend: {
              display: false
          },
          title: {  // Agregar un título al gráfico
              display: true,  // Mostrar el título
              text: 'Participacion semanal',  // Texto del título
              font: {
                  size: 16  // Tamaño del texto del título
              }
          }
      }
  }
})
var chart7II = new Chart(miCanvas6II, { 
  type: 'bar',
  data: {
    labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
        data: [57, 88, 62, 33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Participacion semanal',
        font: {
          size: 14
        }
      },
      datalabels: {
        color: 'rgb(255,255,255)',
        font: {
          size: 5 // Tamaño de la fuente para las etiquetas del conjunto de datos
        },
        anchor: 'end',
        align: 'end',
        formatter: function(value, context) {
          return value; // Puedes personalizar el formato del valor si es necesario
        }
      }
    }
  }
});
// BARRAS VERTICALES
var chart8 = new Chart(miCanvas7, {
  type: 'bar',
  data: {
    labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
        data: [17, 9,27]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Lección de un punto',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart8II = new Chart(miCanvas7II, {
  type: 'bar',
  data: {
    labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
        data: [17, 9,27]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Lección de un punto',
        font: {
          size: 14
        }
      }
    }
  }
})
var chart9 = new Chart(miCanvas8, {
  type: 'line',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
        borderWidth: 1,        
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Areas De Dificil Acceso',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart9II = new Chart(miCanvas8II, {
  type: 'line',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
        borderWidth: 1,        
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Areas de dificil acceso',
        font: {
          size: 14
        }
      }
    }
  }
})
var chart10 = new Chart(miCanvas9, {
  type: 'doughnut',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ayudas De Trabajo',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart10II = new Chart(miCanvas9II, {
  type: 'doughnut',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ' Ayudas de trabajo',
        font: {
          size: 14
        }
      }
    }
  }
})
var chart11 = new Chart(miCanvas10, {
  type: 'pie',
  data: {
    labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
        data: [7, 19,17,37,9,77]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ejecución ',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart11II = new Chart(miCanvas10II, {
  type: 'pie',
  data: {
    labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
        data: [7, 19,17,37,9,77]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ejecución ',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart12 = new Chart(miCanvas11, {
  type: 'line',
  data: {
    labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(255,165,0)', 
        borderWidth: 1,
        pointRadius: 0,                       
        /* backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(255,255,0)','rgb(0,0,255)','rgb(177,0,255)'], */
        /* data: [7, 19, 27, 37, 59, 77, 81, 99] */
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tendencia',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart12II = new Chart(miCanvas11II, {
  type: 'line',
  data: {
    labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(255,165,0)', 
        borderWidth: 1,
        pointRadius: 0, 
        data: [7, 19,17,37,9,77]
                      
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tendencia',
        font: {
          size: 14
        }
      }
    }
  }
});
// Aumentar el grosor de las barras
/* chart8.options.scales.x.barThickness = 100; // Ajusta el valor a un grosor mayor */
/* //////////////////////////////////AUMENTO Y MOVIMIENTO IMAGENES ///////////////////////////////////////////// */
const zoomableImages = document.querySelectorAll('.image-trainings')
const sensitivity = 5; 
zoomableImages.forEach((zoomableImage) => {
  zoomableImage.addEventListener('mouseenter', () => {
    zoomableImage.style.transition = 'transform 0.1s ease, filter 0.1s ease'
  })
  zoomableImage.addEventListener('mousemove', (e) => {
    const x = (zoomableImage.clientWidth / 2 - e.clientX + zoomableImage.getBoundingClientRect().left) / sensitivity;
    const y = (zoomableImage.clientHeight / 2 - e.clientY + zoomableImage.getBoundingClientRect().top) / sensitivity;

    zoomableImage.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
  })
  zoomableImage.addEventListener('mouseleave', () => {
    zoomableImage.style.transition = 'transform 0.1s ease'
    zoomableImage.style.transform = 'translate(0, 0) scale(1)'
  })
})
/* /////////////////////////////////////////////VINCULOS INICIALES//////////////////////////////////////////// */
textToColor.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout)
    hoverTimeout = setTimeout(() => {
      linkList.style.display = "block";
      line.style.width = textToColor.offsetWidth + "px";
      linkListI.style.display = "none";
    }, 7)
})
linkList.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout)
    linkListI.style.display = 'none'
})
textToColor.addEventListener("mouseout", () => {
    clearTimeout(hoverTimeout)
    hideTimeout = setTimeout(() => {
      textToColor.style.color = "white";
      linkList.style.display = "none";
      line.style.width = "0";
    }, 7)
})
linkList.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
      textToColor.style.color = "white";
      linkList.style.display = "none";
      line.style.width = "0";
    }, 1)
})
textToColorI.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout)
  hoverTimeout = setTimeout(() => {
    linkListI.style.display = "block";
    lineI.style.width = textToColorI.offsetWidth + "px"; // desde aqui se llevan las variables a que se lleven los demas estados de las funciones
  }, 7)
})
linkListI.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout)
})
textToColorI.addEventListener("mouseout", () => {
  clearTimeout(hoverTimeout)
  hideTimeout = setTimeout(() => {
    textToColorI.style.color = "white";
    linkListI.style.display = "none";
    lineI.style.width = "0";
  }, 77)
})
linkListI.addEventListener("mouseout", () => {
  hideTimeout = setTimeout(() => {
    textToColorI.style.color = "white";
    linkListI.style.display = "none";
    lineI.style.width = "0";
  }, 1)
})
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const suggestionsList = document.getElementById('suggestions') // Agrega el elemento datalist
// Definir una lista de sugerencias (puedes cargarla desde una fuente externa si es necesario)
const sugerencias = [
  'autonomo',
  'bateria',
  'contra',
  'contraPresion',
  'densitometria',
  'impresorImg',
  'inicio',
  'manta',
  'mantenimiento autonomo',
  'mantilla',
  'pantalla-inicial',
  'planas',
  'plancha',
  'porta mantilla',
  'porta plancha',
  'pre',
  'preprensa',
  'rotatek',
  'secador',
  'secador uv',
  'smed',
  'resultados',
  'tintero',
  'torre',
  'variable'
  
]
// Agregamos un evento para manejar la búsqueda
searchForm.addEventListener('submit', function (e) {
  e.preventDefault() // Evita que se envíe el formulario
  const searchTerm = searchInput.value.toLowerCase() // Obtenemos el término de búsqueda y lo convertimos a minúsculas

  // ... Tu código de manejo de búsqueda actual ...
  switch (searchTerm) {
    case 'autonomo':
    case 'mantenimiento autonomo':
      ElementosMa('conteneMantaut')
    break;
    case 'densitometria':
      abrirDensitometria()
    break;
    case 'inicio':
      VolveraInicio()
    break;
    case 'tintero':
      changeButtonStyles('pantalla-tintero')
    break;
    case 'bateria':
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break;
    case 'variable':
      abrirSeccionVariable('cont-variable')
    break;
    case 'planas':
      abrirSeccionPlanas('cont-plana')
    break;
    case 'secador uv':
    case 'secador':      
      abrirSeccionCurado('cont-secador')
    break;
    case 'torre':      
      cambioContenedor('torre-imp')
    break;
    case 'smed':      
    changeButtonStyles('bancada-torre-II')
    break;  
    case 'plancha':  
    case 'porta plancha': 
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }             
      showRepuesto('contPortPlaca')
    break;
    case 'pantalla inicial':
    case 'pantalla-inicial':
      abrirSeccionContinua('pantalla-inicial')
    break;
    case 'preprensa':
    abrirPrepress('pre-prensa')
    break;
    case 'mantilla': 
    case 'manta':      
    case 'porta mantilla': 
    for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i])
      if (elemento) {
        elemento.style.display = 'none'
      }
    }          
    showRepuesto('contPortManta', 'videoTrain03')
    break;
    case 'contra':      
    case 'contraPresion':
    case 'impresorImg':
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }       
    showRepuesto('contImpresor', 'videoTrain01')
    break;
    case 'empleados':
    case 'resultados':
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      } 
      resultadosMA() 
      container1.style.display = 'flex'           
    break;
    default:
      alert("No se encontró ninguna coincidencia para la búsqueda: " + searchTerm)
    break;
  }
  // Verifica si suggestionsList no es nulo antes de intentar establecer su propiedad innerHTML
  if (suggestionsList) {
    // Puedes agregar una lógica para autocompletar el término de búsqueda
    if (sugerencias.includes(searchTerm)) {
      // Si el término de búsqueda coincide con una sugerencia, lo autocompletamos
      suggestionsList.innerHTML = ''; // Borra cualquier sugerencia anterior
      const suggestionOption = document.createElement('option');
      suggestionOption.value = searchTerm;
      suggestionsList.appendChild(suggestionOption);
    }
  } else {
    console.error('No se encontró el elemento con ID "suggestions"');
  }
})
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obtén los elementos canvas de canvasContainer2 y canvasContainer3
const canvasElements2 = document.querySelectorAll('#canvasContainer2 canvas')
const canvasElements3 = document.querySelectorAll('#canvasContainer3 canvas')
const canvasElements4 = document.querySelectorAll('#contChecks input')
// Función para agregar/eliminar pantalla completa a un elemento
// Agrega un evento click a cada elemento canvas en canvasContainer2
canvasElements2.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas)
  })
})
// Agrega un evento click a cada elemento canvas en canvasContainer3  
canvasElements3.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas)
  })
})
// Agrega un evento click a cada elemento checkbox  
canvasElements4.forEach(input => {
  input.addEventListener('click', () => {
    toggleFullScreen(input)
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obten todos los elementos con la clase "colorClick"
var colorClickLinks = document.querySelectorAll('.colorClick')
// Recorre todos los elementos y agrega el evento a cada uno
  colorClickLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      link.classList.add('orange-text')
      imagenesPasoApaso(link.getAttribute('data-imagen'))
    })
})
function aumentarTamanosDeBotones() {
  const buttons = [
    document.getElementById("boton1"),
    document.getElementById("boton2"),
    document.getElementById("boton3"),
    document.getElementById("boton4"),
    document.getElementById("boton5"),
    document.getElementById("boton6")
  ]
  // Función para aumentar el tamaño de un botón y pasar al siguiente
  function aumentarSiguienteBoton(index) {
    if (index < buttons.length) {
      const boton = buttons[index]
      boton.style.transform = "scale(7)";
      setTimeout(() => {
        restaurarTamanosBoton(boton)
        aumentarSiguienteBoton(index + 1)
      }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
    }
  }
  // Función para restaurar el tamaño normal de un botón
  function restaurarTamanosBoton(boton) {
    boton.style.transform = "scale(1)";
  }
  aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
}
function aumentarTamanosDeBotonesII() {
  const buttons = [
    document.getElementById("boton7"),
    document.getElementById("boton8"),
    document.getElementById("boton9"),
    document.getElementById("boton10"),
    document.getElementById("boton11"),
    document.getElementById("boton12")
  ]
  // Función para aumentar el tamaño de un botón y pasar al siguiente
  function aumentarSiguienteBoton(index) {
    if (index < buttons.length) {
      const boton = buttons[index]
      boton.style.transform = "scale(7)";
      setTimeout(() => {
        restaurarTamanosBoton(boton)
        aumentarSiguienteBoton(index + 1)
      }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
    }
  }
  // Función para restaurar el tamaño normal de un botón
  function restaurarTamanosBoton(boton) {
    boton.style.transform = "scale(1)";
  }
  aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
}
function aumentarTamanosDeBotonesIII() {
  const buttons = [
    document.getElementById("boton13"),
    document.getElementById("boton14"),
    document.getElementById("boton15"),
    document.getElementById("boton16"),
    document.getElementById("boton17"),
    document.getElementById("boton18")
  ]
  // Función para aumentar el tamaño de un botón y pasar al siguiente
  function aumentarSiguienteBoton(index) {
    if (index < buttons.length) {
      const boton = buttons[index]
      boton.style.transform = "scale(7)";
      setTimeout(() => {
        restaurarTamanosBoton(boton)
        aumentarSiguienteBoton(index + 1)
      }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
    }
  }
  // Función para restaurar el tamaño normal de un botón
  function restaurarTamanosBoton(boton) {
    boton.style.transform = "scale(1)";
  }
  aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
}
function aumentarTamanosDeBotonesIV() {
  const buttons = [
    document.getElementById("boton19"),
    document.getElementById("boton20"),
    document.getElementById("boton21"),
    document.getElementById("boton22"),
    document.getElementById("boton23"),
    document.getElementById("boton24")
  ]
  // Función para aumentar el tamaño de un botón y pasar al siguiente
  function aumentarSiguienteBoton(index) {
    if (index < buttons.length) {
      const boton = buttons[index]
      boton.style.transform = "scale(7)";
      setTimeout(() => {
        restaurarTamanosBoton(boton)
        aumentarSiguienteBoton(index + 1)
      }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
    }
  }
  // Función para restaurar el tamaño normal de un botón
  function restaurarTamanosBoton(boton) {
    boton.style.transform = "scale(1)";
  }
  aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
}
function aumentarTamanosDeBotonesV() {
  const buttons = [
    document.getElementById("boton25"),
    document.getElementById("boton26"),
    document.getElementById("boton27"),
    document.getElementById("boton28"),
    document.getElementById("boton29"),
    document.getElementById("boton30")
  ]
  // Función para aumentar el tamaño de un botón y pasar al siguiente
  function aumentarSiguienteBoton(index) {
    if (index < buttons.length) {
      const boton = buttons[index]
      boton.style.transform = "scale(7)";
      setTimeout(() => {
        restaurarTamanosBoton(boton)
        aumentarSiguienteBoton(index + 1)
      }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
    }
  }
  // Función para restaurar el tamaño normal de un botón
  function restaurarTamanosBoton(boton) {
    boton.style.transform = "scale(1)";
  }
  aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
}
function aumentarTamanosDeBotonesVI() {
  const buttons = [
      document.getElementById("caso1"),
      document.getElementById("caso2"),
      document.getElementById("caso3")
  ];
  let caso1 = document.getElementById ('caso1')
  contiButtCasos.style.display = 'flex'
  /* caso1.style.display = 'flex' */

  function aumentarBotonCasos(index) {
      if (index < buttons.length) {
          const boton = buttons[index];
          boton.style.display = 'flex'
          boton.style.transform = "scale(2)";
          setTimeout(() => {
              restaurarTamanosBoton(boton);
              aumentarBotonCasos(index + 1);
          }, 200);
      }
  }

  function restaurarTamanosBoton(boton) {
      boton.style.transform = "scale(1)";
  }

  aumentarBotonCasos(0);
}
// Función para mover el scroll
function moveScroll(container) {
  // Mover el scroll 100px hacia abajo
  container.scrollTop += 100;
  // Reducir el número de iteraciones en 1
  iterations--;
  // Verificar si quedan más iteraciones
  if (iterations > 0) {
    // Llamar a la función nuevamente después de 1 segundo
    setTimeout(function() {
      // Restaurar el color de fondo del botón antes de mover el scroll
      moveScroll(container);
    }, 57);
  } else {
    // Cuando termina el desplazamiento, regresar a la parte superior
    container.scrollTop = 0;
  }
}

/* function iniciarMovimiento(instrucId) {
  // Obtener el elemento con ID "puesta-punto"
  var container = document.getElementById(instrucId);
  // Asegurarse de que el scroll esté en la parte superior
  container.scrollTop = 0;
  // Restablecer el número de iteraciones
  iterations = 11;
  // Iniciar el movimiento del scroll
  moveScroll(container);
} */

function iniciarMovimiento(instrucId) {
  var container = document.getElementById(instrucId);
  container.scrollTop = 500;

  var posicionFinal = 0; // Ajusta la posición final según tus necesidades
  var duracion = 600; // Duración del desplazamiento en milisegundos (0.4 segundos)

  var inicio = container.scrollTop;
  var tiempoInicio = performance.now();

  function animarScroll(timestamp) {
      var tiempoTranscurrido = timestamp - tiempoInicio;
      var progreso = tiempoTranscurrido / duracion;

      if (progreso < 1) {
          container.scrollTop = inicio + (posicionFinal - inicio) * progreso;
          requestAnimationFrame(animarScroll);
      } else {
          container.scrollTop = posicionFinal;
      }
  }

  requestAnimationFrame(animarScroll);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obtén el contexto del lienzo
var canvas = document.getElementById("sinusoidalCanvas");
var ctx = canvas.getContext("2d");
// Configura el color y el grosor de la línea
ctx.strokeStyle = "rgb(0, 255, 0)"; // Verde
ctx.lineWidth = 1;
// Dibuja la onda sinusoidal
drawSinusoidalI();
function drawSinusoidalI() {
  // Ajusta la escala de la onda y el desplazamiento
  var amplitude = 50; // Altura máxima de la onda
  var frequency = 0.05; // Frecuencia de la onda
  var phase = 0; // Desplazamiento horizontal
  // Comienza el trazado de la onda
  ctx.beginPath();
  for (var x = 0; x < canvas.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  ctx.lineTo(x, canvas.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  ctx.stroke();
  // Dibuja el eje horizontal con numeración y etiquetas rojas
  drawHorizontalAxisI();
  // Dibuja el eje vertical con numeración y etiquetas rojas
  drawVerticalAxis();
}
function drawHorizontalAxisI() {
  // Dibuja el eje horizontal
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  // Dibuja las marcas y etiquetas en el eje horizontal
  for (var x = 0; x <= canvas.width; x += 50) {
  ctx.beginPath();
  ctx.moveTo(x, canvas.height / 2 - 5);
  ctx.lineTo(x, canvas.height / 2 + 5);
  ctx.stroke();
  ctx.fillStyle = "yellow"; // Etiquetas rojas
  ctx.fillText(x - canvas.width / 2, x - 10, canvas.height / 2 + 20);
  }
}
function drawVerticalAxis() {
  // Dibuja el eje vertical
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  // Dibuja las marcas y etiquetas en el eje vertical
  for (var y = 0; y <= canvas.height; y += 50) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 5, y);
  ctx.lineTo(canvas.width / 2 + 5, y);
  ctx.stroke();
  ctx.fillStyle = "yellow"; // Etiquetas rojas
  ctx.fillText(canvas.height / 2 - y, canvas.width / 2 - 30, y + 5);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obtén el contexto del lienzo
var canvasI = document.getElementById("diagonalCanvas");
var dcx = canvasI.getContext("2d");
// Configura el color y el grosor de la línea
dcx.strokeStyle = "rgb(0,255,0)"; // Azul
dcx.lineWidth = 1;
// Dibuja la línea diagonal
drawDiagonalLine();
function drawDiagonalLine() {
  // Comienza el trazado de la línea
  dcx.beginPath();
  // Establece el punto de inicio en (300, 0)
  dcx.moveTo(0, 177);
  // Dibuja la línea hasta (0, 300)
  dcx.lineTo(300, 0);
  // Finaliza el trazado y dibuja la línea
  dcx.stroke();

  // Dibuja el eje horizontal con numeración y etiquetas rojas
  drawHorizontalAxisII();
  // Dibuja el eje vertical con numeración y etiquetas rojas
  drawVerticalAxisII();
}
function drawHorizontalAxisII() {
  // Dibuja el eje horizontal
  dcx.beginPath();
  dcx.moveTo(0, canvasI.height / 2);
  dcx.lineTo(canvasI.width, canvasI.height / 2);
  dcx.stroke();
  // Dibuja las marcas y etiquetas en el eje horizontal
  for (var x = 0; x <= canvasI.width; x += 50) {
  dcx.beginPath();
  dcx.moveTo(x, canvasI.height / 2 - 5);
  dcx.lineTo(x, canvasI.height / 2 + 5);
  dcx.stroke();
  dcx.fillStyle = "orangered"; // Etiquetas rojas
  dcx.fillText(x - canvasI.width / 2, x - 10, canvasI.height / 2 + 20);
  }
}
function drawVerticalAxisII() {
  // Dibuja el eje vertical
  dcx.beginPath();
  dcx.moveTo(canvasI.width / 2, 0);
  dcx.lineTo(canvasI.width / 2, canvasI.height);
  dcx.stroke();
  // Dibuja las marcas y etiquetas en el eje vertical
  for (var y = 0; y <= canvasI.height; y += 50) {
  dcx.beginPath();
  dcx.moveTo(canvasI.width / 2 - 5, y);
  dcx.lineTo(canvasI.width / 2 + 5, y);
  dcx.stroke();
  dcx.fillStyle = "orangered"; // Etiquetas rojas
  dcx.fillText(canvasI.height / 2 - y, canvasI.width / 2 - 30, y + 5);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obtén el contexto del lienzo
var canvasII = document.getElementById("dualSinusoidalCanvas");
var cdsc = canvasII.getContext("2d");
// Configura el color y el grosor de la primera línea
cdsc.strokeStyle = "rgb(0, 255, 0)"; // Verde
cdsc.lineWidth = 1;
// Dibuja la primera onda sinusoidal
drawSinusoidalDoubleI(50, 0.05, 0);
// Configura el color y el grosor de la segunda línea
cdsc.strokeStyle = "rgb(0, 0, 255)"; // Amarillo
cdsc.lineWidth = 1;
// Dibuja la segunda onda sinusoidal
drawSinusoidalDoubleI(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
// Dibuja la cuadrícula
drawGridI(4, 7);
function drawSinusoidalDoubleI(amplitude, frequency, phase) {
  // Comienza el trazado de la onda
  cdsc.beginPath();
  for (var x = 0; x < canvasII.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  cdsc.lineTo(x, canvasII.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  cdsc.stroke();
}
function drawGridI(horizontalLinesI, verticalLinesI) {
  // Configura el color y el grosor de las líneas de la cuadrícula
  cdsc.strokeStyle = "rgb(0,255,0)"; // Gris
  cdsc.lineWidth = 1;
  // Dibuja líneas horizontales
  for (var i = 1; i < horizontalLinesI; i++) {
  var y = (i / horizontalLinesI) * canvasII.height;
  cdsc.beginPath();
  cdsc.moveTo(0, y);
  cdsc.lineTo(canvasII.width, y);
  cdsc.stroke();
  }
  // Dibuja líneas verticales
  for (var j = 1; j < verticalLinesI; j++) {
  var x = (j / verticalLinesI) * canvasII.width;
  cdsc.beginPath();
  cdsc.moveTo(x, 0);
  cdsc.lineTo(x, canvasII.height);
  cdsc.stroke();
  }
}        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Obtén el contexto del lienzo
var canvas = document.getElementById("tripleSinusoidalCanvas");
var ctx = canvas.getContext("2d");
// Configura el color y el grosor de la primera línea
ctx.strokeStyle = "rgb(255, 125, 0)"; // Verde
ctx.lineWidth = 1;
// Dibuja la primera onda sinusoidal
drawSinusoidalDouble(50, 0.05, 0);
// Configura el color y el grosor de la segunda línea
ctx.strokeStyle = "rgb(255, 0, 255)"; // Amarillo
ctx.lineWidth = 1;
// Dibuja la segunda onda sinusoidal
drawSinusoidalDouble(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
// Configura el color y el grosor de la tercera línea
ctx.strokeStyle = "rgb(255, 255, 0)"; // Azul
ctx.lineWidth = 1;
// Dibuja la tercera onda senoidal
drawSinusoidal(40, 0.1, Math.PI); // Parámetros diferentes para la tercera onda
// Dibuja la cuadrícula
drawGrid(4, 7);
function drawSinusoidal(amplitude, frequency, phase) {
// Comienza el trazado de la onda
ctx.beginPath();
for (var x = 0; x < canvas.width; x++) {
// Calcula el valor y de la onda en función de x
var y = amplitude * Math.sin(frequency * x + phase);
// Dibuja un segmento de la onda
ctx.lineTo(x, canvas.height / 2 - y);
}
// Finaliza el trazado y dibuja la línea
ctx.stroke();
}
function drawSinusoidalDouble(amplitude, frequency, phase) {
  // Comienza el trazado de la onda
  ctx.beginPath();
  for (var x = 0; x < canvas.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  ctx.lineTo(x, canvas.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  ctx.stroke();
}
function drawGrid(horizontalLines, verticalLines) {
  // Configura el color y el grosor de las líneas de la cuadrícula
  ctx.strokeStyle = "rgb(150, 150, 150)"; // Gris
  ctx.lineWidth = 1;
  // Dibuja líneas horizontales
  for (var i = 1; i < horizontalLines; i++) {
  var y = (i / horizontalLines) * canvas.height;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
  }
  // Dibuja líneas verticales
  for (var j = 1; j < verticalLines; j++) {
  var x = (j / verticalLines) * canvas.width;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var intervalId; // Declara la variable en un ámbito accesible                                   /// BOTONERA CICODELICA  PARE/SIGA
function iniciarEventos() {
  var contSinusoidales = document.getElementById('contMetrics')
  var contCicodelicos = document.getElementById('botonesContainer')   
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta','magenta','gris','verdesat','cyan','purpura','anaranjado'] 
  // Inicia cada botón con un índice de inicio diferente
  var botones = document.querySelectorAll('#botonesContainer .botoneras')
  botones.forEach(function (boton, index) {
    boton.dataset.indiceInicio = index;
  });
  function cambiarColor() {
    botones.forEach(function (boton) {
      var indiceInicio = parseInt(boton.dataset.indiceInicio)
      var indiceColor = (indiceInicio + 1) % colores.length

      // Cambia la clase de color del botón
      boton.classList.remove(...colores);
      boton.classList.add(colores[indiceColor])

      // Actualiza el índice de inicio para el próximo color
      boton.dataset.indiceInicio = indiceColor
    });
  }
  // Llama a la función cambiarColor cada 77 MS y guarda el ID del intervalo
  intervalId = setInterval(cambiarColor, 77)
  contSinusoidales.style.display = 'flex'
  contCicodelicos.style.display = 'grid'

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function detenerEventos() {
  clearInterval(intervalId);
  var contCicodelicos = document.getElementById('botonesContainer')  
  contCicodelicos.style.left = '555px'
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function iniciarTransito() {                                                                                            /// BOTON BAILARIN ALREDEDOR DE PANTALLA
  var boton = document.getElementById("buttSolitario");
  var stopFlag = false;
  var anchoPantalla = window.innerWidth;
  var altoPantalla = window.innerHeight - 37;
  var duracion = 1000;

  // 1. Array de colores
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta', 'magenta', 'gris', 'verdesat', 'cyan', 'purpura', 'anaranjado'];
  // 2. Elemento del botón
  var boton = document.getElementById("buttSolitario");
  // 3. Función para cambiar el color del botón con un intervalo
  function cambiarColorConIntervalo() {
    var i = 0;
    setInterval(function () {
      // Cambiar el color del botón
      boton.style.backgroundColor = colores[i];      
      // Incrementar el índice para el próximo color
      i = (i + 1) % colores.length;
    }, 77); // Intervalo de 0.1 segundos (100 milisegundos)
  }
  // Llamar a la función para iniciar el cambio de colores
  cambiarColorConIntervalo();

  // Función para mover el botón y reiniciar el ciclo
  function mover(distanciaX, distanciaY, transitionProperty, nextMove) {
    if (stopFlag) return;
    // Aplicar la transición
    boton.style.transition = transitionProperty;
    boton.style.left = distanciaX + "px";
    boton.style.top = distanciaY + "px";
    // Esperar y luego realizar el siguiente movimiento
    setTimeout(function () {
      if (nextMove) {
        nextMove();
      } 
    }, duracion);
  }

  // Primer movimiento: Derecha a izquierda
  function moverDerechaIzquierda() {
    boton.style.backgroundColor = 'rgb(0,255,0)'
    mover(anchoPantalla - boton.offsetWidth, 0, 'left ' + duracion / 1000 + 's', moverArribaAbajo);
  }

  // Segundo movimiento: Arriba a abajo
  function moverArribaAbajo() {
    boton.style.backgroundColor = 'rgb(255,0,0)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'top ' + duracion / 1000 + 's', moverIzquierdaDerecha);
  }

  // Tercer movimiento: Izquierda a derecha
  function moverIzquierdaDerecha() {
    boton.style.backgroundColor = 'rgb(255,255,0)'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's', moverAbajoArriba);
  }

  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArriba() {
    boton.style.backgroundColor = 'rgb(0,0,255)'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDiagonal);
  }

  // Quinto movimiento: Diagonal
  function moverDiagonal() {
    boton.style.backgroundColor = 'rgb(255,0,255)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaII);
  }

  // Sexto movimiento: Abajo a arriba
  function moverAbajoArribaII() {
    boton.style.backgroundColor = 'orangered'
    mover(anchoPantalla - boton.offsetWidth, 0, 'top ' + duracion / 1000 + 's',moverDiagonalI);
  }
 

  // séptimo movimiento: Diagonal inversa
  function moverDiagonalI() {
    boton.style.backgroundColor = 'white'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaI);
  }

  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArribaI() {
    boton.style.backgroundColor = 'purple'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDerechaIzquierda);
  }
  
  // Iniciar el ciclo de movimientos
  moverDerechaIzquierda();
  iniciarEventos()
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función para detener el movimiento
function detenerMovimiento() {
  stopFlag = true;
  clearTimeout(timeoutId);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var botonSolitario = document.getElementById('buttSolitario');
var botonSeguidor = document.getElementById('boton2');
function moverDerecha() {
  botonSeguidor.style.top = botonSolitario.style.top
  var posicionInicialX = 0
  var posicionFinalX = window.innerWidth - botonSolitario.offsetWidth

  var intervalo = setInterval(function() {
    if (posicionInicialX >= posicionFinalX) {
      clearInterval(intervalo)
      moverAbajo()
    } else {
      // Movimiento hacia la derecha
      posicionInicialX += 7
      botonSolitario.style.left = posicionInicialX + 'px'
      botonSeguidor.style.left = (posicionInicialX - 85) + 'px'

    }
  }, 17);  
}
function moverAbajo() {
  botonSeguidor.style.left = botonSolitario.style.left
  var posicionInicialY = 0;
  var posicionFinalY =(window.innerHeight - 33) - botonSolitario.offsetHeight;

  var intervalo = setInterval(function() {
    if (posicionInicialY >= posicionFinalY) {
      moverIzquierda()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia abajo
      posicionInicialY += 7;
      botonSolitario.style.top = posicionInicialY + 'px';
      botonSeguidor.style.top = (posicionInicialY - 35) + 'px';
    }
  }, 17);
}
function moverIzquierda() {
  botonSeguidor.style.top = botonSolitario.style.top
  var posicionInicialX = (window.innerWidth - 33) - botonSolitario.offsetWidth;
  var posicionFinalX = 0

  var intervalo = setInterval(function() {
    if (posicionInicialX <= posicionFinalX) {
      moverArriba()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia la izquierda
      posicionInicialX -= 7;
      botonSolitario.style.left = posicionInicialX + 'px';
      botonSeguidor.style.left = posicionInicialX + 95 + 'px'
    }
  }, 17);
} 
function moverArriba() {
  botonSeguidor.style.left = botonSolitario.style.left;
  var posicionInicialY = (window.innerHeight - 33) - botonSolitario.offsetHeight;
  var posicionFinalY = 0;

  var intervalo = setInterval(function() {
    if (posicionInicialY <= posicionFinalY) {
      moverDerecha()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia arriba
      posicionInicialY -= 7;
      botonSolitario.style.top = posicionInicialY + 'px';
      botonSeguidor.style.top = (posicionInicialY + 35) + 'px';
    }
  }, 17);
}
const buttons = document.querySelectorAll('.buttons')  
var contButtsAround = document.getElementById('button-container')
function moverBoton(boton, index) {
  const valoresLeft = ['-52px', '-104px', '-156px', '-208px', '-260px', '-312px', '-364px', '-416px', '-468px', '-520px', '-572px', '-624px', '-676px', '-728px', '-780px', '-832px', '-884px', '-936px', '-988px', '-1040px', '-1092px', '-1144px', '-1196px', '-1248px', '-1300px', '-1352px', '-1404px', '-1456px', '-1508px', '-1560px', '-1612px', '-1664px', '-1716px', '-1768px', '-1820px', '-1872px', '-1924px', '-1976px', '-2028px', '-2080px', '-2132px', '-2184px', '-2236px', '-2288px', '-2340px', '-2392px', '-2444px', '-2496px', '-2548px', '-2600px', '-2652px', '-2704px', '-2756px', '-2808px', '-2860px', '-2912px', '-2964px', '-3016px', '-3068px', '-3120px', '-3172px', '-3224px', '-3276px', '-3328px', '-3380px', '-3432px', '-3484px', '-3536px', '-3588px']

  // Calcular la distancia total de los cuatro lados de la pantalla
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const totalDistance = screenWidth + screenHeight + screenWidth + screenHeight;
  // Obtener la cantidad de botones
  const cantidadBotones = valoresLeft.length;
  // Calcular el espacio entre botones (considerando 2px de separación)
  const espacioEntreBotones = 2;
  const espacioTotalEntreBotones = (cantidadBotones - 1) * espacioEntreBotones;
  // Calcular la distancia disponible para posicionar los botones
  const distanciaDisponible = totalDistance - espacioTotalEntreBotones;
  // Calcular la distancia entre cada botón
  const distanciaEntreBotones = distanciaDisponible / cantidadBotones;
  // Posicionar los botones en el lado izquierdo de la pantalla
  const nuevosValoresLeft = Array.from({ length: cantidadBotones }, (_, index) => `-${index * (distanciaEntreBotones + espacioEntreBotones)}px`);
  // Asignar las nuevas posiciones a los botones
  nuevosValoresLeft.forEach((valor, index) => {
  const boton = document.getElementById(`buttons${index + 2}`)
  if (boton) {
    boton.style.left = valor
  } 
 });
  boton.style.left = nuevosValoresLeft[index]
  const velocidad = 26
  let x = parseFloat(boton.style.left) || 0
  let y = 0
  let moviendoDerecha = true
  let moviendoAbajo = false
  let moviendoIzquierda = false
  let moviendoArriba = false
  let contador = 0
  let nuevoContador = 0

  function mover() {
    contador++;  // Incrementa el primer contador cuando moviendoDerecha es true
    contButtsAround.style.display = 'flex'
    /////////////////////////////////////////////////////////////////////////////////////////////
    if (contador ===20) {
      contador = 0;  // Reinicia el primer contador cuando llega a 80 unidades
      nuevoContador++;  // Incrementa el nuevo contador cada vez que contador llega a 80 unidades
      console.log("Nuevo Contador:", nuevoContador)          
    }    
    //////////////////////////////////////////////////////////////////////////////////////////////
    if (moviendoDerecha) {
      if (x < window.innerWidth - boton.offsetWidth) {
        x += velocidad
        boton.style.background = 'rgb(0,255,0)'
        const colores = {
          1: 'rgb(255, 0, 0)',
          2: 'rgb(255, 255, 0)',
          3: 'rgb(0, 0, 255)',
          4: 'rgb(255, 145, 0)',
          5: 'rgb(125, 125, 125)',
          6: 'rgb(233, 2, 25)',
          7: 'rgb(222, 53, 230)'
        };        
        if (nuevoContador >= 1 && nuevoContador <= 7) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = window.innerWidth - boton.offsetWidth
        moviendoDerecha = false
        moviendoAbajo = true        
      }
    }  
    else if (moviendoAbajo) {
      if (y < (window.innerHeight) - boton.offsetHeight) {
        y += velocidad;
        boton.style.background = 'rgb(255,255,0)'
        const colores = {

          3: 'rgb(0, 255, 0)',
          4: 'rgb(0, 255, 255)',
          5: 'rgb(222, 53, 230)',
          6: 'rgb(100, 255, 100)',
          7: 'rgb(255, 255, 0)',
          8: 'rgb(77, 0, 255)',
          9: 'rgb(255, 145, 0)'
        };
        
        if (nuevoContador >= 3 && nuevoContador <= 9) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        y = (window.innerHeight) - boton.offsetHeight
        moviendoAbajo = false;
        moviendoIzquierda = true
      }
    } else if (moviendoIzquierda) {
      if (x > 0) {
        x -= velocidad
        boton.style.background = 'rgb(255,0,255)'
        const colores = {
          4: 'rgb(255, 0, 0)',
          5: 'rgb(255, 255, 0)',
          6: 'rgb(0, 0, 255)',
          7: 'rgb(255, 145, 0)',
          8: 'rgb(125, 125, 125)',
          9: 'rgb(233, 2, 25)',
          10: 'rgb(222, 53, 230)'
        }        
        if (nuevoContador >= 4 && nuevoContador <= 11) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = 0
        moviendoIzquierda = false
        moviendoArriba = true
      }
    } else if (moviendoArriba) {
      if (y > 0) {
        y -= velocidad
        boton.style.background = 'rgb(0,255,255)'
        const colores = {
        7: 'rgb(0, 255, 0)',
        8: 'rgb(0, 255, 255)',
        9: 'rgb(222, 53, 230)',
        10: 'rgb(100, 255, 100)',
        11: 'rgb(255, 255, 0)',
        12: 'rgb(77, 0, 255)',
        13: 'rgb(255, 145, 0)'
      };      
      if (nuevoContador >= 7 && nuevoContador <= 13) {
        boton.style.background = colores[nuevoContador];
      }
      if(nuevoContador >= 9){
        nuevoContador = 0
      }

      } else {
      y = 0
      moviendoArriba = false
      // Inicia el movimiento hacia la derecha para reiniciar el ciclo
      moviendoDerecha = true
  }
    }
    boton.style.left = x + 'px'
    boton.style.top = y + 'px'
    requestAnimationFrame(mover);
  }
  // Inicia el movimiento hacia la derecha
  mover();
} 
function iniciaMove() {
  var contiVideoJuegos = document.getElementById('cont-videojuegos')
  contiVideoJuegos.style.display = 'block'
  buttons.forEach((button, index) => {
    moverBoton(button, index);
  });
  iniciarTransito()
}
//////////////////////////////////////////////////////// BOTON PARPADEA INDICADOR //////////////////////////////////////////////////////////////////////////
function palpitarBotonDesbob() {
    document.getElementById('boton1').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton1').classList.remove('parpadea');
    }, 277);
}
function palpitarBotonTeñido() {
  document.getElementById('boton7').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('boton7').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonAlimenta() {
  document.getElementById('boton13').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('boton13').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonUProceso() {
  document.getElementById('boton19').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('boton19').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonRebobina() {
  document.getElementById('boton25').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('boton25').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonTintero() {
  document.getElementById('tinteroButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('tinteroButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonBateria() {
  document.getElementById('bateriaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bateriaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonTorre() {
  document.getElementById('bancadaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bancadaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonHumedad() {
  document.getElementById('humedadButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('humedadButton').classList.remove('parpadea');
  }, 277);  
}
function moverMA() {
  setInitialPosition()
  var anchoPantalla = window.innerWidth;
  if (anchoPantalla < 700) {
    var container = document.getElementById('conti-boton')
    container.classList.toggle('move-down-II')
  }
}
function abrirInterfaz(){
  var elementosExcluidos = ['padre-interfaz','hijo-interaz-1','hijo-interaz-2']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENTOS DINAMICOS MOVER CONTENEDORES
document.getElementById('iniciar').addEventListener('click', function() {
  contibotsDistri.classList.toggle('move-down')
  contVideo.classList.toggle('move-down-I')
});
function transicionElementos() {
  contibotsDistri.classList.add('move-up')
  contVideo.classList.add('move-up-left')
}
function transicionElementosII() {
  contibotsDistriII.classList.add('move-butts') 
  contImgsDistribuidor.classList.add('move-images') 
  buttRepuest.classList.add('move-repuest') 
  contiVidDistribuidor.classList.add('move-video')    
}
function transicionElementosIII() {
  contibotsDistriIII.classList.add('move-butts-II')
  contImgsEntintador.classList.add('move-images-II') 
  buttRepuestI.classList.add('move-repuest-II')
  contiVidEntintador.classList.add('move-vid-entintador') 
} 
function transicionElementosIV(){
  contibotsDistriV.classList.add('move-butts-III')
  contImgsSmed.classList.add('move-images-III') 
  buttRepuestIII.classList.add('move-repuest-III')
  contiVidSmed.classList.add('move-vid-smed') 
}
function transicionElementosV(){
  contibotsDistriVI.classList.add('move-butts-IV')
  contVideoSmed.classList.add('move-vid-smed-II')
  contImageneSmed.classList.add('move-images-IV')
  buttRepuestV.classList.add('move-repuest-IV')
}
function restablecerEstilos(elemento) {
  // Eliminar estilos en línea
  elemento.removeAttribute('style');

  // Asegurarse de que no haya clases que apliquen estilos no deseados
  elemento.className = '';

  // Agregar la clase que define el lugar desde CSS
  elemento.classList.add('clase-contenedor-7');  // Ajusta el nombre de la clase según tu caso
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COMBINACION TECLAS EJECUTA FUNCION
document.addEventListener('keydown', function(event) {             
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case 'Z':
        abrirSeccionOperativa('cont-titulo-operacion') 

        setTimeout(function() {
        abrirSeccionContinua('pantalla-inicial')        
        },577) 

        setTimeout(function() {
          cierraContenedores('uTeñido')
        },977) 

        setTimeout(function() {
          UnidadTeñido('boton9','boton7')
        },1177) 

        setTimeout(function() {
          /* lubricacion('boton3','boton1') */
        },1177) 
        setTimeout(function() {
        /* resultadosEmpleado('icon-jesus','updateJesus') */
        },1177) 
      break;
      case 'H':                                
      break;
      case 'J':
      break;                  
    }
  }
});
// SECCION EXTRAER DATOS A  ELEMENTOS DEL DOM
function Geometria() {
  var contiBoton = document.getElementById('contLineas-II')
  var rect = contiBoton.getBoundingClientRect();
  var topPosition = rect.top
  var leftPosition = rect.left
  var widthValue = rect.width
  var heightValue = rect.height
  var positionType = window.getComputedStyle(buttRepuest).position 
  var displayType = window.getComputedStyle(buttRepuest).display
  console.log(contiBoton.id);
  console.log('Top:', topPosition);
  console.log('Left:', leftPosition);
  console.log('Height:', heightValue);
  console.log('Width:', widthValue);
  console.log('Position:', positionType); 
  console.log('Display:', displayType);
}
let contFriends = []