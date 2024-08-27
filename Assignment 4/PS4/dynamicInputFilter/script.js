$(document).ready(function() {
    $('#searchBox').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        const $items = $('#itemList li');

        $items.each(function() {
            const $item = $(this);
            const text = $item.text().toLowerCase();

            if (searchTerm && text.includes(searchTerm)) {
                const startIndex = text.indexOf(searchTerm);
                const endIndex = startIndex + searchTerm.length;
                const originalText = $item.text();

                const highlightedText = originalText.substring(0, startIndex) +
                    '<strong>' + originalText.substring(startIndex, endIndex) + '</strong>' +
                    originalText.substring(endIndex);

                $item.html(highlightedText);
                $item.show(); // Show matching item
            } else {
                $item.html($item.text()); // Reset the item content
                $item.toggle(searchTerm === ''); // Hide non-matching items
            }
        });
    });
});
