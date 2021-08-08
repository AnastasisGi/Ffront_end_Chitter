window.addEventListener('load',()=>{

    element = document.getElementById('app');
    client = new chitterApiCl();
    peeps=Peeps(element,client);
    peeps.render();



})