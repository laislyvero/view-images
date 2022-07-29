const items = document.querySelectorAll('.panel')

items.forEach(function(items) {
   items.addEventListener('click', function(){
     removeActiveClasses();
     items.classList.add("active")
   });
});

function removeActiveClasses() {
    items.forEach(function(items) {
        items.classList.remove('active')
    })
}

