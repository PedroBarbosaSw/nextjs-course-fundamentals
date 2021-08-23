import Layout from '../components/Layout'

export default function Integracao() {

   const [codigo, setCodigo] = useState(1)
   const [cliente, setCliente] = useState({})

   async function obterCliente() {
      const resp = await fetch(`http://localhost:300/api/clientes/${codigo}`)
      const dados = await resp.json()
      setCliente(dados)
      
      // fetch(`http://localhost:300/api/clientes/${codigo}`)
      // .then(resp => resp.json())
      // .then
   }

   return (
      <Layout>
         <div>
            <input type="number" value={codigo} 
               onChange={e => setCodigo(e.target.value)} 
            />
            <button onClick={obterCliente}>Obter Cliente</button>
         </div>
         <ul>
            <li>Código: {cliente.id}</li>
            <li>Nome: {cliente.nome}</li>
            <li>Email: {cliente.email}</li>
         </ul>
      </Layout>
   )
}