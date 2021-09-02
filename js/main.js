$(document).ready(function () {
    var inp = $('input');
    $(inp[0]).keypress(function (event) {
        var number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault();
        } else {
            console.log(number)
        }
    });

    $(inp[1]).keypress(function (event) {
        var symbol = event.key;
        if (symbol === '.' || symbol === ',') {
            event.preventDefault();
        } else {
            console.log(symbol)
        }
    });

    var checked = $('#checkbox input');
    $(checked).click(function () {
        if ($(checked).prop('checked')) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    });

    var button = $('#btn');
    $(button).click(function form(event) {
        var password = $(inp[3]).val();
        var reppassword = $(inp[4]).val();
        if ($(inp[0]).val() === '') {
            alert('Заполните поле Full Name')
            event.preventDefault();
        } else if ($(inp[1]).val() === '') {
            alert('Заполните поле Your username')
            event.preventDefault();
        } else if ($(inp[2]).val() === '') {
            alert('Заполните поле E-mail')
            event.preventDefault();
        } else if ($(inp[3]).val() === '') {
            alert('Заполните поле Password')
            event.preventDefault();
        } else if ($(inp[4]).val() === '') {
            alert('Заполните поле Repeat Password')
            event.preventDefault();
        } else if (password !== reppassword) {
            alert('Пароли не совпадают!');
            return event.preventDefault()
        } else if ($(checked).prop('checked') !== true) {
            alert('Чекбокс не выбран')
        } else {
            alert('OKEY!')
        }
    });

    var a = $('#question');
    $(a).click(function a(event) {
        $('#order-form-title').text('Log in to the system')
        var p = $('p')
        $(inp[4]).remove();
        $(p[4]).remove();
        $(inp[2]).remove();
        $(p[2]).remove();
        $(inp[0]).remove();
        $(p[0]).remove();
        $('#checkbox').remove();
        $('button').text('Sign In')
        $('#question').remove();
        event.preventDefault()
    })
})


