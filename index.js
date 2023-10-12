const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");

const countTime=document.querySelector(".countTime");
const h1=document.getElementById("heading");


const CounterTimer = () => {

   let now = new Date();
   let dd = String(now.getDate()).padStart(2, "0");
   let mm = String(now.getMonth() + 1).padStart(2, "0");
   let yyyy = now.getFullYear();

   const enterDay = prompt("Enter Day").padStart(2, "0");
   const enterMonth = prompt("Enter Month").padStart(2, "0");

   now = (`${mm}/${dd}/${yyyy}`);



   // console.log( `${enterDay}/${enterMonth}/${yyyy}`);

   let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

   if (now > targetDate) {
      targetDate = (`${enterMonth}/${enterDay}/${yyyy+1}`);
   };
   console.log(targetDate);

   setInterval(() => {
      const farTime = new Date(targetDate).getTime();
      const currentTime = new Date();


      const difference = farTime - currentTime;

      const leftDay = Math.floor((difference / day));
      const leftHour = Math.floor((difference % day) / hour);
      const leftMinute = Math.floor((difference % hour) / minute);
      const leftSecond = Math.floor((difference % minute) / second);

      days.innerText = leftDay;
      hours.innerText = leftHour;
      minutes.innerText = leftMinute;
      seconds.innerText = leftSecond;

      if(difference < 0){
         countTime.style.display="none";
         h1.innerText="Time Over";
         
      };

   }, 0);
f
};
CounterTimer();