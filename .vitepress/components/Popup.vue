<template>
  <div ref="dom">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const dom = ref(null);

onMounted(() => {
  dom.querySelectorAll("a").forEach((link) => {
    if (!link.dataset.popupApplied) {
      link.dataset.popupApplied = "true";
      link.target = "_blank";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(
          link.href,
          "_blank",
          "width=800,height=800,noopener,noreferrer"
        );
      });
    }
  });
});
</script>
