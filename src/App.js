import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async() => {
        const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f589c5ef17684b3286340ffa45975d18`;

        const repuesta = await fetch (url);
        const noticias = await repuesta.json();

        guardarNoticias(noticias.articles);



    }
    consultarApi();
  }, [categoria]);



  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
            noticias={noticias}
        />

      </div>
    </Fragment>
  );
}

export default App;
