<template>
  <div id="app">

    <!-- Header -->
    <header id="js-header" class="u-header u-header--static">
      <div class="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
        <nav class="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
          <div class="container">
            <!-- Responsive Toggle Button -->
            <button class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-minus-3 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
              <span class="hamburger hamburger--slider">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
              </span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->

            <!-- Logo -->
            <router-link to="/todo" class="navbar-brand d-flex">
              <div class="logo">Tidy</div>
            </router-link>
             
            <!-- End Logo -->

            <!-- Navigation -->
            <div class="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg" id="navBar">
              <ul class="navbar-nav text-uppercase g-pos-rel g-font-weight-600 ml-auto">
                <!-- Intro -->
                <li class="nav-item  g-mx-10--lg g-mx-15--xl">
                  <router-link to="/users" class="nav-link g-py-7 g-px-0">House</router-link>
                </li>
                <!-- End Intro -->

          
                <!-- Features -->
                <li class="nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl" data-animation-in="fadeIn" data-animation-out="fadeOut">
                  <a id="nav-link--features" class="nav-link g-py-7 g-px-0" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--features">Suggestions</a>

                  <ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling" id="nav-submenu--features" aria-labelledby="nav-link--features">
                    <!-- Features - Headers -->
                    <li class="dropdown-item ">
                      <router-link class="nav-link" to="/chores/new">Suggest Chore</router-link>
                    </li>
                    <!-- End Features - Headers -->

                    <!-- Features - Promo blocks -->
                    <li class="dropdown-item ">
                      <router-link class="nav-link" to="/suggestions">Review</router-link>
                    </li>
                    <!-- End Features - Promo blocks -->
                  </ul>
                </li>
                <!-- End Features -->
                
                <li class="nav-item  g-mx-10--lg g-mx-15--xl">
                  <router-link to="/user_chores/new" class="nav-link g-py-7 g-px-0">Draft</router-link>
                </li>

              </ul>
            </div>


            <!-- End Navigation -->

            <div class="d-inline-block g-hidden-md-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg">
              <router-link class="btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15" to="/logout">Logout</router-link>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- End Header -->

    <router-view/>


     <!-- Footer -->
     <div id="contacts-section" class="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-60">
       <div class="container">
         <div class="row">
           <!-- Footer Content -->
           <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
             <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
               <h2 class="u-heading-v2__title h6 text-uppercase mb-0">About Us</h2>
             </div>

             <p>About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales.</p>
           </div>
           <!-- End Footer Content -->

           <!-- Footer Content -->
           <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
             <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
               <h2 class="u-heading-v2__title h6 text-uppercase mb-0">Latest Posts</h2>
             </div>

             <article>
               <h3 class="h6 g-mb-2">
             <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Incredible template</a>
           </h3>
               <div class="small g-color-white-opacity-0_6">May 8, 2017</div>
             </article>

             <hr class="g-brd-white-opacity-0_1 g-my-10">

             <article>
               <h3 class="h6 g-mb-2">
             <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">New features</a>
           </h3>
               <div class="small g-color-white-opacity-0_6">June 23, 2017</div>
             </article>

             <hr class="g-brd-white-opacity-0_1 g-my-10">

             <article>
               <h3 class="h6 g-mb-2">
             <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">New terms and conditions</a>
           </h3>
               <div class="small g-color-white-opacity-0_6">September 15, 2017</div>
             </article>
           </div>
           <!-- End Footer Content -->

           <!-- Footer Content -->
           <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
             <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
               <h2 class="u-heading-v2__title h6 text-uppercase mb-0">Useful Links</h2>
             </div>

             <nav class="text-uppercase1">
               <ul class="list-unstyled g-mt-minus-10 mb-0">
                 <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                   <h4 class="h6 g-pr-20 mb-0">
                 <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">About Us</a>
                 <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
               </h4>
                 </li>
                 <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                   <h4 class="h6 g-pr-20 mb-0">
                 <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Portfolio</a>
                 <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
               </h4>
                 </li>
                 <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                   <h4 class="h6 g-pr-20 mb-0">
                 <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Our Services</a>
                 <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
               </h4>
                 </li>
                 <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                   <h4 class="h6 g-pr-20 mb-0">
                 <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Latest Jobs</a>
                 <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
               </h4>
                 </li>
                 <li class="g-pos-rel g-py-10">
                   <h4 class="h6 g-pr-20 mb-0">
                 <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Contact Us</a>
                 <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
               </h4>
                 </li>
               </ul>
             </nav>
           </div>
           <!-- End Footer Content -->

           <!-- Footer Content -->
           <div class="col-lg-3 col-md-6">
             <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
               <h2 class="u-heading-v2__title h6 text-uppercase mb-0">Our Contacts</h2>
             </div>

             <address class="g-bg-no-repeat g-font-size-12 mb-0" style="background-image: url(/assets/img/maps/map2.png);">
           <!-- Location -->
           <div class="d-flex g-mb-20">
             <div class="g-mr-10">
               <span class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                 <i class="fa fa-map-marker"></i>
               </span>
             </div>
             <p class="mb-0">795 Folsom Ave, Suite 600, <br> San Francisco, CA 94107 795</p>
           </div>
           <!-- End Location -->

           <!-- Phone -->
           <div class="d-flex g-mb-20">
             <div class="g-mr-10">
               <span class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                 <i class="fa fa-phone"></i>
               </span>
             </div>
             <p class="mb-0">(+123) 456 7890 <br> (+123) 456 7891</p>
           </div>
           <!-- End Phone -->

           <!-- Email and Website -->
           <div class="d-flex g-mb-20">
             <div class="g-mr-10">
               <span class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                 <i class="fa fa-globe"></i>
               </span>
             </div>
             <p class="mb-0">
               <a class="g-color-white-opacity-0_8 g-color-white--hover" href="mailto:info@htmlstream.com">info@htmlstream.com</a>
               <br>
               <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">www.htmlstream.com</a>
             </p>
           </div>
           <!-- End Email and Website -->
         </address>
           </div>
           <!-- End Footer Content -->
         </div>
       </div>
     </div>
     <!-- End Footer -->

     <!-- Copyright Footer -->
     <footer class="g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20">
       <div class="container">
         <div class="row">
           <div class="col-md-8 text-center text-md-left g-mb-10 g-mb-0--md">
             <div class="d-lg-flex">
               <small class="d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md">2019 &copy; All Rights Reserved.</small>
               <ul class="u-list-inline">
                 <li class="list-inline-item">
                   <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Privacy Policy</a>
                 </li>
                 <li class="list-inline-item">
                   <span>|</span>
                 </li>
                 <li class="list-inline-item">
                   <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Terms of Use</a>
                 </li>
                 <li class="list-inline-item">
                   <span>|</span>
                 </li>
                 <li class="list-inline-item">
                   <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">License</a>
                 </li>
                 <li class="list-inline-item">
                   <span>|</span>
                 </li>
                 <li class="list-inline-item">
                   <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Support</a>
                 </li>
               </ul>
             </div>
           </div>

           <div class="col-md-4 align-self-center">
             <ul class="list-inline text-center text-md-right mb-0">
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Facebook">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-facebook"></i>
                 </a>
               </li>
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Skype">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-skype"></i>
                 </a>
               </li>
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Linkedin">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-linkedin"></i>
                 </a>
               </li>
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Pinterest">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-pinterest"></i>
                 </a>
               </li>
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Twitter">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-twitter"></i>
                 </a>
               </li>
               <li class="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title="Dribbble">
                 <a href="#" class="g-color-white-opacity-0_5 g-color-white--hover">
                   <i class="fa fa-dribbble"></i>
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </footer>
     <!-- End Copyright Footer -->

     <a class="js-go-to u-go-to-v1" href="#" data-type="fixed" data-position='{
      "bottom": 15,
      "right": 15
    }' data-offset-top="400" data-compensation="#js-header" data-show-effect="zoomIn">
       <i class="hs-icon hs-icon-arrow-top"></i>
     </a>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

