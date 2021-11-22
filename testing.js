const form = document.querySelector('#searchForm')
const imageCard = document.querySelector('.image is-square')

form.addEventListener('submit',async (e) => {
    e.preventDefault();
    const input = form.elements.searchtv.value;
    const config = {params:{q:input}};
    const res= await axios.get('https://api.tvmaze.com/search/shows',config); 
    console.log(res.data[0].show.image.medium)
    image(res.data[0])
    form.elements.searchtv.value='';
})


const image = (result) => {
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        imageCard.appendChild(img);
}