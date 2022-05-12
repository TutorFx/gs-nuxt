<template>
  <div class="main-matrix third">
    <div class="matrix">
      <canvas id="myCanvas"></canvas>
    </div>
    <div class="resume">
      <v-container>
        <v-row>
          <v-col class="glass" cols="12" lg="5" md="5">
            <div style="font-size: 30px" class="mb-6">
              {{ $t("greet1") }}
              <span class="font-weight-bold border-bottom">Gabriel Serejo</span>
            </div>
            <div>
              {{ $t("introduce2") }}
            </div>
          </v-col>
          <v-col cols="auto"> </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var color = this.$vuetify.theme.currentTheme.primary
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Make the canvas go full screen.
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    // Characters.
    var chr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,./<>?";
    // Converting the string into an array of characters.
    chr = chr.split("");

    var font_size = 10;
    var columns = c.width/font_size; // Number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    let draw = () =>
    {
        function hex2rgb(hex) {
            var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (!validHEXInput) {
                return false;
            }
        }
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = this.$vuetify.theme.currentTheme.matrix+"16";
        ctx.fillRect(0, 0, c.width, c.height);
        
        ctx.fillStyle = color; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chr character to print
            var text = chr[Math.floor(Math.random()*chr.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            
            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 33);
  }}
</script>

<style lang="scss">
.resume {
  min-height: 400px;
  display: flex;
  align-items: center;
  .glass{
    box-shadow: 0 8px 32px 0 rgba(31, 135, 50, 0.37);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba(0, 255, 47, 0.37);
    padding: 2rem;
  }
}
.border-bottom {
  border-color: var(--v-cta-base);
  border-width: 0px;
  border-bottom-width: 3px;
  border-style: solid;
}
.main-matrix {
  overflow: hidden;

    position: relative;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
  
  .matrix {
    min-width: 920px;
    margin-bottom: 4rem;

      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: 0;
      transform: translateX(-50%) translateY(-50%);
      margin-bottom: 0;

  }
  .resume {
    position: relative;
    z-index: 0;
    height: 100%;
    pointer-events: none;
  }
}
</style>