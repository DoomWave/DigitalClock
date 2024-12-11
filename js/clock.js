class Clock {
  constructor(timeDiv, alarmDiv, alarmTime, alarmAudio) {
    this.timeDiv = timeDiv;
    this.alarmDiv = alarmDiv;
    this.alarmTime = alarmTime;
    this.alarmAudio = document.querySelector(this.alarmDiv + ' #alarmAudio')
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
    const alarm = document.querySelector(this.alarmDiv + ' span ')
    alarm.innerText = `Alarm (${this.alarmTime})`
    
  }

  playAlarm() {
    this.alarmAudio.currentTime = 0
    this.alarmAudio.muted = false
    this.alarmAudio.volume = .5
    this.alarmAudio.play()
  }
}

new Clock('#time', 'alarm', '10:50:00 PM');
