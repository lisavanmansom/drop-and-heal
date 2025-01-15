<div class="carousel">
    <img src="/gradients/Meshgrad-blue.png" alt="Blue gradient" class="gradient gradient-1" />
    <img src="/gradients/Meshgrad-red.png" alt="Red gradient" class="gradient gradient-2" />
    <img src="/gradients/Meshgrad-green.png" alt="Green gradient" class="gradient gradient-3" />
    <img src="/gradients/Meshgrad-pink.png" alt="Pink gradient" class="gradient gradient-4" />
</div>
  
  <style>
    .carousel {
        position: relative; 
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
  
    .gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0.9);
        animation: fade 20s infinite;
        opacity: 0;
    }
    
    .gradient-1 { animation-delay: 0s; }
    .gradient-2 { animation-delay: 5s; }
    .gradient-3 { animation-delay: 10s; }
    .gradient-4 { animation-delay: 15s; }
  
    @keyframes fade {
        0%, 10% {
        opacity: 0;
        }
        10%, 20% {
        opacity: 1;
        }
        30%, 100% {
        opacity: 0;
        }
  }
  </style>
  