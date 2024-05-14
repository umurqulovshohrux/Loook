const customerslist = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const orderslist = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')




function renderUsers() {
    customerslist.innerHTML = null
    for (const user of users) {
        const [li, span,a] = createElement('li', 'span', 'a')
       li.classList.add('customer-item')
       span.classList.add('customer-name')
       a.classList.add('customer-phone')
       a.setAttribute('href', 'tel', user.contact)
       span.textContent = user.userName
       a.textContent = user.contact

       li.append(span, a)
       customerslist.append(li)

       li.addEventListener('click', () => {
          renderOrders(user.userId)
          customerName.textContent = user.userName
          clientId.textContent = user.userId
       })
    }
}
function renderFoods() {
    for (const food of foods) {
        const [option] = createElement('option')
        option.value = food.foodId
        option.textContent = food.foodName
        foodsSelect.append(option)
    }
}
function renderOrders(userId) {
//if(!userId) return
    orderslist.innerHTML = null
    
   for (const order of orders) {

       if(!(order.userId == userId)) continue
       const food = foods.find(el => el.foodId == order.foodId)
         

       const [liEl, imgEl, divEl, nameEl, countEl] = createElement('li', 'img', 'div', 'span', 'span')
       liEl.classList.add('order-item')
       nameEl.classList.add('order-name')
       countEl.classList.add('order-count')

       nameEl.textContent = food.foodName
       countEl.textContent = order.count

       imgEl.setAttribute('src', food.foodImg)

       divEl.append(nameEl, countEl,)
       liEl.append(imgEl,divEl)
       orderslist.append(liEl)


   }
       
}
function addUsers() {
  
}
function addOrder(event) {
    event.preventDefault()

    const foodId = foodsSelect.value.trim()
    const count = foodsCount.value.trim()
    const userId =  clientId.textContent.trim()

    let order = orders.find(el => el.foodId == foodId && el.userId == userId)

   if (
     !count ||
     +count > 10 ||
     !userId
   ) return

   if (order) {
      order.count = +count + order.count
   }else{
    order = {foodId, userId,count,}
    orders.push(order)
   }



   return renderOrders(userId)
}

foodsForm.addEventListener('submit', addOrder)

userAdd.addEventListener('submit', (event) => {
        event.preventDefault()

        const username = usernameInput.value.trim()
        const contact = telephoneInput.value.trim()

        if (!username || username.length > 30) {
            return alert("Invalit username")
        }

        if (!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)) {
            return alert('invalit contact')
        }

        const newUser = {
            userId: users.length ? users [users.length - 1]. userId + 1 : 1,
            userName: username,
            contact,
        }
        users.push(newUser)
        window.localStorage.setItem('users', JSON.stringify(users))
        return renderUsers()
        
        
})

//const userId = window.localStorage.setItem('userId',user.userId)
//const username = window.localStorage.setItem('username',user.userName)
//
//username && (costomerName.textContent = user.username)
//userId && (clientId.textContent = user.userId)
renderUsers()
renderFoods()
//renderOrders(userId)