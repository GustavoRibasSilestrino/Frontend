<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import AppCabecalho from './components/AppCabecalho.vue'
import FiltroCategorias from './components/FiltroCategorias.vue'
import ProdutoCard from './components/ProdutoCard.vue'
import CarrinhoResumo from './components/CarrinhoResumo.vue'
import AppRodape from './components/AppRodape.vue'
import { produtos, categorias, type ItemCarrinho, type Produto } from './data/produtos'

// ref: estado reativo
const categoriaAtiva = ref('Todos')
const itensCarrinho = ref<ItemCarrinho[]>([])

// computed: lista filtrada recalculada automaticamente
const produtosFiltrados = computed(() =>
  categoriaAtiva.value === 'Todos'
    ? produtos
    : produtos.filter((produto) => produto.categoria === categoriaAtiva.value),
)

const quantidadeItens = computed(() =>
  itensCarrinho.value.reduce((soma, item) => soma + item.quantidade, 0),
)

// watch: observa o estado e executa um efeito colateral
watch(quantidadeItens, (quantidade) => {
  document.title = quantidade
    ? `Café Aroma (${quantidade})`
    : 'Café Aroma · Cardápio Digital'
})

function adicionarProduto(produto: Produto) {
  const existente = itensCarrinho.value.find(
    (item) => item.produto.id === produto.id,
  )

  if (existente) {
    existente.quantidade++
  } else {
    itensCarrinho.value.push({ produto, quantidade: 1 })
  }
}

function removerProduto(idProduto: number) {
  const item = itensCarrinho.value.find((i) => i.produto.id === idProduto)
  if (!item) return

  item.quantidade--
  if (item.quantidade === 0) {
    itensCarrinho.value = itensCarrinho.value.filter(
      (i) => i.produto.id !== idProduto,
    )
  }
}
</script>

<template>
  <AppCabecalho :quantidade-itens="quantidadeItens" />

  <main class="container">
    <section class="hero">
      <h2>Sabor que combina com o seu dia</h2>
      <p>
        Cafés especiais, salgados quentinhos e doces artesanais. Monte seu
        pedido escolhendo os itens abaixo.
      </p>
    </section>

    <FiltroCategorias
      :categorias="categorias"
      :categoria-ativa="categoriaAtiva"
      @selecionar="categoriaAtiva = $event"
    />

    <CarrinhoResumo :itens="itensCarrinho" @remover="removerProduto" />

    <div class="lista-produtos">
      <ProdutoCard
        v-for="produto in produtosFiltrados"
        :key="produto.id"
        :produto="produto"
        @adicionar="adicionarProduto"
      />
    </div>
  </main>

  <AppRodape />
</template>
