const scene = document.getElementById("scene")
const music = document.getElementById("bgMusic")
const clickSound = document.getElementById("clickSound")

let moodStart = 50
let score = 0
let gameTime = 10

music.volume = 0.4

function playClick(){
clickSound.currentTime = 0
clickSound.play()
}

/* PARTICLES */

for(let i=0;i<25;i++){

let p=document.createElement("span")
p.innerHTML="✨"

p.style.left=Math.random()*100+"%"
p.style.animationDuration=(6+Math.random()*5)+"s"

document.getElementById("particles").appendChild(p)

}

/* OPENING */

function showOpening(){

scene.innerHTML=`

<h2>Halo Clarisaaa!</h2>

<p>Aku dengar kamu lagi badmood kemaren.</p>

<p>Jadi aku buat game kecil untuk balikin mood kamu.</p>

<p>🕷️ Hai Clarisa! Kenalin aku spiderman!</p>

<button onclick="startMission()">Start Mission</button>

`

}

function startMission(){

music.play()
showMood()

}

/* MOOD METER */

function showMood(){

scene.innerHTML=`

<h3>Mood kamu sekarang ada di level berapa?</h3>

<input type="range" min="0" max="100" value="50" class="slider" id="slider">

<p id="label">😐 Biasa saja</p>

<button onclick="startQuiz()">Continue</button>

`

const slider=document.getElementById("slider")
const label=document.getElementById("label")

slider.oninput=()=>{

moodStart=slider.value

if(moodStart<30){

label.innerHTML="😔 Sedih"
document.body.style.background="linear-gradient(135deg,#c9d6ff,#e2e2e2)"

}

else if(moodStart<70){

label.innerHTML="😐 Biasa saja"
document.body.style.background="linear-gradient(135deg,#ffd6e7,#cfe9ff)"

}

else{

label.innerHTML="😊 Lumayan"
document.body.style.background="linear-gradient(135deg,#ffe29f,#ffa99f)"

}

}

}

/* QUIZ */

function startQuiz(){

scene.innerHTML=`

<div class="progress">
<div class="progress-bar"></div>
</div>

<h3>Siapa cewek paling manis sejogja?</h3>

<button onclick="quiz2()">Clarisa</button>
<button onclick="quiz2()">Tania</button>
<button onclick="quiz2()">Betha</button>

`

}

function quiz2(){

scene.innerHTML=`

<h3>Apa yang biasanya bikin mood kamu naik?</h3>

<button onclick="startGame()">Nongkrong sampe subuh</button>
<button onclick="startGame()">Makan sampe gendut</button>
<button onclick="sweetMessage()">Kata-kata manis</button>

`

}

function sweetMessage(){

alert("Clarisa genduttt.")

startGame()

}

/* MINIGAME */

function startGame(){

score=0
gameTime=10

scene.innerHTML=`

<h3>Tangkap kebahagiaan sebanyak mungkin!</h3>

<p>Score : <span id="score">0</span></p>

<p>Time : <span id="time">10</span></p>

<div id="gameArea"></div>

`

const area=document.getElementById("gameArea")

let spawn=setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"
heart.innerHTML="❤️"

heart.style.left=Math.random()*90+"%"
heart.style.top=Math.random()*80+"%"

heart.onclick=()=>{

playClick()

score++

document.getElementById("score").innerText=score

heart.remove()

}

area.appendChild(heart)

setTimeout(()=>heart.remove(),1200)

},700)

let timer=setInterval(()=>{

gameTime--

document.getElementById("time").innerText=gameTime

if(gameTime<=0){

clearInterval(timer)
clearInterval(spawn)

showResult()

}

},1000)

}

/* RESULT */

function showResult(){

let moodNow=Math.min(100,parseInt(moodStart)+score*4)

scene.innerHTML=`

<h2>MoodBoster Untuk Kamu</h2>

<p>Mood awal : ${moodStart}%</p>

<p>Mood sekarang : ${moodNow}%</p>

<h3>Mission Complete!</h3>

<button onclick="storySlide1()">Continue</button>

`

}

