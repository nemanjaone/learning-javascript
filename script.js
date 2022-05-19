
const btn = document.querySelector('button');
const person = document.querySelector('#person');


const getStarWarsPerson = async () => {
    let random = Math.floor(Math.random() * 20);
    console.log(random);
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${random}/`);
        console.log(res.data);
        person.innerHTML = res.data.name;
    }
    catch (e) {
        console.log(e);
    }
};



btn.addEventListener('click', getStarWarsPerson);