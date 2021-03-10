
import logo from './assets/logo.png';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carros from './pages/Carros';
import Motos from './pages/Motos';
import carro from './assets/carro.png'
import moto from './assets/moto.png'
import motoRed from './assets/motoRed.png'
import carroRed from './assets/carro_red.png'
import { useState } from 'react';

function App() {
	const [selected, setSelected] = useState(1)
	
	

  	return (
    <div className="App">
		<div className="main">

			<div className="imgHeader">
				<img src={logo} width="200"/>
			</div>
			
			<div className="btn">
				<button className="btn-vender" >Vender meu carro</button>

			</div>

			
			
			<Tabs >
				<TabList selectedtabclassname='is-selected'>
					<Tab  onClick={() => setSelected(1)}>
						<div className="aba">
							<img src={ selected == 1 ? carroRed : carro } width="40" height="13" className="carro"/>
							<div>
								<small className="subtitle">COMPRAR</small>
								<div className="title">
									CARROS 
								</div>
							</div>

						</div>
					</Tab>
					<Tab onClick={() => setSelected(2)}>
						<div className="aba">
								<img src={ selected == 2 ? motoRed : moto } width="30" height="15" className="carro"/>
								<div>
									<small className="subtitle">COMPRAR</small>
									<div className="title">
										MOTOS
									</div>
								</div>

							</div>
					</Tab>
				</TabList>

				

					<TabPanel>

						<Carros />

					</TabPanel>

					<TabPanel>

						<Motos />

					</TabPanel>



			</Tabs>
		</div>
    </div>
  );
}

export default App;
