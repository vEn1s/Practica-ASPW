import { Router } from 'express';
import { AppDataSource } from "../data-source";
import { Users } from '../entity/Users'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const routerUsers = Router();
const JWT_SECRET = 'Clave123'; 

routerUsers.post('/register', async (req, res) => {
    const { Nombre, Clave, Estado = 'Activo' } = req.body; 
    try {
        const user = new Users();
        user.Nombre = Nombre;
        user.Clave = await bcrypt.hash(Clave, 10);
        user.Estado = Estado;

        await AppDataSource.getRepository(Users).save(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});


routerUsers.post('/login', async (req, res) => {
    const { Nombre, Clave } = req.body;
    try {
        const user = await AppDataSource.getRepository(Users).findOneBy({ Nombre });
        if (!user || !(await bcrypt.compare(Clave, user.Clave))) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        if (user.Estado !== 'Activo') {
            return res.status(403).json({ message: 'Usuario inactivo' });
        }

        const token = jwt.sign({ id: user.ID, nombre: user.Nombre }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});


const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err || !(await AppDataSource.getRepository(Users).findOneBy({ ID: decoded.id }))) {
            return res.status(403).json({ message: 'Token rechazado' });
        }
        req.usuario = await AppDataSource.getRepository(Users).findOneBy({ ID: decoded.id });
        next(); 
    });
};


export default routerUsers;
