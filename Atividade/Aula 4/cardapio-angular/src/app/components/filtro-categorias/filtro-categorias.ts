import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filtro-categorias',
  templateUrl: './filtro-categorias.html',
  styleUrl: './filtro-categorias.css',
})
export class FiltroCategorias {
  readonly categorias = input.required<string[]>();
  readonly categoriaAtiva = input.required<string>();

  // Output: evento emitido para o componente pai
  readonly selecionar = output<string>();
}
