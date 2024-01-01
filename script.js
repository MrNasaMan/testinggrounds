const data = [
  {
    From: ['PHLI'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'LIH BOOKE#',
  },
  {
    From: ['PHMK'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'MKK V15 HNL',
      
  },
  {
    From: ['PHNY'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'LNY JULLE#',
      
  },
  {
    From: ['PHOG'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'North Dep: MAUI# LNY JULLE#\nSouth Dep: BEACH# LNY JUULE#',
  },
  {
    From: ['PHKO'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'AMREY# ROWIN V7 LNY JULLE#',
      
  },
  {
    From: ['PHTO'],
    To: ['PHNL'],
    Runway:['04L, 04R, 08L, 08R'],
    Route: 'PPKEO# UPP V16 LNY JULLE#',
      
  },
]

const optionList = ['PHNL','PHKO','PHLI','PHTO','PHMK','PHNY','PHOG'];
const optionList2 = ['PHNL','PHKO','PHLI','PHTO','PHMK','PHNY','PHOG'];
const optionList3 = ['04L, 04R, 08L, 08R',' 26L or 22L','02','20','17/35','21 or 26','03 or 35 '];

function hamburger() {
  var x = document.getElementById("topnavv");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else { 
    x.className = "topnav";
  }
}

function from(){
  const selected = document.getElementById('from').value;
  const selectedArr = [selected];
  localStorage.setItem('from', JSON.stringify(selectedArr));
}
function to(){
  const selected = document.getElementById('to').value;
  const selectedArr = [selected];
  localStorage.setItem('to', JSON.stringify(selectedArr));
}
function runway(){
  const selected = document.getElementById('runway').value;
  const selectedArr = [selected];
  localStorage.setItem('runway', JSON.stringify(selectedArr));
}

function setSelectValueFromLocalStorage(selectId, key) {
  const select = document.getElementById(selectId);
  const value = localStorage.getItem(key);
  if (value) {
    const valueArr = JSON.parse(value);
    select.value = valueArr[0];
  }
}

window.onload = function() {
  optionList.map((item)=>{
    document.getElementById('from').innerHTML += `<option value='${item}'>${item}</option>`;
  })
  optionList2.map((item)=>{
    document.getElementById('to').innerHTML += `<option value='${item}'>${item}</option>`;
  })
  optionList3.map((item)=>{
    document.getElementById('runway').innerHTML += `<option value='${item}'>${item}</option>`;
  })
  setSelectValueFromLocalStorage('from', 'from');
  setSelectValueFromLocalStorage('to', 'to');
  setSelectValueFromLocalStorage('runway', 'runway');
};






function search(){
  const level = document.getElementById('from').value;
  const filament = document.getElementById('to').value;
  const currency = document.getElementById('runway').value;
  const productsDiv = document.getElementById("products");
  
  productsDiv.innerHTML = ''

  const sortedData = data
    .filter((product)=>{
      
        return product.From.some((item)=>{return item === level})
   
    })
    .filter((product)=>{
      
        return product.To.some((item)=>{return item === filament})
    })
    .filter((product)=>{
      return product.Runway.some((item)=>{return item === currency})
    })
    if(sortedData.length){
      for(let i=0; i<sortedData.length; i++){
        productsDiv.innerHTML += `
          <div class="product">
            <div class="params">
              <span>From: ${sortedData[i].From}</span>
              <span>To: ${sortedData[i].To}</span>
              <span>Arriving Runway: ${sortedData[i].Runway}</span>
              <span>Route: ${sortedData[i].Route}</span>
            </div>
          </div>
        `;  
      }
    }else{
      productsDiv.innerHTML += `<h1>No result!</h1>`
    }
}