
// ------Get Element By Id-------
const getElementById = (id) => {
    return document.getElementById(id);
}

// ---------Create Element for every phone-----
const createElement = (element) => {
    const phoneCard = document.createElement('div');
    phoneCard.innerHTML = `
    
        <div class="card w-96 bg-base-100 shadow-xl py-3">
            <figure><img src="${element.image}" alt="Shoes" />
            </figure>
            <div class="card-body text-center">
                <h2 class="text-2xl font-semibold">${element.phone_name}</h2>
                <p>${element.slug}</p>
                <div>
                    <button class="btn bg-[#0D6EFD] text-white text-xl border-none outline-none">Show
                        Details</button>
                </div>
            </div>
        </div>
    `;
    getElementById('phone-container').appendChild(phoneCard);

}

// ---------Getting data in API-----
// Also use this fetch function--------------------------
/* fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(resJson => {
            const allPhones = resJson.data;
            allPhones.forEach(element => {
                console.log(element);
            });
    })
 */
// ---------------------------------

const getDataByAPI = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const resJson = await res.json()
    const allPhons = resJson.data;
    allPhons.forEach(element => {
        createElement(element)
    });

}

getDataByAPI()