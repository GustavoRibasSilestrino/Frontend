<script setup lang="ts">
// Recebe as categorias por props e emite um evento para o componente pai
defineProps<{
  categorias: string[]
  categoriaAtiva: string
}>()

const emit = defineEmits<{ (evento: 'selecionar', categoria: string): void }>()
</script>

<template>
  <div class="filtros">
    <button
      v-for="categoria in categorias"
      :key="categoria"
      class="filtro-btn"
      :class="{ ativo: categoria === categoriaAtiva }"
      @click="emit('selecionar', categoria)"
    >
      {{ categoria }}
    </button>
  </div>
</template>
