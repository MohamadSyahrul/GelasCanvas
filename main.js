var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
var grd = ctx.createLinearGradient(35,70,50,70);
var ujg = ctx.createLinearGradient(45,70,50,70);
var kpl = ctx.createLinearGradient(35,70,50,70);


function tutup(){
// badan
    grd.addColorStop(0,"#007a99");
    grd.addColorStop(1,"#02c6f7");
        
    ctx.fillStyle = grd;
    ctx.fillRect(35, 40, 25, 40);

    // kepala
    kpl.addColorStop(0,"blue");
    kpl.addColorStop(1,"#02c6f7");
    
    
    ctx.fillStyle = kpl;
    ctx.translate(0,1);
    ctx.fillRect(35, 34, 25, 5);


// ini paling ujung
    ujg.addColorStop(0,"#003f4f");
    ujg.addColorStop(1,"#007a99");
    
    
    ctx.fillStyle = ujg;
    ctx.translate(2,1);
    ctx.fillRect(45, 28, 5, 5);

};
tutup();


function buka(){
    // badan
        grd.addColorStop(0,"#007a99");
        grd.addColorStop(1,"#02c6f7");
            
        ctx.fillStyle = grd;
        ctx.translate(70,-2);
        ctx.fillRect(35, 40, 25, 40);
    
        // kepala
        kpl.addColorStop(0,"blue");
        kpl.addColorStop(1,"#02c6f7");
        
        
        ctx.fillStyle = kpl;
        ctx.translate(57,-31);
        ctx.rotate(60 * Math.PI / 195);
        ctx.fillRect(35, 34, 25, 5);
    
        // // ini paling ujung
        ujg.addColorStop(0,"#003f4f");
        ujg.addColorStop(1,"#007a99");
        
        
        ctx.fillStyle = ujg;
        ctx.translate(2,1);
        ctx.fillRect(45, 28, 5, 5);
    
    };
buka();


function penuh(){
    // badan
        grd.addColorStop(0,"#007a99");
        grd.addColorStop(1,"#02c6f7");
            
        ctx.fillStyle = grd;
        ctx.translate(40,-6);
        ctx.rotate(-130 * Math.PI /425);
        ctx.fillRect(35, 40, 25, 40);
    
        // kepala
        kpl.addColorStop(0,"blue");
        kpl.addColorStop(1,"#02c6f7");
        
        
        ctx.fillStyle = kpl;
        ctx.translate(94,-20);
        ctx.rotate(97 * Math.PI / 195);
        ctx.fillRect(35, 34, 25, 5);
    
    // // ini paling ujung
        ujg.addColorStop(0,"#003f4f");
        ujg.addColorStop(1,"#007a99");
        
        
        ctx.fillStyle = ujg;
        ctx.translate(2,1);
        ctx.fillRect(45, 28, 5, 5);
    
    };
penuh();


// function penutup(){
//     ctx.translate(90,83);
//     ctx.rotate(90*Math.PI/180);
//     ctx.strokeRect(35, 34, 25, 5);

//     ctx.translate(74,-11);
//     ctx.rotate(90*Math.PI/180);
//     ctx.strokeRect(45, 34, 25, 5);

// };
// penutup();