


const displayFoods = (foods) => {
    const foodsContainer = document.getElementById('items-container')

    foods.forEach(item => {

        const {idMeal, strMealThumb, strMeal,strInstructions} = item
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="flex flex-col lg:flex-row border rounded-lg  p-4 md:p-3 items-center ">
                <div class="images rounded-lg ">
                    <img src="${strMealThumb}" alt="" class=" w-96 rounded-lg">
                </div>
                <div class="lg:ml-4 mt-7 lg:mt-0">
                    <h2 class="font-bold text-2xl text-[#010d78] mb-4">${strMeal}</h2>
                    <p class="mb-4">${strInstructions.slice(0,98)} ...</p>
                    <a onclick="displayDetails('${idMeal}')" class=" btn bg-yellow-400 hover:bg-[#010d78] hover:text-white text-black  ">View Details </a>
                </div>
            </div>
        
        `
        foodsContainer.appendChild(div)
    });
}

// food Load From API

const loadFoods = async() => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const data = await response.json()
    displayFoods(data.meals)
}

loadFoods()

// LOad Food Details
const displayDetails = async(idMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const data = await response.json()
    console.log(data.meals[0])
    const modalContainer = document.getElementById('modal-container')

    const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube } = data.meals[0]

    
    modalContainer.innerHTML = `
        <dialog id="my_modal_5" class="modal modal-middle ">
            <div class="modal-box">
                <h2 class="text-xl font-bold text-[#010d78] mb-2 mt-4">Title: ${strMeal} </h2>
                <figure>
                    <img src="${strMealThumb}" alt="cat" class="w-full rounded-lg" />
                </figure>

                
                <h2 class="text-lg font-semibold text-[#010d78]  my-2"> Details Informations </h2>

                <div class="  mb-3">
                    <div class="mb-4">
                        <p class="text-sm md:text-md font-semibold text-gray-500 mb-3"><i class="fa-solid fa-table-cells-large "></i> <span class="text-[#010d78] mr-2" > Category: </span> ${strCategory ?`${strCategory}`: 'Not Available'}</p>

                        <p class="text-sm md:text-md font-semibold text-gray-500 mb-3"><i class="fa-solid fa-mercury "></i> <span class="text-[#010d78] mr-2" > Area: </span>  ${strArea ?`${strArea}`: 'Not Available'}</p>

                        <p class="text-sm md:text-md font-semibold text-gray-500"><i class="fa-solid fa-mercury "></i>  <span class="text-[#010d78] mr-2" > Instructions: </span>  ${strInstructions ?`${strInstructions.slice(0,400)}`: 'Not Available' }</p>
                    </div>

                    
                    <div class="">
                        <p class="text-sm md:text-md font-semibold text-gray-500"> <i class="fa-regular fa-calendar "></i> <span class="text-[#010d78] mr-2" > YouTube: </span>  ${strYoutube ? `${strYoutube}`: 'Not Available'}</p>
                    </div>
                </div>

                <hr>

                <div class="modal-action">
                    <form method="dialog" class="mx-auto">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class=" btn w-64 sm:w-96  bg-[#010d78] text-white hover:text-[#010d78] hover:border-[#010d78]">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>

    `
        

    my_modal_5.showModal();
    

}


// loadDetails(idMeal)


// Details
// const displayDetails = () => {

// }



