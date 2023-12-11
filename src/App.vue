<template>
  <nav-bar></nav-bar>
  <about></about>
  <bento-grid title="Showcase">
    <bento-item>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-item>
    <bento-item>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-item>
    <bento-stack>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-stack>
    <bento-double>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-double>
    <bento-item>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-item>
    <bento-double>
      <content-layout>
        <h3 class="heading">Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam consectetur dolorum, eum expedita harum laborum magnam magni maxime nisi pariatur, placeat quae quaerat quos rem sit ullam vitae!</p>
      </content-layout>
    </bento-double>
  </bento-grid>
</template>
<script setup>
import NavBar from "@/components/nav/nav-bar.vue";
import About from "@/components/about.vue";
import BentoGrid from "@/components/bento/bento-grid.vue";
import BentoItem from "@/components/bento/bento-item.vue";
import BentoDouble from "@/components/bento/bento-double.vue";
import BentoStack from "@/components/bento/bento-stack.vue";
import ContentLayout from "@/components/bento/layouts/content-layout.vue";
</script>