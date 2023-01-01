const containerDOM = document.querySelector('.container');
const countDOM = document.getElementById('count');
const amountDOM = document.getElementById('amount');
const selectDOM = document.getElementById('movie');

containerDOM.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
    //seat ler secilir ama reservedler secilmez

    //toggle ile o clas varsa siler yoksa ekler
    e.target.classList.toggle('selected');
     calculateTotal();
    
    

    }
});

selectDOM.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    let selectedSeatCounterDOM = containerDOM.querySelectorAll('.seat.selected').length;
    countDOM.innerText = selectedSeatCounterDOM;

    let price = selectDOM.value;
    amountDOM.innerText = selectedSeatCounterDOM * price;
}