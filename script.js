const containerDOM = document.querySelector('.container');
const countDOM = document.getElementById('count');
const amountDOM = document.getElementById('amount');
const selectDOM = document.getElementById('movie');

const notReservedSeatsDOM = document.querySelectorAll('.seat:not(.reserved)')

getFromLocalStorage();
calculateTotal();



containerDOM.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
    //seat ler secilir ama reservedler secilmez

    //toggle ile o clas varsa siler yoksa ekler
    e.target.classList.toggle('selected');
     calculateTotal();
    
    

    }
});

selectDOM.addEventListener('change', calculateTotal);
    

function calculateTotal(){
    const selectedSeatsDOM = containerDOM.querySelectorAll('.seat.selected')
    let selectedSeatCounterDOM = selectedSeatsDOM.length;
    

    const selectedSeatsArray = [];
    const seatsArray=[];

    selectedSeatsDOM.forEach(function(seat){
        selectedSeatsArray.push(seat);
    })
    
    notReservedSeatsDOM.forEach(function(seat){
        seatsArray.push(seat);
    })
     
    let selectedSeatsIndex = selectedSeatsArray.map(function(seat){
        return seatsArray.indexOf(seat);
    });


    let price = selectDOM.value;
   
    countDOM.innerText = selectedSeatCounterDOM;
    amountDOM.innerText = selectedSeatCounterDOM * price;

    saveToLocalStorage(selectedSeatsIndex)
}

function saveToLocalStorage(indices){
    localStorage.setItem('selectedSeats', JSON.stringify(indices));
    localStorage.setItem('selectMovieIndex', selectDOM.selectedSeatsIndex)
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

if(selectedSeats != null && selectedSeats.length>0){
    notReservedSeatsDOM.forEach(function(seat,index){
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected')
        }
    })
}


    if(selectedMovieIndex!=null){
        selectDOM.selectedSeatsIndex= selectedMovieIndex;
    }
}
