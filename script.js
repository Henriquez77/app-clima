let api_key = '8c9333d10c7cabb9138e3ef81156c298'
let difeKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=""
    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon
    const urlIcon = 'https://openweathermap.org/img/wn/' 
    const humedad = response.main.humidity

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura-difeKelvin)}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `${urlIcon}${icono}@2x.png`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    
}