document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
  });

  const btn = document.getElementById('btn');
  let index = 0;
  const colorshead = ['green', 'white','rgb(112, 220, 247)', 'salmon', 'gray', 'rgb(244, 247, 112)'];
  const colorsparag = ['gray', 'rgb(112, 220, 247)', 'salmon', 'rgb(244, 247, 112)', 'green','black'];
  btn.addEventListener('click', function onClick() {
    index = index >= colorsparag.length - 1 ? 0 : index + 1;

      const inicioparag = document.getElementById('inicioparag');
      inicioparag.style.color = colorsparag[index];

      const iniciohead = document.getElementById('iniciohead');
      iniciohead.style.color = colorshead[index];
  });