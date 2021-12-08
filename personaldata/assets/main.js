const wordEl = document.getElementById("word");
const descriptEl = document.getElementById("description");
const whiteRecEl = document.getElementById("whiteRec");
const whiteRec2El = document.getElementById("whiteRec2");
// const attEl = document.getElementById("att1");

const search = window.location.search;

const attribute = search.substring(1).split("=")[1]; 

console.log(attribute);
console.log(wordEl);
if(attribute === "dog_lover"){
  wordEl.innerText = 'dog lover';
  descriptEl.innerText = ": She cares about animals a lot";
  whiteRecEl.classList.add("pos2");
  whiteRec2El.classList.add("pos9");

}else if(attribute === "full_of_personality"){
   wordEl.innerText = 'full of personality';
  descriptEl.innerText = ": I personally enjoy following her outfits on insta";
  whiteRecEl.classList.add("pos1");
  whiteRec2El.classList.add("pos2");
}else if(attribute === "talented_dancer"){
  wordEl.innerText = 'talented dancer';
  descriptEl.innerText = ": I love dancing with her!";
  whiteRecEl.classList.add("pos2");
  whiteRec2El.classList.add("pos5");
}else if(attribute === "lovable"){
  wordEl.innerText = 'lovable';
  descriptEl.innerText = ": She's best at smiling with her eyes";
  whiteRecEl.classList.add("pos8");
  whiteRec2El.classList.add("pos3");
}else if(attribute === "shy"){
  wordEl.innerText = 'shy';
  descriptEl.innerText = ": It took a while for her to open up";
  whiteRecEl.classList.add("pos7");
  whiteRec2El.classList.add("pos4");
  
}else if(attribute === "calm"){
  wordEl.innerText = 'calm';
  descriptEl.innerText = ": She is really good at holding her emotions and calmly figure out a way";
  whiteRecEl.classList.add("pos9");
  whiteRec2El.classList.add("pos9");
}else if(attribute === "too_funny"){
  wordEl.innerText = 'too funny';
  descriptEl.innerText = ": One of the funniest nights when we all hung out together for my birthday";
  whiteRecEl.classList.add("pos8");
  whiteRec2El.classList.add("pos9");
}else if(attribute === "thoughtful"){
  wordEl.innerText = 'thoughtful';
  descriptEl.innerText = ": She's the reason I got through college";
  whiteRecEl.classList.add("pos9");
  whiteRec2El.classList.add("pos8");
}else if(attribute === "warm_hearted"){
  wordEl.innerText = 'warm-hearted';
  descriptEl.innerText = ": She was my go-to person whenever I needed someone to talk to";
  whiteRecEl.classList.add("pos8");
  whiteRec2El.classList.add("pos4");
}else if(attribute === "small_but_strong"){
  wordEl.innerText = 'small but strong';
  descriptEl.innerText = ": She is stronger than she looks";
  whiteRecEl.classList.add("pos7");
  whiteRec2El.classList.add("pos6");
}
