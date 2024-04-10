
const btnSubmit = document.querySelector("button")
// const [inputAtention,inputTheory,InputInterpretation,inputInsight,inputTime,inputLocked,inputGraphics] = document.getElementsByTagName("input")
const arrayOfInputs = [...document.getElementsByTagName("input")]


btnSubmit.addEventListener("click", () => {
    for(let c = 0; c < arrayOfInputs.length; c++){
        let guardarValor = Number(arrayOfInputs[c].value) + Number(localStorage.getItem(`typeErro${c}`))
        localStorage.setItem(`typeErro${c}`,guardarValor)
    }
})
















const ctx = document.getElementById('myChart');
let str = 30/100

Chart.defaults.color = 'white';
Chart.defaults.font.weight = 'bolder'
Chart.defaults.font.family = 'Helvetica,sans-serif'

new Chart(ctx, { 
  type: 'doughnut',
  data: {
    labels: ['ATENÇÃO', 'TEORIA','INTERPRETAÇÃO','SACADA','TEMPO','RACIOCÍNIO CERTO MAS TRAVOU','ANÁLISE DE GRÁFICO'],
    datasets: [{
      label:`#Quantidade de erros `,
      data: [localStorage.getItem('typeErro0'),localStorage.getItem('typeErro1'),localStorage.getItem('typeErro2'),localStorage.getItem('typeErro3'),localStorage.getItem('typeErro4'),localStorage.getItem('typeErro5'),localStorage.getItem('typeErro6')],
      borderWidth: 1,
      borderColor:'rgba(0,0,0,0.5)',
      backgroundColor:['#203500','#283e06','#31470b','#3b5110','#445a14','#577e03','#3f4b25'],
      color:['black'],
    }]
  },
  options: {
 
  }
});