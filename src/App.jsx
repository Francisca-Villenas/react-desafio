import Header from './assets/components/Header';
import { Card } from './assets/components/Card';
import Footer from './assets/components/Footer';
import './App.css';
import './index.css';

function App() {

    const title = "Galería de Imágenes con React";
    const textBadge = "Si te gustan las fotografías del mar, entonces te invito a revisar más contenido de mi";
    const textGallery = "Portafolio";
    const textFooter = "Todos los derechos son reservados";

    return (
      <div>
        <Header title={title} />
        <Card
          url={"https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU"}
          cardTitle="Mar playero"
        />
        

        <Card
          url={"https://i.picsum.photos/id/482/300/300.jpg?hmac=9wqlO3e7iNrlNQyOJ4RwF5lHpAl1ScURyqo4cEMh7cA"}
          cardTitle="Mar al amanecer"
        />

        <Card
          url={"https://i.picsum.photos/id/507/300/300.jpg?hmac=R90MHRkeYhwugn6Ckh7i6BiZ_fe4manq4cj66fkpIIs"}
          cardTitle="Mar desde las alturas"
        />

        <Card
          url={"https://i.picsum.photos/id/643/300/300.jpg?hmac=19SSKh6POFcqrLjTMrh2boFKKD6xGc024E0-lZnwPFQ"}
          cardTitle="Mar al aterdecer"
        />

        <Card
          url={"https://i.picsum.photos/id/871/300/300.jpg?hmac=LHkUU7reAw_BdSJEy71TImEmdN5e8tw8-MxQljjitPg"}
          cardTitle="Mar del caribe"
        />

        <Card
          url={"https://i.picsum.photos/id/675/300/300.jpg?hmac=KNvq9MbuC8QjRG_o5IKUwRAtoy8QwZ05Al3FGUBX-IA"}
          cardTitle="Mar de oleaje"
        />

        <Card
          url={"https://i.picsum.photos/id/483/300/300.jpg?hmac=d1d3gQIl9j5Z_Ir03R3RU74CDPsFnhiYzSD0d0WuQv0"}
          cardTitle="Mar rocoso"
        >
        </Card>

        <Card
          url={"https://i.picsum.photos/id/269/300/300.jpg?hmac=yJ8m4fwoRhQLpFcT3A7NnnG8mWigl564r8eapiY8gso"}
          cardTitle="Mar costero"
        />

        <Card
          url={"https://i.picsum.photos/id/916/300/300.jpg?hmac=lP6QL2bac_8f8XYGAVNzgf2nHPlfRUNDAiDM-Kejgpg"}
          cardTitle="Mar sereno"
        />

        <Card
          url={"https://i.picsum.photos/id/1050/300/300.jpg?hmac=MzZ6NnFKMcvQmvsR62WBLnw-iQOV0kl7STcTcizUGrw"}
          cardTitle="Mar boscoso"
        />

        <Footer 
        textBadge={textBadge}
        textGallery={textGallery}
        textFooter={textFooter}
        />
      </div>

  );
};

export default App
