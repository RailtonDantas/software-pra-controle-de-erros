
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

Chart.defaults.color = 'black';
Chart.defaults.font.weight = 'bolder'
Chart.defaults.font.family = 'Helvetica,sans-serif'


new Chart(ctx, { 
  type: 'pie',
  data: {
    labels: ['ATENÇÃO', 'TEORIA','INTERPRETAÇÃO','SACADA','TEMPO','RACIOCÍNIO CERTO MAS TRAVOU','ANÁLISE DE GRÁFICO','FICOU EM DÚVIDA E MARCOU A ERRADA'],
    datasets: [{
      label:`#Quantidade de erros `,
      data: [localStorage.getItem('typeErro0'),localStorage.getItem('typeErro1'),localStorage.getItem('typeErro2'),localStorage.getItem('typeErro3'),localStorage.getItem('typeErro4'),localStorage.getItem('typeErro5'),localStorage.getItem('typeErro6'),localStorage.getItem('typeErro7')],
      borderWidth: 1,
      borderColor:'rgb(255,255,255)',
      backgroundColor:['#32666B','#33426C','#4E81A6','#254E45','#706ADD','#B4CEE0','#56636C','#5EE1C5'],    
    }
  ],
  },
  options: {
 
  }
});