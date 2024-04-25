 export const calculateTimeDifference=(pastTime)=>{
const d1=new Date(pastTime);
const d2=new Date();

const diffInSeconds=parseInt((d2-d1)/1000);
//seconds ago,min ago,hours ago,days ago,weeks ago,months ago,years ago
if(diffInSeconds<60)return `${diffInSeconds} seconds Ago`;
if(diffInSeconds<3600)return `${parseInt(diffInSeconds/60)} minutes ago`;
if(diffInSeconds<86400)return `${parseInt(diffInSeconds/3600)}hours ago `;
if(diffInSeconds<2592000)return `${parseInt(diffInSeconds/86400)} days ago}`;
if(diffInSeconds<3153600)return `${parseInt(diffInSeconds/2592000)} months ago`;
return `${parseInt(diffInSeconds/31536000)}years ago`;

}