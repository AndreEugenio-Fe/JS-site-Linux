document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
  });

  const btn = document.getElementById('btn');
  let index = 0;
  const colorshead = ['green', 'white','rgb(112, 220, 247)', 'salmon', 'gray', 'rgb(244, 247, 112)'];
  const colorsparag = ['gray', 'rgb(112, 220, 247)', 'salmon', 'rgb(244, 247, 112)', 'green','white'];
  btn.addEventListener('click', function onClick() {
    index = index >= colorsparag.length - 1 ? 0 : index + 1;

      const sobremimhead = document.getElementById('sobremimhead');
      sobremimhead.style.color = colorsparag[index];

      const sobremimparag = document.getElementById('sobremimparag');
      sobremimparag.style.color = colorshead[index];

  });