const Peeps = (element,client)=>{
    let targetElement=element;
    let clientApi = client;


    async function render (){

        let data = await clientApi.getPeeps();
        data.forEach((peep)=>{
            targetElement.appendChild(makePeepElement(peep))
        });
    }

    function makePeepElement(peep){
      let peepElement=makeArticle(peep.id);
      article.appendChild(makePeepText(peep.body));
      article.appendChild(makePeepAttributes(peep));
      return peepElement;
    }


    function makeArticle(id){
        article=document.createElement('article');
        article.setAttribute('class', 'peep');
        article.setAttribute('id', id);
        return article;
    }

    function makePeepText(text){
        let div = document.createElement('div');
        div.setAttribute('class','peep-text');
        div.innerHTML=`<p>${text}</p>`
        return div;
    }

  function makePeepAttributes(peep) {
   let  peepDate = new Date(peep.created_at)
    let div = document.createElement('div');
    div.setAttribute('class', 'peep-attributes');
    div.innerHTML = `<div class='peep-likes'><p>Likes: ${peep.likes.length}</p></div>`;
    div.innerHTML += `<div class='peep-posting'><p>${peep.user.handle} @ ${peepDate.toDateString()}, ${peepDate.toTimeString().slice(0,5)}</p></div>`;
    return div;
  }








return {render:render}

}
