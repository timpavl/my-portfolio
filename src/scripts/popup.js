function menu() {
    const burger = document.querySelector('.burger');
    const popup = document.querySelector('.popup');
  
    burger.addEventListener('click', function() {
      burger.classList.toggle('burger--active');
      popup.classList.toggle('popup--active');
    });
  
    popup.addEventListener('click', ()=> {
      const target = event.target;
  
      console.log(target)
  
      if(target.classList.contains('nav__list-link')) {
        burger.classList.toggle('burger--active');
        popup.classList.toggle('popup--active');
      }
  
    })
  };
  menu(); 
//   TODO без menu() не работало и я понятия не имею почему, нашёл такоер ешение