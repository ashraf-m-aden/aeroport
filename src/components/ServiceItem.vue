<template>
  <div class="service-grid-item">
    <div class="service-grid-item__image">
      <div class="service-grid-item__image-wrapper">
        <router-link to="/">
          <img :src="service.image" class="img-fluid" alt="service thumb" />
        </router-link>
      </div>
    </div>
    <div class="service-grid-item__content">
      <h3 class="title">
        <router-link to="/">
          {{ service.title }}
        </router-link>
      </h3>
      <p class="subtitle">{{ service.desc }}</p>
      <router-link class="see-more-link" to="/"
        >SEE MORE</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>
