const news = [
    {
        oneLinkImg:"./photo_2021-10-05_22-06-12.jpg",
        pLink:"Uz kanali facebook.com"
    },
    {
        oneLinkImg:"photo_2021-10-12_20-35-54.jpg",
        pLink:"Facebook youTube.com"
    },
    {
        oneLinkImg:"./img link/download.jpg",
        pLink:"http://127.0.0.1:5503"
    },
    {
        oneLinkImg:"./img link/photo_2021-07-19_22-34-24.jpg",
        pLink:"https://codepen.io/chingy"
    },
    {
        oneLinkImg:"./img link/team-3.jpg",
        pLink:"https://www.cuemath.com"
    },
    {
        oneLinkImg:"./img link/download.jpg",
        pLink:"measurement/area-of."
    },
    {
        oneLinkImg:"./photo_2021-10-05_22-06-12.jpg",
        pLink:"https://www.youtube.com"
    },
    {
        oneLinkImg:"./img link/download.jpg",
        pLink:"https://www.lovebigisland"
    },
];

let cardNews = ""
for (let i = 0; i < news.length; i++) {
    let card = news[i];


    cardNews += `
    <div class="oneLink">
    <img class="oneLinkImg" src="${card.oneLinkImg}" alt="">
    <p class="pLink"><a href="###">${card.pLink}</a></p>
    </div>`;
}
document.getElementById("cards").innerHTML = cardNews;





const cartDesign = [
    {
        php:"Senior PHP Developer",
        hr:"$30 / hr",
        ball_view:"Views 50",
        comment:"Comments"
    },
    {
        php:" Senior UI / UX designer",
        hr:"$112 / br",
        ball_view:"Views 122",
        comment:"Comments"
    },
    {
        php:"Senior Wordpress Developer",
        hr:"$22 / hr",
        ball_view:"Views 75",
        comment:"Comments"
    },
    {
        php:"Senior PHP Developer",
        hr:"$50 / br",
        ball_view:"Views 500",
        comment:"Comments"
    }
];


let flexRun = ""
for (let i = 0; i < cartDesign.length; i++) {
    let design = cartDesign[i];


    flexRun += `
    <div class="background-follow2">
    <div class="ballText-pFlex">
        <p class="facebook-one">f</p>
        <div>
        <p class="follow2-big">Facebook Inc.</p>
        <p class="ball-p">3 min ago</p>
        </div>
    </div>
    <div class="ballText-pFlex2">
        <p class="epic-smalle">📮 Epic Coder</p>
        <p class="india-smalle">📗 India</p>
        <p class="smalle-icon">❎<span>&</span></p>
    </div>

    <p class="php">${design.php}</p>
    <div class="flexButtonHr">
        <button class="buttonTime">Full Time</button>
        <p class="hr">${design.hr}</p>
    </div>
    <p class="textLoremMore">
        lorem ipsum dollor sit amet,consectetur adipiscing elit.Aliquam luctus
        hendrerit metus, ut ullamcorper quam sit amet...
    </p>
    <p class="textCard">view more</p>

    <div class="buttonDflex">
        <button class="button-fife">HTML</button>
        <button class="button-fife">PHP</button>
        <button class="button-fife">CSS</button>
        <button class="button-fife">JAVASCRIPt</button>
        <button class="button-fife">WORDPRESS</button>
    </div>

    <div class="flexLike">
        <p class="like">💖 Like</p>
        <p class="comment"> Comments</p>
        <p class="ball_view">${design.ball_view}</p>
    </div>
    </div>
    `
};

document.getElementById("textCart").innerHTML = flexRun;









function updateClock(){
    var now = new Date();
    var dname = now.getDate(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

    if(hou == 0){
        hou = 12;
    }
    if(hou > 12){
        hou = hou - 12;
        pe = "PM";
    }


    Number.prototype.pad = function(digits){
        for(var n = this.toString();n.length < digits; n = 0 + n);
        return n;
    }


    let month = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    let ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
    let values = [week[dname],month[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
    for(var i = 0; i < ids,length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock(){
   updateClock();
   window.setInterval(updateClock, 1000);
}









function showDate(){

   const cDate = new Date(Date.now())
 
 
   const dateInText = `${cDate.getHours()}:${cDate.getMinutes()}:${cDate.getSeconds()}`
 
 
   document.querySelector(".up").innerHTML = dateInText;
 
 }
 
 showDate()
 
 
 setInterval(showDate,1000)