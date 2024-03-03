<template>
    <div id="logo-large" class="img-fluid">
        <img src="../assets/img/pocket-planner-high-resolution-logo-transparent.png" />
    </div>
    <div id="hero-container">
        <img src="../assets/img/simon-maage-tXiMrX3Gc-g-unsplash.jpg" class="img-fluid" alt="hero" id="hero-img1" />
        <img src="../assets/img/hero-cropped.jpg" class="img-fluid" alt="hero" id="hero-img2" />
        <div class="top-left">Planning life should be easy...</div>
        <div class="top-left2">So you have time to live your life</div>
    </div>


</template>

<style>
#logo-large {
    margin-top: 40px;
    position: relative;
    text-align: center;
    color: black;
    font-size: x-large;
}

#logo-large img {
    margin: 0 auto;
    height: auto;
    width: 75%;
    overflow-x: hidden;
}

#hero-container {
    margin-top: 40px;
    position: relative;
    text-align: center;
    color: black;
    font-size: x-large;
}

#hero-container img {
    margin: 0 auto;
    height: auto;
    width: 100%;
    overflow-x: hidden;
}

#hero-container::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(243, 130, 38, 0.288);
}

.top-left {
    position: absolute;
    top: 10%;
    left: 8%;
    transform: translate(-10%, -50%);
}

.top-left2 {
    position: absolute;
    top: 18%;
    left: 20%;
    transform: translate(-10%, -50%);
}

#hero-img1,
#hero-img2 {
    display: none;
}

/* Show hero image 1 for screen width up to 1250px */
@media (max-width: 800px) {
    #hero-img1 {
        display: block;
    }
}

/* Show hero image 2 for screen width above 1250px */
@media (min-width: 801px) {
    #hero-img2 {
        display: block;
    }
}

@media (max-width: 1300px) {
    #hero-container {
        font-size: larger;
    }
}

@media (max-width: 1000px) {
    #hero-container {
        font-size: medium;
    }
}

@media (max-width: 800px) {
.top-left {
        position: absolute;
        top: 8%;
        left: 8%;
        transform: translate(-10%, -50%);
    }

    .top-left2 {
        position: absolute;
        top: 13%;
        left: 20%;
        transform: translate(-10%, -50%);
    }
}

@media (max-width: 700px) {
    #hero-container {
        font-size: smaller;
    }
}

@media (max-width: 550px) {
    #hero-container {
        font-size: x-small
    }
}

@media (max-width: 450px) {
    #hero-container {
        font-size: xx-small;
    }
}
</style>
