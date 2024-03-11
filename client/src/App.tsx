import { ClientsList } from './components/ClientsList/ClientsList';
import { Header } from './components/Header/Header';
import { ActionsSection } from './components/Sections/ActionsSection/ActionsSection';
import './styles/index.css';
import 'animate.css'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ActionsSection />
          <ClientsList />
        </div>
      </main>
    </>
  )
}