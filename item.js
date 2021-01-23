
function addItem() {
    localStorage.setItem('description', description.value);
}
function render(){
    var today = new Date();
    var time = today.getDate() + '/' + today.getDay()+ '/' + today.getFullYear();
    document.getElementById('hvn').innerHTML = time;
    var user = localStorage.getItem('Email');
    document.getElementById('Email').innerHTML = 'GoodDay '+ user;
    
    var description = localStorage.getItem('description');
    document.getElementById('listDescription').innerHTML = description;
}

function remove(){
    localStorage.removeItem('description');
}