import "../gestão-vendas-NFe/gvn.css";
import proced2 from '../Imagens GNRE/proced.2.png';
import proced3 from '../Imagens GNRE/proced.3.png';
import proced4 from '../Imagens GNRE/proced.4.png';
import proced5 from '../Imagens GNRE/proced.5.png';
import proced6 from '../Imagens GNRE/proced.6.png';

function GVN() {
    
    return (
        <div className="GVN">
            <h3>GESTÃO DE VENDAS / NOTA FISCAL ELETRÔNICA</h3>
            <p>&bull; Entre na area de "Gestão de Vendas", em seguida na parte de "Nota Fiscal Eletrônica" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced2} />


            <h3>SELEÇÃO DA EMPRESA</h3>
            <p>&bull; Selecione o item "empresa", escolha a empresa e aperte em "confirma", (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced3} />


            <h3>BUSCAR POR FILTRO DE DATAS</h3>
            <p>&bull; selecione o periodo das datas desejadas, e em seguida selecione o ícone(binóculo) ao lado, para pesquisar (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced4} />


            <h3>SELECIONAR OS ITENS REQUERIDOS</h3>
            <p>&bull; Selecione os ícones que deseja enviar, (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced5} />


            <h3>FINALIZANDO O ENVIO</h3>
            <p>&bull; Por fim para finalizarmos, selecione o item "Gerar e Enviar" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced6} />

        </div>
    )
};
export default GVN;