const Tile = function (n, l, u) {
    this.name = n;
    this.logo = l;
    this.url = u;
    this.found = false;
    this.counter = 0;
}
const app = new Vue({
    el: '#search',
    data: {
        needle: '',
        people: [
            new Tile('Sara Soueidan', 'images/img/avatars/SaraSoueidan.jpeg', '#'),
            new Tile('Rachel Smith', 'images/img/avatars/RachelSmith.png', '#'),
            new Tile('Peter Finlan', 'images/img/avatars/PeterFinlan.jpeg', '#'),
            new Tile('Patrick Cox', 'images/img/avatars/PatrickCox.png', '#'),
            new Tile('Tim Holman', 'images/img/avatars/TimHolman.jpeg', '#'),
            new Tile('Shaun Dona', 'images/img/avatars/ShaunDona.jpeg', '#')
        ],
        popular: [
            new Tile('Page Preloading Effect', 'images/img/thumbs/PagePreloadingEffect.png', '#'),
            new Tile('Arrow Navigation Styles', 'images/img/thumbs/ArrowNavigationStyles.png', '#'),
            new Tile('Ideas for Subtle Hover Effects', 'images/img/thumbs/HoverEffectsIdeasNew.png', '#'),
            new Tile('Halcyon Days Template', 'images/img/thumbs/FreebieHalcyonDays.png', '#'),
            new Tile('Inspiration for Article Intro Effects', 'images/img/thumbs/ArticleIntroEffects.png', '#'),
            new Tile('Draggable Dual-View Slideshow', 'images/img/thumbs/DraggableDualViewSlideshow.png', '#')
        ],
        recent: [
            new Tile('Tooltip Styles Inspiration', 'images/img/thumbs/TooltipStylesInspiration.png', '#'),
            new Tile('Animated Backgba-circle Headers', 'images/img/thumbs/AnimatedHeaderBackgrounds.png', '#'),
            new Tile('Off-Canvas Menu Effects', 'images/img/thumbs/OffCanvas.png', '#'),
            new Tile('Tab Styles Inspiration', 'images/img/thumbs/TabStyles.png', '#'),
            new Tile('Make SVGs Responsive with CSS', 'images/img/thumbs/ResponsiveSVGs.png', '#'),
            new Tile('Notification Styles Inspiration', 'images/img/thumbs/NotificationStyles.png', '#')
        ]
    },
    methods: {
        search(e) {
            e.preventDefault();
            const n = this.needle;
            if (!this.needle) return;

            this.items.forEach((item, i, arr) => {
                item.forEach((tile) => {
                    tile.found = (tile.name.toLowerCase().indexOf(n.toLowerCase()) !== -1);
                    if (tile.found) ++tile.counter;
                })
            });
        },
        pseudoModel(e) {
            this.needle = e.target.value;
        }
    },
    computed: {
        items() {
            return [this.people, this.popular, this.recent]
        }
    },
    components: {
        tile: {
            props: ['title', 'image', 'link', 'found', 'counter'],
            computed: {
                itemClass() {
                    let itemClass = this.found ? 'active' : '';
                    console.log(itemClass);
                    console.log(this.counter);
                    if(this.counter >= 5){
                        itemClass += ' favorite'
                    }
                    return itemClass;
                }
            },
            template: `<li :class="itemClass"><a :href="link"><img :src = "image" class = "avatars" :alt='title'><span>{{title}}</span></a></li>`
        }
    }
})