// var num = 0
num = document.querySelector('#num')
number = Number(num.innerHTML)
// number.innerHTML=`${num}`

const minus = () =>{
  number--
  num.innerHTML = `${number}`
}

const plus = () =>{
  number++
  num.innerHTML=`${number}`
}


// sub = document.getElementById('minus')
// add = document.getElementById('plus')

// sub.addEventListener("click", minus);
// add.addEventListener("click", plus);


