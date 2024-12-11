class Clock {
  constructor(timeDiv, alarmDiv, alarmTime) {
    this.timeDiv = timeDiv;
    this.alarmDiv = alarmDiv;
    this.alarmTime = alarmTime;
    this.alarmAudio = document.querySelector(this.alarmDiv + ' #alarmAudio');
    let tim = document.querySelector(this.timeDiv);
    let t = new Date();
    let time = t.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    tim.innerHTML = time;

    this.setAlarm()

    setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    let tim = document.querySelector(this.timeDiv);
    let t = new Date();
    let time = t.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    tim.innerHTML = time;

    if(time == this.alarmTime){
      this.playAlarm()
    }
  }

  setAlarm() {
    const alarm = document.querySelector(this.alarmDiv + ' span');
    alarm.innerText = `Alarm (${this.alarmTime})`;
    
  }

  playAlarm() {
    this.alarmAudio.currentTime = 0;
    this.alarmAudio.muted = false;
    this.alarmAudio.volume = 0.5;
    this.alarmAudio.play()

    document.querySelector(this.alarmDiv + ' button ').style.display = 'block'
    document.querySelector(this.alarmDiv + ' button ').addEventListener('click', () => this.turnOffAlarm(this.alarmAudio))
    document.body.style.background = '#38a4ef'
  }

  turnOffAlarm(alarmAudio){
    alarmAudio.muted = true
    document.querySelector(this.alarmDiv + ' button ').style.display = 'none'

  }
}

new Clock('#time', '#alarm', '10:52:00 PM');
