var app = new Vue(
    {
        el: '#root',
        data: {
            indice_immagine: 0,
            immagini: [
                "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
                "https://profoundponders.com/wp-content/uploads/2020/07/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
                "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=pexels-cindy-gustafson-658687.jpg&fm=jpg",
                "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
            ]
        },
        methods: {
            next_image() {
                this.indice_immagine += 1;
                if(this.indice_immagine > this.immagini.length - 1) {
                    this.indice_immagine = 0;
                }
            },
            prev_image() {
                this.indice_immagine -= 1;
                if(this.indice_immagine < 0) {
                    this.indice_immagine = this.immagini.length - 1;
                }
            }
        }
    }
);
