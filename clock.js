setInterval(setClock, 1000)

const dataHourHand = document.querySelector('[data-hour-hand]')
const dataMinuteHand = document.querySelector('[data-minute-hand]')
const dataSecondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date();
    // console.log(currentDate)
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = currentDate.getMinutes()/60;
    const hourRatio = currentDate.getHours()/12;
    setRotation(dataSecondHand, secondRatio)
    setRotation(dataMinuteHand, minuteRatio)
    setRotation(dataHourHand, hourRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()

