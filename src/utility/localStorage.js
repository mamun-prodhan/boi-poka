const getFromLocalStorage = (dataKey) =>{
    const localStorageData = localStorage.getItem(`${dataKey}`);
    return localStorageData? JSON.parse(localStorageData) : [];

}

const setToLocalStorage = (dataKey, id)=>{
    const existingData = getFromLocalStorage(`${dataKey}`);
    
    if(existingData.includes(id)){
        alert('Already Exists');
        return;
    }
    existingData.push(id);
    localStorage.setItem(dataKey, JSON.stringify(existingData))
    alert('Added Successfully');
}

export {getFromLocalStorage, setToLocalStorage};