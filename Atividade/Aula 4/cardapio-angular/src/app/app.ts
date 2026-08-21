import { Component, computed, effect, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { FiltroCategorias } from './components/filtro-categorias/filtro-categorias';
import { ProdutoCard } from './components/produto-card/produto-card';
import { CarrinhoResumo } from './components/carrinho-resumo/carrinho-resumo';
import { Rodape } from './components/rodape/rodape';
import { CATEGORIAS, ItemCarrinho, PRODUTOS, Produto } from './data/produtos';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, FiltroCategorias, ProdutoCard, CarrinhoResumo, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly categorias = CATEGORIAS;

  // signal: estado reativo do componente
  protected readonly categoriaAtiva = signal('Todos');
  protected readonly itensCarrinho = signal<ItemCarrinho[]>([]);

  // computed: lista filtrada recalculada automaticamente
  protected readonly produtosFiltrados = computed(() =>
    this.categoriaAtiva() === 'Todos'
      ? PRODUTOS
      : PRODUTOS.filter((produto) => produto.categoria === this.categoriaAtiva()),
  );

  protected readonly quantidadeItens = computed(() =>
    this.itensCarrinho().reduce((soma, item) => soma + item.quantidade, 0),
  );

  constructor() {
    // effect: efeito colateral disparado quando o signal muda
    effect(() => {
      const quantidade = this.quantidadeItens();
      document.title = quantidade
        ? `Café Aroma (${quantidade})`
        : 'Café Aroma · Cardápio Digital';
    });
  }

  protected selecionarCategoria(categoria: string): void {
    this.categoriaAtiva.set(categoria);
  }

  protected adicionarProduto(produto: Produto): void {
    this.itensCarrinho.update((itens) => {
      const existente = itens.find((item) => item.produto.id === produto.id);

      if (existente) {
        return itens.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }

      return [...itens, { produto, quantidade: 1 }];
    });
  }

  protected removerProduto(idProduto: number): void {
    this.itensCarrinho.update((itens) =>
      itens
        .map((item) =>
          item.produto.id === idProduto
            ? { ...item, quantidade: item.quantidade - 1 }
            : item,
        )
        .filter((item) => item.quantidade > 0),
    );
  }
}
