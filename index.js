let callHistory = []

function getElementNumber (id){
    const coin = parseInt(document.getElementById(id).innerText)
    return coin
}

// value 
function getValue (id){
    const value = document.getElementById(id).innerText
    return value;
}

 function setInnerTest(value){
    const availableBalance = document.getElementById('coin').innerText = value
    return availableBalance
}





const callButtons = document.querySelectorAll('.btn-call');

for (let button of callButtons) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    const service = card.querySelector('.service').innerText
    const serviceName = card.querySelector('p').innerText;
    const serviceNumber = card.querySelector('h4').innerText;
    const coin = getElementNumber('coin')
    
    
    
    if(coin < 20){
      alert('❌ You dont have enough coins to make a call! you need at least 20 coins')
      return
    }
    const totalCoin = coin - 20 
    setInnerTest(totalCoin);

    button.style.background = "white";
    button.style.color = "#00A63E";

    alert('📞 Call ' + serviceName + ' ' + serviceNumber + '...');

    button.style.background = "#00A63E";
    button.style.color = "white";
    
    
    

    const data = {
        name : service,
        number: serviceNumber,
        date : new Date().toLocaleTimeString()
    }
    console.log(data)
    callHistory.push(data)
  });
  

}

// copy related style
let copyCount = 0;
const copyButtons = document.querySelectorAll('.btn-copy');

for (let button of copyButtons) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    const serviceNumber = card.querySelector('h4').innerText;

   navigator.clipboard.writeText(serviceNumber);

    alert("Number copied: " + serviceNumber);
    copyCount++;
    
   const copy =  document.getElementById('copy').innerText = copyCount;
   
   
  });
}





