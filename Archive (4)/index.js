let body = document.body


reload([1, 2, 3])
function reload(arr) {
    for (let item of arr) {
        // a createElement
        let cart_item = document.createElement('div')
        let left = document.createElement('div')
        let noname = document.createElement('div')
        let title = document.createElement('span')
        let price = document.createElement('span')
        let img = document.createElement('img')
        let right = document.createElement('div')
        let counter = document.createElement('div')
        let btn_pl = document.createElement('button')
        let btn_mn = document.createElement('button')
        let count = document.createElement('span')
        let del_btn = document.createElement('button')
        let count_i = 0
        let price_ = 10.000
        let pricev = 10.000
        // calsses or style or text or attribute
        cart_item.classList.add('cart-item')
        left.classList.add('left')
        right.classList.add('right')
        counter.classList.add('counter')

        img.src = "./81fPKd-2AYL 1.png"
        title.innerHTML = "Price-"
        price.innerHTML = `${price_}$`
        btn_pl.innerHTML = "+"
        btn_mn.innerHTML = "-"
        count.innerHTML = count_i
        del_btn.innerHTML = "delete"

        // append
        cart_item.append(left, right)
        left.append(img, noname)
        noname.append(title, price)
        right.append(counter, del_btn)
        counter.append(btn_mn, count, btn_pl)

        body.prepend(cart_item)

        // function
        btn_pl.onclick = () => {
            count_i++
            count.innerHTML = count_i
            price.innerHTML = price_ * count_i
        }
        btn_mn.onclick = () => {
            if (count_i !== 0) {
                count_i--
                count.innerHTML = count_i
                price.innerHTML = price_ * count_i
            }
        }
        del_btn.onclick = () => {
            cart_item.remove()
        }
    }
}

