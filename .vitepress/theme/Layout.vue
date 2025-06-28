<template>
  <Layout />
</template>

<script setup>
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";

// biome-ignore lint/correctness/noUnusedVariables: "Layout" is used in the template
const { Layout } = DefaultTheme;
const route = useRoute();

const applyExternalLinkBehavior = () => {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const isExternal = !link.href.includes(location.hostname);
    if (isExternal && !link.dataset.popupApplied) {
      link.dataset.popupApplied = "true";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(
          link.href,
          "_blank",
          "width=800,height=600,noopener,noreferrer",
        );
      });
    }
  });
};

onMounted(() => {
  applyExternalLinkBehavior();
});

watch(
  () => route.path,
  () => {
    nextTick(() => {
      applyExternalLinkBehavior();
    });
  },
);
</script>
