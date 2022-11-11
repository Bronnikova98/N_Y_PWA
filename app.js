function notificationNY(name_user) {
    const options = {
        body: "Дорогой(ая), " + name_user + ". От всего сердца поздравляю тебя с наступающим Новым годом! Пусть твои желания сбудутся!",
        icon: "images/icons/happy.png"
    }
    console.log('push');
    new Notification(
        "Поздравление:",
        options
    )
}

document.addEventListener('DOMContentLoaded', function () {
    const name_elem = document.getElementById('exampleInputName');
    
    const btn_elem = document.getElementById('ny_btn');
    // console.log('name_elem.value');
    // console.log(name_elem.value);

    btn_elem.addEventListener('click', function () {

        let name_us = name_elem.value;
        let name_user = name_us;

        setInterval(() => {
            Notification.requestPermission().then((result) => {
                if (result == 'granted') {
                    notificationNY(name_user);
                }
            }

            )
        }, 10000

        );
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.log('SW gen', reg)
            })
            .catch(error => {
                console.log('SW failed', error)
            });
    }
})