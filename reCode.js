

setTimeout(function(){

document.getElementById('re').textContent = 'redirecting ..'
setTimeout(function(){

    document.getElementById('re').textContent = 'redirecting ...'
    setTimeout(function(){

        document.getElementById('re').textContent = 'click here to redirect'
    }, 1000);
}, 1000);
}, 1000);