/* STORY */

function storySlide1(){

scene.innerHTML = `
<h2>Memulai cerita...</h2>
<p>Bersiaplah 😏</p>
`;

setTimeout(function(){

scene.innerHTML = `
<h3 id="text1"></h3>
<p id="text2"></p>
<div id="nextBtn"></div>
`;

let t1 = "Pada suatu hari...";
let t2 = "ada seorang cewek..";

let i = 0;
let j = 0;

function type1(){
    if(i < t1.length){
        document.getElementById("text1").innerHTML += t1.charAt(i);
        i++;
        setTimeout(type1,60);
    }else{
        setTimeout(type2,400);
    }
}

function type2(){
    if(j < t2.length){
        document.getElementById("text2").innerHTML += t2.charAt(j);
        j++;
        setTimeout(type2,60);
    }else{
        document.getElementById("nextBtn").innerHTML =
        `<button onclick="storySlide2()">Next →</button>`;
    }
}

type1();

},2000);

}

function storySlide2(){

scene.innerHTML = `
<p id="text1"></p>
<p id="text2"></p>
<h3 id="text3"></h3>
<div id="nextBtn"></div>
`;

let t1 = "Dia cantik...";
let t2 = "Pinter...";
let t3 = "Tapi dia lagi badmood (gatau deh sekarang) 😔";

let i=0, j=0, k=0;

function type1(){
    if(i < t1.length){
        document.getElementById("text1").innerHTML += t1.charAt(i);
        i++;
        setTimeout(type1,50);
    }else{
        setTimeout(type2,500); // jeda sedikit
    }
}

function type2(){
    if(j < t2.length){
        document.getElementById("text2").innerHTML += t2.charAt(j);
        j++;
        setTimeout(type2,50);
    }else{
        setTimeout(type3,700); // jeda sebelum kalimat penting
    }
}

function type3(){
    if(k < t3.length){
        document.getElementById("text3").innerHTML += t3.charAt(k);
        k++;
        setTimeout(type3,80); // lebih lambat supaya dramatis
    }else{
        setTimeout(function(){
            document.getElementById("nextBtn").innerHTML =
            `<button onclick="storySlide3()">Next</button>`;
        },600);
    }
}

type1();

}

function storySlide3(){

scene.innerHTML=`

<h3>Kenapa ya dia badmood?</h3>

<button onclick="storySlide4()">Banyak tugas 📚</button>
<button onclick="storySlide4()">Capek 😩</button>
<button onclick="storySlide4()">Lapar 🍜</button>
<button onclick="storySlide4()">Ada yang bikin kesel 😤</button>

`

}

function storySlide4(){

scene.innerHTML=`

<h3>Tapi Tenang…</h3>

<p>Aku sudah menyiapkan sesuatu.</p>

<button onclick="storySlide5()">Next</button>

`

}

/* SLIDE 5 */

function storySlide5(){

scene.innerHTML = `
<h3>Aku mencoba cara pertama...</h3>

<p>Kenapa ayam suka tiba2 nyebrang jalan?</p>

<button id="btnJawaban" onclick="showAnswer()" disabled>Lihat Jawaban</button>

<p id="timerText">Tunggu 7 detik...</p>
`;

let waktu = 7;

let countdown = setInterval(function(){

    waktu--;
    document.getElementById("timerText").innerHTML = "Tunggu " + waktu + " detik...";

    if(waktu <= 0){
        clearInterval(countdown);
        document.getElementById("btnJawaban").disabled = false;
        document.getElementById("timerText").innerHTML = "Sekarang kamu bisa liat jawabannya 😆";
    }

},1000);

}


function showAnswer(){

scene.innerHTML = `
<h3>Karena.... dia mau liat kamu senyum di seberang sana 😆</h3>

<button onclick="storySlide6()">Next</button>
`;

}

/* SLIDE 6 */

