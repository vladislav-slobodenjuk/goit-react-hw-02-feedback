import Counter from 'componenets/Counter/Counter';

import logo from 'logo.svg';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <header className={s.AppHeader}>
        <img src={logo} className={s.AppLogo} alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
