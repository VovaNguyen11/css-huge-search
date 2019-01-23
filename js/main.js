(function ($) {
    $(document).ready(function () {
        const $searchBox = $('.search-box');
        const $needle = $searchBox.find('[name="needle"]');
        const hugeSearch = function (needle) {
            const $items = $('.content ul > li');
            $items.removeClass('found');
            $items.each((i, item) => {
                const $item = $(item);
                if ($item.find('span').text().toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
                    $item.addClass('found');
                    item.wasFound = (item.wasFound === undefined) ? 1 : ++item.wasFound;
                    if (item.wasFound >= 10) {
                        $item.addClass('favorite');
                    }
                }
            })
        }

        $searchBox.submit(function (e) {
            e.preventDefault();
            const needle = $needle.val();
            console.log(needle);
            if (3 <= needle.length) {
                hugeSearch(needle);
            } else {
                $needle.addClass('invalid');
                return;
            };

            $needle.keypress(function () {
                const $this = $(this);
                $this.removeClass('invalid');
            });
        });
    })
})(jQuery);