const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);
console.log('');
categoryList.forEach(item => {
    const titleList = item.querySelector("h2");
    console.log('Category:', titleList.textContent);

    const countElements = item.querySelectorAll("li");
    console.log('Elements:', countElements.length);

    console.log('');
})
