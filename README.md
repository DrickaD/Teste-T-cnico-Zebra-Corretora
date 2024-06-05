# Teste-Técnico -API-Zebra-Corretora
Teste Técnico - Zebra Corretora - Desenvolvimento de apliação de back end - API.

## API CONSULTA DE LOCALIDADE
### _Permite a consulta de Estados e municiops do Brasil_

### Consulta de Estados GET /states
Padrão de Resposta (STATUS 200)
```Json
[
	{
		"id": 12,
		"nome": "Hjyl"
	},
	{
		"id": 27,
		"nome": "Hshnvhz"
	},
	{
		"id": 16,
		"nome": "Hthwá"
	},
]
```
Obs: Nome dos estados estão criptografados 


### Consulta de Municípios GET /states/cities/:uf
Este endpoint permite consultar os municípios de um estado específico com base no ID do estado (`uf`).

**Parâmetros:**
- `uf` (obrigatório): O ID do estado para o qual deseja-se consultar os municípios.

Padrão de Resposta (STATUS 200)
```Json
[
	{
		"id": 1600055,
		"nome": "Zlyyh kv Uhcpv"
	},
	{
		"id": 1600105,
		"nome": "Hthwá"
	},
	{
		"id": 1600154,
		"nome": "Wlkyh Iyhujh kv Hthwhyp"
	},
]
```
Obs: nome dos municípios estão criptografados
