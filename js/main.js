`use strict`
{ 
  let isClick = false;
  const title1 = document.getElementById('title1');
  title1.addEventListener('click',()=>{
    const i = document.getElementById('icon1');
    if(!isClick){
      i.className = 'fas fa-angle-up';
      const item1 = document.createElement('li');
      item1.textContent = "中身１";
      item1.classList.add('content');
      const ulNode1 = document.getElementById('ul1');
      ulNode1.appendChild(item1);

      const item2 = document.createElement('li');
      item2.textContent = "中身２";
      item2.classList.add('content');
      const ulNode2 = document.getElementById('ul1');
      ulNode2.appendChild(item2);

      const item3 = document.createElement('li');
      item3.textContent = "中身３";
      item3.classList.add('content');
      const ulNode3 = document.getElementById('ul1');
      ulNode3.appendChild(item3);
      
    } else {
      i.className = 'fas fa-angle-down';
      const ul1 = document.getElementById('ul1');
      ul1.textContent = '';
    }
    isClick = !isClick;
  });
  const title2 = document.getElementById('title2');
  title2.addEventListener('click',()=>{
    const i = document.getElementById('icon2');
    if(isClick === false){
      i.className = 'fas fa-angle-up';

      const item1 = document.createElement('li');
      item1.textContent = "中身１";
      item1.classList.add('content');
      const ulNode1 = document.getElementById('ul2');
      ulNode1.appendChild(item1);

      const item2 = document.createElement('li');
      item2.textContent = "中身２";
      item2.classList.add('content');
      const ulNode2 = document.getElementById('ul2');
      ulNode2.appendChild(item2);

      const item3 = document.createElement('li');
      item3.textContent = "中身３";
      item3.classList.add('content');
      const ulNode3 = document.getElementById('ul2');
      ulNode3.appendChild(item3);

      const item4 = document.createElement('li');
      item4.textContent = "中身４";
      item4.classList.add('content');
      const ulNode4 = document.getElementById('ul2');
      ulNode4.appendChild(item4);      
    }
    else {
      i.className = 'fas fa-angle-down';
      const ul2 = document.getElementById('ul2');
      ul2.textContent = '';
    }
    isClick = !isClick;
  });
}