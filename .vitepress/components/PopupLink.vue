<template>
  <a
    :href="href"
    @click.prevent="openPopup"
    :rel="rel"
    :class="className"
    :style="style"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  href: string;
  width?: number;
  height?: number;
  rel?: string;
  className?: string;
  style?: string;
}>();

// biome-ignore lint/correctness/noUnusedVariables: "rel" is used in the template
const openPopup = () => {
  const w = props.width ?? 800;
  const h = props.height ?? 600;

  // 表示位置：画面右端に寄せて表示
  const left = window.screenX + window.innerWidth - w;
  const top = window.screenY + (window.innerHeight - h) / 2;

  window.open(
    props.href,
    "_blank",
    `width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`,
  );
};
</script>
