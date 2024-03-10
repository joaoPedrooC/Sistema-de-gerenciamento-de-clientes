import { ClientsList } from './components/ClientsList/ClientsList';
import { Header } from './components/Header/Header';
import './styles/index.css';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ClientsList />
        </div>
      </main>
    </>
  )
}