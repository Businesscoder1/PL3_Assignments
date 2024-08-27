
// Normal code for searching


// document.getElementById('searchBox').addEventListener('keyup', function() {
//     const searchTerm = this.value.toLowerCase();
//     const items = document.querySelectorAll('#itemList li'); // Use querySelectorAll to get all list items

//     items.forEach(function(item) {
//         const text = item.textContent.toLowerCase();
//         if (text.includes(searchTerm)) {
//             item.style.display = ''; // Show item if it matches the search term
            
//         } else {
//             item.style.display = 'none'; // Hide item if it doesn't match
//         }
//     });
// });




// I want the searched text of letter should be bolded like in google search

document.getElementById('searchBox').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemList li');

    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        const originalText = item.textContent;

        if (searchTerm && text.includes(searchTerm)) {
            const startIndex = text.indexOf(searchTerm);
            const endIndex = startIndex + searchTerm.length;
            
            const highlightedText = originalText.substring(0, startIndex) +
                                    '<strong>' + originalText.substring(startIndex, endIndex) + '</strong>' +
                                    originalText.substring(endIndex);

            item.innerHTML = highlightedText;
            item.style.display = ''; 
        } else {
            item.innerHTML = originalText; 
            item.style.display = searchTerm ? 'none' : ''; 
        }
    });
});
