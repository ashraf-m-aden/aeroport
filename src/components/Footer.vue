<template>
  <!-- footer area start -->

  <div class="navbar-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 text-lg-left text-center">
          <ul class="nav-top-list">
            <li class="nav-top-list-item">
              <p>
                <img
                  src="../assets/img/icon/location2.png"
                  class="nav-top-list-item-img"
                  alt="img"
                />
                Aeroport d'Ambouli
              </p>
            </li>
            <li class="nav-top-list-item">
              <p>
                <img src="../assets/img/icon/phone2.png" alt="img" />
                +253 21 3000000
              </p>
            </li>
            <li class="nav-top-list-item">
              <p>
                <img src="../assets/img/icon/envelope2.png" alt="img" />
                info.contact@gmail.com
              </p>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <ul class="topbar-right text-lg-right text-center">
            <li class="topbar-right-li">
              <a class="ml-0 topbar-right-li-item" href="signup.html"
                >Register</a
              >
              <a class="topbar-right-li-item" href="signin.html">Login</a>
            </li>
            <li class="social-area">
              <a href="#" class="topbar-right-li-item"
                ><font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'facebook-f' }"
                />
              </a>
              <a href="#" class="topbar-right-li-item">
                <font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'twitter' }"
                />
              </a>
              <a href="#" class="topbar-right-li-item">
                <font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'youtube' }"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="copyright">
            © Aeroport de djibouti 2021
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="links">
            <span class="title mb-3">
              Liens utiles
            </span>
            <ul class="list-group mt-5">
              <li class="list-group-item">
                Ministere du transports
              </li>
                   <li class="list-group-item">
                Aviation civile
              </li>
                   <li class="list-group-item">
                Air Djibouti
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer area end -->
</template>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.navbar-top {
  padding: 4rem 0 0 0;
  border-top: solid 1px $color-secondary;
}
// navtop
.nav-top-list {
  display: flex;
  margin-right: auto;
  flex-wrap: wrap;
  justify-content: center;

  &-item {
    list-style: none;
    font-size: $default-font-size;
    color: $color-primary;
    &:not(last-child) {
      margin-right: 2rem;
    }
  }
}

// topbar right
.topbar-right {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  &-li {
    &-item {
      text-decoration: none;
    font-size: $default-font-size;
      color: $color-primary;

      margin-right: 1.5rem;
    }
  }
}

.copyright{
      font-size: $default-font-size;
      font-family: quick;
      text-align: center;
      color: $color-primary;
      margin-top: 7rem;
}
.links{
  margin-top: 3rem;
  .title{
    font-family: quick;
    font-size: 2rem;
    font-weight: 800;
  }
  .list-group-item{
    list-style: none;
    border: none;
    font-size: $default-font-size;
    font-family: quick;
    margin-bottom: 1rem;
    cursor: pointer;
          color: $color-primary;

    &:hover{
      font-weight: 800;
    }
  }
}
</style>
