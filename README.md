# InchurchCoreWeb

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 20.0.2.

## Development server

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Angular CLI](https://angular.io/cli) (versão 20)
- [Git](https://git-scm.com/)

### Instalação do Angular CLI (se ainda não tiver)

```bash
npm install -g @angular/cli
```

### Instalação e execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/KaioJesus/inchurch-core-web.git
   ```

2. **Entre no diretório do projeto**
   ```bash
   cd inchurch-core-web
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   npm start ou ng serve
   ```

5. **Acesse a aplicação**
   A aplicação estará rodando em: `http://localhost:4200`

## Fazendo o login na aplicação

![image](https://github.com/user-attachments/assets/c6f8aba8-b5a3-46c5-a3bd-89671fbf76fb)
Utilize um dos dados mockados listados:

```
   const USERS_LIST = [
    {
        name: 'Kaio Jesus',
        email: 'kaiojesus@gmail.com',
        username: 'kaio',
        password: '123456789',
    },
    {
        name: 'Kevin Jesus',
        email: 'kevinjesus@gmail.com',
        username: 'kevin',
        password: '123456789',
    },
    {
        name: 'Kauã Jesus',
        email: 'kauajesus@gmail.com',
        username: 'Kaua',
        password: '123456789',
    },
]
```

## Páginas

As páginas em `Eventos` e `Planos de leitura` foram construídas, com visualização em cards e em tabela.

![image](https://github.com/user-attachments/assets/1aa2a9ac-08a7-4c32-97c4-b3549822439a)

![image](https://github.com/user-attachments/assets/bf675120-82ee-4fc2-8dfa-98ec37596755)

![image](https://github.com/user-attachments/assets/6f7c76a2-5734-457f-a254-b777ca5a0fbe)

![image](https://github.com/user-attachments/assets/08e832ae-b7b0-498b-97d9-9189ed70f94d)

![image](https://github.com/user-attachments/assets/7713b9d9-3197-4fad-84df-fff4be33f997)



## 📝 Scripts disponíveis

- `npm start` - Executa a aplicação em modo de desenvolvimento
- `ng serve` - Executa o servidor de desenvolvimento (alternativa)
- `ng build` - Gera a build de produção
- `ng test` - Executa os testes unitários via Karma

