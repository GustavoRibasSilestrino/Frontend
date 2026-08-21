<script setup lang="ts">
import { computed } from 'vue'
import type { ItemCarrinho } from '../data/produtos'
import { formatarPreco } from '../utils/formatarPreco'

const props = defineProps<{ itens: ItemCarrinho[] }>()
const emit = defineEmits<{ (evento: 'remover', idProduto: number): void }>()

// computed: valor derivado e reativo
const total = computed(() =>
  props.itens.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0,
  ),
)
</script>

<template>
  <section class="carrinho">
    <h3>🧾 Seu pedido</h3>

    <p v-if="itens.length === 0" class="carrinho-vazio">
      Nenhum item adicionado ainda. Escolha algo saboroso no cardápio!
    </p>

    <template v-else>
      <ul class="carrinho-lista">
        <li v-for="item in itens" :key="item.produto.id" class="carrinho-item">
          <span>
            {{ item.quantidade }}x {{ item.produto.emoji }}
            {{ item.produto.nome }}
          </span>
          <span>
            {{ formatarPreco(item.produto.preco * item.quantidade) }}
            <button
              class="btn-remover"
              :aria-label="`Remover ${item.produto.nome}`"
              @click="emit('remover', item.produto.id)"
            >
              −
            </button>
          </span>
        </li>
      </ul>
      <div class="carrinho-total">
        <span>Total</span>
        <span>{{ formatarPreco(total) }}</span>
      </div>
    </template>
  </section>
</template>
