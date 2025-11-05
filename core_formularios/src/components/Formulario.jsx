import { useState, useEffect } from 'react';
import styles from '../css/Formulario.module.css';

const Formulario = ({ agregarHeroe }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmarPassword: '',
    });

    const [esValido, setEsValido] = useState(false);

    useEffect(() => {
        const nuevosErrores = {};

        if (nombre && nombre.length < 4) {
        nuevosErrores.nombre = 'El nombre debe tener al menos 4 caracteres.';
        }

        if (apellido && apellido.length < 4) {
        nuevosErrores.apellido = 'El apellido debe tener al menos 4 caracteres.';
        }

        if (email && email.length < 10) {
        nuevosErrores.email = 'El correo debe tener al menos 10 caracteres.';
        }

        if (password && password.length < 12) {
        nuevosErrores.password = 'La contraseña debe tener al menos 12 caracteres.';
        }

        if (confirmarPassword && confirmarPassword !== password) {
        nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden.';
        }

        setErrores(nuevosErrores);

        const sinErrores = Object.keys(nuevosErrores).length === 0;
        const camposCompletos = nombre && apellido && email && password && confirmarPassword;
        setEsValido(sinErrores && camposCompletos);

    }, [nombre, apellido, email, password, confirmarPassword]);

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!esValido) return;

        agregarHeroe({ nombre, apellido });
        setNombre('');
        setApellido('');
        setEmail('');
        setPassword('');
        setConfirmarPassword('');
    };

    return (
        <form className={styles.formulario} onSubmit={manejarEnvio}>
        <h2>Registro de Superhéroes</h2>

        <label>Nombre:</label>
        <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <p className={styles.error}>{errores.nombre}</p>}

        <label>Apellido:</label>
        <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
        />
        {errores.apellido && <p className={styles.error}>{errores.apellido}</p>}

        <label>Correo electrónico:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <p className={styles.error}>{errores.email}</p>}

        <label>Contraseña:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {errores.password && <p className={styles.error}>{errores.password}</p>}

        <label>Confirmar contraseña:</label>
        <input
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
        />
        {errores.confirmarPassword && (
            <p className={styles.error}>{errores.confirmarPassword}</p>
        )}

        <button type="submit" disabled={!esValido}>
            Crear Superhéroe
        </button>
        </form>
    );
    };

export default Formulario;
