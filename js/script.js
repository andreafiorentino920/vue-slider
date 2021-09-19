// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
var app = new Vue(
    {
        el:"#root",
        data:{
            images: [
                "https://www.lavoripubblici.it/img/portofino.jpg",
                "https://www.casadivita.despar.it/app/uploads/2016/02/liguria.jpg",
                "http://www.enricopieragostini.it/images/gallery/6/a50bfa.jpg"
            ],
            imagesIndex:0
        },
        methods:{
           nextImage:function(){
            this.imagesIndex++;
            if(this.imagesIndex >= this.images.lenght){
                this.imagesIndex = 0;
            }
           },
           prevImage:function(){
            this.imagesIndex--;
            if(this.imagesIndex == -1){
                this.imagesIndex = this.images.lenght - 1;
            }
           }
        }
    });

    