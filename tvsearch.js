const form = document.querySelector('#searchForm')


form.addEventListener('submit',async (e) => {
    e.preventDefault();
    const input = form.elements.searchtv.value;
    const config = {params:{q:input}};
    const res= await axios.get('https://api.tvmaze.com/search/shows',config); 
    resData(res.data)
    form.elements.searchtv.value='';
})

const resData = (shows) => {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container')
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row');
    for (result of shows) {
        let colDiv = document.createElement('div');
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        colDiv.classList.add('col-sm-3');
        colDiv.append(cardDiv);
        rowDiv.append(colDiv);
        containerDiv.append(rowDiv);
        document.body.append(containerDiv)
        // adding the image of the show for each iteration
        if (result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            img.classList.add('card-img-top')
            cardDiv.append(img);
        } else {
            const img = document.createElement('p');
            img.innerText= 'NO IMAGE';
            cardDiv.append(img);
            
        }

        //adding the name of the show
        let showName= document.createElement('h3')
        showName.innerText= result.show.name;
        cardDiv.append(showName);  

