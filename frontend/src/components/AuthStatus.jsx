import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function MeuComponente() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Bem-vindo, {user.username}</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <button onClick={() => login('teste', '123')}>Entrar</button>
      )}
    </div>
  );
}

export default MeuComponente;
