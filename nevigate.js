const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || height === isNaN(height)){
        results.innerHTML = `please give a valid number ${height}`
    }else if (weight === '' || weight < 0 || weight === isNaN(weight)){
        results.innerHTML = `please give a valid number ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            results.innerHTML = ` <span> ${bmi} under weight</span>`;
        }else if(bmi>18.6 || bmi<24.9){
            results.innerHTML = ` <span> ${bmi} Normal weight</span>`;
        }else if(bmi>24.9){
            results.innerHTML = ` <span> ${bmi} Over weight</span>`;
        }
         
    }
    
});