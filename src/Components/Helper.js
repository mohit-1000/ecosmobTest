
// --------- Halper  user Action 

// SET DATA IN LOCAL STORAGE 
export const StoreLocalstorage = async (key, item) => {

    const data = await window.localStorage.setItem(key, JSON.stringify(item))
    return data
}


// GET DATA IN LOCAL STORAGE

export const GetDataLocalstorage = async (key) => {

    const data = await window.localStorage.getItem(key)
    return JSON.parse(data)
}

// CREAT LOCAL STORAGE

export const ClearStorage = async (key) => {

    const data = await window.localStorage.clear()
    return data
}
