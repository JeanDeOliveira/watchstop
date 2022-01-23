let sec = 0
let min = 0
let hour = 0
let OutputHours = document.querySelector('.hours')
let OutputMins = document.querySelector('.mins')
let OutputSecs = document.querySelector('.secs')

let interval;

function twoDigits(digit){
	if(digit < 10){
		return('0'+digit)
	}else{
		return(digit)
	}
}

function Start(){
	interval = setInterval(Time, 1000)
}

function time(){
	sec++
	OutputSecs.innerHTML = twoDigits(sec)

	if(sec==60){
		tens=0
		sec=0
		++min

		OutputMins.innerHTML = twoDigits(min)
		if(min==60){
			sec=0
			min=0
			++hour

			OutputHours.innerHTML = twoDigits(hour)
		}
	}
}

function Pause(){
	clearInterval(interval)
}

function Reset(){
	sec=0
	min=0
	hour=0
	OutputHours.innerText = '00'
	OutputMins.innerText = '00'
	OutputSecs.innerText = '00'
	clearInterval(interval)
}
