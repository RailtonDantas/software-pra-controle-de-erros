
const btnToggle = document.querySelector("#btnToggleGraphics")
// const [inputAtention,inputTheory,InputInterpretation,inputInsight,inputTime,inputLocked,inputGraphics] = document.getElementsByTagName("input")
const arrayOfInputs = [...document.getElementsByTagName("input")]
const [atention,theory] = document.getElementsByClassName("percentItem")
const containerPercent = document.querySelector("#containerPercent")
const containerTypeGraphics = document.querySelector(".containerTypeGraphics")
const paragraphs = [...document.querySelectorAll(".percentItem > p > span")]
const select = document.querySelector("select")
const [btn_showGraphics,btnSubmit,btn_showPercent] = document.querySelectorAll("#containerButtons > button") 
let sum = 0


if(!localStorage.key('typeGraphic')){
  localStorage.setItem("typeGraphic",'pie')
}

if(localStorage.length > 0){
  for(let c = 0; c < localStorage.length; c++){
    sum += Number(localStorage.getItem(`typeErro${c}`))
  }
  localStorage.setItem("somaTotal",sum)
}
for(let c = 0; c < paragraphs.length; c++){
  let percent = `${(((Number(localStorage.getItem(`typeErro${c}`)))/(Number(localStorage.getItem("somaTotal")) || 1))*100).toFixed(2)}%`

  paragraphs[c].textContent = percent
}


btnSubmit.addEventListener("click", () => {
  for(let c = 0; c < arrayOfInputs.length; c++){
    let guardarValor = Number(arrayOfInputs[c].value) + Number(localStorage.getItem(`typeErro${c}`))
    localStorage.setItem(`typeErro${c}`,guardarValor)
  }
})

btn_showGraphics.addEventListener("click",() => {
  if(containerTypeGraphics.style.opacity == 0){
   
      containerTypeGraphics.style.opacity = '1'
  }
  else{
    containerTypeGraphics.style.opacity = '0'
  }
})
btn_showPercent.addEventListener("click",() => {
  if(containerPercent.style.opacity == 0){
   
      containerPercent.style.opacity = '1'
  }
  else{
    containerPercent.style.opacity = '0'
  }
})
btnToggle.addEventListener('click', () => {
  localStorage.setItem('typeGraphic',select.value)
})


const ctx = document.getElementById('myChart');

Chart.defaults.color = 'black';
Chart.defaults.font.weight = 'bolder'
Chart.defaults.font.family = 'Helvetica,sans-serif'


new Chart(ctx, { 
  type: localStorage.getItem('typeGraphic'),
  data: {
    labels: ['ATENÇÃO', 'TEORIA','INTERPRETAÇÃO','SACADA','TEMPO','RACIOCÍNIO CERTO MAS TRAVOU','ANÁLISE DE GRÁFICO','FICOU EM DÚVIDA E MARCOU A ERRADA','EXTRAPOLAR'],
    datasets: [{
      label:`#Quantidade de erros `,
      data: [localStorage.getItem('typeErro0'),localStorage.getItem('typeErro1'),localStorage.getItem('typeErro2'),localStorage.getItem('typeErro3'),localStorage.getItem('typeErro4'),localStorage.getItem('typeErro5'),localStorage.getItem('typeErro6'),localStorage.getItem('typeErro7'),localStorage.getItem('typeErro8')],
      borderWidth: 1,
      borderColor:'rgb(255,255,255)',
      backgroundColor:['#32666B','#33426C','#4E81A6','#254E45','#706ADD','#B4CEE0','#56636C','#5EE1C5','#00ffff'],    
    }
  ],
  },
  options: {
 
  }
});