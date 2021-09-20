// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
var app = new Vue(
    {
        el:"#root",
        data:{
            images: [
                "https://www.lavoripubblici.it/img/portofino.jpg",
                "https://www.miglioripuzzle.it/wp-content/uploads/2020/04/Puzzle-Paesaggi-Liguria.jpeg",
                "http://www.enricopieragostini.it/images/gallery/6/a50bfa.jpg"
            ],
            imagesIndex:0
        },
        methods:{
           nextImage:function(){
            this.imagesIndex++;
            if(this.imagesIndex >= this.images.length){
                this.imagesIndex = 0;
            }
           },
           prevImage:function(){
            this.imagesIndex--;
            if(this.imagesIndex == -1){
                this.imagesIndex = this.images.length - 1;
            }
           }
        }
    });

    