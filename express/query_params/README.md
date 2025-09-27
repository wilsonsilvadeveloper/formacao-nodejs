# Query Params no Express.js

## O que são Query Params?

Query Params são parâmetros que não precisam ser definidos diretamente nas rotas (o que torna o parâmetro mais dinâmico). Ao invés disso, o usuário define "manualmente" na URL e o backend fica responsável por tratar esse parâmetro corretamente.

## Sintaxe na URL

Os query params são adicionados após o `?` na URL e separados por `&`:

```
http://localhost:3000/usuarios?nome=João&idade=25&cidade=São Paulo
```

## Exemplos Práticos

### 1. URL com Query Params
```
GET /produtos?categoria=eletronicos&preco_max=500&ordenar=preco
```

### 2. Acessando Query Params no Express

```javascript
const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
    // Acessando os query params
    const categoria = req.query.categoria;
    const precoMax = req.query.preco_max;
    const ordenar = req.query.ordenar;
    
    console.log('Categoria:', categoria);
    console.log('Preço máximo:', precoMax);
    console.log('Ordenar por:', ordenar);
    
    res.json({
        filtros: {
            categoria: categoria || 'todas',
            precoMax: precoMax || 'sem limite',
            ordenar: ordenar || 'padrão'
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

### 3. Exemplo com Múltiplos Valores
```javascript
// URL: /tags?categoria=tech&categoria=javascript&categoria=nodejs
app.get('/tags', (req, res) => {
    const categorias = req.query.categoria;
    
    // Se houver múltiplos valores, req.query.categoria será um array
    console.log(categorias); // ['tech', 'javascript', 'nodejs']
    
    res.json({ categorias });
});
```

## Casos de Uso Comuns

### 1. **Filtros de Busca**
```
/produtos?categoria=livros&autor=machado
```

### 2. **Paginação**
```
/usuarios?page=2&limit=10
```

### 3. **Ordenação**
```
/posts?sort=data&order=desc
```

### 4. **Campos Específicos**
```
/usuario/123?fields=nome,email,telefone
```

## Tratamento e Validação

```javascript
app.get('/api/produtos', (req, res) => {
    // Valores padrão
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const categoria = req.query.categoria || '';
    
    // Validação
    if (page < 1) {
        return res.status(400).json({ 
            erro: 'Página deve ser maior que 0' 
        });
    }
    
    if (limit > 100) {
        return res.status(400).json({ 
            erro: 'Limite máximo de 100 itens por página' 
        });
    }
    
    // Simular busca com filtros
    const produtos = buscarProdutos({ categoria, page, limit });
    
    res.json({
        produtos,
        paginacao: {
            paginaAtual: page,
            itensPorPagina: limit,
            total: produtos.length
        }
    });
});
```

## Dicas Importantes

- ✅ Query params são sempre **strings** - use `parseInt()` ou `parseFloat()` quando necessário
- ✅ Valores não informados retornam `undefined`
- ✅ Use valores padrão com o operador `||`
- ✅ Valide sempre os parâmetros recebidos
- ✅ Para arrays, use o mesmo nome de parâmetro múltiplas vezes

## Links Úteis

- [Documentação oficial do Express - req.query](https://expressjs.com/en/api.html#req.query)
- [MDN - URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)