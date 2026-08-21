import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  // Signal input: dado recebido do componente pai
  readonly quantidadeItens = input.required<number>();
}
