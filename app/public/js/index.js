window.addEventListener('load',()=>{

    let element = document.getElementById('app');
    let client = new chitterApiCl();
    let peeps=Peeps(element,client);
    peeps.render();
})