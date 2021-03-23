const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault(); 
    let cityval = cityName.value;
    if(cityval===""){
        city_name.innerText = `Plz write name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b452f8ccb1e968d6788a5c3fe8ebd49f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            // weather condition checking
            if (tempMood == "Clear"){
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if (tempMood == "Clouds"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }else if (tempMood == "Rain"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }else {
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
           
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Plz write name correctly`
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);
