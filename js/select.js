if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback,thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i <this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}


document.querySelectorAll('.checkout__select').forEach(function(selectWrapper){

    const selectBtn = selectWrapper.querySelector('.checkout__select-btn');
    const selectItems = selectWrapper.querySelector('.checkout__select-items');
    const selectItem = selectWrapper.querySelectorAll('.checkout__select-item');
    const selectInput = selectWrapper.querySelector('.checout__select-input--hidden');
    const selectCheckStr = selectWrapper.querySelector('.checkout__select-img--bottom');
    const selectCheckStri = selectWrapper.querySelector('.checkout__select-img--top');
    
    //клик по кнопке checkout__select-btn. Открыть\закрыть select
    selectBtn.addEventListener('click', function(){
        selectItems.classList.toggle('checkout__select-items--visible');
        selectBtn.classList.toggle('checkout__select-btn--visible');
        selectCheckStr.classList.toggle('checkout__select-img--bottom--desabled');
        selectCheckStri.classList.toggle('checkout__select-img--top--visible');
    });
    
    
    //Выюор элемента из списка. Запомнитьвыбранное значение. Закрыть дроп
    selectItem.forEach(function(selectItemi) {
        selectItemi.addEventListener('click', function(e) {
            e.stopPropagation();//клик внутри списка не считается - см 20 стр
            selectBtn.innerText = this.innerText;
            selectInput.value = this.dataset.value;
            selectItems.classList.remove('checkout__select-items--visible');
            selectBtn.classList.remove('checkout__select-btn--visible');
            selectCheckStr.classList.remove('checkout__select-img--bottom--desabled');
            selectCheckStri.classList.remove('checkout__select-img--top--visible');
        })
    })
    
    //Закрытие по клику вне дропа
    document.addEventListener('click', function(e){
        console.log('doc click') //клик считается по всей странице, смотри 11стр
        if( e.target !== selectBtn) { //проверка клика по кнопке. Т.е. если нажали, то выполняется стр 23
            selectItems.classList.remove('checkout__select-items--visible');
            selectBtn.classList.remove('checkout__select-btn--visible');
            selectCheckStr.classList.remove('checkout__select-img--bottom--desabled');
            selectCheckStri.classList.remove('checkout__select-img--top--visible');
        } //
    })
    
    //клик по Tab Escape
    document.addEventListener('keydown', function(e){
        if(e.key === 'Tab' || e.key === 'Escape'){
            selectItems.classList.remove('checkout__select-items--visible');
            selectCheckStr.classList.remove('checkout__select-img--bottom--desabled');
            selectCheckStri.classList.remove('checkout__select-img--top--visible');
        }
    })
})

