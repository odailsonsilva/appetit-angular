export interface ListClient {
  type: string,
  clients: TodosClientes[],
}

export interface TodosClientes {
  id: number,
  nome: string,
  foto: string,
}


export const clients: ListClient[] = [
  {
    type: 'clientes',
    clients: [
      {
        id: 1,
        nome: 'Justine Marshall',
        foto: '../../../../assets/images/client-1.png',
      },
      {
        id: 2,
        nome: 'Bairam Frootan',
        foto: '../../../../assets/images/client-2.png',
      },
      {
        id: 3,
        nome: 'Tua Manuera',
        foto: '../../../../assets/images/client-3.png',
      },
      {
        id: 4,
        nome: 'Cuscuz Completo',
        foto: '../../../../assets/images/client-1.png',
      },
      {
        id: 5,
        nome: 'Cuscuz Completo',
        foto: '../../../../assets/images/client-2.png',
      },
      {
        id: 6,
        nome: 'Cuscuz Completo',
        foto: '../../../../assets/images/client-3.png',
      },
    ]
  },
]
