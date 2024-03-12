export default function timerFormatter(seconds: number) {
   let hours = Math.floor(seconds / 3600);
   let formatMinute = Math.floor((seconds - hours * 3600) / 60);
   let formatSecond = seconds - hours * 3600 - formatMinute * 60;

   const timeString =
      formatMinute.toString().padStart(2, "0") +
      ":" +
      formatSecond.toString().padStart(2, "0");

   return timeString;
}
