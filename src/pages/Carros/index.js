import '../index.css'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { useEffect, useState } from 'react';
import {listarMarcas, listarModelosPorMarcas, listarVersaoPorModelo} from '../../service/apiService'
const Carros = () =>{
    const [ marcas, setMarcas ] = useState([])
    const [ modelos, setModelos ] = useState([])
    const [ versoes, setVersoes ] = useState([])
    const [ formData, setFormData ] = useState({        
        onde: '',
        raio: '',
        ano: '',
        faixa: '',
        marca: 0
    })
    const [marca, setMarca] = useState(0)
    const [versao, setVersao] = useState(0)
    const [modelo, setModelo] = useState(0)
    const [novos, setNovos] = useState(false)
    const [usados, setUsados] = useState(false)

    useEffect(()=>{
        listarMarcas()
            .then(response => {                
                setMarcas( response )
            })
    },[])

    const handleSelectMake = e =>{
        const marcaId = e.target.value
        setModelo( marcaId )
        if( marcaId > 0 ){            
            listarModelosPorMarcas(marcaId)
                .then(response => {   
                    setModelos(response)
                })

        }else{
            setModelos([])
        }
    };

    const handleSelectModel = e =>{
        const modeloId = e.target.value
        setModelo(modeloId)
        if( modeloId > 0 ){            
            listarVersaoPorModelo(modeloId)
                .then(response => {  
                    console.log('versoes',response);                  
                    setVersoes(response)
                })

        }else{
            setVersoes([])
        }
    };

    const handleInputChange = (event) =>{
        const { name, value } = event.target
        console.log('nome',name);
        console.log('value',value);
        setFormData({...formData, [name]: value})
	}

  
    

    const limparFiltro = () => {
        setFormData({            
            onde: '',
            raio: '',
            ano: '',
            faixa: ''
        })
        setNovos(false)
        setUsados(false)
        setVersoes([])
        setModelos([])
        setMarca(0)
        console.log('limparFiltro');
        
    }

    return (
        <div className="container">
            <div className="principal">

                <div className="content">
                    <div className="box item1">

                    <Checkbox 
                        icon={<Icon.FiCheck color="#b3545d" size={14} />}
                        name="novos"
                        labelClassName="checkbox"
                        onChange={value => setNovos(value)}
                        borderColor="#dcdcdc"
                        label="Novos"
                        checked={novos}
                        />
                    <Checkbox className="usados"
                        icon={<Icon.FiCheck color="#b3545d" size={14} />}
                        name="usados"
                        labelClassName="checkbox"
                        onChange={(value) =>  setUsados(value)} 
                        borderColor="#dcdcdc"
                        label="Usados"
                        checked={usados}
                        />
                    </div>
                    <div className="box item2">
                    </div>  
                    
                    <div className="box item3" >
                        <div className="input-container">
                            
                            <Icon.FiMapPin  className="icon"/>
                            <label className="label">Onde:</label>                        
                            <input className="input-field onde" type="text" name="onde" value={formData.onde} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label className="label">Raio</label>
                            <input className="input-field raio" type="text" name="raio" value={formData.raio} onChange={handleInputChange} />
                        </div>


                    </div>
                    <div className="box item4" >
                        <div className="input-container">
                            <label className="label">Marca:</label>                        
                            <select className="input-field marca" onChange={handleSelectMake} value={marca}>
                                <option value="0" >Selecione</option>
                                {
                                    marcas.map(item => (
                                        <option key={item.ID} value={item.ID}>{ item.Name }</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="input-container modelo1">
                            <label className="label">Modelo</label>
                            <select className="input-field modelo" onChange={handleSelectModel}>
                                <option value="0">Selecione</option>
                                {
                                    modelos.map(item => (
                                        <option key={item.ID} value={item.ID}>{ item.Name }</option>
                                    ))
                                }
                            </select>
                        </div>


                    </div>

                    <div className="box item5" >
                        <div className="input-container">
                            <label className="labelAno">Ano desejado:</label>                        
                            <input className="input-field ano" type="text" name="ano" value={formData.ano} onChange={handleInputChange} />
                        </div>

                        <div className="input-container modelo1">
                            <label className="labelAno">Faixa de Preço</label>
                            <input className="input-field faixa" type="text" name="faixa" value={formData.faixa} onChange={handleInputChange}/>
                        </div>


                    </div>
                    <div className="box item6" >
                        <div className="input-container versao">
                            <label className="label">Versão:</label>                        
                            <select className="input-field " >
                                <option value="0">Selecione</option>
                                {
                                    versoes.map(item => (
                                        <option key={item.ID} value={item.ID}>{ item.Name }</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="box item7" >
                        <p className="busca"> 
                            <Icon.FiChevronRight />
                             Busca Avançada
                        </p>
                    </div>

                    <div className="box item8" >
                        <p className="caixa filtro " onClick={limparFiltro}> Limpar Filtro</p>
                        <button className="caixa btn-ofertas">VER OFERTAS</button>
                    </div>
                
                </div>
            </div>
            
        </div>
    )   
}

export default Carros