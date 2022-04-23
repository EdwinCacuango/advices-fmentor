let numberAdvice = document.getElementById("adviceNo");
let textAdvice = document.getElementById("text-advice");
let shuffleBtn=document.getElementById("shuffle")

const getData = async () => {
  let url = "https://api.adviceslip.com/advice";

  try {
    let data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

const renderData = async () => {
  const message = await getData();
  numberAdvice.textContent = message.slip.id;
  textAdvice.textContent = message.slip.advice;
};

renderData();

shuffleBtn.addEventListener("click", renderData)
