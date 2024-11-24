function signup(){
    let obj={
    receivedemail:document.querySelector("#emial").value,
    receivedname:document.querySelector("#name").value,
    receivedpass:document.querySelector("#pass").value
}
localStorage.setItem("data",JSON.stringify(obj))
}