function storySlide6(){

scene.innerHTML = `
<h3>Kalau itu belum berhasil... (pasti belum sih)</h3>

<p>Aku coba cara kedua..</p>

<p id="loadingText">Menyiapkan sesuatu yang lebih lucu...</p>

<div id="memeContainer"></div>

<div id="nextBtn"></div>
`;

setTimeout(function(){

document.getElementById("loadingText").innerHTML = "Nih coba liat ini 😆";

document.getElementById("memeContainer").innerHTML = `
<video class="meme" id="memeVideo" controls>
<source src="sounds/meme.mp4" type="video/mp4">
</video>
`;

let video = document.getElementById("memeVideo");
video.play();

document.getElementById("nextBtn").innerHTML =
`<button onclick="storySlide7()">Next</button>`;

},2000);

}

/* SLIDE 7 */

function storySlide7(){

scene.innerHTML=`

<h3>Baiklah… ini yang terakhir.</h3>

<button id="dontClick" style="font-size:20px;padding:18px 30px;">
JANGAN DIKLIK
</button>

`

document.getElementById("dontClick").onclick=()=>{

scene.innerHTML=`

<h2>Jadi.... Clarisaaa</h2>

<button onclick="storySlide8()">Next</button>

`

}

}

/* SLIDE 8 */

function storySlide8(){

let lines=[
"Sebenarnya…",
"Website ini dibuat…",
"Cuma buat satu tujuan."
]

let i=0

scene.innerHTML=`<h2 id="typing"></h2>`

let el=document.getElementById("typing")

function typeLine(text, callback){

let j=0
el.innerHTML=""

function typing(){

if(j < text.length){
el.innerHTML += text.charAt(j)
j++
setTimeout(typing,60)
}else{
setTimeout(callback,800)
}

}

typing()

}

function nextLine(){

if(i < lines.length){
typeLine(lines[i], ()=>{
i++
nextLine()
})
}else{

setTimeout(()=>{

typeLine("Bikin kamu senyum lagi 🙂", ()=>{
setTimeout(storySlide9,1500)
})

},800)

}

}

nextLine()

}

/* SLIDE 9 */

function storySlide9(){

scene.innerHTML=`

<button onclick="missionComplete()">
Klik kalau udah senyum
</button>

`

}

/* CONFETTI */

function missionComplete(){

scene.innerHTML=`

<canvas id="confetti"></canvas>

<div style="text-align:center; position:relative; z-index:2;">

<h2>Misi berhasil 🎉</h2>

<img src="sounds/gambar1.jpeg"
style="width:140px; border-radius:12px; margin:15px 0;">

<br>

<button onclick="ending()">Lanjut</button>

</div>

`

let canvas = document.getElementById("confetti")
canvas.style.position = "fixed"
canvas.style.top = "0"
canvas.style.left = "0"
canvas.style.width = "100%"
canvas.style.height = "100%"
canvas.style.pointerEvents = "none"

startConfetti()

}
function startConfetti(){

const canvas=document.getElementById("confetti")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=300

let pieces=[]

for(let i=0;i<100;i++){

pieces.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:6,
speed:Math.random()*3+2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

pieces.forEach(p=>{

ctx.fillStyle="hsl("+Math.random()*360+",80%,60%)"

ctx.fillRect(p.x,p.y,p.size,p.size)

p.y+=p.speed

if(p.y>canvas.height)p.y=0

})

requestAnimationFrame(draw)

}

draw()

}

/* ENDING */

function ending(){

scene.innerHTML=`

<h2>Kamu masih badmood?</h2>

<button id="yes">Iya</button>
<button onclick="happy()">Tidak</button>

`

let yes=document.getElementById("yes")

yes.onmouseover=()=>{

yes.style.position="absolute"

yes.style.left=Math.random()*80+"%"
yes.style.top=Math.random()*80+"%"

}

}

function happy(){

scene.innerHTML=`

<h2>Nah gitu dong, pinter dehh... Clarisa yang orang kenal itu harus selalu happy 😊
(Bumi mendung kalau kamu sedih, badai kalau mau nangis, gempa kalau kamu tantrum)</h2>

`

}


showOpening()

