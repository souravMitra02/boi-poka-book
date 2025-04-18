const getStoreBook = () => {
    const storeBook = localStorage.getItem('readList');
    if (storeBook) {
        const storeBookData = JSON.parse(storeBook);
        return storeBookData;
    }
    else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storeBookData = getStoreBook();
    if (storeBookData.includes(id)) {
      alert('This item allready exist')  
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('readList', data)
        console.log(storeBookData);
    }

}
export { addToStoreDB,getStoreBook};