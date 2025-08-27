let callHistoryArray = []

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
 function setInnerTestOfHeart(value){
    const availableBalance = document.getElementById('heart').innerText = value
    return availableBalance
}



// call button style-----------------------

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

    

    alert('📞 Calling ' + serviceName + ' ' + serviceNumber + '...');

    

    const data = {
        name : service,
        number: serviceNumber,
        date : new Date().toLocaleTimeString()
    }
    
    callHistoryArray.push(data)
    
    
    const callHistory = document.getElementById('call-history');
    callHistory.innerHTML = ""
    for(const data of callHistoryArray){
      const div = document.createElement('div')
      div.innerHTML = `
      <div  class="bg-[#FAFAFA] rounded-lg flex justify-between items-center p-4 mb-2">
              <div>
                <h1>${data.name}</h1>
                <p>${data.number}</p>
              </div>
              <div> ${data.date}</div>

            </div>
      `
      callHistory.appendChild(div)
    }

    
  });
  

}

// heart count ----------------------
let heartCount = 0;
const heartButton = document.getElementsByClassName('heart-icon')
for (let button of heartButton) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    
    heartCount++;
    const heartNumber = card.getElementsByClassName('heart').innerText = heartCount
    setInnerTestOfHeart(heartNumber)
    
  })
}

// copy related style-------------------------
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

// history clear section
document.getElementById('btn-clear')
.addEventListener('click', function(){
  const callHistoryDiv = document.getElementById('call-history')
  callHistoryDiv.innerHTML = ''
  callHistoryArray = []; 
})