div.logo {
  font-size: 250%;
}

.suggest-chore {
  background-image: url(https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  background-size: 100%;
  margin-left: auto;
  margin-right: auto;
  /*width: 50%;*/
}

#tasks {
  background-image: url(https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2853&q=80);
  background-size: contain;

}

.house-name {
  font-size: 300%;
  padding-left: 165px;
/*  color: white;
  text-shadow:
    -1px -1px 0 #A6A1A1,
    1px -1px 0 #A6A1A1,
    -1px 1px 0 #A6A1A1,
    1px 1px 0 #A6A1A1*/
}

.house-id {
  padding-left: 170px;
}

.housemate-name {
  font-size: 290%;
  /*color: white;*/
/*  text-shadow:
    -1px -1px 0 #A6A1A1,
    1px -1px 0 #A6A1A1,
    -1px 1px 0 #A6A1A1,
    1px 1px 0 #A6A1A1*/
}

.housemate-chores {
  background-color: rgba(220,220,220, .7); 
  /*color: white;*/
  /*text-shadow:
    -1px -1px 0 #73716D,
    1px -1px 0 #73716D,
    -1px 1px 0 #73716D,
    1px 1px 0 #73716D*/

}

.users-index {
  background-image: url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
  background-size: 100%;
  background-position: 50px -250px;
  padding-bottom: 500px;
}

#chore-box {
  margin-block-end: -55px;
}


</style>
