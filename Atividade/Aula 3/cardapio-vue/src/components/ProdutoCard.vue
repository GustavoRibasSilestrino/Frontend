<script setup lang="ts">
import type { Produto } from '../data/produtos'
import { formatarPreco } from '../utils/formatarPreco'

// Card reutilizável de produto
defineProps<{ produto: Produto }>()

const emit = defineEmits<{ (evento: 'adicionar', produto: Produto): void }>()
</script>

<template>
  <article class="card">
    <div class="card-emoji">{{ produto.emoji }}</div>
    <span class="tag-categoria">{{ produto.categoria }}</span>
    <h3>{{ produto.nome }}</h3>
    <p class="card-descricao">{{ produto.descricao }}</p>
    <div class="card-rodape">
      <span class="preco">{{ formatarPreco(produto.preco) }}</span>
      <button class="btn-adicionar" @click="emit('adicionar', produto)">
        Adicionar
      </button>
    </div>
  </article>
</template>
