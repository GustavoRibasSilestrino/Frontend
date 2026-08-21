<script setup lang="ts">
// Componente de apresentação: recebe a quantidade de itens via props
defineProps<{ quantidadeItens: number }>()
</script>

<template>
  <header class="cabecalho">
    <div class="container">
      <div class="logo">
        <span>☕</span>
        <div>
          Café Aroma
          <small>Cardápio Digital · Vue</small>
        </div>
      </div>
      <div class="badge-carrinho">
        🛒 {{ quantidadeItens }} {{ quantidadeItens === 1 ? 'item' : 'itens' }}
      </div>
    </div>
  </header>
</template>
