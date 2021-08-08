describe('Chitter Api front End',()=>{
  let element;
  let mockClient;
  let peeps;
  let expectedHTML;


  describe('#Peeps',()=>{


beforeEach(()=>{

    element=document.createElement('div');
    mockClient = {getPeeps :()=> {return mockGetPeepsResponse} }
    peeps=Peeps(element,mockClient);

    expectedHTML = [
        '<article class="peep" id="101">',
          '<div class="peep-text"><p>Example Peep 1</p></div>',
          '<div class="peep-attributes">',
            '<div class="peep-likes"><p>Likes: 0</p></div>',
            '<div class="peep-posting"><p>User 1 @ Mon Nov 23 2020, 18:21</p></div>',
          '</div>',
        '</article>',
        '<article class="peep" id="99">',
          '<div class="peep-text"><p>Example Peep 2</p></div>',
          '<div class="peep-attributes">',
            '<div class="peep-likes"><p>Likes: 1</p></div>',
            '<div class="peep-posting"><p>User 2 @ Sun Nov 22 2020, 23:10</p></div>',
          '</div>',
        '</article>',
      ].join("");

})

    it('renders peeps into an html ',async () => {
        await peeps.render();
        expect(element.innerHTML).toEqual(expectedHTML);
    });




})





})




